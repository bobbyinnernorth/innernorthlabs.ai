import { notFound } from "next/navigation";
import { getLanding, getAllLandingSlugs } from "@/lib/landings";

export async function generateStaticParams() {
  return getAllLandingSlugs().map((slug) => ({ slug }));
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const landing = getLanding(slug);

  if (!landing) notFound();

  const LandingComponent = (await landing.component()).default;

  return <LandingComponent />;
}
