"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import PackageCard from "@/components/PackageCard";
import ReviewSection from "@/components/ReviewSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContactPopup from "@/components/FloatingContactPopup";

export default function Home() {



  return (
    <main className="overflow-hidden">

      {/* Hero Section */}
      <Hero />

      {/* Featured Packages */}
      <section className="py-20 px-4 md:px-10">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Packages
        </h2>

          <PackageCard />
      </section>

      {/* Reviews */}
      <ReviewSection />

      {/* Contact */}
      <Contact />

      <Footer />

      <FloatingContactPopup/>

    </main>
  );
}