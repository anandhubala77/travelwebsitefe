"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import RecentReviews from "./RecentReviews";

import API_BASE_URL from "@/config/api";



export default function ReviewSection() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [hover, setHover] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    rating: 0,
    message: "",
  });

  // Fetch reviews on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/reviews`);
        setReviews(res.data);
      } catch (err) {
        console.error("Failed to fetch reviews:", err);
      }
    };
    fetchReviews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) return alert("Please select a rating!");

    try {
      const response = await axios.post(`${API_BASE_URL}/api/reviews`, form);
      
      // Update local state immediately for smooth UI
      setReviews([response.data, ...reviews]);
      
      // Reset form
      setForm({ name: "", rating: 0, message: "" });
      setHover(null);
    } catch (err) {
      console.error("Error posting review:", err);
      alert("Something went wrong. Is the backend running?");
    }
  };

  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* LEFT COLUMN: Form Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Share Your <span className="text-blue-600">Experience</span>
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                Your feedback helps us curate better adventures. Tell us about your recent trip!
              </p>

              <motion.form 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-3xl shadow-xl shadow-blue-100/50 border border-gray-100"
              >
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    required
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Rating</label>
                  <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-2xl w-fit">
                    {[...Array(5)].map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <label key={index}>
                          <input
                            type="radio"
                            className="hidden"
                            value={ratingValue}
                            onClick={() => setForm({ ...form, rating: ratingValue })}
                          />
                          <FaStar
                            className="cursor-pointer transition-all duration-200"
                            size={28}
                            color={ratingValue <= (hover || form.rating) ? "#ffc107" : "#e2e8f0"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    placeholder="Tell us what you loved..."
                    rows={4}
                    value={form.message}
                    required
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all"
                >
                  Submit Review
                </motion.button>
              </motion.form>
            </div>
          </div>

          {/* RIGHT COLUMN: Recent Reviews Section */}
          <div className="lg:col-span-2">
            <RecentReviews reviews={reviews} />
          </div>

        </div>
      </div>
    </section>
  );
}