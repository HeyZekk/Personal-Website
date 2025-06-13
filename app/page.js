import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ZigzagSections from "./components/ZigzagSections";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Zigzag kutularını kapsayan ana kutu tamamen şeffaf, belirgin border ve yayvan shadow ile */}
      <section className="w-full min-h-[100px] py-16  flex justify-center items-center">
        <div className="relative max-w-5xl w-full rounded-3xl bg-[#232323] border border-[#232323] shadow-[0_8px_40px_0_rgba(34,197,94,0.10)] px-4 sm:px-8 py-12">
          <ZigzagSections />
        </div>
      </section>
    </>
  );
}
