export default function Categories() {
  const categories = [
    "Heavy Equipment",
    "Industrial Equipment",
    "Shop Equipment",
    "Motorcycles",
    "ATVs",
    "Vehicles",
    "Trailers",
    "Auto Parts",
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Browse Categories
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}