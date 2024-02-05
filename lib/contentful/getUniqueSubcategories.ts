export default async function getUniqueSubcategories(resources: any[]) {
    const allSubcats = resources.flatMap(resource =>
        resource.fields.subcat || []
    );

    const uniqueSubcats = ["All", ...new Set(allSubcats)];

    return uniqueSubcats;
}