import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { StatsCounters } from "@/components/sections/StatsCounters";
import { Products } from "@/components/sections/Products";
import { LightsOut } from "@/components/sections/LightsOut";
import { Industries } from "@/components/sections/Industries";
import { TechPreview } from "@/components/sections/TechPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ClientLogoWall } from "@/components/sections/ClientLogoWall";
import { ContactForm } from "@/components/sections/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounters />
      <Capabilities />
      <Products />
      <LightsOut />
      <Industries />
      <TechPreview />
      <ClientLogoWall />
      <AboutPreview />
      <ContactForm />
    </>
  );
}
