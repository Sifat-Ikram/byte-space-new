"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import heroPerson from "@/assets/heroPerson.png";
import vector1 from "@/assets/vector1.png";
import vector2 from "@/assets/vector2.png";
import vector3 from "@/assets/vector3.png";
import vector4 from "@/assets/vector4.png";
import vector5 from "@/assets/vector5.png";
import vector6 from "@/assets/vector6.png";
import happy1 from "@/assets/happy1.png";
import happy2 from "@/assets/happy2.png";
import happy3 from "@/assets/happy3.png";
import happy4 from "@/assets/happy4.png";
import happy5 from "@/assets/happy5.png";
import happy6 from "@/assets/happy6.png";
import happy7 from "@/assets/happy7.png";

const happyImgs = [happy1, happy2, happy3, happy4, happy5, happy6, happy7];

export default function Hero() {
  return (
    <section className="grid-bg relative overflow-hidden bg-[#1739e8] text-white">
      <div className="relative mx-auto h-[820px] max-w-[1440px] md:h-[1010px]">
        <Image
          src={vector1}
          alt="vector1"
          priority
          className="pointer-events-none absolute left-0 top-[280px] z-0 hidden h-auto w-[180px] lg:block"
        />

        <Image
          src={vector3}
          alt=""
          priority
          className="pointer-events-none absolute left-[220px] top-[500px] z-0 hidden h-auto w-[110px] lg:block"
        />
        <Image
          src={vector2}
          alt=""
          priority
          className="pointer-events-none absolute right-0 top-[260px] z-0 hidden h-auto w-[190px] lg:block"
        />

        <Image
          src={vector4}
          alt="vector4"
          priority
          className="absolute left-[75px] top-[755px] z-0 hidden h-[185px] w-[175px] rounded-2xl lg:flex"
        />

        <Image
          src={vector5}
          alt="vector5"
          priority
          className="absolute left-[1012px] top-[480px] z-0 hidden h-[130px] w-[155px] rounded-2xl lg:flex"
        />

        <Image
          src={vector6}
          alt="vector6"
          priority
          className="absolute left-[1178px] top-[700px] z-0 hidden h-[240px] w-[180px] rounded-2xl lg:flex"
        />

        {/* ================= Heading + subtitle + search ================= */}
        <div className="absolute inset-x-0 top-[120px] z-20 mx-auto max-w-[1000px] px-5 text-center md:top-[165px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[40px] font-semibold leading-[1.1] sm:text-6xl md:text-[76px]"
          >
            Get Access to Hundreds <br className="hidden md:block" />
            Courses Available
          </motion.h1>

          <p className="mx-auto mt-8 max-w-[780px] text-sm text-white/90 md:mt-14 md:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="mx-auto mt-8 flex max-w-[600px] items-center justify-center gap-3 md:mt-12">
            <div className="flex h-[50px] w-full max-w-[449px] items-center gap-3 rounded-xl bg-white px-4">
              <FiSearch className="shrink-0 text-gray-400" size={18} />
              <input
                placeholder="Course, topic, creator"
                className="min-w-0 flex-1 bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>
            <button className="h-[50px] shrink-0 rounded-xl bg-[#c8f31d] px-6 text-sm font-semibold text-[#0b0b2b] transition hover:brightness-95">
              Search
            </button>
          </div>
        </div>
        <div className="absolute left-1/2 top-[560px] z-0 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#c8f31d] md:top-[580px] md:h-[1125px] md:w-[1125px]" />
        <Image
          src={heroPerson}
          alt="heroPerson"
          priority
          className="absolute bottom-0 left-1/2 z-10 h-auto w-[300px] -translate-x-1/2 md:w-[570px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute left-[calc(50%-315px)] top-[634px] z-20 hidden h-[92px] w-[197px] rounded-2xl bg-white p-4 text-left text-[#0b0b2b] shadow-xl md:block"
        >
          <p className="text-sm font-semibold">UI/UX Design</p>
          <p className="mt-1 text-[10px] text-gray-500">
            240 Courses · 1000+ Students
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute left-[calc(50%+111px)] top-[645px] z-20 hidden w-[225px] rounded-2xl bg-white p-5 text-left text-[#0b0b2b] shadow-xl md:block"
        >
          <p className="text-xs text-gray-600">Learning Progress</p>
          <p className="mt-1 text-[40px] font-semibold leading-none">55%</p>
          <div className="mt-3 h-2 w-full rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#c8f31d]" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute left-[calc(50%-392px)] top-[827px] z-20 hidden w-[252px] rounded-2xl bg-white p-4 text-left text-[#242528] shadow-xl md:block"
        >
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
                className="-ml-5 h-[43px] w-[43px] rounded-full object-cover first:ml-0"
              />
            ))}
            <span className="-ml-2 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#c8f31d] text-xs font-bold text-[#242528]">
              2K+
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
