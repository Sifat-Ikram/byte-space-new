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
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />
        <ul className="hidden items-center gap-8 text-xs text-white md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href="#" className="hover:text-[#c8f31d]">
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5 text-xs text-white">
          <a href="#">Sign in</a>
          <a href="#">Join Us</a>
          <FiShoppingBag />
        </div>
      </nav>
    </motion.header>
  );
}
