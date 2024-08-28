import DefaultLayout from "@/layouts/default";
import Designs from "@/components/designs";
import ImageHead from "@/components/imageHead";
import Show from "@/components/show";
import Intro from "@/components/intro";
import Cursors from "@/components/cursors";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section>
        <Intro />
        <Cursors />
        <ImageHead title="Power the world with your contributions." description="Claim earnings for completing tasks. Be a permanent member of a project you really like and become a stakeholder. Create your idea from scratch and make innovation a reality!" backgroundImage="/people.png" isFullHeight={true} margin={true} rounded={true} />
        <Show />
        <Designs />
        <ImageHead title="Be the first to Wooblay" description="Waitlist to try beta" gradient="linear-gradient(135deg, #f7e4b0, #e7bcf3, #aad1eb)" isFullHeight={true} textBlack={true} button={true} textLarger={true} link="/waitlist" />
      </section>
    </DefaultLayout>
  );
}
