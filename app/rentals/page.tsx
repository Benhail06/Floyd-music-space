
"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Rentals() {
  const [active, setActive] = useState("L-Acoustics");
const [activeService, setActiveService] = useState("Concert Ready Systems");

const services = {
  "Concert Ready Systems": {
    desc: "Built for demanding live environments, our concert-grade systems deliver immense power, crystal-clear output, and consistent coverage across large-scale venues — trusted for performances where sound quality cannot be compromised.",
  },
  "Wedding Specialists": {
    desc: "Elegant audio experiences tailored for weddings — from heartfelt vows to live performances — delivering crystal-clear sound that enhances every moment while preserving the warmth and intimacy of your celebration.",
  },
  "Corporate Productions": {
    desc: "Precision-engineered sound solutions for corporate environments — from high-stakes conferences to premium product launches — delivering crystal-clear audio, flawless balance, and uncompromising reliability to elevate every presentation and brand experience.",
  },
  "Custom Packages": {
    desc: "Fully customized production setups designed around your event’s scale, venue dynamics, and creative vision — integrating world-class equipment, precision sound engineering, and experienced crew to deliver a flawless, high-impact audio experience from start to finish.",
  },
};
  const products = {
    "L-Acoustics": {
      image: "/lacoustics.jpg",
      desc: "World-class line array system used for concerts, weddings and luxury productions.",
    },
    "DiGiCo": {
      image: "/digico.jpg",
      desc: "Premium digital mixing console trusted by touring engineers.",
    },
    "JBL VRX": {
      image: "/jblvrx.jpg",
      desc: "Powerful JBL vertical array system ideal for events.",
    },
    "Premium Instruments": {
      image: "/keys.jpg",
      desc: "High-end keyboards, drums, guitars and stage instruments.",
    },
    "Fast Setup": {
      image: "/setup.jpg",
      desc: "Professional crew, fast setup and clean execution.",
    },
  };

  const inventory = [
  {
    title: "🔊 Signature Audio Systems",
    desc: "Concert-grade L-Acoustics, JBL VRX and premium rigs delivering powerful, crystal-clear sound across venues of any scale.",
    price: "Starting ₹12k",
    image: "/lacoustics.jpg",
  },
  {
    title: "🎚️ Touring Consoles",
    desc: "Industry-standard mixing consoles including DiGiCo and Allen & Heath for precision control and professional sound engineering.",
    price: "Custom Quote",
    image: "/digico.jpg",
  },
  {
    title: "🎹 Elite Instruments",
    desc: "High-end keyboards, guitars, bass rigs and drum kits designed for stage performance and studio-quality output.",
    price: "Starting ₹3k",
    image: "/keys.jpg",
  },
  {
    title: "🎉 Full Event Production",
    desc: "End-to-end event execution including setup, sound design, crew coordination and flawless delivery.",
    price: "Private Pricing",
    image: "/setup.jpg",
  },
];
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <a
            href="/"
            className="text-lg md:text-xl font-semibold tracking-wide text-white/90"
          >
            Floyd Music Space
          </a>

          <div className="flex items-center gap-4">
            <a
              href="/"
              className="hidden md:block text-sm text-white/70 hover:text-white transition"
            >
              Home
            </a>

            <button
              onClick={() => window.open("https://wa.me/918555944220")}
              className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition"
            >
              Get Quote
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
       <section className="relative pt-28 md:pt-44 pb-20 md:pb-28 px-4 md:px-10 text-center overflow-hidden">
        {/* Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_40%)]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <p className="uppercase tracking-[0.45em] text-xs text-white/40 mb-5">
            Floyd Rentals
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.95]">
            Premium Sound.
            <br />
            Elevated Events.
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-white/60 text-lg md:text-xl leading-relaxed">
            Luxury-grade sound systems, instruments, consoles and event
            production for weddings, concerts, launches and private shows.
          </p>

          {/* Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
  {Object.keys(products).map((item) => (
    <button
      key={item}
      onMouseEnter={() => setActive(item)}
      onClick={() => setActive(item)}
      className={`px-4 py-2 rounded-full border text-sm transition ${
        active === item
          ? "bg-white text-black border-white"
          : "border-white/10 text-white/70 bg-white/[0.03]"
      }`}
    >
      {item}
    </button>
  ))}
</div>

{/* Product Showcase */}
<div className="mt-10 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
  
  <img
    src={products[active as keyof typeof products].image}
    alt={active}
    className="rounded-2xl w-full h-[280px] object-cover"
  />

  <div className="text-left">
    <h3 className="text-3xl font-semibold mb-4">{active}</h3>
    <p className="text-white/60 leading-relaxed mb-6">
      {products[active as keyof typeof products].desc}
    </p>

    <button
      onClick={() =>
        window.open(
          "https://wa.me/919346694002?text=Hi I want pricing for " + active
        )
      }
      className="bg-white text-black px-6 py-3 rounded-full font-medium"
    >
      Get Quote
    </button>
  </div>
