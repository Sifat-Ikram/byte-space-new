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
    <section className="relative bg-gradient-to-b from-white to-[#f4f6ff] py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold leading-snug">
            Discover What Our <br /> Community Is Saying
          </h2>
          <p className="text-[10px] leading-relaxed text-gray-500">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl bg-white p-5 shadow-sm ${i === 1 ? "md:mt-6" : ""}`}
            >
              <Placeholder label="" className="h-9 w-9 rounded-full" />
              <p className="mt-3 text-sm font-semibold">{t.name}</p>
              <p className="text-[10px] text-[#1739e8]">{t.role}</p>
              <p className="mt-3 text-[10px] leading-relaxed text-gray-500">
                &ldquo;{t.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
