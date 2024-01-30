import Image from "next/image";

interface CardProps {
    resource: {
        title: string;
        description: string;
        image: string;
    }
}

const Card: React.FC<CardProps> = ({ resource }) => {
    return (
        <div className="flex flex-col space-y-1">
            <Image
                className="w-full h-full object-cover rounded-lg border border-zinc-800"
                src={resource.image}
                quality={100}
                width={200}
                height={125}
                alt={resource.title}
            />
            <h3>
                {resource.title}
            </h3>
        </div>
    );
}

export default Card;