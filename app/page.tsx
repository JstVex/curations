import CardsContainer from "@/components/card/cards-container";
import Main from "@/components/layout";
import Subcategories from "@/components/ui/subcategories";
import TitleSection from "@/components/ui/title-section";

export default function Home() {
  return (
    <Main>
      <TitleSection title="web developers, designers and programmers" />
      <Subcategories />
      <CardsContainer />
    </Main>
  );
}
