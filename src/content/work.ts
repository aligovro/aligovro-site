export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  period: string;
  role: string;
  team: string;
  summary: string;
  links: { label: string; href: string }[];
  metrics: { value: string; label: string }[];
  context: string[];
  challenges: string[];
  architecture: string[];
  highlights: { title: string; text: string }[];
  stack: { group: string; items: string }[];
  outcome: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "errig",
    title: "Errig",
    kind: "Marketplace · Classifieds · Mobile app",
    period: "Mar 2026 — present",
    role: "Founder & sole developer",
    team: "Solo: backend, web, mobile, infrastructure",
    summary:
      "A consumer platform that puts a multi-vendor marketplace, a classifieds board and a group-savings organizer behind one account — with a web app, a public REST API and a Flutter app that is live on the App Store and Google Play.",
    links: [
      { label: "App Store", href: "https://apps.apple.com/app/id6805530150" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=ru.errig.mobile",
      },
      { label: "errig.ru", href: "https://errig.ru" },
    ],
    metrics: [
      { value: "590+", label: "REST endpoints under /api/v1" },
      { value: "16", label: "bounded-context domains" },
      { value: "460+", label: "backend test classes" },
      { value: "280+", label: "Flutter test files" },
    ],
    context: [
      "Errig is my own product. It combines three things people usually use separate apps for: a marketplace where shops sell products with delivery, a classifieds board for person-to-person deals, and an organizer for invite-only group savings between verified people.",
      "All three share the same users, chat, payments, moderation and trust system. I designed, built and now operate the whole thing alone: the Laravel API, the React web app, the Flutter mobile app and the production infrastructure.",
    ],
    challenges: [
      "Three products in one codebase had to share users, chat, payments and moderation without turning into one tangled module.",
      "Two clients, a web SPA and a mobile app, had to stay in sync with an API of almost 600 endpoints that changes every week.",
      "Money flows — customer payments, vendor wallets, payouts, fiscal receipts — had to stay correct when webhooks arrive twice, late or out of order.",
      "Mobile users are often on a poor connection, and the app still has to feel instant and never lose an action.",
    ],
    architecture: [
      "The backend is a domain-driven modular monolith. Each of the 16 domains (Marketplace, Board, Pool, Chat, Payment, Trust and others) owns its models, actions, services, repositories, events and policies; a small shared kernel holds what is truly common. Controllers stay thin: request validation, one action or service call, an API resource back.",
      "Side effects run through domain events, so placing an order does not know about push notifications, emails or loyalty points — listeners do. Everything the clients see goes through one versioned REST API described by an OpenAPI 3.0 specification.",
    ],
    highlights: [
      {
        title: "One OpenAPI spec, enforced",
        text: "The OpenAPI document is the single source of truth. The Flutter API client is generated from it, and contract tests in CI validate real API responses against it, so the spec, the backend and the mobile app cannot drift apart.",
      },
      {
        title: "Offline-first mobile app",
        text: "The Flutter app reads from a local SQLite cache first and syncs in the background. Actions made offline go into an outbox queue and are replayed when the connection returns, so nothing the user did is lost.",
      },
      {
        title: "Idempotent payment pipeline",
        text: "The payment gateway sits behind a driver interface. Every incoming webhook is recorded and deduplicated before it changes state, and scheduled reconciliation jobs compare vendor payouts with the provider, so a repeated or delayed webhook never double-charges or double-pays.",
      },
      {
        title: "Real-time everywhere",
        text: "Chat, presence, order updates and counters travel over private and presence WebSocket channels. The same domain events fan out to mobile push, web push, email and Telegram, each channel with its own listener.",
      },
      {
        title: "Search and automation",
        text: "Product and listing search runs on Meilisearch. Around 40 scheduled jobs keep the platform tidy without manual work: listing expiry and auto-bump, abandoned-cart reminders, unpaid-order expiry, SLA checks and data-retention purges.",
      },
      {
        title: "Tested like a team product",
        text: "More than 460 backend test classes cover the API, security, performance and schema; Playwright end-to-end tests include accessibility checks; the mobile app has over 280 test files. Lint and tests run in CI on every push.",
      },
    ],
    stack: [
      {
        group: "Backend",
        items:
          "PHP 8 · Laravel 13 · REST /api/v1 · OpenAPI 3.0 · MySQL 8 · Redis · Meilisearch · Laravel Reverb (WebSockets) · queues & scheduler",
      },
      {
        group: "Web",
        items:
          "React 19 · TypeScript · Vite · Material UI · TanStack Query · Zustand · i18n (ru / en) · Playwright",
      },
      {
        group: "Mobile",
        items:
          "Flutter 3 · Dart · Riverpod · Drift (SQLite) · generated API client · Firebase Cloud Messaging · maps · deep links",
      },
      {
        group: "Operations",
        items:
          "Docker for development · GitHub Actions · Codemagic (iOS builds) · Sentry on backend, web and mobile · automated backups",
      },
    ],
    outcome: [
      "The app is published on both the App Store and Google Play, and the web platform runs in production.",
      "From the first commit to the store releases took about eight months of solo work, alongside client projects.",
      "The codebase is structured so that a team can join without a rewrite: clear domain boundaries, a documented API contract and a test suite that guards both.",
    ],
  },
  {
    slug: "advertising-erp",
    title: "Advertising ERP",
    kind: "Enterprise ERP / CRM",
    period: "Oct 2025 — present",
    role: "Sole engineer",
    team: "Solo, working directly with department heads",
    summary:
      "An internal ERP and CRM for a holding of advertising businesses. It covers the whole path from a lead to a paid deal, with finance, telephony and a separate workspace for each of 15 roles.",
    links: [],
    metrics: [
      { value: "15", label: "user roles, each with its own workspace" },
      { value: "1,800+", label: "automated tests" },
      { value: "210+", label: "API routes" },
      { value: "60", label: "data models" },
    ],
    context: [
      "The holding sells outdoor and digital advertising through several businesses. Sales, procurement, legal, accounting and management all work on the same deals, and before this system they did it in a tool that no longer fit how the company operates.",
      "I designed and built the replacement alone and moved the real data over from the previous system. It is an internal product, so there is no public link; the details below are described without client data.",
    ],
    challenges: [
      "Fifteen roles look at the same deal and each must see a different part of it, from a sales manager's own clients to the accountant's payments.",
      "Several businesses share one installation and must never see each other's clients, deals or money.",
      "Money rules are strict: approvals with a quorum, budget thresholds, document numbering per business, commissions and manager payouts.",
      "Phone calls are part of the sales process and had to land in the right client card without anyone entering them by hand.",
    ],
    architecture: [
      "Controllers are thin. Each business operation is a single-purpose action class (about 80 of them), lists and counters are separate query objects, and every major entity has its own access policy. That keeps a rule such as who may approve a media plan in one place.",
      "The business a user works in is resolved once per request and applied as a scope on the models, so isolation does not depend on each query remembering a filter. Workflow rules, approval quorums and document statuses live in configuration, which lets the company change a rule without a code change.",
    ],
    highlights: [
      {
        title: "Tenant isolation that is tested",
        text: "A dedicated test suite logs in as users of one business and tries to reach the data of another through every list, card and export. Isolation is a tested property of the system, checked on every push.",
      },
      {
        title: "Approval workflow",
        text: "A media plan goes from procurement to management and then to the client. Approval needs a quorum of managers and depends on a budget threshold, and both numbers are configured per business.",
      },
      {
        title: "Finance module",
        text: "Invoices, acts and payments with configurable numbering, supplier costs, commissions, manager payouts, payroll and cash-flow reports with spreadsheet export.",
      },
      {
        title: "Telephony inside the CRM",
        text: "Calls from the cloud phone system are imported every five minutes, matched to clients automatically, and their recordings are stored and later purged by a retention rule.",
      },
      {
        title: "Document previews",
        text: "Office files are converted to previews in a background queue. The converter sits behind an interface with a fake implementation, so the pipeline is covered by tests without the real converter.",
      },
      {
        title: "A workspace per role",
        text: "Every role has its own dashboard metrics, menu with live counters and visibility rules, and notifications arrive in real time over private WebSocket channels.",
      },
    ],
    stack: [
      {
        group: "Backend",
        items:
          "PHP 8 · Laravel 12 · MySQL · queues & scheduler · Laravel Reverb (WebSockets) · role and permission management · OpenAPI spec",
      },
      {
        group: "Frontend",
        items:
          "React 19 · TypeScript · Inertia.js · Tailwind CSS 4 · Radix UI · typed routes generated from the backend",
      },
      {
        group: "Quality & ops",
        items:
          "PHPUnit (1,800+ tests) · GitHub Actions (lint and tests) · staging and production environments · scripted deploys · S3-compatible file storage",
      },
    ],
    outcome: [
      "The system is in daily use across the holding's departments, with real data migrated from the previous tool.",
      "It was built in about nine months by one engineer, with more than 860 commits.",
      "New rules from the business usually land as configuration or one new action class, not as a rewrite of existing screens.",
    ],
  },
  {
    slug: "fundraising-saas",
    title: "Fundraising SaaS",
    kind: "Multi-tenant platform · Site builder",
    period: "Sep 2025 — present",
    role: "Sole engineer",
    team: "Solo",
    summary:
      "A fundraising platform for schools and non-profits. Every organisation gets its own website from a no-code builder and accepts one-off and recurring donations through its own merchant account.",
    links: [],
    metrics: [
      { value: "30", label: "widget types in the site builder" },
      { value: "185", label: "API routes" },
      { value: "350+", label: "automated tests" },
      { value: "74", label: "data models" },
    ],
    context: [
      "Schools and non-profits raise money from parents, alumni and local sponsors. The platform gives each of them a public site, a way to take donations and reports on where the money went.",
      "It replaced an older installation built on a multi-site CMS. I built the new platform alone and moved the existing organisations, donors and subscriptions into it.",
    ],
    challenges: [
      "Each organisation needs its own site, look and domain, and none of them has a developer.",
      "Donations must go to the organisation's own merchant account, not through a shared one.",
      "Recurring donations have to keep charging on schedule, and a failed charge must not silently end a subscription.",
      "The legacy data had to move without donors noticing: the same subscriptions, the same history.",
    ],
    architecture: [
      "The request's domain decides which organisation's site is served; a middleware resolves it before anything else runs. Business logic sits in a service layer grouped by area: payments, sites, organisations, projects and reports.",
      "Payments go through a gateway abstraction with a factory, a state updater and a recorder, so a provider's quirks stay inside one driver. A scheduled processor handles recurring charges.",
    ],
    highlights: [
      {
        title: "No-code site builder",
        text: "About 30 widget types, from a hero slider and donation form to donor leaderboards and regional ratings. Each widget type keeps its settings in its own table, and a new site starts as a copy of a preset.",
      },
      {
        title: "Custom domains without a developer",
        text: "An organisation enters its domain, and the platform binds it through the hosting provider's API and checks the DNS records itself.",
      },
      {
        title: "Merchant onboarding by OAuth",
        text: "Organisations connect their own account with the payment provider through its partner API. One-off donations, recurring charges, payouts and webhooks with source verification all run on that connection.",
      },
      {
        title: "Per-site themes",
        text: "Each site has its own theme. Styles are compiled on the server from the theme's variables, and pages are server-rendered for search engines.",
      },
      {
        title: "Legacy migration in one command",
        text: "Donations, subscriptions, donors, projects, pages and users move from the old system through staging tables. One command runs the whole migration and can be repeated safely.",
      },
      {
        title: "Untrusted content handled as untrusted",
        text: "Text and images entered by organisations are sanitised on save, sensitive settings are stored encrypted, and forms can trigger email, messenger or webhook actions without exposing credentials.",
      },
    ],
    stack: [
      {
        group: "Backend",
        items:
          "PHP 8 · Laravel 12 · MySQL · queues & scheduler · Laravel Reverb · payment-provider partner API · hosting API · SMS gateway",
      },
      {
        group: "Frontend",
        items:
          "React 19 · TypeScript · Inertia.js with SSR · Tailwind CSS · Redux Toolkit · rich-text editor · drag-and-drop",
      },
      {
        group: "Quality & ops",
        items:
          "Pest (350+ tests) · Vitest · GitHub Actions (lint and tests) · scripted deploy with maintenance mode and SSR build",
      },
    ],
    outcome: [
      "The platform is in production and serves the organisations moved from the legacy system.",
      "The internal API is being turned into a versioned public contract, the same approach I used in Errig, so that a mobile app can use it.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
