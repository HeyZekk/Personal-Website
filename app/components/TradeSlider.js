import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: "rr-table",
    title: "Aylık Risk/Reward Performans",
    content: (
      <div className="w-full overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-yellow-500/30">
              <th className="py-2 px-3 text-left text-yellow-200">Ay</th>
              <th className="py-2 px-3 text-right text-yellow-200">R/R</th>
              <th className="py-2 px-3 text-right text-yellow-200">Kazanç</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5">
              <td className="py-2 px-3 text-yellow-100">Mart 2024</td>
              <td className="py-2 px-3 text-right text-green-400">1:3.2</td>
              <td className="py-2 px-3 text-right text-green-400">+12.8%</td>
            </tr>
            <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5">
              <td className="py-2 px-3 text-yellow-100">Şubat 2024</td>
              <td className="py-2 px-3 text-right text-green-400">1:2.8</td>
              <td className="py-2 px-3 text-right text-green-400">+8.4%</td>
            </tr>
            <tr className="border-b border-yellow-500/10 hover:bg-yellow-500/5">
              <td className="py-2 px-3 text-yellow-100">Ocak 2024</td>
              <td className="py-2 px-3 text-right text-red-400">1:0.8</td>
              <td className="py-2 px-3 text-right text-red-400">-2.4%</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: "portfolio",
    title: "Portföy Dağılımı",
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <div className="w-full grid grid-cols-2 gap-3">
          <div className="bg-yellow-500/10 rounded-lg p-4">
            <div className="text-yellow-200 text-sm mb-1">Hisse Senetleri</div>
            <div className="text-2xl font-bold text-yellow-400">40%</div>
          </div>
          <div className="bg-yellow-500/10 rounded-lg p-4">
            <div className="text-yellow-200 text-sm mb-1">Kripto</div>
            <div className="text-2xl font-bold text-yellow-400">30%</div>
          </div>
          <div className="bg-yellow-500/10 rounded-lg p-4">
            <div className="text-yellow-200 text-sm mb-1">Emtia</div>
            <div className="text-2xl font-bold text-yellow-400">20%</div>
          </div>
          <div className="bg-yellow-500/10 rounded-lg p-4">
            <div className="text-yellow-200 text-sm mb-1">Nakit</div>
            <div className="text-2xl font-bold text-yellow-400">10%</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TradeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[260px] flex flex-col justify-between relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentIndex].id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full flex-1 flex flex-col"
        >
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-base font-semibold text-yellow-300 mb-4 text-center">
              {slides[currentIndex].title}
            </h3>
            {slides[currentIndex].content}
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="w-full flex justify-center items-center mt-4 absolute left-0 bottom-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
              idx === currentIndex
                ? "bg-yellow-400 scale-110"
                : "bg-yellow-500/30 hover:bg-yellow-500/50"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
