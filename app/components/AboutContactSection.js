"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const aboutTags = ["Yazılım", "Şeflik", "Finans", "Yaratıcılık", "Açık Kaynak"];
const contactLinks = [
  {
    href: "mailto:zekimertdik@gmail.com",
    label: "zekimertdik@gmail.com",
    icon: <FaEnvelope />,
    hover: "hover:text-green-400",
    color: "#22c55e",
  },
  {
    href: "https://linkedin.com/in/zekimertdik",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    hover: "hover:text-blue-400",
    color: "#60a5fa",
  },
  {
    href: "https://instagram.com/zekimertdik",
    label: "Instagram",
    icon: <FaInstagram />,
    hover: "hover:text-pink-400",
    color: "#f472b6",
  },
  {
    href: "https://github.com/zekimertdik",
    label: "GitHub",
    icon: <FaGithub />,
    hover: "hover:text-gray-100",
    color: "#fff",
  },
];

export default function AboutContactSection() {
  return (
    <section className="w-full flex justify-center py-12 px-2 sm:px-0">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 8px 32px 0 rgba(34,197,94,0.10)",
        }}
        className="w-full max-w-4xl bg-[#18181b] border border-gray-800/60 shadow-xl rounded-3xl p-0 flex flex-col md:flex-row overflow-hidden"
      >
        {/* Sol: Fotoğraf ve iletişim */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          <div className="mb-6 flex flex-col items-center">
            <img
              src="/zeki.jpg"
              alt="Zeki Mert Dik"
              className="w-24 h-24 rounded-full border-2 border-green-500 shadow mb-3"
            />
            <div className="flex flex-col gap-3 w-full items-center">
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 text-gray-200 ${link.hover} font-medium transition group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.span
                    whileHover={{ scale: 1.2, color: link.color }}
                    className="text-lg"
                  >
                    {link.icon}
                  </motion.span>
                  <span className="underline underline-offset-2">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* Orta: Dikey çizgi */}
        <div className="hidden md:block w-px bg-gray-700/40 my-8" />
        {/* Sağ: Hakkımda */}
        <div className="flex-1 flex flex-col justify-center px-6 py-8">
          <h2 className="text-2xl font-bold text-green-400 mb-3">Hakkımda</h2>
          <p className="text-gray-200 mb-4 text-base">
            Merhaba! Ben Zeki Mert Dik. Şeflik, yazılım ve finans dünyasında
            disiplinler arası bir yolculuğa çıktım. Yaratıcı projeler, açık
            kaynak katkıları ve yatırım stratejileriyle ilgileniyorum.
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {aboutTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-green-900/30 text-green-300 text-xs font-semibold border border-green-700/40"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
