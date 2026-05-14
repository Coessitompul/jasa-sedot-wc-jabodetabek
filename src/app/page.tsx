import HeroSection from "@/components/home/HeroSection"
import StatsBar from "@/components/home/StatsBar"
import KeunggulanSection from "@/components/home/KeunggulanSection"
import LayananSection from "@/components/home/LayananSection"
import AreaSection from "@/components/home/AreaSection"
import CaraKerjaSection from "@/components/home/CaraKerjaSection"
import TestimoniSection from "@/components/home/TestimoniSection"
import GaleriSection from "@/components/home/GaleriSection"
import LegalitasSection from "@/components/home/LegalitasSection"
import FaqSection from "@/components/home/FaqSection"
import CTABanner from "@/components/home/CTABanner"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <KeunggulanSection />
      <LayananSection />
      <AreaSection />
      <CaraKerjaSection />
      <TestimoniSection />
      <GaleriSection />
      {/* <LegalitasSection /> */}
      <FaqSection />
      <CTABanner />
    </>
  )
}
