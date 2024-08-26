import DefaultLayout from "@/layouts/default";
import ImageHead from "@/components/imageHead";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center">
        <ImageHead title="Contributors" backgroundImage="/gallery.png" />
      </section>
    </DefaultLayout>
  );
}
