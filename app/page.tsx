"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#07070A] text-white min-h-screen relative overflow-x-hidden font-serif">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="flex items-center justify-between px-5 md:px-8 py-4">

          <h1 className="text-xl md:text-3xl font-semibold tracking-wide text-gray-300">
            Floyd Music Space
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <div className="relative group cursor-pointer">
              <span className="hover:text-white transition">
                Courses
              </span>

              <div className="absolute top-8 left-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <p className="text-xs text-gray-400">Grade Certifications</p>
                <p className="text-xs text-gray-300">
                  Piano • Guitar • Drums
                </p>
              </div>
            </div>

            <a href="/rentals" className="hover:text-white transition">
              Rentals
            </a>

            <div className="relative group cursor-pointer">
              <span className="hover:text-white transition">
                Contact
              </span>

              <div className="absolute top-8 left-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <p className="text-xs text-gray-300">📞 8555944220</p>
              </div>
            </div>

          </div>

          <button
            onClick={() => window.open("https://wa.me/918555944220")}
            className="bg-white text-black px-4 md:px-5 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
          >
            Join Us
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen md:h-[90vh] flex items-center px-5 md:px-8 pt-24">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            className="w-full h-full object-cover"
            alt="studio"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-xl -mt-10 md:mt-0"
        >

          <h1 className="text-4xl sm:text-5xl md:text-5xl font-medium leading-tight tracking-wide">
            Master Music,
            <br />
            <span className="italic text-gray-300">
              Perform with Confidence
            </span>{" "}
            🎶
          </h1>

          <p className="mt-5 text-base md:text-lg text-gray-300 leading-relaxed max-w-md md:max-w-lg">
            Professional music training in Drums, Guitar & Piano for all levels.
            Structured programs aligned with RSL and Trinity syllabi.
          </p>

          <button
            onClick={() => window.open("https://wa.me/918555944220")}
            className="mt-7 bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition w-fit"
          >
            Book A Class
          </button>

        </motion.div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-5 md:px-8 py-12 text-center">
        <p className="text-gray-400 mb-6">Certified Training Programs</p>

        <div className="flex justify-center gap-8 md:gap-10 flex-wrap">

          <div className="flex flex-col items-center">
            <img src="/rsl.png" className="h-10 md:h-12 opacity-80" />
            <p className="text-sm text-gray-500 mt-2">RSL Awards</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/trinity.png" className="h-10 md:h-12 opacity-80" />
            <p className="text-sm text-gray-500 mt-2">
              Trinity College London
            </p>
          </div>

        </div>
      </section>

      {/* COURSES */}
      <section className="px-5 md:px-8 py-16">

        <h2 className="text-3xl font-bold text-center mb-4">
          Our Courses
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Certified training with RSL & Trinity 🎓
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[
            {
              title: "Drums 🥁",
              text: "Master rhythm, technique and stage confidence.",
            },
            {
              title: "Guitar 🎸",
              text: "Learn chords, lead playing and performance skills.",
            },
            {
              title: "Piano 🎹",
              text: "Develop technique, theory and musical expression.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-5">{item.text}</p>

              <button
                onClick={() => window.open("https://wa.me/918555944220")}
                className="bg-white text-black px-4 py-2 rounded-lg"
              >
                Join Now
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="relative py-20 md:py-24 px-5 md:px-8">

        <div className="absolute inset-0">
          <img
            src="/studio2.jpg"
            className="w-full h-full object-cover"
            alt="studio"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            About Floyd Music Space
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            We build real musicians through structured global certification
            programs and practical performance training.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Personalized learning, stage exposure and long-term growth.
          </p>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="px-5 md:px-8 py-10 border-t border-white/10 text-center text-gray-400">
        <h3 className="text-lg font-semibold mb-2">
          Floyd Music Space 🎶
        </h3>
        <p>Hyderabad | 8555944220, 9703466292</p>
        <p className="text-xs mt-4">© 2026 All rights reserved</p>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918555944220"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 bg-green-500 px-5 py-3 rounded-full shadow-lg text-white z-50"
      >
        💬 Chat
      </a>

    </main>
  );
}