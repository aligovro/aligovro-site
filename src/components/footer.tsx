import { site } from "@/content/site";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
        <h2 className="mt-2 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
          Building something in the GCC? Let&apos;s talk.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          I reply within a day. {site.location}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>
        <p className="mt-14 border-t border-border pt-6 font-mono text-xs text-muted">
          © 2026 {site.name} · Built with Next.js, deployed on Vercel ·{" "}
          <a
            href="https://github.com/aligovro"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:text-accent hover:underline"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
