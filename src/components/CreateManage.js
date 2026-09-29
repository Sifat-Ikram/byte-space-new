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
    <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 py-24 md:grid-cols-2">
      <div className="relative mx-auto h-[320px] w-full max-w-sm">
        <Placeholder
          label="Person image"
          className="absolute bottom-0 left-16 h-[300px] w-[220px] rounded-2xl"
        />
        <Placeholder
          label="Vector"
          className="absolute right-6 top-24 h-16 w-16 rounded-xl"
        />

        <div className="absolute left-0 top-6 w-28 rounded-xl bg-[#1739e8] p-3 text-white shadow-lg">
          <p className="text-[8px] text-white/70">Total Revenue</p>
          <p className="text-[8px] text-white/50">Apr 23</p>
          <p className="text-sm font-semibold">$120.29</p>
        </div>
        <div className="absolute left-0 top-28 w-28 rounded-xl bg-[#1739e8] p-3 text-white shadow-lg">
          <p className="text-[8px] text-white/70">Year to Date</p>
          <p className="text-sm font-semibold">$1,200.38</p>
          <span className="mt-1 inline-block rounded bg-[#c8f31d] px-1.5 text-[7px] text-black">
            +12%
          </span>
        </div>
        <div className="absolute bottom-8 right-0 rounded-xl bg-white p-3 shadow-lg">
          <p className="mb-1 text-[9px] font-medium">Happy Students</p>
          <Avatars count={5} more="10K+" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold leading-snug">
          Create &amp; Manage <br /> Courses Easily.
        </h2>
        <p className="mt-4 max-w-sm text-[10px] leading-relaxed text-gray-500">
          ByteSpace supports individuals or entities in the creation,
          publication, and administration of educational courses.
        </p>
        <ul className="mt-5 space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-center gap-2 text-[11px] font-medium"
            >
              <FiCheckCircle className="text-[#1739e8]" /> {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
