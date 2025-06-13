"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionCards from "./SectionCards";

export default function HeroSection() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center py-16 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="rounded-full overflow-hidden border-4 border-green-500 shadow-lg w-36 h-36 mb-6">
        <Image
          src="/zeki.jpg"
          alt="Zeki Mert Dik"
          width={144}
          height={144}
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
