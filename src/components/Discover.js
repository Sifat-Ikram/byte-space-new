"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiBarChart, FiStar } from "react-icons/fi";
import Placeholder from "./Placeholder";
import Avatars from "./Avatars";

const chips = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

const courses = [
  "Learn Figma from Basic",
  "Build Digital Asset",
  "the Power of Big Data",
  "Balancing Productivity an...",
  "Mastering Money Manage...",
  "From Idea to Startup Succ...",
];

export default function Discover() {
  const [active, setActive] = useState("Featured");

  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <h2 className="text-3xl font-semibold leading-snug">
        Discover Your Passion, <br /> Build Your Skills
      </h2>
      <p className="mx-auto mt-4 max-w-md text-[10px] leading-relaxed text-gray-400">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1 text-[9px] transition ${
              active === c
                ? "border-[#c8f31d] bg-[#c8f31d] font-medium"
                : "border-gray-200 bg-white text-gray-600 hover:border-[#c8f31d]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((title, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08 }}
            className="rounded-2xl border border-gray-200 bg-white p-2.5"
          >
            <div className="relative">
              <Placeholder label="Course image" className="h-32 rounded-xl" />
              <div className="absolute bottom-2 left-2 flex gap-1 text-[7px] text-white">
                {["7 Lessons", "2 hours 30 mins", "29 Comments"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/40 px-1.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between px-1">
              <h3 className="truncate text-xs font-semibold">{title}</h3>
              <span className="flex items-center gap-1 text-[10px] text-gray-500">
                4.5 <FiStar size={9} />
              </span>
            </div>
            <p className="px-1 text-[8px] text-gray-400">
              by <span className="text-[#1739e8]">pixelperf studio</span>
            </p>
            <div className="mt-2 flex items-center justify-between px-1">
              <span className="flex items-center gap-1 rounded-md border border-gray-200 px-1.5 py-0.5 text-[8px] text-gray-600">
                <FiBarChart size={9} /> Beginner
              </span>
              <Avatars count={3} />
            </div>
            <p className="mt-2 px-1 text-xs font-semibold text-[#1739e8]">
              $25
              <span className="text-[8px] font-normal text-gray-400">
                /Month
              </span>
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
