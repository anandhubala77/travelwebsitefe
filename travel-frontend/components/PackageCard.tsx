"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MapPin, ArrowRight, Star, X } from "lucide-react";

const keralaPackages = [
  {
    title: "Munnar",
    slug: "munnar",
    location: "Idukki District",
    description:
      "Rolling tea plantations, misty mountains, waterfalls, and peaceful valleys.",
    fullDescription:
      "Munnar is one of Kerala's most beautiful hill stations known for tea estates, cool climate, waterfalls, trekking trails, and luxury resorts. Visitors can explore Eravikulam National Park, Mattupetty Dam, Echo Point, and scenic mountain roads.",
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Alleppey",
    slug: "alleppey",
    location: "Alappuzha",
    description:
      "Cruise through Kerala’s iconic backwaters with luxury houseboats and sunsets.",
    fullDescription:
      "Alleppey is famous for its serene backwaters, luxury houseboats, canals, beaches, and authentic Kerala cuisine. It is one of the best destinations for relaxing family trips and honeymoon experiences.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fort Kochi",
    slug: "fort-kochi",
    location: "Ernakulam",
    description:
      "Colonial charm, seaside cafés, art culture, and Chinese fishing nets.",
    fullDescription:
      "Fort Kochi offers a blend of colonial architecture, art galleries, beachside cafés, historic churches, and vibrant culture. Explore Chinese fishing nets, Jew Town, and sunset walks by the sea.",
    img: "https://media.istockphoto.com/id/148423909/photo/a-sunset-over-chinese-fishing-nets-by-a-canoe-in-cochin.webp?a=1&b=1&s=612x612&w=0&k=20&c=k53gxlKU0G2vGWIYD817BT_JUaYdt38dckabJdYCn7U=",
  },
  {
    title: "Wayanad",
    slug: "wayanad",
    location: "Wayanad District",
    description:
      "Forests, waterfalls, wildlife, caves, and scenic mountain adventures.",
    fullDescription:
      "Wayanad is a paradise for nature lovers with waterfalls, caves, wildlife sanctuaries, trekking routes, and beautiful forest landscapes. It’s ideal for adventure and eco-tourism.",
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1200&auto=format&fit=crop",
  },
];

interface PackageProps {
  title: string;
  slug: string;
  location: string;
  description: string;
  fullDescription: string;
  img: string;
}

function PackageCard({
  title,
  slug,
  location,
  description,
  fullDescription,
  img,
}: PackageProps) {
  const [open, setOpen] = useState(false);

  const scrollToContact = () => {
    // Close modal first
    setOpen(false);

    // Scroll after modal animation
    setTimeout(() => {
      const section = document.getElementById("contact");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 300);
  };
  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ y: -12 }}
        transition={{ duration: 0.35 }}
        className="group relative w-full max-w-[320px] h-[520px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
      >
        {/* Background */}
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Badge */}
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">Top Destination</span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 p-8 z-20 text-white">
          <div className="flex items-center gap-2 text-sm text-gray-200 mb-3">
            <MapPin size={16} />
            {location}
          </div>

          <h2 className="text-4xl font-bold mb-4">{title}</h2>

          <p className="text-gray-200 leading-relaxed mb-6">{description}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            {/* Explore Button */}
            <button
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Explore
              <ArrowRight size={18} />
            </button>

            {/* More Link */}
            <Link
              href={`/packages/${slug}`}
              className="bg-white/15 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              More
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white max-w-2xl w-full rounded-[32px] overflow-hidden shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[300px]">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />

                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-lg"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <MapPin size={18} />
                  {location}
                </div>

                <h2 className="text-4xl font-black text-gray-900 mb-5">
                  {title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {fullDescription}
                </p>

                {/* Modal Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Contact Us
                  </button>

                  <Link
                    href={`/packages/${slug}`}
                    className="border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    View Full Details
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Packages() {
  return (
    <section className="bg-[#f4f7fb] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-5"
          >
            Explore Kerala
          </motion.h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-500 leading-relaxed">
            Discover breathtaking destinations, luxury experiences, and
            unforgettable journeys across God’s Own Country.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
          {keralaPackages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Link
            href="/destinations"
            className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-xl"
          >
            Explore More Destinations
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
