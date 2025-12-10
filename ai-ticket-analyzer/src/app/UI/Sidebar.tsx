'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Home, LogOut } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase"; 

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const getLinkClass = (path: string) => {
        const isActive = pathname === path || (path !== '/' && pathname.startsWith(path));
        return `block py-2 px-4 rounded ${isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`;
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/login'); 
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <aside className="w-20 bg-[#2d3436] flex flex-col items-center py-4 text-white shrink-0 h-full">
            <div className="mb-8 p-2">
                <Menu size={24} />
            </div>
            
            <nav className="flex flex-col items-center gap-4 flex-1">
                <Link href="/" className={getLinkClass("/")}>
                    <Home size={24} />
                </Link>
            </nav>

            <div className="mt-auto mb-4 p-2">
                <button 
                    onClick={handleLogout}
                    className="text-gray-300 hover:bg-red-600 hover:text-white p-2 rounded transition-colors"
                    title="Logout"
                >
                    <LogOut size={24} />
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;