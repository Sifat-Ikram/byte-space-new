import Placeholder from "./Placeholder";
// import Image from "next/image";

export default function CreatorCTA() {
  return (
    <section className="grid-bg relative overflow-hidden bg-[#1739e8] px-5 py-20 text-center text-white lg:h-[460px] lg:px-0 lg:pb-0 lg:pt-[100px]">
      {/* ---------- Vectors (desktop only, 1440px canvas) ---------- */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 lg:block">
        {/* 🔁 REPLACE 1: উপরে বামে lime squiggle */}
        <Placeholder label="Vector 1 (lime squiggle)" className="absolute left-0 top-[10px] h-[135px] w-[150px] rounded-2xl" />

        {/* 🔁 REPLACE 2: সাদা spiral */}
        <Placeholder label="Vector 2 (white spiral)" className="absolute left-[230px] top-[40px] h-[85px] w-[80px] rounded-2xl" />

        {/* 🔁 REPLACE 3: উপরে ডানে lime cone */}
        <Placeholder label="Vector 3 (lime cone)" className="absolute left-[1069px] top-[10px] h-[140px] w-[150px] rounded-2xl" />

        {/* 🔁 REPLACE 4: ডানে সাদা cylinder (edge এ কাটা) */}
        <Placeholder label="Vector 4 (white cylinder)" className="absolute left-[1310px] top-[110px] h-[240px] w-[150px] rounded-2xl" />

        {/* 🔁 REPLACE 5: বামে নিচে সাদা cone */}
        <Placeholder label="Vector 5 (white cone)" className="absolute left-0 top-[240px] h-[150px] w-[125px] rounded-2xl" />

        {/* 🔁 REPLACE 6: নিচে বামে lime squiggle */}
        <Placeholder label="Vector 6 (lime squiggle)" className="absolute left-[305px] top-[335px] h-[110px] w-[130px] rounded-2xl" />

        {/* 🔁 REPLACE 7: নিচে ডানে lime squiggle */}
        <Placeholder label="Vector 7 (lime squiggle)" className="absolute left-[1196px] top-[315px] h-[125px] w-[140px] rounded-2xl" />
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