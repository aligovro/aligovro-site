import { stack } from "@/content/site";
import { Section } from "./section";

export function TechStack() {
  return (
    <Section id="stack" label="Toolbox" title="Tech stack">
      <dl className="divide-y divide-border rounded-xl border border-border bg-card">
        {stack.map((s) => (
          <div key={s.group} className="grid gap-1 px-6 py-4 sm:grid-cols-[160px_1fr] sm:gap-6">
            <dt className="font-mono text-sm font-semibold text-accent">{s.group}</dt>
            <dd className="text-sm leading-relaxed text-muted">{s.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
