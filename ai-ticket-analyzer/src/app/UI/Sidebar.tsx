'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Home, Ticket } from "lucide-react";

const Sidebar = () => {
    const pathname = usePathname();

    const getLinkClass = (path: string) => {
        const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
        return `block py-2 px-4 rounded ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`;
    };

    return (
        <aside className="w-20 bg-[#2d3436] flex flex-col items-center py-4 text-white shrink-0">
            <div className="mb-8 p-2">
                <Menu size={24} />
            </div>
            <nav className="flex flex-col items-center gap-4">
                <Link href="/" className={getLinkClass("/")}>
                    <Home size={24} />
                </Link>
                <Link href="/tickets" className={getLinkClass("/tickets")}>
                    <Ticket size={24} />
                </Link>
            </nav>
        </aside>
    );
};

export { Sidebar };
