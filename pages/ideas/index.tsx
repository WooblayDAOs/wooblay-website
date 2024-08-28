import DefaultLayout from "@/layouts/default";
import ImageHead from "@/components/imageHead";
import Cards from "@/components/cards";

export default function IdeasPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center bg-white-bg text-text">
        <ImageHead title="Ideas" backgroundImage="/gallery.png" />
        <Cards
          cardstwo={true}
          description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes."
          image1="/gallery.png"
          image2="/gallery.png"
          title="Upgrade to community decisions making"
        />
        <Cards
          cardsthree={true}
          description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          image4="gallery.png"
          title="Upgrade to community decisions making"
        />
        <Cards
          cardsrow={true}
          description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          title="Upgrade to community decisions making"
        />
        <Cards
          cardsrow={true}
          description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes."
          image1="/gallery.png"
          image2="/gallery.png"
          image3="gallery.png"
          margin={true}
          title="Upgrade to community decisions making"
        />
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
