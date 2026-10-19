import { site, metrics } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
      <div className="rise inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-3 py-1">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-xs font-medium text-accent">{site.badge}</span>
      </div>

      <h1 className="rise rise-1 mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
        {site.name}
        <span className="block mt-3 text-2xl font-normal text-muted sm:text-3xl">
          {site.role}
        </span>
      </h1>

      <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {site.tagline}
      </p>

      <div className="rise rise-2 mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#work"
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          View work
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Get in touch
        </a>
        <span className="hidden text-sm text-muted sm:block">·</span>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
          GitHub
        </a>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline">
          LinkedIn
        </a>
      </div>

      <dl className="rise rise-3 mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-5">
        {metrics.map((m) => (
          <div key={m.label} className="bg-card px-4 py-5">
            <dt className="order-2 mt-1 block text-xs leading-snug text-muted">{m.label}</dt>
            <dd className="order-1 font-mono text-2xl font-semibold tracking-tight text-accent">
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
