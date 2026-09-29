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
    <section className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 pb-10 pt-24 sm:px-8 md:grid-cols-2 md:pt-32">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px]">
          Your Path to Professional Growth Starts Here!
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
          Explore our curated selection of courses tailored to enhance your
          capabilities and accelerate your career journey. Whether you are
          looking to sharpen specific skills, gain industry expertise, or embark
          on a new career path entirely, we have the resources you need.
        </p>
        <div className="mt-8 flex gap-10">
          {stats.map(([n, l]) => (
            <div key={l}>
              <p className="text-3xl font-semibold sm:text-4xl">{n}</p>
              <p className="mt-1 text-sm text-gray-500">{l}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="relative mx-auto h-[400px] w-full max-w-[520px] sm:h-[440px]">
        <Placeholder
          label="Person image"
          className="absolute bottom-0 right-0 h-[400px] w-[300px] rounded-3xl sm:h-[430px] sm:w-[340px]"
        />
        <Placeholder
          label="Vector"
          className="absolute -top-4 right-0 h-24 w-24 rounded-2xl"
        />

        <div className="absolute left-0 top-6 w-52 rounded-2xl bg-white p-3 shadow-xl sm:w-60">
          <Placeholder label="Course image" className="h-24 rounded-xl" />
          <p className="mt-3 text-sm font-semibold">Learn Figma from Basic</p>
          <p className="text-xs text-gray-400">Beginner</p>
          <p className="mt-1 text-base font-semibold text-[#1739e8]">
            $25<span className="text-xs font-normal text-gray-400">/Month</span>
          </p>
        </div>

        <div className="absolute bottom-24 left-6 w-44 rounded-2xl bg-white p-4 shadow-xl sm:left-10 sm:w-48">
          <p className="text-xs text-gray-500">Learning Progress</p>
          <p className="text-3xl font-semibold">55%</p>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#c8f31d]" />
          </div>
        </div>
      </div>
    </section>
  );
}
