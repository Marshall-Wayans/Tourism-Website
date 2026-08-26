export function StatBand() {
  const stats = [
    { value: "50+", label: "Destinations" },
    { value: "10K+", label: "Happy Travelers" },
    { value: "4.9/5", label: "Guest Rating" },
    { value: "15+", label: "Years of Experience" },
  ];

  return (
    <section className="w-full border-y border-black/10 bg-[#2b241c] py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-semibold md:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-sm text-white/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
