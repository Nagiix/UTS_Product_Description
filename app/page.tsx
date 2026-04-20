import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import RailsSection from "@/components/RailsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4ECDF] overflow-x-hidden">
      {/* CONTAINER */}
      <div className="mx-auto w-full max-w-360 px-4">
        {/* GRID */}
        <div className="grid grid-cols-12 gap-4">
          <HeroSection />
          <InfoSection />
          <RailsSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}