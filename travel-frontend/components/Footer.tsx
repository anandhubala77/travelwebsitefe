"use client";

import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUp,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 border-b border-white/10 pb-16">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black mb-5">
              Travel With Siby
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Explore breathtaking destinations, luxury
              stays, backwaters, beaches, mountains,
              and unforgettable Kerala experiences.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="hover:text-white transition"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#reviews"
                  className="hover:text-white transition"
                >
                  Reviews
                </a>
              </li>

            </ul>
          </div>

          {/* Popular Places */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Popular Places
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Munnar</li>
              <li>Alleppey</li>
              <li>Wayanad</li>
              <li>Fort Kochi</li>
              <li>Varkala</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 text-blue-500"
                />

                <p>
                  Ernakulam, Kerala, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-blue-500"
                />

                <p>
                  +91 9605447242
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-blue-500"
                />

                <p>
                 travelwithsiby@gmail.com
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 Travel With Sibichen. All rights reserved.
          </p>

          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 bg-white/10 hover:bg-blue-600 px-5 py-3 rounded-full transition duration-300"
          >
            Back To Top

            <ArrowUp
              size={18}
              className="group-hover:-translate-y-1 transition"
            />
          </button>

        </div>

      </div>
    </footer>
  );
}