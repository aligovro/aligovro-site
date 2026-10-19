import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-accent">ali</span>govro<span className="text-muted">.com</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hidden rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:block"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${site.email}`}
            className="mr-1 rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-fg sm:hidden"
          >
            Email
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
