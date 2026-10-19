import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FeaturedWork } from "@/components/featured-work";
import { HowIWork } from "@/components/how-i-work";
import { Experience } from "@/components/experience";
import { TechStack } from "@/components/tech-stack";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <HowIWork />
        <Experience />
        <TechStack />
      </main>
      <Footer />
    </>
  );
}
