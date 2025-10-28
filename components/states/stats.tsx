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
    <section className="pt-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0 mt-10">
          {stats.map((stat) => (
            <div key={stat.key} className="space-y-4">
              <div className="text-4xl md:text-5xl font-bold">
                {stat.count}
              </div>
              <p className="pb-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}