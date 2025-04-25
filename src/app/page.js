import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/hero/HeroSection";
import FeaturesGrid from "./components/features/FeaturesGrid";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesGrid/>
    </div>
  );
}
