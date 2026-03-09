type Stat = {
  label: string;
  value: string;
};

type StatsStripProps = {
  stats: Stat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="rounded-3xl border border-base-mid bg-white/95 p-8 shadow-soft backdrop-blur">
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-base-mid bg-gradient-to-br from-white via-base-light to-white p-5 transition hover:-translate-y-0.5 hover:border-brand-purple/50"
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-base-dark">{stat.label}</dt>
            <dd className="mt-2 text-3xl font-extrabold tracking-tight text-brand-purple">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
