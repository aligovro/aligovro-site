function Box({
  x,
  y,
  w,
  h = 44,
  label,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        className={accent ? "fill-accent-soft stroke-accent" : "fill-card stroke-border"}
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={y + (sub ? h / 2 - 3 : h / 2 + 5)}
        textAnchor="middle"
        fontSize={14}
        fontWeight={600}
        className={accent ? "fill-accent" : "fill-fg"}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 15}
          textAnchor="middle"
          fontSize={11.5}
          className="fill-muted"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function RowLabel({ y, text }: { y: number; text: string }) {
  return (
    <text x={0} y={y} fontSize={11} letterSpacing={2} className="fill-muted font-mono">
      {text}
    </text>
  );
}

function Arrow({ x, y1, y2 }: { x: number; y1: number; y2: number }) {
  return (
    <g className="stroke-muted" strokeWidth={1.5}>
      <line x1={x} y1={y1} x2={x} y2={y2 - 5} />
      <path d={`M${x - 4} ${y2 - 7} L${x} ${y2} L${x + 4} ${y2 - 7}`} fill="none" />
    </g>
  );
}

const domains = ["Marketplace", "Classifieds", "Savings pools", "Chat", "Payments", "Trust", "+ 10 more"];
const infra = ["MySQL 8", "Redis", "Meilisearch", "S3 storage"];
const external = ["Payment gateway", "Delivery API", "Push (FCM / Web)", "Telegram · Email"];

export function ErrigDiagram() {
  const domainW = 124;
  const domainGap = 12;

  return (
    <figure className="overflow-x-auto rounded-xl border border-border bg-bg-soft p-5">
      <svg
        viewBox="0 0 960 500"
        role="img"
        aria-labelledby="errig-diagram-title"
        className="min-w-[760px]"
      >
        <title id="errig-diagram-title">
          Errig architecture: web, mobile and admin clients call one versioned REST API and a
          WebSocket server; the API is a modular monolith of 16 domains backed by MySQL, Redis,
          Meilisearch and S3, with payment, delivery and notification integrations.
        </title>

        <RowLabel y={14} text="CLIENTS" />
        <Box x={0} y={26} w={300} h={54} label="Web app" sub="React 19 SPA" />
        <Box x={330} y={26} w={300} h={54} label="Mobile app" sub="Flutter · offline cache + outbox" />
        <Box x={660} y={26} w={300} h={54} label="Admin panel" sub="moderation, disputes, settings" />

        <Arrow x={150} y1={80} y2={124} />
        <Arrow x={480} y1={80} y2={124} />
        <Arrow x={810} y1={80} y2={124} />

        <RowLabel y={118} text="CONTRACT" />
        <Box
          x={0}
          y={126}
          w={690}
          h={54}
          accent
          label="REST API  /api/v1"
          sub="OpenAPI 3.0 spec · generated mobile client · contract tests in CI"
        />
        <Box x={720} y={126} w={240} h={54} accent label="WebSockets" sub="private & presence channels" />

        <Arrow x={345} y1={180} y2={224} />
        <Arrow x={840} y1={180} y2={224} />

        <RowLabel y={218} text="MODULAR MONOLITH · LARAVEL 12" />
        {domains.map((d, i) => (
          <Box key={d} x={i * (domainW + domainGap) + 4} y={226} w={domainW} label={d} />
        ))}
        <text x={480} y={296} textAnchor="middle" fontSize={12} className="fill-muted">
          each domain owns its models, actions, services, events and policies · side effects go through domain events
        </text>

        <Arrow x={240} y1={306} y2={348} />
        <Arrow x={720} y1={306} y2={348} />

        <RowLabel y={342} text="DATA" />
        {infra.map((d, i) => (
          <Box key={d} x={i * 118} y={350} w={108} label={d} />
        ))}

        <text x={492} y={342} fontSize={11} letterSpacing={2} className="fill-muted font-mono">
          INTEGRATIONS
        </text>
        {external.slice(0, 2).map((d, i) => (
          <Box key={d} x={492 + i * 238} y={350} w={228} label={d} />
        ))}
        {external.slice(2).map((d, i) => (
          <Box key={d} x={492 + i * 238} y={406} w={228} label={d} />
        ))}

        <Box x={0} y={406} w={462} label="Queue workers · ~40 scheduled jobs" />
        <text x={0} y={486} fontSize={12} className="fill-muted">
          Webhooks from the payment and delivery providers are recorded and deduplicated before they change state.
        </text>
      </svg>
      <figcaption className="mt-3 text-xs text-muted">
        High-level architecture. Scroll sideways on small screens.
      </figcaption>
    </figure>
  );
}
