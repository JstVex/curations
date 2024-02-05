'use client'

import React, { useState, useEffect } from 'react';
import { client } from "@/lib/contentful/client";
import Image from 'next/image';

interface CardProps {
    resource: any;
}

const Card: React.FC<CardProps> = ({ resource }) => {
    const { title, image } = resource.fields;
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchAsset = async (imageSysId: string) => {
            try {
                const asset = await client.getAsset(imageSysId);
                const url = `https:${asset?.fields?.file?.url}?fm=jpg`;
                setImageUrl(url);
            } catch (error) {
                console.error("Error fetching asset:", error);
                setImageUrl('');
            }
        };

        if (image && image.sys && image.sys.id) {
            fetchAsset(image.sys.id);
        } else if (image && image.fields && image.fields.file && image.fields.file.url) {
            setImageUrl(`https:${image.fields.file.url}`);
        }
    }, [image]);

    return (
        <div className="flex flex-col space-y-1">
            {imageUrl && (
                <Image
                    className="w-full h-full object-cover rounded-lg border border-zinc-800"
                    src={imageUrl}
                    quality={100}
                    width={200}
                    height={125}
                    alt={title}
                />
            )}
            <h3>
                {title}
            </h3>
        </div>
    );
};

export default Card;
