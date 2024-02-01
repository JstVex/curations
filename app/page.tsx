import CardsContainer from "@/components/card/cards-container";
import Main from "@/components/layout";
import Subcategories from "@/components/ui/subcategories";
import TitleSection from "@/components/ui/title-section";
import { client } from "@/lib/contentful/client";

async function fetchResources() {
  const res = await client.getEntries({
    content_type: "resource"
  });

  return res.items;
}

export default async function Home() {
  const resources = await fetchResources();

  return (
    <Main>
      <TitleSection title="web developers, designers and programmers" />
      <Subcategories />
      <CardsContainer resources={resources} />
    </Main>
  );
}
