import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { Collection } from "@/components/sections/Collection";
import { Craft } from "@/components/sections/Craft";
import { Experience } from "@/components/sections/Experience";
import { Technology } from "@/components/sections/Technology";
import { Gallery } from "@/components/sections/Gallery";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Collection />
      <Craft />
      <Experience />
      <Technology />
      <Gallery />
      <FinalCTA />
    </>
  );
}
