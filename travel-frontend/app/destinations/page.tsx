"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Star,
  ArrowRight,
  ArrowLeft,
  X,
} from "lucide-react";

const destinations = [
  {
    title: "Munnar",
    slug: "munnar",
    location: "Idukki",
    description:
      "Tea plantations and misty mountains.",
    fullDescription:
      "Munnar is famous for hills, tea gardens, luxury resorts, waterfalls, and cool climate.",
    img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Alleppey",
    slug: "alleppey",
    location: "Alappuzha",
    description:
      "Beautiful backwaters and houseboats.",
    fullDescription:
      "Alleppey offers Kerala backwaters, luxury cruises, beaches, and peaceful stays.",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Wayanad",
    slug: "wayanad",
    location: "Wayanad",
    description:
      "Forests, waterfalls, caves, and trekking.",
    fullDescription:
      "Wayanad is perfect for nature lovers and adventure tourism.",
    img: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fort Kochi",
    slug: "fort-kochi",
    location: "Ernakulam",
    description:
      "Historic streets and beach vibes.",
    fullDescription:
      "Fort Kochi blends culture, cafés, beaches, and colonial architecture.",
    img: "https://images.unsplash.com/photo-1590228867499-56fb08da0e0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Varkala",
    slug: "varkala",
    location: "Thiruvananthapuram",
    description:
      "Cliff beaches and sunset views.",
    fullDescription:
      "Varkala is famous for beaches, cliff cafés, surfing, and vibrant nightlife.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Thekkady",
    slug: "thekkady",
    location: "Idukki",
    description:
      "Wildlife and spice plantations.",
    fullDescription:
      "Thekkady offers jungle safaris, elephant rides, and spice garden experiences.",
    img: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DestinationsPage() {
  const [selected, setSelected] = useState<any>(null);

  const router = useRouter();

  // Reset modal on page load
  useEffect(() => {
    setSelected(null);
  }, []);

  const scrollToContact = () => {
    // Close modal first
    setSelected(null);

    // Scroll after modal closes
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
    <section className="min-h-screen bg-[#f4f7fb] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <div className="mb-10">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 bg-white shadow-lg px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-all duration-300"
          >
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition"
            />
            Back
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-gray-900 mb-6">
            Explore Destinations
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Discover the best tourist destinations with
            unforgettable experiences and luxury stays.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center">
          {destinations.map((place, index) => (
            <div
              key={index}
              className="group relative w-full max-w-[350px] h-[540px] rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              {/* Image */}
              <img
                src={place.img}
                alt={place.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Badge */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span className="text-sm">
                  Popular Place
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 p-8 text-white z-20">
                <div className="flex items-center gap-2 text-sm mb-3">
                  <MapPin size={16} />
                  {place.location}
                </div>

                <h2 className="text-4xl font-bold mb-4">
                  {place.title}
                </h2>

                <p className="text-gray-200 mb-6">
                  {place.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">

                  {/* Explore Button */}
                  <button
                    onClick={() => setSelected(place)}
                    className="bg-white text-black px-5 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition flex items-center gap-2"
                  >
                    Explore
                    <ArrowRight size={18} />
                  </button>

                  {/* More Button */}
                  <Link
                    href={`/packages/${place.slug}`}
                    className="bg-white/15 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full hover:bg-white hover:text-black transition"
                  >
                    More
                  </Link>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-2xl w-full rounded-[32px] overflow-hidden relative shadow-2xl"
            >

              {/* Image */}
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-[300px] object-cover"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
              >
                <X />
              </button>

              {/* Modal Content */}
              <div className="p-8">

                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <MapPin size={18} />
                  {selected.location}
                </div>

                <h2 className="text-4xl font-black mb-5 text-gray-900">
                  {selected.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {selected.fullDescription}
                </p>

                {/* Modal Buttons */}
                <div className="flex flex-wrap gap-4">

                  {/* Contact */}
                  <button
                    onClick={scrollToContact}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
                  >
                    Contact Us
                  </button>

                  {/* View Details */}
                  <Link
                    href={`/packages/${selected.slug}`}
                    className="border border-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}