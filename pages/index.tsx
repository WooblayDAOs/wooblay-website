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
        <ImageHead
          title="Your Contributions."
          description="Earn rewards for completing tasks. Join projects that interest you or bring your own ideas to life and turn innovation into reality."
          backgroundImage="/people.png"
          isFullHeight={true}
          margin={true}
          rounded={true}
        />
        <Show />
        <Designs />
        <ImageHead
          title="Be the first to Wooblay"
          description="Waitlist to try beta"
          gradient="linear-gradient(135deg, #f7e4b0, #e7bcf3, #aad1eb)"
          isFullHeight={true}
          textBlack={true}
          button={true}
          textLarger={true}
          link="/waitlist"
        />
      </section>
    </DefaultLayout>
  );
}
