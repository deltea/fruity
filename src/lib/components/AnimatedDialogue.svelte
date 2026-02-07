<script lang="ts">
    import { rand } from "$lib/utils";
  import { onMount, type Snippet } from "svelte";

  let { color, children }: {
    color: string,
    children: Snippet
  } = $props();

  let path: SVGPathElement;
  let time = 0;
  const speed = 25;
  const radius = 36 * 2;
  let circles: { el: SVGRectElement, offset: number, rot: number, rotSpeed: number }[] = [];
  let last = performance.now();
  let length = 0;

  function draw(now: number) {
    const dt = (now - last) / 1000;
    last = now;

    time += speed * dt;

    for (const c of circles) {
      const pos = (c.offset + time) % length;
      const p = path.getPointAtLength(pos);
      c.el.setAttribute("x", (p.x - (radius / 2)).toString());
      c.el.setAttribute("y", (p.y - (radius / 2)).toString());

      c.rot = (c.rot + c.rotSpeed * dt) % 360;
      c.el.style.rotate = `${c.rot}deg`;
    }
    requestAnimationFrame(draw);
  }

  onMount(() => {
    length = path.getTotalLength();
    const count = 16;
    const spacing = length / count;
    const svg = path.ownerSVGElement;

    for (let i = 0; i < count; i++) {
      const p = path.getPointAtLength(i * spacing);

      // const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      // c.setAttribute("r", radius.toString());
      // c.setAttribute("cx", p.x.toString());
      // c.setAttribute("cy", p.y.toString());
      // c.setAttribute("fill", color);

      const c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      c.setAttribute("width", radius.toString());
      c.setAttribute("height", radius.toString());
      c.setAttribute("x", p.x.toString());
      c.setAttribute("y", p.y.toString());
      c.setAttribute("rx", "16");
      c.setAttribute("ry", "16");
      c.setAttribute("fill", color);
      c.style.transformOrigin = "center";
      c.style.transformBox = "fill-box";
      c.style.rotate = "0deg";

      svg?.appendChild(c);
      circles.push({
        el: c,
        offset: i * spacing,
        rot: rand(0, 360),
        rotSpeed: Math.random() > 0.5 ? rand(20, 35) : rand(-35, -20)
      });
    }

    requestAnimationFrame(draw);
  });
</script>

<div class="relative flex justify-center items-center w-[600px] h-[200px]">
  <svg
    width="600"
    height="200"
    viewBox="0 0 600 100"
    class="inset-0 absolute"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      bind:this={path}
      id="rect-path"
      d="
        m 55 0.5
        h 496
        v 100
        h -496
        z
      "
      fill={color}
      stroke={color}
      stroke-width="2"
    />
  </svg>

  <div class="z-10">{@render children()}</div>
</div>
