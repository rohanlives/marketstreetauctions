
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InventoryCard from "@/components/InventoryCard";
import inventory from "@/data/inventory";
  
export default function InventoryPage() {

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="mb-4 text-5xl font-bold">
              Inventory
            </h1>

            <p className="text-xl text-gray-300">
              Browse heavy equipment, vehicles, trailers,
              industrial equipment, and used auto parts.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Available Inventory
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            
            {inventory.map((item) => (
 <InventoryCard
  key={item.title}
  title={item.title}
  category={item.category}
  price={item.price}
  location={item.location}
  status={item.status}
  image={item.image}
  link={item.link}
/>
))}

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}