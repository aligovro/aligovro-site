import { principles } from "@/content/site";
import { Section } from "./section";

export function HowIWork() {
  return (
    <Section id="approach" label="Approach" title="How I work">
      <div className="grid gap-5 sm:grid-cols-2">
        {principles.map((p, i) => (
          <div key={p.title} className="rounded-xl border border-border bg-card p-6">
            <span className="font-mono text-xs text-accent">0{i + 1}</span>
            <h3 className="mt-2 font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
