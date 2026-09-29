"use client";
import { motion } from "framer-motion";
import Placeholder from "./Placeholder";

const stats = [
  ["12K", "Students"],
  ["70+", "Courses"],
  ["16", "Creators"],
];

export default function Growth() {
  return (
    <section className="relative mx-auto grid max-w-5xl items-center gap-10 px-6 pt-20 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold leading-snug">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-4 max-w-sm text-[10px] leading-relaxed text-gray-500">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <div className="mt-6 flex gap-8">
          {stats.map(([n, l]) => (
            <div key={l}>
              <p className="text-2xl font-semibold">{n}</p>
              <p className="text-[10px] text-gray-500">{l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative h-[300px]">
        <Placeholder
          label="Person image"
          className="absolute bottom-0 right-0 h-[280px] w-[230px] rounded-2xl"
        />
        <Placeholder
          label="Vector"
          className="absolute right-0 top-0 h-16 w-16 rounded-xl"
        />
        <div className="absolute left-0 top-6 w-40 rounded-xl bg-white p-2 shadow-lg">
          <Placeholder label="Course image" className="h-14 rounded-lg" />
          <p className="mt-2 text-[9px] font-semibold">
            Learn Figma from Basic
          </p>
          <p className="text-[8px] text-gray-400">Beginner</p>
          <p className="text-[10px] font-semibold text-[#1739e8]">
            $25<span className="text-[7px] text-gray-400">/Month</span>
          </p>
        </div>
        <div className="absolute right-24 top-32 w-28 rounded-xl bg-white p-2.5 shadow-lg">
          <p className="text-[8px] text-gray-500">Learning Progress</p>
          <p className="text-xl font-semibold">55%</p>
          <div className="mt-1 h-1 w-full rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#c8f31d]" />
          </div>
        </div>
      </div>
    </section>
  );
}
