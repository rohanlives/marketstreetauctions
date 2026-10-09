export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div className="max-w-3xl">

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold uppercase tracking-wider">
            Trusted Online Auctions
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Buy & Sell Heavy Equipment,
            <span className="text-orange-500"> Vehicles </span>
            & Industrial Assets
          </h1>

          <p className="mt-6 max-w-2xl text-xl text-gray-300">
            Browse online auctions featuring construction equipment,
            motorcycles, ATVs, trailers, shop equipment, milling
            machinery and more.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold transition hover:bg-orange-600">
              View Current Auctions
            </button>

            <button className="rounded-lg border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-slate-900">
              Sell Your Equipment
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}