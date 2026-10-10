import Link from "next/link";

type InventoryCardProps = {
  title: string;
  category: string;
  price: string;
  location: string;
  status: string;
  image: string;
  link: string;
};

export default function InventoryCard({
  title,
  category,
  price,
  location,
  status,
  image,
  link,
}: InventoryCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">

      <img
        src={image}
        alt={title}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />

      <p className="text-sm text-orange-500">
        {category}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
  {price}
</p>

<p className="mt-1 text-sm text-gray-500">
  📍 {location}
</p>

<p className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
  {status}
</p>

      <Link
        href={link}
        className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-3 text-white hover:bg-orange-500"
      >
        View Details
      </Link>

    </div>
  );
}