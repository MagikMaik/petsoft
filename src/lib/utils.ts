import { type ClassValue, clsx } from "clsx";
import { resolve } from "path";
import { twMerge } from "tailwind-merge";
// esto es para mergear clases de tailwind y que no haya dupplicados y errores//
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// sleep para que no sea tan rapido el proceso de agregar una mascota//
export async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
