import DefaultLayout from "@/layouts/default";
import ImageHead from "@/components/imageHead";
import Cards from "@/components/cards";

export default function IdeasPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center bg-white-bg text-text">
        <ImageHead backgroundImage="/gallery.png" title="Ideas" />
        <Cards
          cardstwo={true}
          description="Define your goals, assemble your team, and organise tasks effortlessly in a transparent and automated environment."
          image1="/gallery.png"
          image2="/gallery.png"
          title="Launch your projects within a few clicks."
        />
        <Cards
          cardsthree={true}
          description="Share ideas, collaborate on tasks, and work together to turn concepts into reality."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          image4="gallery.png"
          title="Innovate with a vibrant community."
        />
        <Cards
          cardsrow={true}
          description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          title="Upgrade to community decisions making."
        />
        <div className="mb-16" />
        <ImageHead
          button={true}
          description="Waitlist to try beta"
          gradient="linear-gradient(135deg, #f7e4b0, #e7bcf3, #aad1eb)"
          isFullHeight={true}
          link="/waitlist"
          textBlack={true}
          textLarger={true}
          title="Be the first to Wooblay"
        />
      </section>
    </DefaultLayout>
  );
}
