import Main from "@/components/layout";
import LanguageSwitch from "@/components/ui/language-switch";
import { client } from "@/lib/contentful/client";
import { ArrowUpRight, MoveLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function fetchResource(slug: string) {
    const res = await client.getEntries({
        content_type: "resource",
        "fields.slug": slug,
    });

    return res.items[0];
}

export default async function ResourceDetails({ params }: { params: { slug: string } }) {
    const resource: any = await fetchResource(params.slug);
    const { title, description, burmeseDescription, image, category, subcat, link } = resource.fields;

    return (
        <Main>
            <Link href="/" className="flex items-center gap-x-1 text-zinc-200 mb-6">
                <MoveLeft size={16} />
                <span>
                    Back
                </span>
            </Link>
            <div className="grid grid-cols-7 gap-y-10 lg:gap-y-0 lg:gap-x-10">
                <div className="col-span-7 lg:col-span-4">
                    <Image
                        src={`https:${image.fields.file.url}`}
                        alt={title}
                        width={400}
                        height={250}
                        quality={100}
                        className="w-full h-auto object-cover rounded-lg border border-zinc-800"
                    />
                </div>
                <div className="col-span-7 lg:col-span-3">
                    {burmeseDescription ? (
                        <LanguageSwitch
                            title={title}
                            description={description}
                            burmeseDescription={burmeseDescription}
                        />
                    ) : (
                        <>
                            <h1 className="text-2xl font-bold mb-2">
                                {title}
                            </h1>
                            <p className="text-sm font-light text-zinc-300 sm:text-[0.925rem]">
                                {description}
                            </p>
                        </>

                    )}
                    <button className="text-sm bg-zinc-800 rounded-md px-2 py-1 mt-3 transition-colors hover:bg-zinc-700">
                        <a href={link} className="flex items-center gap-x-2">
                            <div>
                                {link}
                            </div>
                            <ArrowUpRight size={16} />
                        </a>
                    </button>
                    <div className="flex flex-col gap-x-2 mt-12 divide-y-2 divide-zinc-400 divide-opacity-20 text-sm">
                        <div className="gap-x-1 grid grid-cols-12 border-t-2 border-zinc-400 border-opacity-20 py-2">
                            <h2 className="font-semibold col-span-4">
                                Category
                            </h2>
                            <span className="col-span-8 px-1">
                                {category}
                            </span>
                        </div>
                        <div className="gap-x-1 grid grid-cols-12">
                            <h2 className="font-semibold col-span-4 pt-2">
                                Subcategories
                            </h2>
                            <span className="flex flex-col col-span-8">
                                {subcat.map((subcat: any) => (
                                    <span
                                        className="py-2 border-b-2 border-zinc-400 border-opacity-20 px-1"
                                        key={subcat}
                                    >
                                        {subcat}
                                    </span>
                                ))}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}
