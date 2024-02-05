import { client } from "@/lib/contentful/client";
import Image from "next/image";

interface CardProps {
    resource: any;
}

async function fetchAsset(imageSysId: string): Promise<string | null> {
    try {
        const asset = await client.getAsset(imageSysId);
        return `https:${asset?.fields?.file?.url}?fm=jpg`;
    } catch (error) {
        console.error("Error fetching asset:", error);
        return null;
    }
}

export default async function Card({ resource }: CardProps) {
    const { title, image } = resource.fields;
    let imageUrl = '';

    if (image && image.sys && image.sys.id) {
        imageUrl = await fetchAsset(image.sys.id) ?? '';
    } else if (image && image.fields && image.fields.file && image.fields.file.url) {
        imageUrl = `https:${image.fields.file.url}`;
    }

    return (
        <div className="flex flex-col space-y-1">
            <Image
                className="w-full h-full object-cover rounded-lg border border-zinc-800"
                src={imageUrl}
                quality={100}
                width={200}
                height={125}
                alt={title}
            />
            <h3>{title}</h3>
        </div>
    );
};
