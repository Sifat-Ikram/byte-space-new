"use client";
import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
// import Image from "next/image";

const items = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    text: "I've tried several online learning platforms, but ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-20 lg:pb-[120px] lg:pt-[125px]">
      {/* background glows */}
      <div className="pointer-events-none absolute -right-[100px] -top-[20px] h-[400px] w-[760px] rounded-full bg-[#d4fb20]/50 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-[60px] -left-[120px] h-[380px] w-[460px] rounded-full bg-[#9fb3ff]/40 blur-[110px]" />

      <div className="relative mx-auto max-w-[1180px] px-5">
        <div className="grid items-start gap-6 lg:grid-cols-2">
          <h2 className="text-[32px] font-semibold leading-[1.2] sm:text-4xl lg:pt-8 lg:text-[44px]">
            Discover What Our <br className="hidden sm:block" />
            Community Is Saying
          </h2>
          <p className="max-w-[500px] text-base leading-[1.7] text-gray-600 lg:justify-self-end">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 md:grid-cols-3 lg:mt-[75px] lg:gap-11">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(23,57,232,0.08)]"
            >
              {/* 🔁 REPLACE: avatar photo (গোল) */}
              <Placeholder
                label=""
                className="h-[72px] w-[72px] rounded-full"
              />
              <p className="mt-4 text-xl font-semibold">{t.name}</p>
              <p className="text-[15px] text-[#1739e8]">{t.role}</p>
              <p className="mt-5 text-[15px] leading-[1.7] text-gray-600">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
