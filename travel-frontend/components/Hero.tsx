"use client";

import { useEffect,useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState("/hero_video1.mp4");

  useEffect(() => {
    // Update video based on screen size
    const updateVideoSource = () => {
      if (window.innerWidth < 768) {
        setVideoSrc("/hero_video_mobile.mp4");
      } else {
        setVideoSrc("/hero_video1.mp4");
      }
    };

    // Run initially
    updateVideoSource();

    // Listen for resize
    window.addEventListener("resize", updateVideoSource);

    return () =>
      window.removeEventListener(
        "resize",
        updateVideoSource
      );
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          key={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src={videoSrc}
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-5xl w-full">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-[1.1] tracking-tight"
        >
          Your Journey,
          <br />

          <span className="text-blue-400 drop-shadow-lg">
            Our Expertise.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Discover unparalleled travel experiences
          curated just for you.
        </motion.p>

        {/*
        ===================================================
        SEARCH SECTION TEMPORARILY DISABLED
        ===================================================

        <LayoutGroup>
          <motion.div layout className="flex justify-center">

            Desktop Search

            <div className="hidden md:flex bg-white/95 backdrop-blur-md p-2 rounded-full shadow-2xl items-center gap-2 max-w-3xl w-full border border-white/20">
              <div className="flex items-center gap-3 px-5 flex-grow border-r border-gray-200">
                <MapPin className="text-blue-600" size={20} />
                <input
                  type="text"
                  placeholder="Where is your next adventure?"
                  className="outline-none text-gray-700 w-full text-base bg-transparent"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors text-base font-bold shadow-lg"
              >
                <Search size={18} />
                Search
              </motion.button>
            </div>

            Mobile Search

            <div className="md:hidden relative flex justify-center w-full max-w-[320px]">
              <AnimatePresence mode="wait">

                {!mobileSearchOpen ? (
                  <motion.button
                    key="closed"
                    layoutId="searchBar"
                    onClick={() =>
                      setMobileSearchOpen(true)
                    }
                    className="flex items-center justify-between w-full bg-white/95 backdrop-blur-md px-6 py-4 rounded-full shadow-xl border border-white/40"
                  >
                    <span className="text-gray-500 font-medium">
                      Find your trip...
                    </span>

                    <div className="bg-blue-600 p-2 rounded-full text-white">
                      <Search size={18} />
                    </div>
                  </motion.button>
                ) : (
                  <motion.div
                    key="open"
                    layoutId="searchBar"
                    className="absolute -bottom-2 bg-white p-3 rounded-2xl shadow-2xl flex flex-col gap-3 w-full z-50 border border-gray-100"
                  >
                    <div className="flex items-center gap-2 px-2 py-1">
                      <MapPin
                        className="text-blue-600"
                        size={20}
                      />

                      <input
                        type="text"
                        placeholder="Where to?"
                        autoFocus
                        className="outline-none text-gray-800 flex-grow text-lg bg-transparent"
                      />

                      <button
                        onClick={() =>
                          setMobileSearchOpen(false)
                        }
                      >
                        <X
                          size={20}
                          className="text-gray-400"
                        />
                      </button>
                    </div>

                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                      <Search size={18} />
                      Search Destinations
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </LayoutGroup>
        */}

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest font-bold">
          Scroll
        </span>

        <div className="w-[1px] h-10 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>

    </section>
  );
}