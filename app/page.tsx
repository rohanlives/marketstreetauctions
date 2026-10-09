import SearchInventory from "@/components/SearchInventory";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedInventory from "@/components/FeaturedInventory";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <SearchInventory />
      <FeaturedInventory />
      <Categories />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}