import DefaultLayout from "@/layouts/default";
import ImageHead from "@/components/imageHead";
import Cards from "@/components/cards";

export default function IdeasPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center bg-white-bg text-text">
        <ImageHead title="Ideas" backgroundImage="/gallery.png" />
        <Cards cardstwo={true} title="Upgrade to community decisions making" description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes." image1="/gallery.png" image2="/gallery.png" />
        <Cards cardsthree={true} title="Upgrade to community decisions making" description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes." image1="/gallery.png" image2="/gallery.png" image3="gallery.png" image4="gallery.png" />
        <Cards cardsrow={true} title="Upgrade to community decisions making" description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes." image1="/gallery.png" image2="/gallery.png" image3="gallery.png" />
        <Cards cardsrow={true} title="Upgrade to community decisions making" description="Give the community a say in the direction of your projects. Let their decisions influence project outcomes." image1="/gallery.png" image2="/gallery.png" image3="gallery.png" margin={true} />
        <ImageHead title="Be the first to Wooblay" description="Waitlist to try beta" gradient="linear-gradient(135deg, #f7e4b0, #e7bcf3, #aad1eb)" isFullHeight={true} textBlack={true} button={true} textLarger={true} link="/waitlist" />
      </section>
    </DefaultLayout>
  );
}
