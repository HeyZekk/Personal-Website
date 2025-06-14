"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaUtensils,
  FaCode,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "", href: "/", icon: <FaHome size={20} />, tooltip: "Ana Sayfa" },
  { label: "Chef", href: "/chef", icon: <FaUtensils size={18} /> },
  { label: "Developer", href: "/software", icon: <FaCode size={18} /> },
  { label: "Trader", href: "/trader", icon: <FaChartLine size={18} /> },
  { label: "Hakkımda", href: "/about", icon: <FaUser size={18} /> },
  { label: "İletişim", href: "/contact", icon: <FaEnvelope size={18} /> },
];

function HamburgerIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="w-full bg-[#18181b] text-white shadow-lg sticky top-0 z-50"
      initial={{ opacity: 0, y: -32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <span className="text-xl sm:text-2xl font-bold text-green-500 tracking-tight select-none cursor-pointer transition hover:scale-105">
          Zekimert Dik
        </span>
        <button
          className="sm:hidden flex items-center px-2 py-1 border border-green-500 rounded focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü Aç/Kapat"
        >
          <HamburgerIcon />
        </button>
        <ul
          className={`flex-col sm:flex-row flex items-center gap-2 sm:gap-4 absolute sm:static top-16 left-0 w-full sm:w-auto bg-[#18181b] sm:bg-transparent px-4 sm:px-0 py-4 sm:py-0 shadow-lg sm:shadow-none transition-all duration-300 z-40 ${open ? "flex" : "hidden sm:flex"}`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={item.href}
                  className={`relative flex items-center gap-1 px-3 py-2 rounded-md font-medium transition w-full sm:w-auto
                    ${pathname === item.href ? "bg-green-600 text-white" : "hover:bg-green-900/60 hover:text-green-400"}`}
                  title={item.tooltip || item.label}
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  {item.label && <span className="inline">{item.label}</span>}
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute left-2 right-2 -bottom-1 h-[2px] rounded bg-green-400"
                    initial={false}
                    animate={{
                      opacity: pathname === item.href ? 1 : 0,
                      y: pathname === item.href ? 0 : 4,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
