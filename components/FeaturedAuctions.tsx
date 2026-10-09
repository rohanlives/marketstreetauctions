export default function FeaturedAuctions() {
  const auctions = [
    {
      title: "CAT 320 Excavator",
      bid: "$24,750",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Bridgeport Milling Machine",
      bid: "$8,900",
      image:
        "https://images.unsplash.com/photo-1565439511179-7b7c7d0b64d5?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Polaris Sportsman ATV",
      bid: "$3,250",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Featured Inventory
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {auctions.map((auction) => (
            <div
              key={auction.title}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={auction.image}
                alt={auction.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {auction.title}
                </h3>

                <p className="mt-4 text-gray-500">
                  Current Bid
                </p>

                <p className="text-3xl font-bold text-orange-500">
                  {auction.bid}
                </p>

                <button className="mt-6 w-full rounded-lg bg-slate-900 py-3 font-semibold text-white transition hover:bg-orange-500">
                  View Auction
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}