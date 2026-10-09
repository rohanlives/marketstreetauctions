export default function WhyChooseUs() {
  const features = [
    {
      title: "Trusted Local Business",
      text: "Serving customers throughout the Adirondacks with honest service.",
      icon: "🤝",
    },
    {
      title: "Quality Equipment",
      text: "Heavy equipment, vehicles, trailers and more in one place.",
      icon: "🚜",
    },
    {
      title: "Used Auto Parts",
      text: "Affordable replacement parts for many makes and models.",
      icon: "🔧",
    },
    {
      title: "Sell With Us",
      text: "We help individuals and businesses reach more buyers.",
      icon: "📦",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
          Why Choose Market Street Auctions
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-gray-100 p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}