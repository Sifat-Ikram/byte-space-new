"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiBarChart, FiStar } from "react-icons/fi";
import Image from "next/image";
import course1 from "@/assets/course1.png";
import course2 from "@/assets/course2.png";
import course3 from "@/assets/course3.png";
import course4 from "@/assets/course4.png";
import course5 from "@/assets/course5.jpg";
import course6 from "@/assets/course6.jpg";
import happy2 from "@/assets/happy2.png";
import happy8 from "@/assets/happy8.png";
import happy9 from "@/assets/happy9.png";
import happy10 from "@/assets/happy10.png";

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

const courseImages = [course1, course2, course3, course4, course5, course6];

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
    <section className="mx-auto max-w-[1200px] px-5 py-20 text-center sm:px-8 md:py-24">
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px]">
        Discover Your Passion, <br /> Build Your Skills
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="mx-auto mt-8 flex max-w-[860px] flex-wrap justify-center gap-3">
        {chips.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border cursor-pointer px-4 py-2 text-base font-medium transition sm:text-[13px] ${
              active === c
                ? "bg-[#D4FB20] border-[#D4FB20] font-medium text-[#0b0b2b]"
                : "border-gray-200 bg-white text-gray-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-14 grid max-w-[1080px] gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((title, i) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08 }}
            className="rounded-3xl border border-gray-200 bg-white p-3"
          >
            <div className="relative">
              <Image
                src={courseImages[i]}
                alt={title}
                width={341}
                height={195.14}
                className="w-full rounded-2xl object-cover"
              />

              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 text-[10px] text-white">
                {["7 Lessons", "2 hours 30 mins", "29 Comments"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-2">
              <h3 className="truncate text-base font-semibold">{title}</h3>
              <span className="flex shrink-0 items-center gap-1 text-sm text-gray-500">
                4.5 <FiStar size={13} />
              </span>
            </div>

            <p className="mt-0.5 text-xs text-gray-400">
              by <span className="text-[#1739e8]">pixelperf studio</span>
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
                <FiBarChart size={12} /> Beginner
              </span>

              <div className="flex -space-x-2">
                {[happy2, happy8, happy9, happy10].map((avatar, index) => (
                  <Image
                    key={index}
                    src={avatar}
                    alt={`Student ${index + 1}`}
                    width={28}
                    height={28}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ))}

                <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#c8f31d] text-xs font-bold text-[#242528]">
                  26+
                </span>
              </div>
            </div>

            <p className="mt-3 text-lg font-semibold text-[#1739e8]">
              $25
              <span className="text-xs font-normal text-gray-400">/Month</span>
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
