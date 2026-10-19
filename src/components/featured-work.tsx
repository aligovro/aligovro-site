import { featured } from "@/content/site";
import { Section } from "./section";

export function FeaturedWork() {
  return (
    <Section id="work" label="Selected work" title="Platforms I've built">
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((p) => (
          <article
            key={p.slug}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/60"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <span className="font-mono text-xs text-muted">{p.period}</span>
            </div>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
              {p.kind}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{p.description}</p>

            <div className="mt-5 rounded-lg bg-accent-soft px-4 py-3">
              <span className="font-mono text-xl font-semibold text-accent">
                {p.highlight.value}
              </span>
              <span className="ml-2 text-xs text-muted">{p.highlight.label}</span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-border px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>

            {p.comingSoon && (
              <p className="mt-5 border-t border-border pt-4 font-mono text-xs text-muted">
                Full case study — coming soon
              </p>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
