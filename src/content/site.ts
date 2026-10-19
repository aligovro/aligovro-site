export const site = {
  name: "Ali Geroev",
  role: "Senior Full-Stack Engineer",
  tagline: "I design, build and ship web platforms end-to-end — Laravel APIs, React frontends, Flutter apps. From first commit to production.",
  badge: "Open to UAE / GCC relocation & remote",
  email: "aligovro@gmail.com",
  github: "https://github.com/aligovro",
  linkedin: "https://www.linkedin.com/in/ali-govro-6b849b21b",
  domain: "aligovro.com",
  location: "GMT+3 · relocating to UAE / GCC",
};

export const metrics = [
  { value: "10+", label: "years of experience" },
  { value: "5", label: "production platforms" },
  { value: "900+", label: "API endpoints designed" },
  { value: "2,500+", label: "automated tests" },
  { value: "2.5", label: "years on-site in Dubai" },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  period: string;
  oneLiner: string;
  description: string;
  highlight: { value: string; label: string };
  stack: string[];
  comingSoon?: boolean;
};

export const featured: Project[] = [
  {
    slug: "errig",
    title: "Errig",
    kind: "Marketplace · Classifieds · Mobile app",
    period: "2026 — present",
    oneLiner: "Multi-vendor marketplace and classifieds platform with a Flutter mobile app, built solo.",
    description:
      "API-first Laravel 12 backend with 590+ REST endpoints behind an OpenAPI 3.0 spec enforced by contract tests; DDD modular monolith with 16 domains. Flutter app with an offline-first cache and outbox sync, real-time chat, payments with fiscal receipts, and delivery integration.",
    highlight: { value: "590+", label: "API endpoints, one OpenAPI source of truth" },
    stack: ["Laravel 12", "React 19", "Flutter", "Meilisearch", "WebSockets", "OpenAPI"],
    comingSoon: true,
  },
  {
    slug: "advert-erp",
    title: "Advert ERP",
    kind: "Enterprise ERP / CRM",
    period: "2025 — present",
    oneLiner: "ERP for a multi-business advertising holding: leads, media plans, deals, finance.",
    description:
      "Sole engineer on a multi-tenant ERP with approval workflows, a full finance module, per-business document numbering and tailored dashboards for 15 user roles. Cloud PBX telephony integration with automatic call-to-client matching and real-time notifications.",
    highlight: { value: "1,800+", label: "automated tests incl. tenant isolation" },
    stack: ["Laravel 12", "React 19", "Inertia", "Reverb", "MySQL"],
    comingSoon: true,
  },
  {
    slug: "fundraising-saas",
    title: "Fundraising SaaS",
    kind: "Multi-tenant platform · Site builder",
    period: "2025 — present",
    oneLiner: "Fundraising platform for schools and non-profits with a no-code website builder.",
    description:
      "Every organization gets its own site: ~30 configurable widget types, per-site themes, SSR, and custom domains auto-provisioned through the hosting provider's API. Payment-provider partner API: OAuth merchant onboarding, recurring donations, payouts, IP-verified webhooks.",
    highlight: { value: "30", label: "widget types in the site builder" },
    stack: ["Laravel 12", "React 19", "SSR", "Payments API", "Multi-tenancy"],
    comingSoon: true,
  },
];

export const principles = [
  {
    title: "API-first, contract-tested",
    text: "The OpenAPI spec is the single source of truth: it generates clients and is enforced by contract tests in CI, so the docs can never lie.",
  },
  {
    title: "Tests as a safety net",
    text: "2,500+ automated tests across my platforms — feature, security and multi-tenant isolation suites — so shipping fast stays safe.",
  },
  {
    title: "AI-assisted delivery",
    text: "I work openly with AI tooling as a force multiplier: senior judgment on architecture and review, machine speed on the keyboard.",
  },
  {
    title: "End-to-end ownership",
    text: "Architecture, backend, frontend, mobile, CI/CD and production ops — I take products from idea to running systems and keep them healthy.",
  },
];

export const experience = [
  {
    role: "Senior Full-Stack Developer",
    org: "Advert Group — advertising holding (remote)",
    period: "2025 — present",
    note: "Sole engineer on two production platforms: an ERP/CRM and a multi-tenant fundraising SaaS.",
  },
  {
    role: "Founder & Developer",
    org: "Errig — personal product",
    period: "2026 — present",
    note: "Marketplace + classifieds platform: web, REST API and a cross-platform Flutter app.",
  },
  {
    role: "Full-Stack Developer (freelance)",
    org: "Sendbox — sendbox.one",
    period: "2025 — 2026",
    note: "Two-sided P2P parcel-delivery marketplace built solo in five months.",
  },
  {
    role: "Co-Founder & Developer",
    org: "Govzal — craft marketplace",
    period: "2022 — 2024",
    note: "Multi-vendor marketplace frontend: Next.js SSR, ~55k lines, custom design system.",
  },
  {
    role: "Full-Stack Developer",
    org: "The Lab Holding — Dubai, UAE",
    period: "2020 — 2023",
    note: "Marketplaces for the GCC market (meelz.me, lmmaa.com, kkaty.com): Laravel and NestJS backends, React frontends.",
  },
  {
    role: "Earlier roles",
    org: "Moscow / Ingushetia",
    period: "2016 — 2020",
    note: "Dental clinic booking system, resort and federation websites, freelance work.",
  },
];

export const stack = [
  {
    group: "Backend",
    items: "PHP 8 · Laravel 12 · NestJS (Node.js) · REST API design · OpenAPI 3.0 · MySQL 8 · PostgreSQL · Redis · Meilisearch · WebSockets (Reverb) · queues & schedulers",
  },
  {
    group: "Frontend",
    items: "React 19 · TypeScript 5 · Next.js · Inertia.js · Redux Toolkit · Zustand · TanStack Query · Tailwind CSS 4 · Material UI · SSR · Vite",
  },
  {
    group: "Mobile",
    items: "Flutter 3 / Dart · Riverpod · offline-first (local cache + outbox sync) · FCM push · Google Play & TestFlight pipelines (Codemagic)",
  },
  {
    group: "Integrations",
    items: "payment gateways (OAuth onboarding, recurring, payouts, fiscal receipts) · delivery APIs · cloud PBX · WhatsApp / SMS / Telegram · social login · maps",
  },
  {
    group: "DevOps & Quality",
    items: "Docker · GitHub Actions CI/CD · nginx · Linux (systemd, Supervisor) · zero-downtime deploys · S3 · Sentry · PHPUnit / Pest · Playwright E2E · Vitest",
  },
];
