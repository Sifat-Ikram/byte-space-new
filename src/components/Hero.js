"use client";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Placeholder from "./Placeholder";
import Avatars from "./Avatars";

export default function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden bg-[#1739e8] pt-36 text-center text-white">
      <Placeholder
        label="Vector"
        className="absolute -left-10 top-32 hidden h-40 w-44 rounded-2xl xl:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute left-24 top-[340px] hidden h-32 w-32 rounded-2xl xl:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute -left-6 bottom-16 hidden h-56 w-56 rounded-2xl xl:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute right-24 top-40 hidden h-36 w-36 rounded-2xl xl:flex"
      />
      <Placeholder
        label="Vector"
        className="absolute -right-10 bottom-16 hidden h-64 w-64 rounded-2xl xl:flex"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold leading-[1.15] sm:text-5xl md:text-[64px]"
        >
          Get Access to Hundreds Courses Available
        </motion.h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with ByteSpace. Explore a wide range of courses created by
          experts.
        </p>
        <div className="mx-auto mt-8 flex max-w-md items-center rounded-full bg-white p-1.5">
          <input
            placeholder="Search courses..."
            className="min-w-0 flex-1 bg-transparent px-5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
          <button className="rounded-full bg-[#c8f31d] px-7 py-3 text-sm font-semibold text-[#0b0b2b] transition hover:brightness-95">
            Search
          </button>
        </div>
      </div>

      {/* Lime circle + person */}
      <div className="relative mx-auto mt-14 h-[420px] w-full max-w-[1000px] overflow-hidden sm:h-[520px]">
        <div className="absolute left-1/2 top-[90px] h-[760px] w-[760px] max-w-none -translate-x-1/2 rounded-full bg-[#c8f31d] sm:top-[60px]" />
        <Placeholder
          label="Hero person image"
          className="absolute bottom-0 left-1/2 h-[440px] w-[330px] -translate-x-1/2 rounded-t-[40px] sm:h-[500px] sm:w-[400px]"
        />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute left-2 top-32 rounded-2xl bg-white p-4 text-left text-[#0b0b2b] shadow-xl sm:left-6 sm:top-40"
        >
          <p className="text-xs font-semibold text-[#1739e8]">UX/UI Design</p>
          <p className="mt-0.5 text-[10px] text-gray-500">
            12 Lessons · 100% Students
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-28 w-44 rounded-2xl bg-white p-4 text-left text-[#0b0b2b] shadow-xl sm:right-6 sm:top-36 sm:w-52"
        >
          <p className="text-[11px] text-gray-500">Learning Progress</p>
          <p className="text-3xl font-semibold">55%</p>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#c8f31d]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-24 left-0 rounded-2xl bg-white p-4 text-left text-[#0b0b2b] shadow-xl sm:bottom-28 sm:left-2"
        >
          <p className="mb-2 text-xs font-semibold">Happy Students</p>
          <div className="flex items-center gap-2">
            <Avatars count={5} more="10K+" />
          </div>
          <p className="mt-1.5 flex items-center gap-1 text-[10px] text-gray-500">
            4.8 <FiStar size={10} className="text-[#f5b301]" />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
