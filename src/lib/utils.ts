import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...values: ClassValue[]): string {
  return twMerge(clsx(values));
}

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