</div>

          {/* CTA */}
          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() =>
  window.open(
    "https://wa.me/919346694002?text=Hi%20I%20want%20to%20know%20private%20quote%20of%20your%20PA%20system",
    "_blank"
  )
}
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:scale-105 transition"
            >
              Request Private Quote
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("inventory")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-white/10 px-6 md:px-8 py-3 md:py-4 rounded-full text-white hover:bg-white/5 transition"
            >
              Explore Inventory
            </button>
          </div>
        </motion.div>
      </section>

      {/* TRUST STRIP INTERACTIVE */}
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="px-6 md:px-10 pb-24"
>
  <div className="max-w-6xl mx-auto">

    {/* Buttons */}
    <div className="grid md:grid-cols-4 gap-5">
      {Object.keys(services).map((item) => (
        <div
          key={item}
          onMouseEnter={() => setActiveService(item)}
          onClick={() => setActiveService(item)}
          className={`cursor-pointer rounded-3xl border px-6 py-5 text-center transition ${
            activeService === item
              ? "bg-white text-black border-white"
              : "border-white/10 bg-white/[0.03] text-white/70"
          }`}
        >
          {item}
        </div>
      ))}
    </div>

    {/* Description Panel */}
    {activeService && (
      <motion.div
        key={activeService}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 max-w-3xl mx-auto rounded-3xl border border-white/10 bg-[#0f0f0f] p-6 md:p-8 text-center"
      >
        <p className="text-white/70 leading-relaxed text-lg">
          {services[activeService as keyof typeof services].desc}
        </p>
      </motion.div>
    )}

  </div>
</motion.section>

      {/* INVENTORY */}
      <motion.section
        id="inventory"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-6 md:px-10 py-24"
      >
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-xs text-white/40 mb-4">
            Curated Inventory
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-14">
            Built for Premium Productions
          </h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >

            {inventory.map((item) => (
  <motion.div
    key={item.title}
    whileHover={{ scale: 1.02 }}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f0f]"
  >
    {/* Image */}
    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition duration-500"
    />

    {/* Content */}
    <div className="relative p-8 md:p-10">
      <h3 className="text-2xl md:text-3xl mb-4">{item.title}</h3>

      <p className="text-white/60 leading-relaxed mb-6 group-hover:text-white transition">
        {item.desc}
      </p>

      <p className="text-lg font-medium">{item.price}</p>
    </div>
  </motion.div>
))}

          </motion.div>
        </div>
      </motion.section>

      {/* PRICING */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-6 md:px-10 py-24 bg-[#070707]"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-center mb-14">
            Packages Designed to Scale
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Essential",
                price: "₹3k+",
                desc: "Small gatherings, rehearsals, intimate functions.",
              },
              {
                title: "Signature",
                price: "₹10k+",
                desc: "Weddings, medium venues, premium celebrations.",
              },
              {
                title: "Prestige",
                price: "₹25k+",
                desc: "Concerts, festivals, large-scale productions.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-[#111] p-8 text-center"
              >
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-4xl font-semibold mb-4">{item.price}</p>
                <p className="text-white/60">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* LEAD FORM */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-6 md:px-10 py-24"
      >
        <div className="max-w-3xl mx-auto rounded-[2rem] border border-white/10 bg-[#0f0f0f] p-8 md:p-12">

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-4">
            Request a Private Quote
          </h2>

          <p className="text-center text-white/60 mb-10">
            Tell us your event type, city and audience size.
          </p>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);

              const data = {
                name: formData.get("name"),
                phone: formData.get("phone"),
                event: formData.get("event"),
                location: formData.get("location"),
                crowd: formData.get("crowd"),
              };

              await fetch("/api/leads", {
                method: "POST",
                body: JSON.stringify(data),
              });

              const message = `Hello, I need a quote:

Name: ${data.name}
Phone: ${data.phone}
Event: ${data.event}
Location: ${data.location}
Crowd Size: ${data.crowd}`;

              window.open(
                `https://wa.me/918555944220?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
            className="grid md:grid-cols-2 gap-4"
          >

            <input
              name="name"
              placeholder="Your Name"
              required
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              name="phone"
              placeholder="Phone Number"
              required
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              name="event"
              placeholder="Event Type"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              name="location"
              placeholder="Location"
              className="bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              name="crowd"
              placeholder="Audience Size"
              className="md:col-span-2 bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              type="submit"
              className="md:col-span-2 mt-2 bg-white text-black py-4 rounded-full font-medium hover:scale-[1.02] transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </motion.section>

      {/* FOOTER CTA */}
      <section className="px-6 md:px-10 pb-24 text-center">
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#111] to-[#1b1b1b] p-10 md:p-16">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
            Let’s Build Something Memorable
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Premium sound, clean execution and an experience your guests remember.
          </p>

          <button
            onClick={() => window.open("https://wa.me/918555944220")}
            className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-medium"
          >
            Speak With Our Team
          </button>
        </div>
      </section>

    </main>
  );
}