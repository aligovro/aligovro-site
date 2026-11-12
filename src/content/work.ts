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
        items: "PHP 8 · Laravel 13 · REST /api/v1 · OpenAPI 3.0 · MySQL 8 · Redis · Meilisearch · Laravel Reverb (WebSockets) · queues & scheduler",
      },
      {
        group: "Web",
        items: "React 19 · TypeScript · Vite · Material UI · TanStack Query · Zustand · i18n (ru / en) · Playwright",
      },
      {
        group: "Mobile",
        items: "Flutter 3 · Dart · Riverpod · Drift (SQLite) · generated API client · Firebase Cloud Messaging · maps · deep links",
      },
      {
        group: "Operations",
        items: "Docker for development · GitHub Actions · Codemagic (iOS builds) · Sentry on backend, web and mobile · automated backups",
      },
    ],
    outcome: [
      "The app is published on both the App Store and Google Play, and the web platform runs in production.",
      "From the first commit to the store releases took about eight months of solo work, alongside client projects.",
      "The codebase is structured so that a team can join without a rewrite: clear domain boundaries, a documented API contract and a test suite that guards both.",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
