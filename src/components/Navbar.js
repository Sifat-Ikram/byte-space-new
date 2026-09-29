"use client";
import { motion } from "framer-motion";
import Logo from "./Logo";
import Image from "next/image";
import bag from "@/assets/bag.png";

const links = ["Home", "Courses", "Creators"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute left-0 top-0 z-30 w-full"
    >
      <nav className="mx-auto flex max-w-300 items-center justify-between px-5 py-6 sm:px-8">
        <Logo />
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-[#CED0D3] text-base font-normal md:flex">
          {links.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
        <div className="flex items-center gap-6 text-base font-normal text-[#CED0D3]">
          <a href="#">
            Sign in
          </a>
          <a href="#">
            Join Us
          </a>
          <Image src={bag} alt="bag" width={16} height={20} />
        </div>
      </nav>
    </motion.header>
  );
}
