import { HeroType } from "@/types/dictionary-types";

export default function StatsSection({ t }: { t: HeroType }) {
  const stats = [
    {
      key: "projects",
      count: t?.Stats?.projects?.count ?? "50+",
      label: t?.Stats?.projects?.label ?? "Projects"
    },
    {
      key: "technologies", 
      count: t?.Stats?.technologies?.count ?? "14+",
      label: t?.Stats?.technologies?.label ?? "Technologies"
    },
    {
      key: "experience",
      count: t?.Stats?.experience?.count ?? "+4", 
      label: t?.Stats?.experience?.label ?? "Years Experience"
    }
  ];

  return (
    // ENTFERNT: role="state" - durch role="region" ersetzt oder komplett entfernt
    <div className="mt-17 md:mt-27 lg:mt-32" aria-labelledby="stats-heading" role="region">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        {/* ENTFERNT: role="list" - nicht benötigt für <ul> */}
        <ul 
          className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0"
          aria-label="Statistics overview"
        >
          {stats.map((stat) => (
            // ENTFERNT: role="listitem" - nicht benötigt für <li>
            <li 
              key={stat.key} 
              className="space-y-4"
            >
              <div 
                className="text-4xl md:text-5xl font-bold"
                aria-label={`${stat.count} ${stat.label}`}
              >
                {stat.count}
              </div>
              <p className="pb-2 text-muted-foreground">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}