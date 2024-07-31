import { ChainFeatures } from "@/components/chain-features";
import { Dashboard } from "@/components/dashboard";
import { Welcome } from "@/components/welcome";
import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { Community } from "@/components/community";

export default function Home() {
  return (
    <>
      <Welcome />
      <Dashboard />
      <Projects />
      <Community />
      <ChainFeatures />
      <Benefits />
      <Footer />
    </>
  );
}