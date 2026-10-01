"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Placeholder from "./Placeholder";
import AuthShowcase from "./AuthShowcase";
import Image from "next/image";
import logo from "@/assets/mainLogo.png";

export default function AuthShell({ title, text, children }) {
  return (
    <main className="grid-bg relative min-h-screen overflow-hidden bg-[#1739e8] text-white">
      {/* 1440px canvas (xl+) / stacked layout (mobile-tablet) */}
      <div className="relative mx-auto flex max-w-[620px] flex-col gap-8 px-5 py-10 xl:mx-0 xl:block xl:h-[1024px] xl:w-[1440px] xl:max-w-none xl:p-0 xl:left-1/2 xl:-translate-x-1/2">
        {/* Logo */}
        <Link href="/" className="xl:absolute xl:left-[141px] xl:top-[46px]">
          <Image src={logo} alt="logo" width={28.88} height={31.5} />
      </Link>

      {/* Left text */}
      <div className="xl:absolute xl:left-[141px] xl:top-[135px] xl:w-[470px]">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-3 text-sm leading-[1.7] text-white/90">{text}</p>
      </div>

      {/* Course cluster (desktop only) */}
      <AuthShowcase />

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full flex-col rounded-[20px] bg-white p-7 text-[#0b0b2b] sm:p-[60px] xl:absolute xl:left-[745px] xl:top-[134px] xl:h-[758px] xl:w-[561px] xl:pb-11"
      >
        {children}
      </motion.div>
    </div>
    </main >
  );
}
