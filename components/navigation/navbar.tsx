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

const mobilePages = [
    { href: '/web', label: 'Web' },
    { href: '/programming', label: 'Programming' },
    { href: '/design', label: 'Design' },
    { href: '/burmese', label: 'Burmese' }
]

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center pt-5 pb-3 px-3 sm:px-4 md:px-6 border-b border-zinc-700 sm:border-none sm:pb-6">
            <div className="w-full max-w-main grow">
                <div className="flex items-center justify-between mx-3 sm:mx-0">
                    <div>
                        B.Curations
                    </div>
                    <ul className="hidden items-center text-sm border-2 border-zinc-800 rounded-full p-1 md:flex">
                        {pages.map((page) => (
                            <li key={page.label} className={`rounded-full px-4 py-2 ${pathname === page.href ? "bg-zinc-800" : "hover:bg-zinc-900"}`}>
                                <Link href={page.href}>
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="hidden items-center text-sm border-2 border-zinc-800 rounded-full p-1 sm:flex md:hidden">
                        {mobilePages.map((page) => (
                            <li key={page.label} className={`rounded-full px-4 py-2 ${pathname === page.href ? "bg-zinc-800" : "hover:bg-zinc-900"}`}>
                                <Link href={page.href}>
                                    {page.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="text-sm bg-white rounded-full text-black px-4 py-2">
                        Add resource
                    </button>
                </div>
                <ul className="flex items-center justify-between text-sm mt-2 overflow-x-auto no-scrollbar sm:hidden">
                    {mobilePages.map((page) => (
                        <li key={page.label} className={`rounded-full px-4 py-2 ${pathname === page.href ? "bg-zinc-800" : "hover:bg-zinc-900"}`}>
                            <Link href={page.href}>
                                {page.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;