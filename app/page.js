import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ZigzagSections from "./components/ZigzagSections";
import AboutContactSection from "./components/AboutContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Zigzag kutularını kapsayan ana kutu tamamen şeffaf, belirgin border ve yayvan shadow ile */}
      <section className="w-full min-h-[100px] py-8 sm:py-12 flex justify-center items-center">
        <div className="relative w-full max-w-screen-lg rounded-3xl bg-[#232323] border border-[#232323] shadow-[0_8px_40px_0_rgba(34,197,94,0.10)] px-2 sm:px-4 md:px-8 py-6 sm:py-12 mx-2">
          <ZigzagSections />
        </div>
      </section>
      <AboutContactSection />
      <Footer />
    </>
  );
}
