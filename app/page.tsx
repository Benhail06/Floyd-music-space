"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#07070A] text-white min-h-screen relative overflow-hidden font-serif">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="flex items-center justify-between px-8 py-4">

          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-300">
            Floyd Music Space
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">

            <a href="#" className="hover:text-white transition">
              Home
            </a>

            {/* COURSES */}
            <div className="relative group cursor-pointer">
              <span className="hover:text-white transition">
                Courses
              </span>

              <div className="absolute top-8 left-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <p className="text-xs text-gray-400">
                  Grade Certifications
                </p>
                <p className="text-xs text-gray-300">
                  Piano • Guitar • Drums
                </p>
              </div>
            </div>

            {/* CONTACT */}
            <div className="relative group cursor-pointer">
              <span className="hover:text-white transition">
                Contact
              </span>

              <div className="absolute top-8 left-0 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl px-5 py-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                <p className="text-xs text-gray-300">
                  📞 8555944220
                </p>
              </div>
            </div>

          </div>

          <button
            onClick={() => window.open("https://wa.me/918555944220")}
            className="bg-white text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition"
          >
            Join Us
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] flex items-center px-8 pt-24">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            className="w-full h-full object-cover"
            alt="studio"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-xl"
        >
          <h1 className="text-3xl md:text-5xl font-medium leading-snug tracking-wide">
            Master Music,
            <br />
            <span className="italic text-gray-300">
              Perform with Confidence
            </span> 🎶
          </h1>

          <p className="text-base md:text-lg mb-6 text-gray-400 leading-relaxed max-w-lg">
            Professional music training in Drums, Guitar & Piano, designed for all levels. 
            Our structured programs follow internationally recognized RSL and Trinity syllabi.
          </p>

          <button
            onClick={() => window.open("https://wa.me/918555944220")}
            className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-200 transition"
          >
            Book A Class
          </button>
        </motion.div>

      </section>

      {/* CERTIFICATIONS */}
      <section className="px-8 py-12 text-center">
        <p className="text-gray-400 mb-6">
          Certified Training Programs
        </p>

        <div className="flex justify-center gap-10 flex-wrap">

          <div className="flex flex-col items-center">
            <img src="/rsl.png" className="h-12 opacity-80 hover:opacity-100" />
            <p className="text-sm text-gray-500 mt-2">RSL Awards</p>
          </div>

          <div className="flex flex-col items-center">
            <img src="/trinity.png" className="h-12 opacity-80 hover:opacity-100" />
            <p className="text-sm text-gray-500 mt-2">
              Trinity College London
            </p>
          </div>

        </div>
      </section>

      {/* COURSES */}
  <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="px-8 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-4">
          Our Courses
        </h2>

        <p className="text-center text-gray-400 mb-10">
          Certified training with RSL & Trinity College London 🎓
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* DRUMS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Drums 🥁</h3>
            <p className="text-gray-400 mb-3">
              Master Drums through structured Grade 1–8 programs under RSL & Trinity syllabi, 
              covering rhythm, technique, performance skills, and real-stage confidence.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              🎓 RSL & Trinity certification available
            </p>
            <button
              onClick={() => window.open("https://wa.me/918555944220")}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Join Now
            </button>
          </motion.div>

          {/* GUITAR */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Guitar 🎸</h3>
            <p className="text-gray-400 mb-3">
              Learn Guitar through RSL & Trinity Grade 1–8 programs, mastering chords, techniques, and performance skills with structured progression.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              🎓 RSL & Trinity certification available
            </p>
            <button
              onClick={() => window.open("https://wa.me/918555944220")}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Join Now
            </button>
          </motion.div>

          {/* PIANO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-[#111] to-[#1a1a1a] p-6 rounded-2xl hover:scale-105 hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Piano 🎹</h3>
            <p className="text-gray-400 mb-3">
              Develop Piano skills through RSL & Trinity Grade 1–8 programs, focusing on technique, theory, and expressive performance.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              🎓 RSL & Trinity certification available
            </p>
            <button
              onClick={() => window.open("https://wa.me/918555944220")}
              className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
            >
              Join Now
            </button>
          </motion.div>

        </div>
      </motion.section>
   {/* ABOUT */}
<section className="relative py-24 px-8 flex items-center">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="/studio2.jpg"
      className="w-full h-full object-cover"
      alt="studio"
    />
    <div className="absolute inset-0 bg-black/80"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-2xl">
    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
      About Floyd Music Space
    </h2>

    <p className="text-gray-300 leading-relaxed mb-4">
      Floyd Music Space is a professional training studio focused on building 
      real musicians — not just hobby learners. Our programs are structured 
      around international certification boards like RSL and Trinity College London.
    </p>

    <p className="text-gray-400 leading-relaxed">
      Whether you're a beginner or an advanced player, we guide you step-by-step 
      with personalized attention, performance opportunities, and real-stage exposure.
    </p>
  </div>

</section>
      {/* FOOTER */}
      <footer className="px-8 py-10 border-t border-white/10 text-center text-gray-400">
        <h3 className="text-lg font-semibold mb-2">
          Floyd Music Space 🎶
        </h3>
        <p>Hyderabad | 8555944220</p>
        <p className="text-xs mt-4">© 2026 All rights reserved</p>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/918555944220"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 px-5 py-3 rounded-full shadow-lg hover:scale-110"
      >
        💬 Chat
      </a>

    </main>
  );
}