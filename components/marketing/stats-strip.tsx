type Stat = {
  label: string;
  value: string;
};

type StatsStripProps = {
  stats: Stat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="rounded-3xl border border-brand-gray bg-white p-8 shadow-soft">
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-brand-purple bg-brand-purple p-5 transition hover:-translate-y-0.5 hover:opacity-95"
          >
            <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{stat.label}</dt>
            <dd className="mt-2 text-3xl font-extrabold tracking-tight text-white">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
