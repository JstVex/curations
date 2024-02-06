import { client } from "./client";

export default async function fetchResourcesByCategory(category: string) {
    try {
        const res = await client.getEntries({
            content_type: "resource",
            "fields.category": category,
        });
        return res.items;
    } catch (error) {
        console.error("Error fetching data from Contentful:", error);
        return [];
    }
}