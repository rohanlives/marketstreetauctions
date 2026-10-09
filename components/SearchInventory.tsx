export default function SearchInventory() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-2xl bg-slate-900 p-8 shadow-xl">

          <h2 className="mb-6 text-center text-4xl font-bold text-white">
            Search Inventory
          </h2>

          <div className="grid gap-4 md:grid-cols-4">

            <input
              type="text"
              placeholder="Search by keyword..."
              className="rounded-lg bg-white p-4 text-slate-900 placeholder:text-gray-500"
            />

            <select className="rounded-lg bg-white p-4 text-slate-900">
              <option>All Categories</option>
              <option>Heavy Equipment</option>
              <option>Industrial Equipment</option>
              <option>Vehicles</option>
              <option>Motorcycles</option>
              <option>ATVs</option>
              <option>Trailers</option>
              <option>Auto Parts</option>
            </select>

            <input
              type="text"
              placeholder="Location"
              className="rounded-lg bg-white p-4 text-slate-900 placeholder:text-gray-500"
            />

            <button className="rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600">
              Search
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}