import Card from "./card";

interface CardsContainerProps {
    resources: any
}

const CardsContainer: React.FC<CardsContainerProps> = ({ resources }) => {
    return (
        <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
                {resources.map((resource: any) => {
                    return <Card key={resource.title} resource={resource} />;
                })}
            </div>
        </>
    );
}

export default CardsContainer;