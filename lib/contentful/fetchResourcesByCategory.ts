export default async function fetchResourcesByCategory(category: string) {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries?access_token=${accessToken}&content_type=resource&fields.category=${category}&include=5`;
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