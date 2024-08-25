import DefaultLayout from "@/layouts/default";
import ImageHead from "@/components/imageHead";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <ImageHead title="Contributors" />
      </section>
    </DefaultLayout>
  );
}
