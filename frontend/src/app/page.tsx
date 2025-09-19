import Hero from "@/components/landing/hero";
import Tutorial from "@/components/landing/tutorial";
import FeatureCard from "@/components/landing/featureCard";
import NextStep from "@/components/landing/nextStep";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar variant="default" />
      <Hero />
      <Tutorial />
      <FeatureCard />
      <NextStep />
    </main>
  );
}
