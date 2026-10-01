import Placeholder from "./Placeholder";
import Image from "next/image";
import course2 from "@/assets/course2.png";
import course3 from "@/assets/course3.png";
import happy1 from "@/assets/happy1.png";
import happy3 from "@/assets/happy3.png";
import happy4 from "@/assets/happy4.png";
import happy5 from "@/assets/happy5.png";
import happy6 from "@/assets/happy6.png";
import happy7 from "@/assets/happy7.png";
import happy2 from "@/assets/happy2.png";
import happy8 from "@/assets/happy8.png";
import happy9 from "@/assets/happy9.png";
import happy10 from "@/assets/happy10.png";
import sign1 from "@/assets/sign1.png";
import sign2 from "@/assets/sign2.png";
import sign3 from "@/assets/sign3.png";

const avatarImages = [happy2, happy8, happy9, happy10];

function Avatars({
  count = 3,
  badge = "26K+",
  badgeClass = "bg-black text-white",
}) {
  return (
    <div className="flex items-center">
      {Array.from({ length: count }).map((_, i) => (
        <Image
          key={i}
          src={avatarImages[i % avatarImages.length]}
          alt="User avatar"
          width={32}
          height={32}
          className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0"
        />
      ))}
      <span
        className={`-ml-2 flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-semibold ${badgeClass}`}
      >
        {badge}
      </span>
    </div>
  );
}

function Badges() {
  return (
    <div className="absolute bottom-3 left-3 flex gap-1.5 text-[10px] text-white">
      {["17 Lessons", "2 hours 30 mins", "29 Comments"].map((t) => (
        <span
          key={t}
          className="rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-sm"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export default function AuthShowcase() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden xl:block">
      {/* ---------- Back card (আংশিক ঢাকা) ---------- */}
      <div className="absolute left-[139px] top-[398px] z-0 h-[372px] w-[360px] rounded-2xl bg-white p-3 shadow-xl">
        <div className="relative">
          <Image src={course2} alt="course3" priority className="h-[190px] w-full rounded-xl" />
          <div className="absolute bottom-3 left-3 flex gap-1.5 text-[10px] text-white">
            <span className="rounded-full bg-black/45 px-2.5 py-1">
              17 Lessons
            </span>
          </div>
        </div>
        <p className="mt-4 text-[17px] font-semibold">Build Digital Asset</p>
        <p className="text-xs text-gray-400">
          by <span className="text-[#1739e8]">pixelperf studio</span>
        </p>
        <div className="flex items-center gap-10">
          <span className="mt-3 inline-block rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
            Beginner
          </span>
          <Avatars count={4} />
        </div>
        <p className="mt-3 text-lg font-semibold text-[#1739e8]">
          $25<span className="text-xs font-normal text-gray-400">/Month</span>
        </p>
      </div>

      {/* ---------- Front card ---------- */}
      <div className="absolute left-[252px] top-[325px] z-10 w-[360px] rounded-2xl bg-white p-3 shadow-[0_10px_40px_rgba(0,0,60,0.25)]">
        <div className="relative">
          <Image src={course3} alt="course3" priority className="h-[165px] rounded-xl" />
          <Badges />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-[17px] font-semibold">the Power of Big Data</p>
          <span className="flex items-center gap-1 text-sm text-gray-500">
            4.5 <span className="text-[#D4FB20]">★</span>
          </span>
        </div>
        <p className="text-xs text-gray-400">
          by <span className="text-[#1739e8]">pixelperf studio</span>
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="rounded-lg border border-gray-200 px-2.5 py-1 text-xs text-gray-600">
            Beginner
          </span>
          <Avatars count={4} />
        </div>
        <p className="mt-3 text-lg font-semibold text-[#1739e8]">
          $25<span className="text-xs font-normal text-gray-400">/Month</span>
        </p>
      </div>

      <Image src={sign1} alt="sign1"
        className="absolute left-[180px] top-[355px] z-20 h-[108px] w-[108px] rounded-2xl"
      />
      <Image src={sign2} alt="sign2"
        className="absolute left-[100px] top-[690px] z-20 h-[150px] w-[190px] rounded-2xl"
      />
      <Image src={sign3} alt="sign3"
        className="absolute left-[506px] top-[600px] z-9999 h-[170px] w-[112px] rounded-2xl"
      />

      {/* ---------- Happy Students (lime card) ---------- */}
      <div className="absolute left-[360px] top-[727px] z-30 w-[252px] rounded-2xl bg-[#c8f31d] p-4 text-[#0b0b2b] shadow-xl">
        <p className="text-sm font-semibold">Happy Students</p>
        <p className="mb-2.5 mt-0.5 text-[10px] text-gray-700">
          4.8 <span className="text-gray-500">(240)</span> <span>★</span>
        </p>
        {/* 🔁 REPLACE: avatars গুলো তোমার happy1-7 ছবি দিয়ে */}
        <Avatars count={6} badge="26K+" />
      </div>
    </div>
  );
}
