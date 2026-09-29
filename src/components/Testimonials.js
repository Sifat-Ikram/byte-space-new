"use client";
import { motion } from "framer-motion";
import Placeholder from "./Placeholder";

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
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[520px] rounded-full bg-[#d6f74f]/40 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#9db0ff]/30 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-[44px]">
            Discover What Our <br /> Community Is Saying
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl bg-white p-7 shadow-[0_8px_30px_rgba(23,57,232,0.08)] ${
                i === 1 ? "md:mt-8" : ""
              }`}
            >
              <Placeholder label="" className="h-14 w-14 rounded-full" />
              <p className="mt-5 text-lg font-semibold">{t.name}</p>
              <p className="text-sm text-[#1739e8]">{t.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
