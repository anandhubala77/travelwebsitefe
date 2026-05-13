"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

 // Inside your Navbar.js
const navLinks = [
  { name: "Home", href: "#" }, // Goes to top
  { name: "Packages", href: "#packages" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }, // This looks for id="contact"
];

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <Plane className="rotate-45" />
            <span>Sibigo</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-gray-700">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            className="md:hidden p-2 text-gray-700" 
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm md:hidden"
            />

            {/* Sidebar from Left */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-white z-[70] shadow-2xl p-6 md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold text-blue-600 flex items-center gap-2">
                  <Plane size={20} className="rotate-45" /> Menu
                </span>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X size={24} className="text-gray-600" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-semibold text-gray-800 hover:text-blue-600 flex items-center transition"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-10 left-6 right-6">
                <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium">
                  Book Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}