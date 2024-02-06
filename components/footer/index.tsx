import Link from "next/link";

interface Link {
    href: string;
    label: string;
}

const links: Link[] = [
    {
        href: "/about",
        label: "About",
    },
    {
        href: "https://",
        label: "Add a Resource",
    },
    {
        href: "https://github.com/JstVex/curations",
        label: "Edit this on Github",
    },
    {
        href: "/legal",
        label: "Legal Notice",
    },
];

const Footer = () => {
    return (
        <footer className="mt-32 border-t border-zinc-600">
            <div className="flex flex-col md:flex-row space-y-12 md:space-y-0 items-start justify-between pt-6 pb-8">
                <div className="text-zinc-400 font-light">
                    Made with love by {" "}
                    <a href="https://heinhtetlulu.vercel.app" target="_blank">
                        <span className="text-white font-normal">
                            JstVex
                        </span>
                    </a>
                </div>
                <ul className="font-light grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid xl:flex gap-x-8 gap-y-3 text-gray-400 ">
                    {links.map((link, index) => (
                        <li
                            key={index}
                            className="text-base transition-colors hover:text-white"
                        >
                            {index === 2 || index === 3 ? (
                                <a
                                    href={link.href}
                                    target="_blank"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link href={link.href}>
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

        </footer>
    );
}

export default Footer;