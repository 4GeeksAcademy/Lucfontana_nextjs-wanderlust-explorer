"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/experiences", label: "Paquetes" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/profile", label: "Perfil" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Wanderlust Labs inicio"
        >
          <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-black bg-white text-black shadow-sm">
            <svg
              viewBox="0 0 64 64"
              aria-hidden="true"
              className="h-8 w-8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2.5" />
              <path d="M32 6C22 14 18 25 18 32s4 18 14 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M32 6c10 8 14 19 14 26s-4 18-14 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 32h46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 20c8 4 28 4 36 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M14 44c8-4 28-4 36 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span>
            <span className="block font-mono text-2xl font-bold lowercase tracking-wide text-black">
              wanderlust
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.35em] text-black/70">
              operator turistico
            </span>
          </span>
        </Link>

        <nav aria-label="Navegacion principal" role="navigation">
          <ul className="flex flex-wrap items-center gap-1 sm:gap-2 lg:justify-end">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                      isActive
                        ? "bg-orange-500 text-white"
                        : "text-black hover:bg-orange-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
