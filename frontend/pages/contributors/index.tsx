import DefaultLayout from "@/layouts/default";
import ImageHead from "@/components/imageHead";
import Cards from "@/components/cards";

export default function ContributorsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center bg-white-bg text-text">
        <ImageHead title="Contributors" backgroundImage="/gallery.png" />
        <Cards cardssquare={true} title="Participate in voting and governance." description="Have a say in the direction of the projects you care about. Influence key decisions and project outcomes." image1="/gallery.png" image2="/gallery.png" image3="gallery.png" image4="gallery.png" />
        <Cards cardsrow={true} title="Access a fully integrated repository." description="Utilise automated tracking and version control to keep your projects organised and on track for all your project assets." image1="/gallery.png" image2="/gallery.png" image3="gallery.png" />
        <Cards cardsrow={true} title="Participate in voting and governance." description="Have a say in the direction of the projects you care about. Influence key decisions and project outcomes." image1="/gallery.png" image2="/gallery.png" image3="gallery.png" margin={true} />
        <ImageHead title="Be the first to Wooblay" description="Waitlist to try beta" gradient="linear-gradient(135deg, #f7e4b0, #e7bcf3, #aad1eb)" isFullHeight={true} textBlack={true} button={true} textLarger={true} link="/waitlist" />
      </section>
    </DefaultLayout>
  );
}
