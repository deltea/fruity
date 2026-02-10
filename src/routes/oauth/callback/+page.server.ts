import { HACK_CLUB_SECRET } from "$env/static/private";
import { PUBLIC_HACK_CLUB_CLIENT_ID } from "$env/static/public";
import type { PageServerLoad } from "./$types";

export const load = (async ({ url, fetch }) => {
  const code = url.searchParams.get("code") ?? "";
  const params = new URLSearchParams({
    "client_id": PUBLIC_HACK_CLUB_CLIENT_ID,
    "client_secret": HACK_CLUB_SECRET,
    "redirect_uri": encodeURIComponent("http://localhost:5173/oauth/callback"),
    "grant_type": "authorization_code",
    "code": code,
  });
  console.log(`https://auth.hackclub.com/oauth/token?${params}`);
  const res = await fetch(`https://auth.hackclub.com/oauth/token?${params}`, {
    method: "POST"
  });

  console.log(await res.json());

  return {};
}) satisfies PageServerLoad;
