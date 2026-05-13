"use client";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface Review {
  name: string;
  rating: number;
  message: string;
  createdAt?: string;
}

export default function RecentReviews({ reviews }: { reviews: Review[] }) {
  // Sort reviews to show the newest first
  const sortedReviews = [...reviews].reverse().slice(0, 6);

  return (
    <div className="mt-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h3 className="text-3xl font-bold text-gray-900">What Travelers Say</h3>
          <p className="text-gray-500 mt-2">Real stories from our global community</p>
        </div>
        <div className="hidden md:block h-px flex-grow mx-8 bg-gray-200" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedReviews.length > 0 ? (
          sortedReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              {/* Quote Icon Decoration */}
              <div className="absolute top-6 right-8 text-blue-50/50">
                <FaQuoteLeft size={40} />
              </div>

              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      size={16}
                      className={i < review.rating ? "text-yellow-400" : "text-gray-200"}
                    />
                  ))}
                </div>

                {/* Review Message */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{review.message}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t pt-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none">{review.name}</h4>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                    Verified Traveler
                  </p>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>
    </div>
  );
}