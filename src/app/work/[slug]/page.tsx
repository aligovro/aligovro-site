import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { ErrigDiagram } from "@/components/case-study/errig-diagram";
import { caseStudies, getCaseStudy } from "@/content/work";

const diagrams: Record<string, React.ComponentType> = {
  errig: ErrigDiagram,
};

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} — case study`,
    description: study.summary,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: {
      title: `${study.title} — case study`,
      description: study.summary,
      url: `/work/${study.slug}`,
      type: "article",
      images: [
        {
          url: `/og-${study.slug}.jpg`,
          width: 1200,
          height: 630,
          type: "image/jpeg",
        },
      ],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const Diagram = diagrams[study.slug];

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto w-full max-w-5xl px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
          <Link
            href="/#work"
            className="font-mono text-xs text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            ← All work
          </Link>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Case study · {study.kind}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {study.summary}
          </p>

          <dl className="mt-8 grid gap-x-10 gap-y-3 text-sm sm:grid-cols-3">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                Period
              </dt>
              <dd className="mt-1">{study.period}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                Role
              </dt>
              <dd className="mt-1">{study.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                Team
              </dt>
              <dd className="mt-1">{study.team}</dd>
            </div>
          </dl>

          {study.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {study.links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? "rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
                      : "rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  }
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}

          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col-reverse bg-card px-4 py-5"
              >
                <dt className="mt-1 text-xs leading-snug text-muted">
                  {m.label}
                </dt>
                <dd className="font-mono text-2xl font-semibold tracking-tight text-accent">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Section id="context" label="Context" title="What it is">
          <div className="max-w-3xl space-y-4 leading-relaxed text-muted">
            {study.context.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="challenges" label="Problem" title="What made it hard">
          <ul className="grid gap-4 sm:grid-cols-2">
            {study.challenges.map((c, i) => (
              <li
                key={c}
                className="rounded-xl border border-border bg-card p-5"
              >
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="architecture" label="Architecture" title="How it is built">
          {Diagram && <Diagram />}
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted">
            {study.architecture.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section
          id="highlights"
          label="Engineering"
          title="Decisions worth a closer look"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {study.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <h3 className="font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {h.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="stack" label="Toolbox" title="Stack">
          <dl className="divide-y divide-border rounded-xl border border-border bg-card">
            {study.stack.map((s) => (
              <div
                key={s.group}
                className="grid gap-1 px-6 py-4 sm:grid-cols-[160px_1fr] sm:gap-6"
              >
                <dt className="font-mono text-sm font-semibold text-accent">
                  {s.group}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">
                  {s.items}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="outcome" label="Outcome" title="Where it stands">
          <ul className="max-w-3xl space-y-3">
            {study.outcome.map((o) => (
              <li key={o} className="flex gap-3 leading-relaxed text-muted">
                <span
                  aria-hidden
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}
