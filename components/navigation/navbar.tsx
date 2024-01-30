'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
    { href: '/', label: 'All' },
    { href: '/web', label: 'Web' },
    { href: '/programming', label: 'Programming' },
    { href: '/design', label: 'Design' },
    { href: '/burmese', label: 'Burmese' }
];

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center py-5 px-20">
            <div className="w-full max-w-main grow">
                <div className="flex items-center justify-between">
                    <div>
                        B.Curations
                    </div>
                    <ul className="flex items-center text-sm border-2 border-zinc-800 rounded-full p-1">
                        {pages.map((page) => (
                            <li key={page.label} className={`rounded-full px-4 py-2 ${pathname === page.href ? "bg-zinc-800" : "hover:bg-zinc-900"}`}>
                                <Link href={page.href}>
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="text-sm bg-white rounded-full text-black px-4 py-2">
                        Submit a site
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;