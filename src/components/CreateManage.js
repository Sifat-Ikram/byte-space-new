"use client";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import Placeholder from "./Placeholder";
import Avatars from "./Avatars";

const points = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function CreateManage() {
  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 py-24 sm:px-8 md:grid-cols-2 md:py-32">
      <div className="relative mx-auto h-[460px] w-full max-w-[460px]">
        <Placeholder
          label="Person image"
          className="absolute bottom-0 left-20 h-[440px] w-[300px] rounded-3xl sm:left-24"
        />
        <Placeholder
          label="Vector"
          className="absolute right-4 top-32 h-24 w-24 rounded-2xl"
        />

        <div className="absolute left-0 top-10 w-40 rounded-2xl bg-[#1739e8] p-4 text-white shadow-xl">
          <p className="text-xs text-white/75">Total Revenue</p>
          <p className="text-[10px] text-white/50">Apr 23</p>
          <p className="mt-1 text-xl font-semibold">$120.29</p>
        </div>
        <div className="absolute left-0 top-44 w-40 rounded-2xl bg-[#1739e8] p-4 text-white shadow-xl">
          <p className="text-xs text-white/75">Year to Date</p>
          <p className="mt-1 text-xl font-semibold">$1,200.38</p>
          <span className="mt-2 inline-block rounded-md bg-[#c8f31d] px-2 py-0.5 text-[10px] font-semibold text-black">
            +12%
          </span>
        </div>
        <div className="absolute bottom-20 right-0 rounded-2xl bg-white p-4 shadow-xl">
          <p className="mb-2 text-xs font-semibold">Happy Students</p>
          <Avatars count={5} more="10K+" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px]">
          Create &amp; Manage <br /> Courses Easily.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
          ByteSpace supports individuals or entities in the creation,
          publication, and administration of educational courses.
        </p>
        <ul className="mt-7 space-y-4">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-center gap-3 text-sm font-medium sm:text-base"
            >
              <FiCheckCircle size={18} className="text-[#1739e8]" /> {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
