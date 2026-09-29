"use client";
import { motion } from "framer-motion";
import { FiShoppingBag } from "react-icons/fi";
import Logo from "./Logo";

const links = ["Home", "Courses", "Creators"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute left-0 top-0 z-30 w-full"
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6 sm:px-8">
        <Logo />
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 text-sm font-medium text-white md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="transition hover:text-[#c8f31d]">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6 text-sm font-medium text-white">
          <a href="#" className="hover:text-[#c8f31d]">
            Sign in
          </a>
          <a href="#" className="hover:text-[#c8f31d]">
            Join Us
          </a>
          <FiShoppingBag size={18} />
        </div>
      </nav>
    </motion.header>
  );
}
