"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Placeholder from "./Placeholder";
import happy1 from "@/assets/happy1.png";
import happy2 from "@/assets/happy2.png";
import happy3 from "@/assets/happy3.png";
import happy4 from "@/assets/happy4.png";
import happy5 from "@/assets/happy5.png";
import happy6 from "@/assets/happy6.png";
import happy7 from "@/assets/happy7.png";
// import girl from "@/assets/girl.png";

const happyImgs = [happy1, happy2, happy3, happy4, happy5, happy6, happy7];

const points = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function CreateManage() {
  return (
    <section className="relative overflow-hidden">
      {/* 1440px canvas (desktop) */}
      <div className="relative px-5 pb-16 pt-6 sm:px-8 lg:left-1/2 lg:h-[760px] lg:w-[1440px] lg:-translate-x-1/2 lg:p-0">
        {/* ---------- Cluster (left) ---------- */}
        <div className="relative mx-auto -mb-[224px] h-[560px] w-[570px] origin-top scale-[.6] sm:-mb-[84px] sm:scale-[.85] lg:absolute lg:left-[130px] lg:top-[60px] lg:m-0 lg:origin-top-left lg:scale-100">
          {/* 🔁 REPLACE: girl image (transparent PNG) */}
          <Placeholder
            label="Person image"
            className="absolute left-[38px] top-[10px] z-0 h-[500px] w-[330px] rounded-3xl"
          />
          {/* <Image src={girl} alt="" className="absolute left-[38px] top-[10px] z-0 h-auto w-[330px]" /> */}

          {/* 🔁 REPLACE: lime squiggle (girl এর ডানে) */}
          <Placeholder
            label="Vector (lime squiggle)"
            className="absolute left-[445px] top-[281px] z-10 h-[120px] w-[125px] rounded-2xl"
          />

          {/* Total Revenue */}
          <div className="absolute left-[12px] top-[153px] z-20 w-[190px] rounded-2xl bg-[#1739e8] p-4 text-white shadow-xl">
            <p className="text-xs">Total Revenue</p>
            <p className="text-[10px] text-white/60">July 22</p>
            <p className="mt-1 text-[22px] font-semibold leading-tight">
              $120.29
            </p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/20">
              <div className="h-full w-[75%] rounded-full bg-[#c8f31d]" />
            </div>
          </div>

          {/* Year to Date */}
          <div className="absolute left-[12px] top-[245px] z-20 w-[190px] rounded-2xl bg-[#1739e8] p-4 text-white shadow-xl">
            <p className="text-xs">Year to Date</p>
            <p className="text-[10px] text-white/60">2022</p>
            <p className="mt-1 text-[22px] font-semibold leading-tight">
              $1,200.38
            </p>
            <span className="mt-2 inline-block rounded-md bg-[#c8f31d] px-2 py-0.5 text-[10px] font-semibold text-[#0b0b2b]">
              +12%
            </span>
          </div>

          {/* Happy Students */}
          <div className="absolute left-[290px] top-[433px] z-20 w-[255px] rounded-2xl bg-white p-4 text-[#0b0b2b] shadow-xl">
            <p className="text-sm font-semibold">Happy Students</p>
            <p className="mb-2.5 mt-0.5 flex items-center gap-1 text-[10px] text-gray-500">
              4.5
              <span className="text-[#D1D1D1]">(240)</span>
              <span className="text-[#D4FB20]">★</span>
            </p>
            <div className="flex items-center">
              {happyImgs.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt=""
                  width={28}
                  height={28}
                  className="-ml-2 h-7 w-7 rounded-full border-2 border-white object-cover first:ml-0"
                />
              ))}
              <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#c8f31d] text-[9px] font-semibold">
                28K+
              </span>
            </div>
          </div>
        </div>

        {/* ---------- Text (right) ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 lg:absolute lg:left-[763px] lg:top-[170px] lg:mt-0 lg:w-[560px]"
        >
          <h2 className="text-[32px] font-semibold leading-[1.2] sm:text-4xl lg:text-[44px]">
            Create &amp; Manage <br />
            Courses Easily.
          </h2>
          <p className="mt-6 max-w-[540px] text-base leading-[1.75] text-gray-600">
            <span className="font-semibold text-[#0b0b2b]">ByteSpace</span>{" "}
            supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>
          <ul className="mt-6 space-y-4">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 text-base text-[#0b0b2b]"
              >
                <FaCheckCircle size={16} className="text-[#1739e8]" /> {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
