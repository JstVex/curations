import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    resource: any;
}

const Card: React.FC<CardProps> = ({ resource }) => {
    const { title, image, slug } = resource.fields;

    return (
        <div className="flex flex-col space-y-1">
            <Link href={`/resources/${slug}`}>
                <Image
                    className="w-full h-full object-cover rounded-lg border border-zinc-800"
                    src={`https://${image.fields.file.url}`}
                    quality={100}
                    width={200}
                    height={125}
                    alt={title}
                />
            </Link>
            <h3>
                {title}
            </h3>
        </div>
    );
};

export default Card;
