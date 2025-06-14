"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionCards from "./SectionCards";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const isDesktop = useIsDesktop();
  return (
    <motion.section
      className="flex flex-col items-center justify-center py-10 sm:py-16 text-center w-full px-2 sm:px-0 min-h-[180px] sm:min-h-[300px] mt-8 sm:mt-16 z-10 overflow-visible"
      {...(isDesktop
        ? {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: false, amount: 0.1 },
            transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
          }
        : {})}
      style={!isDesktop ? { opacity: 1, transform: "none" } : undefined}
    >
      <div className="rounded-full overflow-hidden border-4 border-green-500 shadow-lg w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-6 transition-all duration-300">
        <Image
          src="/zeki.jpg"
          alt="Zeki Mert Dik"
          width={256}
          height={256}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">
        Çok Disiplinli Bir Yaratıcı: Şef, Yazılımcı, Trader
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mb-8">
        Yemek, yazılım ve finans dünyasında sınırları zorlayan bir yolculuk.
      </p>
      <SectionCards />
    </motion.section>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isDesktop;
}
