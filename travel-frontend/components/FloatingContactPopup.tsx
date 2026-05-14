"use client";

import { useState, useEffect } from "react";

import {
  Phone,
  MessageCircle,
  X,
  Send,
} from "lucide-react";

export default function FloatingContactPopup() {

  const [open, setOpen] = useState(false);

  // Auto open after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-black p-5 rounded-full shadow-2xl transition duration-300 animate-bounce"
      >
        <Phone size={26} />
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end md:items-center justify-center p-4">

          <div className="relative bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.25)] animate-[popup_0.35s_ease]">

            {/* Top */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-black relative">

              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
              >
                <X size={22} />
              </button>

              <h2 className="text-3xl font-black mb-3">
                Need Help?
              </h2>

              <p className="text-white/90 leading-relaxed">
                You can directly call us, connect through
                WhatsApp, or send a message. We’re happy
                to call you back and help plan your trip.
              </p>
            </div>

            {/* Content */}
            <div className="p-8 space-y-5">

              {/* Call */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 bg-gray-100 hover:bg-blue-600 hover:text-white p-5 rounded-2xl transition duration-300 group"
              >
                <div className="bg-white p-3 rounded-full">
                  <Phone
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <div className="text-black">
                  <h3 className="font-bold text-lg text-black">
                    Direct Call
                  </h3>

                  <p className="text-sm opacity-80">
                    +919605447242
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/+919605447242"
                target="_blank"
                className="flex items-center gap-4 bg-gray-100 hover:bg-green-500 hover:text-white p-5 rounded-2xl transition duration-300 group text-black"
              >
                <div className="bg-white p-3 rounded-full">
                  <MessageCircle
                    size={22}
                    className="text-green-500"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    WhatsApp
                  </h3>

                  <p className="text-sm opacity-80">
                    Chat instantly with us
                  </p>
                </div>
              </a>

              {/* Message */}
              <button
                onClick={() => {
                  const section =
                    document.getElementById("contact");

                  setOpen(false);

                  setTimeout(() => {
                    section?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 300);
                }}
                className="w-full flex items-center justify-center gap-3 bg-black hover:bg-blue-600 text-white p-5 rounded-2xl transition duration-300 font-semibold"
              >
                <Send size={20} />
                Send Message
              </button>

            </div>
          </div>
        </div>
      )}
    </>
  );
}