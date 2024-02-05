import CardsContainer from "@/components/card/cards-container";
import Main from "@/components/layout";
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
  console.log("Resources:", resources);

  return (
    <Main>
      <TitleSection title="web developers, designers and programmers" />
      <CardsContainer resources={resources} />
    </Main>
  );
}
