import Footer from "@/components/footer";
import Navbar from "@/components/navbar"
import Hero from "@/components/hero";
import Tutorial from "@/components/tutorial";
import FeatureCard from "@/components/featureCard";
import NextStep from "@/components/nextStep";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tutorial />
      <FeatureCard />
      <NextStep />
      <Footer />
    </div>
  );
}
