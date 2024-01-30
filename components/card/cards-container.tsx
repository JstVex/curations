import Card from "./card";

const resources = [
    {
        title: "Shadcn",
        description: "Modern UI library built on top of TailwindCSS",
        image: "/images/shadcn.png"
    },
    {
        title: "Shadcn",
        description: "Modern UI library built on top of TailwindCSS",
        image: "/images/shadcn.png"
    },
    {
        title: "Shadcn",
        description: "Modern UI library built on top of TailwindCSS",
        image: "/images/shadcn.png"
    },
]

const CardsContainer = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
                {resources.map((resource) => {
                    return <Card key={resource.title} resource={resource} />;
                })}
            </div>
        </>
    );
}

export default CardsContainer;