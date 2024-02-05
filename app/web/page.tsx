import CardsContainer from "@/components/card/cards-container";
import Main from "@/components/layout";
import Subcategories from "@/components/ui/subcategories";
import TitleSection from "@/components/ui/title-section";

async function fetchResourcesByCategory() {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=resource&fields.category=Web&include=2`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Error fetching data from Contentful:", error);
        return [];
    }
}

export default async function Web() {
    const resources = await fetchResourcesByCategory();

    return (
        <Main>
            <TitleSection title="web developers" />
            <Subcategories />
            <CardsContainer resources={resources} />
        </Main>
    );
}
