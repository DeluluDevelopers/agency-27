import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// just changed it
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
