"use client";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const routes = [
  { label: "Account", path: "/app/account" },
  { label: "Dashboard", path: "/app/dashboard" },
];

export default function AppHeader() {
  const activePathname = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <Logo />
      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={cn(
                  "text-white/70 bg-black/10 rounder-sm px-2 py-1 hover:text-white transition",
                  { "bg-black/10 text-white": route.path === activePathname }
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}