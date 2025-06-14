"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TradeSlider from "./TradeSlider";

const sections = [
  {
    title: "Şeflik Yolculuğu",
    description:
      "Yaratıcı tarifler, mutfak sırları ve restoran projelerimle tanış. Lezzetli bir keşfe çık!",
    cta: "Chef Bölümüne Git",
    href: "/chef",
    component: <Timeline />,
    border: "from-green-500 via-green-400 to-green-700",
  },
  {
    title: "Yazılım Tutkusu",
    description:
      "Modern web projeleri, açık kaynak katkıları ve kod dünyasındaki yolculuğum. Dijital üretkenliğe göz at!",
    cta: "Developer Bölümüne Git",
    href: "/software",
    component: <SoftwareProjects />,
    border: "from-sky-500 via-sky-400 to-sky-700",
  },
  {
    title: "Finans ve Trade",
    description:
      "Piyasa analizleri, yatırım stratejileri ve finansal araçlar. Akıllı yatırımın kapılarını arala!",
    cta: "Trader Bölümüne Git",
    href: "/trader",
    component: <TradeSlider />,
    border: "from-yellow-400 via-yellow-300 to-yellow-600",
  },
];

export default function ZigzagSections() {
  return (
    <div className="py-12 space-y-24 max-w-7xl mx-auto px-4">
      {sections.map((section, idx) => (
        <div
          key={section.title}
          className={`flex flex-col ${
            idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } gap-8 md:gap-16 items-center justify-between`}
        >
          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {section.title}
            </h2>
            <p className="text-gray-300 mb-6 text-lg">{section.description}</p>
            <Link
              href={section.href}
              className={`inline-flex items-center px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 bg-gradient-to-r ${section.border} hover:scale-105 hover:shadow-lg`}
            >
              {section.cta}
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 w-full flex items-center justify-center"
          >
            <div className="w-full max-w-md min-h-[340px] rounded-3xl overflow-hidden bg-[#18181b] border border-gray-800/60 shadow-xl p-6 flex items-center justify-center relative">
              <div className="w-full h-full flex items-center justify-center">
                {section.component}
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// Timeline ve SoftwareProjects fonksiyonları aşağıda
const chefTimeline = [
  "Od Urla",
  "Anhinga by OD",
  "Fifa World Cup Qatar",
  "The Jane Antwerp",
  "Six Senses Kaplankaya",
];

function Timeline() {
  const reversedTimeline = [...chefTimeline].reverse();
  return (
    <div className="flex flex-col items-start w-full max-w-md mx-auto py-2 min-h-[260px] justify-center">
      {reversedTimeline.map((place, idx) => (
        <div key={place} className="flex items-center group w-full mb-3">
          <div className="flex flex-col items-center">
            <div
              className={`w-4 h-4 rounded-full border-2 relative transition-all duration-300
                ${
                  idx === 0
                    ? "border-green-400 bg-green-500 shadow-[0_0_12px_2px_rgba(34,197,94,0.7)]"
                    : "border-gray-500 bg-[#18181b] shadow-[0_0_8px_1px_rgba(100,116,139,0.3)]"
                }
                group-hover:border-green-400`}
            />
            {idx < reversedTimeline.length - 1 && (
              <div className="w-1 h-8 bg-gradient-to-b from-green-400/80 to-gray-700/40" />
            )}
          </div>
          <div className="ml-4 py-2 flex items-center gap-2 flex-wrap">
            <span className="text-white text-base font-semibold group-hover:text-green-400 transition-all duration-300">
              {place}
            </span>
            {place === "Od Urla" && (
              <>
                <img
                  src="/MichelinStar.svg.png"
                  alt="Michelin Star"
                  className="w-5 h-5 inline-block"
                />
                <img
                  src="/MichelinGreenStar.svg.png"
                  alt="Michelin Green Star"
                  className="w-5 h-5 inline-block"
                />
              </>
            )}
            {place === "The Jane Antwerp" && (
              <>
                <img
                  src="/MichelinStar.svg.png"
                  alt="Michelin Star"
                  className="w-5 h-5 inline-block"
                />
                <img
                  src="/MichelinStar.svg.png"
                  alt="Michelin Star"
                  className="w-5 h-5 inline-block"
                />
                <img
                  src="/50best.png"
                  alt="50 Best"
                  className="w-6 h-6 inline-block ml-1"
                />
                <span className="ml-1 px-2 py-0.5 rounded-full bg-yellow-900/80 text-yellow-300 text-xs font-semibold border border-yellow-700">
                  Top 50 Restoran #23
                </span>
                <span className="ml-1 px-2 py-0.5 rounded-full bg-sky-900/80 text-sky-200 text-xs font-semibold border border-sky-700">
                  23. Sıra
                </span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function SoftwareProjects() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto min-h-[260px] justify-center">
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px 0 rgba(34,197,94,0.18)",
        }}
        className="relative overflow-hidden bg-[#18181b] border border-green-400/40 shadow-lg px-5 py-4 flex flex-col items-start rounded-2xl transition-all duration-300 group w-full cursor-pointer"
      >
        <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-green-900/40 via-green-500/10 to-transparent" />
        <span className="mb-2 px-3 py-1 rounded-full text-xs font-semibold z-10 bg-gradient-to-r from-green-500 via-green-400 to-green-600 text-white shadow">
          Geliştiriliyor
        </span>
        <h3 className="text-lg font-bold text-white z-10 mt-1 drop-shadow-lg">
          Chef's Toolkit
        </h3>
        <p className="text-green-200 z-10 mt-1 text-sm font-medium drop-shadow-sm">
          Şefler için modern mutfak araçları ve üretkenlik çözümleri.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 8px 32px 0 rgba(253,224,71,0.18)",
        }}
        className="relative overflow-hidden bg-[#18181b] border border-yellow-300/40 shadow-lg px-5 py-4 flex flex-col items-start rounded-2xl transition-all duration-300 group w-full cursor-pointer"
      >
        <span className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-gradient-to-br from-yellow-900/40 via-yellow-400/10 to-transparent" />
        <span className="mb-2 px-3 py-1 rounded-full text-xs font-semibold z-10 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-yellow-900 shadow">
          Sıradaki proje
        </span>
        <h3 className="text-lg font-bold text-yellow-100 z-10 mt-1 drop-shadow-lg">
          Landing Page for Client
        </h3>
        <p className="text-yellow-200 z-10 mt-1 text-sm font-medium drop-shadow-sm">
          Müşteri için modern, hızlı ve etkili bir tanıtım sayfası.
        </p>
      </motion.div>
    </div>
  );
}
