import Main from "@/components/layout";
import SubcatClient from "@/components/ui/subcat-client";
import TitleSection from "@/components/ui/title-section";
import fetchResourcesByCategory from "@/lib/contentful/fetchResourcesByCategory";
import getUniqueSubcategories from "@/lib/contentful/getUniqueSubcategories";

export default async function Web() {
    const resources = await fetchResourcesByCategory("Web");
    const uniqueSubcats = await getUniqueSubcategories(resources);

    return (
        <Main>
            <TitleSection title="web developers" />
            <SubcatClient initialResources={resources} subcategories={uniqueSubcats} />
        </Main>
    );
}
