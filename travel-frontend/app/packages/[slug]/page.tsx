import Link from "next/link";

import {
  MapPin,
  ArrowLeft,
  Star,
  Phone,
} from "lucide-react";

const places = [
  {
    slug: "munnar",
    title: "Munnar",
    location: "Idukki District",
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
    description:
      "Munnar is one of Kerala’s most famous hill stations known for tea plantations, misty valleys, waterfalls, luxury resorts, and trekking adventures.",
  },
  {
    slug: "alleppey",
    title: "Alleppey",
    location: "Alappuzha",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
    description:
      "Alleppey is famous for serene backwaters, houseboat cruises, beaches, canals, and relaxing Kerala experiences.",
  },
  {
    slug: "fort-kochi",
    title: "Fort Kochi",
    location: "Ernakulam",
    img: "https://images.unsplash.com/photo-1590228867499-56fb08da0e0d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Fort Kochi combines colonial architecture, beachside cafés, historic churches, art galleries, and cultural heritage.",
  },
  {
    slug: "wayanad",
    title: "Wayanad",
    location: "Wayanad District",
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1200&auto=format&fit=crop",
    description:
      "Wayanad offers waterfalls, caves, forests, trekking routes, wildlife sanctuaries, and scenic mountain adventures.",
  },
];

export default async function PackageDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const place = places.find((p) => p.slug === slug);

  if (!place) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl font-black">
        Package Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#f4f7fb] overflow-hidden">

      {/* Hero Section */}
      <div className="relative h-[85vh]">

        {/* Background Image */}
        <img
          src={place.img}
          alt={place.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            href="/destinations"
            className="group flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition"
            />
            Back
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 md:px-14 pb-16">

          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-full mb-6">

            <MapPin size={18} />

            <span className="font-medium">
              {place.location}
            </span>

          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none">
            {place.title}
          </h1>

          {/* Small Description */}
          <p className="max-w-2xl text-lg md:text-2xl text-gray-200 leading-relaxed">
            Discover breathtaking landscapes,
            unforgettable experiences, luxury stays,
            and the true beauty of Kerala tourism.
          </p>

        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        {/* Main Card */}
        <div className="bg-white rounded-[40px] shadow-[0_20px_80px_rgba(0,0,0,0.08)] p-8 md:p-14">

          {/* Top */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-4">

                <Star
                  size={18}
                  className="fill-blue-600"
                />

                <span className="font-semibold">
                  Premium Destination
                </span>

              </div>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                About {place.title}
              </h2>
            </div>

            {/* Contact Button */}
            <a
              href="tel:+919876543210"
              className="group flex items-center justify-center gap-3 bg-black hover:bg-blue-600 text-white px-8 py-5 rounded-2xl transition duration-300 font-semibold shadow-xl"
            >
              <Phone size={20} />

              Contact Now
            </a>

          </div>

          {/* Description */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">

                {place.description}

                <br />
                <br />

                Kerala tourism offers breathtaking
                experiences, luxury stays, traditional
                cuisine, adventure activities, nature
                escapes, and unforgettable cultural
                moments.

                <br />
                <br />

                {place.title} is one of the most visited
                destinations in South India because of
                its scenic beauty, peaceful atmosphere,
                and unique experiences.

              </p>
            </div>

            {/* Right Image Card */}
            <div className="relative">

              <div className="overflow-hidden rounded-[32px] shadow-2xl">

                <img
                  src={place.img}
                  alt={place.title}
                  className="w-full h-[400px] object-cover hover:scale-105 transition duration-700"
                />

              </div>

              {/* Floating Box */}
              <div className="absolute -bottom-6 left-6 bg-white shadow-2xl rounded-3xl px-6 py-5">

                <div className="flex items-center gap-3">

                  <div className="bg-blue-100 p-3 rounded-2xl">
                    <MapPin
                      size={22}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {place.location}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Kerala, India
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}