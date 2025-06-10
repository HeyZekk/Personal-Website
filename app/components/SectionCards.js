"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaUtensils, FaCode, FaChartLine } from "react-icons/fa";

const sections = [
  {
    title: "Hey Chef!",
    description: "Tariflerim, restoran projelerim ve şeflik kariyerim.",
    href: "/chef",
    icon: <FaUtensils size={32} className="text-green-400" />,
  },
  {
    title: "Developer Chef!",
    description: "Yazılım projelerim, araçlarım ve kod yolculuğum.",
    href: "/software",
    icon: <FaCode size={32} className="text-green-400" />,
  },
  {
    title: "Trader Chef",
    description: "Finans, yatırım ve trade stratejilerim.",
    href: "/trader",
    icon: <FaChartLine size={32} className="text-green-400" />,
  },
];

export default function SectionCards() {
  return (
    <section className="flex flex-col sm:flex-row gap-6 justify-center items-center py-12">
      {sections.map((section, idx) => (
        <motion.div
          key={section.href}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 * idx, duration: 0.7 }}
          whileHover={{ scale: 1.05, boxShadow: "0 4px 32px #22c55e33" }}
          className="bg-[#232323] rounded-xl p-6 w-72 flex flex-col items-center shadow-lg cursor-pointer hover:bg-[#1a1a1a] transition"
        >
          <div className="mb-3">{section.icon}</div>
          <h3 className="text-xl font-bold text-white mb-2">{section.title}</h3>
          <p className="text-gray-300 text-center mb-4">
            {section.description}
          </p>
          <Link
            href={section.href}
            className="text-green-400 font-semibold hover:underline"
          >
            Keşfet &rarr;
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
