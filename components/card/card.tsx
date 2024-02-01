import Image from "next/image";

interface CardProps {
    resource: any
}

const Card: React.FC<CardProps> = ({ resource }) => {
    const { title, image } = resource.fields;

    return (
        <div className="flex flex-col space-y-1">
            <Image
                className="w-full h-full object-cover rounded-lg border border-zinc-800"
                src={'https:' + image.fields.file.url}
                quality={100}
                width={200}
                height={125}
                alt={title}
            />
            <h3>
                {title}
            </h3>
        </div>
    );
}

export default Card;