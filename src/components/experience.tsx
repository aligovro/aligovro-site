import { experience } from "@/content/site";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" label="Track record" title="Experience">
      <ol className="relative space-y-8 border-l border-border pl-6">
        {experience.map((e) => (
          <li key={`${e.role}-${e.period}`} className="relative">
            <span
              aria-hidden
              className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-bg bg-accent"
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-semibold tracking-tight">{e.role}</h3>
              <span className="font-mono text-xs text-muted">{e.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-accent">{e.org}</p>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{e.note}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
