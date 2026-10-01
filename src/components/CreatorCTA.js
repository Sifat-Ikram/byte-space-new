import Placeholder from "./Placeholder";
import Image from "next/image";
import cta1 from "@/assets/cta1.png";
import cta2 from "@/assets/cta2.png";
import cta3 from "@/assets/cta3.png";
import cta4 from "@/assets/cta4.png";
import cta5 from "@/assets/cta5.png";
import cta6 from "@/assets/cta6.png";
import cta7 from "@/assets/cta7.png";

export default function CreatorCTA() {
  return (
    <section className="grid-bg relative overflow-hidden bg-[#1739e8] px-5 py-20 text-center text-white lg:h-[460px] lg:px-0 lg:pb-0 lg:pt-[100px]">
      {/* ---------- Vectors (desktop only, 1440px canvas) ---------- */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block">
        {/* 🔁 REPLACE 1: উপরে বামে lime squiggle */}
        <Image src={cta1} alt="cta" priority className="absolute left-10 top-0 h-[135px] w-[150px] rounded-2xl" />

        {/* 🔁 REPLACE 2: সাদা spiral */}
        <Image src={cta2} alt="cta" priority className="absolute left-[150px] top-[4px] h-[175px] w-[175px] rounded-2xl" />

        {/* 🔁 REPLACE 3: উপরে ডানে lime cone */}
        <Image src={cta5} alt="cta" priority className="absolute left-[1069px] top-[10px] h-[140px] w-[150px] rounded-2xl" />

        {/* 🔁 REPLACE 4: ডানে সাদা cylinder (edge এ কাটা) */}
        <Image src={cta6} alt="cta" priority className="absolute left-[1170px] top-1 h-[370px] w-[240px] rounded-2xl" />

        {/* 🔁 REPLACE 5: বামে নিচে সাদা cone */}
        <Image src={cta3} alt="cta" priority className="absolute left-10 top-[240px] h-[150px] w-[125px] rounded-2xl" />

        {/* 🔁 REPLACE 6: নিচে বামে lime squiggle */}
        <Image src={cta4} alt="cta" priority className="absolute left-[95px] top-[315px] h-[100px] w-[190px] rounded-2xl" />

        {/* 🔁 REPLACE 7: নিচে ডানে lime squiggle */}
        <Image src={cta7} alt="cta" priority className="absolute left-[1080px] top-[250px] h-[230px] w-[280px] rounded-2xl" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative z-10 mx-auto max-w-[960px]">
        <h2 className="text-[32px] font-semibold leading-[1.2] sm:text-4xl lg:text-[44px]">
          Unlock Your Potential as a <br className="hidden sm:block" />
          Creator with ByteSpace
        </h2>
        <p className="mt-6 text-sm leading-[1.7] text-white/90 sm:text-base">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <button className="mt-10 rounded-full bg-[#c8f31d] px-7 py-3 text-sm font-semibold text-[#0b0b2b] transition hover:brightness-95">
          Join as Creator
        </button>
      </div>
    </section>
  );
}