import DefaultLayout from "@/layouts/default";
import Intro from "@/components/intro";
import Walkthrough from "@/components/walkthrough";
import Mission from "@/components/mission";
import FeaturesGrid from "@/components/features-grid";
import GoatedTerminal from "@/components/goated-terminal";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section>
        <Intro />
        <Walkthrough />
        <FeaturesGrid />
        <Mission />
        <div>
          <GoatedTerminal />
        </div>
      </section>
    </DefaultLayout>
  );
}
