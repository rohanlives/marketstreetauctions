import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ExcavatorPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50">

        <section className="mx-auto max-w-5xl px-6 py-16">

          <h1 className="mb-8 text-5xl font-bold">
            CAT 320 Excavator
          </h1>

          <img
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
            alt="CAT 320 Excavator"
            className="mb-8 w-full rounded-xl"
          />

          <h2 className="text-3xl font-bold text-orange-500">
            $24,750
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Well-maintained CAT 320 excavator with low operating hours.
            Ready for construction, excavation, and heavy-duty projects.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}