"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-full overflow-hidden border-4 border-green-500 shadow-lg w-40 h-40 mb-6"
      >
        <Image
          src="/zeki.jpg" // Fotoğrafının adı
          alt="Zeki Mert Dik"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-4xl font-bold text-white mb-2"
      >
        Zekimert Dik
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-lg text-gray-300 text-center max-w-xl"
      >
        Meraklı bir ruh, her alanda parmak izi bırakan,
        <br />
        Değişimi ve gelişimi baştan sona karıştıran.
        <br />
        Sıradanlığa nanik yapan, nevi şahsına münhasır bir işler çeviren,
        <br />
        İşin sırrını çözdüğünde, tebessüm ettiren.
        <br />
      </motion.p>
    </section>
  );
}
