"use client";
import { useEffect, useRef } from "react";

const NEON_COLOR = "#064e3b";

export default function BackgroundVector() {
  const svgRef = useRef(null);

  // Başlangıç animasyonu
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll("path");
    paths.forEach((path, i) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.style.animation = `neon-draw 2.5s ${i * 0.07}s cubic-bezier(0.4,0,0.2,1) forwards`;
      path.style.stroke = NEON_COLOR;
      path.style.strokeWidth = 2.5;
      path.style.strokeLinejoin = "bevel";
      path.style.fill = "none";
      path.style.filter = `drop-shadow(0 0 10px ${NEON_COLOR})`;
    });
  }, []);

  // Mouse interaktivitesi
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll("path");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      paths.forEach((path) => {
        const bbox = path.getBBox();
        const dx = bbox.x + bbox.width / 2 - clientX;
        const dy = bbox.y + bbox.height / 2 - clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const glow = Math.max(10, 60 - dist / 10);
        path.style.filter = `drop-shadow(0 0 ${glow}px ${NEON_COLOR})`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll interaktivitesi
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const paths = svg.querySelectorAll("path");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const glow = 10 + (scrollY / window.innerHeight) * 40;
      paths.forEach((path) => {
        path.style.filter = `drop-shadow(0 0 ${glow}px ${NEON_COLOR})`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes neon-draw {
            to {
              stroke-dashoffset: 0;
              filter: drop-shadow(0 0 18px ${NEON_COLOR});
            }
          }
        `}
      </style>
      <div className="fixed inset-0 w-full h-full -z-40 pointer-events-none">
        <svg
          ref={svgRef}
          viewBox="0 0 900 600"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block" }}
        >
          <g>
            <path d="M485 281L474 383L525.5 303Z" />
            <path d="M574.5 214L416 210L485 281Z" />
            <path d="M485 281L312.5 311L474 383Z" />
            <path d="M474 383L596.5 417L525.5 303Z" />
            <path d="M648 263L574.5 214L525.5 303Z" />
            <path d="M525.5 303L574.5 214L485 281Z" />
            <path d="M416 210L312.5 311L485 281Z" />
            <path d="M354.5 511L478 508L474 383Z" />
            <path d="M474 383L478 508L596.5 417Z" />
            <path d="M596.5 417L648 263L525.5 303Z" />
            <path d="M312.5 311L310.5 402L474 383Z" />
            <path d="M478 508L581.5 500L596.5 417Z" />
            <path d="M690 365L669 236L648 263Z" />
            <path d="M690 365L648 263L596.5 417Z" />
            <path d="M648 263L669 236L574.5 214Z" />
            <path d="M706 537L690 365L596.5 417Z" />
            <path d="M310.5 402L354.5 511L474 383Z" />
            <path d="M310.5 182L255 318L312.5 311Z" />
            <path d="M312.5 311L255 318L310.5 402Z" />
            <path d="M310.5 402L249 463L354.5 511Z" />
            <path d="M416 210L310.5 182L312.5 311Z" />
            <path d="M328.5 86L310.5 182L416 210Z" />
            <path d="M599.5 96L455 80L574.5 214Z" />
            <path d="M574.5 214L455 80L416 210Z" />
            <path d="M669 236L599.5 96L574.5 214Z" />
            <path d="M215 378L249 463L310.5 402Z" />
            <path d="M354.5 600L464 600L354.5 511Z" />
            <path d="M354.5 511L464 600L478 508Z" />
            <path d="M478 508L598.5 600L581.5 500Z" />
            <path d="M255 318L215 378L310.5 402Z" />
            <path d="M121.5 372L215 378L255 318Z" />
            <path d="M328.5 86L261 172L310.5 182Z" />
            <path d="M310.5 182L261 172L255 318Z" />
            <path d="M455 80L328.5 86L416 210Z" />
            <path d="M464 600L598.5 600L478 508Z" />
            <path d="M581.5 500L706 537L596.5 417Z" />
            <path d="M202 600L354.5 600L354.5 511Z" />
            <path d="M598.5 600L706 537L581.5 500Z" />
            <path d="M816.5 286L765.5 210L669 236Z" />
            <path d="M669 236L673 68L599.5 96Z" />
            <path d="M816.5 286L669 236L690 365Z" />
            <path d="M765.5 210L673 68L669 236Z" />
            <path d="M565.5 0L448 0L455 80Z" />
            <path d="M455 80L344.5 0L328.5 86Z" />
            <path d="M706 537L774.5 489L690 365Z" />
            <path d="M598.5 600L683 600L706 537Z" />
            <path d="M706 537L760.5 600L774.5 489Z" />
            <path d="M565.5 0L455 80L599.5 96Z" />
            <path d="M817.5 389L816.5 286L690 365Z" />
            <path d="M766.5 63L681 0L673 68Z" />
            <path d="M774.5 489L817.5 389L690 365Z" />
            <path d="M673 68L565.5 0L599.5 96Z" />
            <path d="M231 0L232 77L328.5 86Z" />
            <path d="M328.5 86L232 77L261 172Z" />
            <path d="M75.5 288L121.5 372L255 318Z" />
            <path d="M448 0L344.5 0L455 80Z" />
            <path d="M215 378L131.5 518L249 463Z" />
            <path d="M249 463L202 600L354.5 511Z" />
            <path d="M75.5 288L255 318L93.5 188Z" />
            <path d="M683 600L760.5 600L706 537Z" />
            <path d="M774.5 489L900 436L817.5 389Z" />
            <path d="M766.5 63L673 68L765.5 210Z" />
            <path d="M673 68L681 0L565.5 0Z" />
            <path d="M131.5 518L202 600L249 463Z" />
            <path d="M900 131L766.5 63L765.5 210Z" />
            <path d="M121.5 372L131.5 518L215 378Z" />
            <path d="M93.5 188L255 318L261 172Z" />
            <path d="M121.5 372L0 398L131.5 518Z" />
            <path d="M232 77L93.5 188L261 172Z" />
            <path d="M344.5 0L231 0L328.5 86Z" />
            <path d="M232 77L84.5 68L93.5 188Z" />
            <path d="M817.5 389L900 290L816.5 286Z" />
            <path d="M816.5 286L900 196L765.5 210Z" />
            <path d="M900 436L900 290L817.5 389Z" />
            <path d="M900 527L900 436L774.5 489Z" />
            <path d="M766.5 63L762.5 0L681 0Z" />
            <path d="M900 0L762.5 0L766.5 63Z" />
            <path d="M900 290L900 196L816.5 286Z" />
            <path d="M760.5 600L900 600L900 527Z" />
            <path d="M0 129L93.5 188L84.5 68Z" />
            <path d="M0 129L0 203L93.5 188Z" />
            <path d="M0 398L0 534L131.5 518Z" />
            <path d="M0 0L0 129L84.5 68Z" />
            <path d="M900 131L900 0L766.5 63Z" />
            <path d="M0 534L0 600L105.5 600Z" />
            <path d="M121.5 0L0 0L84.5 68Z" />
          </g>
        </svg>
      </div>
    </>
  );
}
