import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-wide">
          <span className="text-orange-500">Market Street</span> Auctions
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-orange-400 transition">
            Home
          </Link>

          <Link href="/auctions" className="hover:text-orange-400 transition">
            Current Auctions
          </Link>

          <Link href="/sell" className="hover:text-orange-400 transition">
            Sell
          </Link>

          <Link href="/about" className="hover:text-orange-400 transition">
            About
          </Link>

          <Link href="/contact" className="hover:text-orange-400 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button className="rounded-lg bg-orange-500 px-5 py-2 font-semibold transition hover:bg-orange-600">
          Register
        </button>
      </div>
    </header>
  );
}
