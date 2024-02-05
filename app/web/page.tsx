import Main from "@/components/layout";
import SubcatClient from "@/components/ui/subcat-client";
import TitleSection from "@/components/ui/title-section";

async function fetchResourcesByCategory() {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=resource&fields.category=Web&include=5`;
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

async function getUniqueSubcategories(resources: any[]) {
    const allSubcats = resources.flatMap(resource =>
        resource.fields.subcat || []
    );

    const uniqueSubcats = ["All", ...new Set(allSubcats)];

    return uniqueSubcats;
}


export default async function Web() {
    const resources = await fetchResourcesByCategory();
    const uniqueSubcats = await getUniqueSubcategories(resources);

    return (
        <Main>
            <TitleSection title="web developers" />
            <SubcatClient initialResources={resources} subcategories={uniqueSubcats} />
        </Main>
    );
}
