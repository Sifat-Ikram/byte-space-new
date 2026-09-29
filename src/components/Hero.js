"use client";
import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import Avatars from "./Avatars";

export default function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden bg-[#1739e8] pt-32 text-center text-white">
      <Placeholder
        label="Vector"
        className="absolute -left-6 top-24 hidden h-24 w-28 rounded-xl lg:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute left-16 top-64 hidden h-24 w-24 rounded-xl lg:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute bottom-10 left-6 hidden h-32 w-36 rounded-xl lg:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute right-20 top-40 hidden h-24 w-24 rounded-xl lg:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute -right-4 bottom-10 hidden h-40 w-40 rounded-xl lg:flex"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold leading-tight md:text-5xl"
        >
          Get Access to Hundreds <br /> Courses Available
        </motion.h1>
        <p className="mx-auto mt-5 max-w-md text-[11px] leading-relaxed text-white/80">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with ByteSpace. Explore a wide range of courses created by
          experts.
        </p>
        <div className="mx-auto mt-6 flex max-w-sm items-center rounded-full bg-white p-1">
          <input
            placeholder="Search courses..."
            className="flex-1 bg-transparent px-4 text-xs text-gray-700 outline-none"
          />
          <button className="rounded-full bg-[#c8f31d] px-5 py-2 text-xs font-medium text-[#0b0b2b]">
            Search
          </button>
        </div>
      </div>

      {/* Lime circle + person */}
      <div className="relative mx-auto mt-6 h-[340px] w-full max-w-3xl">
        <div className="absolute bottom-0 left-1/2 h-[330px] w-[660px] max-w-full -translate-x-1/2 rounded-t-full bg-[#c8f31d]" />
        <Placeholder
          label="Hero person image"
          className="absolute bottom-0 left-1/2 h-[330px] w-[260px] -translate-x-1/2 rounded-t-3xl"
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute left-4 top-16 rounded-xl bg-white p-3 text-left text-[#0b0b2b] shadow-lg md:left-10"
        >
          <p className="text-[9px] font-semibold text-[#1739e8]">
            UX/UI Design
          </p>
          <p className="text-[8px] text-gray-500">12 Lessons · 100+ Students</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute right-4 top-24 w-32 rounded-xl bg-white p-3 text-left text-[#0b0b2b] shadow-lg md:right-10"
        >
          <p className="text-[9px] text-gray-500">Learning Progress</p>
          <p className="text-2xl font-semibold">55%</p>
          <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#c8f31d]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-16 left-4 rounded-xl bg-white p-3 text-left text-[#0b0b2b] shadow-lg md:left-6"
        >
          <p className="mb-1 text-[9px] font-medium">Happy Students</p>
          <Avatars count={5} more="10K+" />
        </motion.div>
      </div>
    </section>
  );
}
