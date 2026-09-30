"use client";
import { motion } from "framer-motion";
import { FiBarChart, FiStar } from "react-icons/fi";
import Placeholder from "./Placeholder";
// import Image from "next/image";
// import growthPerson from "@/assets/growthPerson.png";

const stats = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
];

export default function Growth() {
  return (
    <section className="relative overflow-hidden">
      {/* 1440px canvas (desktop) */}
      <div className="relative px-5 pb-6 pt-20 sm:px-8 lg:left-1/2 lg:h-[660px] lg:w-[1440px] lg:-translate-x-1/2 lg:p-0">
        {/* ---------- Text (left) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:absolute lg:left-[130px] lg:top-[190px] lg:w-[540px]"
        >
          <h2 className="text-[32px] font-semibold leading-[1.2] sm:text-4xl lg:text-[44px]">
            Your Path to Professional <br className="hidden sm:block" />
            Growth Starts Here!
          </h2>
          <p className="mt-8 max-w-[474px] text-base leading-[1.75] text-gray-600">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>
          <div className="mt-9 flex gap-16">
            {stats.map(([n, l]) => (
              <div key={l}>
                <p className="text-[30px] font-medium leading-none text-[#1739e8]">
                  {n}
                </p>
                <p className="mt-2 text-sm text-gray-500">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Cluster (right) ---------- */}
        <div className="relative mx-auto mt-10 -mb-[216px] h-[540px] w-[560px] origin-top scale-[.6] sm:-mb-[80px] sm:scale-[.85] lg:absolute lg:left-[774px] lg:top-[137px] lg:m-0 lg:origin-top-left lg:scale-100">
          {/* Course card */}
          <div className="absolute left-0 top-0 z-0 w-[380px] rounded-2xl bg-white p-3 shadow-[0_10px_40px_rgba(0,0,60,0.12)]">
            <div className="relative">
              {/* 🔁 REPLACE: course photo */}
              <Placeholder
                label="Course image"
                className="h-[190px] rounded-xl"
              />
              <div className="absolute bottom-3 left-3 flex gap-1.5 text-[10px] text-white">
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
            <div className="mt-4 flex items-center justify-between px-1">
              <h3 className="text-base font-semibold">
                Learn Figma from Basic
              </h3>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                4.5 <FiStar size={13} />
              </span>
            </div>
            <p className="px-1 text-xs text-gray-400">
              by <span className="text-[#1739e8]">pixelperf studio</span>
            </p>
            <span className="mx-1 mt-3 inline-flex items-center gap-1.5 rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
              <FiBarChart size={12} /> Beginner
            </span>
            <p className="mt-3 px-1 text-lg font-semibold text-[#1739e8]">
              $25
              <span className="text-xs font-normal text-gray-400">/Month</span>
            </p>
          </div>

          {/* 🔁 REPLACE: person image (transparent PNG) */}
          <Placeholder
            label="Person image"
            className="absolute left-[116px] top-[20px] z-10 h-[520px] w-[420px] rounded-3xl"
          />
          {/* <Image src={growthPerson} alt="" className="absolute left-[116px] top-[20px] z-10 h-auto w-[420px]" /> */}

          {/* 🔁 REPLACE: lime squiggle (মাথার ডানে) */}
          <Placeholder
            label="Vector (lime squiggle)"
            className="absolute left-[412px] top-[60px] z-20 h-[173px] w-[127px] rounded-2xl"
          />

          {/* Learning Progress */}
          <div className="absolute left-[275px] top-[270px] z-20 w-[205px] rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-xs text-gray-600">Learning Progress</p>
            <p className="mt-1 text-[36px] font-semibold leading-none">55%</p>
            <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
              <div className="h-full w-[55%] rounded-full bg-[#c8f31d]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
