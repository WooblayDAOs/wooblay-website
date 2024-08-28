import DefaultLayout from "@/layouts/default";
import ImageHead from "@/components/imageHead";
import Cards from "@/components/cards";

export default function ContributorsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center bg-white-bg text-text">
        <ImageHead backgroundImage="/gallery.png" title="Contributors" />
        <Cards
          cardssquare={true}
          description="Have a say in the direction of the projects you care about. Influence key decisions and project outcomes."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          image4="gallery.png"
          title="Participate in voting and governance."
        />
        <Cards
          cardsrow={true}
          description="Utilise automated tracking and version control to keep your projects organised and on track for all your project assets."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          title="Access a fully integrated repository."
        />
        <Cards
          cardsrow={true}
          description="Have a say in the direction of the projects you care about. Influence key decisions and project outcomes."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          margin={true}
          title="Participate in voting and governance."
        />
        <ImageHead
          description="Waitlist to try beta"
          gradient="linear-gradient(135deg, #f7e4b0, #e7bcf3, #aad1eb)"
          isFullHeight={true}
          link="/waitlist"
          textBlack={true}
          button={true}
          textLarger={true}
          title="Be the first to Wooblay"
        />
      </section>
    </DefaultLayout>
  );
}
