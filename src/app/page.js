import { ChainFeatures } from "@/components/chain-features";
import { Dashboard } from "@/components/dashboard";
import { Welcome } from "@/components/welcome";
import { Benefits } from "@/components/benefits";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <>
      <Welcome />
      <Dashboard />
      <ChainFeatures />
      <Benefits />
      <Footer />
    </>
  );
}