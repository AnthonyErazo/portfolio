const ROUTES = [
  { d: "M20 300 H160 L220 240 H420 L480 180 H660", accent: true, delay: "0s" },
  { d: "M20 140 H200 L260 200 H440 L500 140 H660", accent: false, delay: "0.25s" },
  { d: "M120 380 V240 L180 180 V40", accent: false, delay: "0.5s" },
  { d: "M540 380 V300 L600 240 V40", accent: false, delay: "0.75s" },
];

const NODES = [
  { cx: 160, cy: 300, accent: true },
  { cx: 220, cy: 240, accent: false },
  { cx: 480, cy: 180, accent: true },
  { cx: 260, cy: 200, accent: false },
  { cx: 500, cy: 140, accent: false },
  { cx: 180, cy: 180, accent: false },
  { cx: 600, cy: 240, accent: false },
];

export default function RouteSchematic({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 680 420"
      fill="none"
      className={className}
      style={{ opacity: "var(--schematic-opacity)" }}
    >
      {ROUTES.map((route) => (
        <path
          key={route.d}
          d={route.d}
          stroke={route.accent ? "var(--accent)" : "var(--muted-foreground)"}
          strokeOpacity={route.accent ? 0.55 : 0.3}
          strokeWidth={route.accent ? 2 : 1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="route-line"
          style={
            {
              "--route-length": "1400",
              animationDelay: route.delay,
            } as React.CSSProperties
          }
        />
      ))}

      {NODES.map((node) => (
        <circle
          key={`${node.cx}-${node.cy}`}
          cx={node.cx}
          cy={node.cy}
          r={4}
          fill="var(--background)"
          stroke={node.accent ? "var(--accent)" : "var(--muted-foreground)"}
          strokeOpacity={node.accent ? 0.75 : 0.4}
          strokeWidth={1.5}
        />
      ))}

      <circle r={5} fill="var(--accent)" className="route-pulse" />
    </svg>
  );
}
