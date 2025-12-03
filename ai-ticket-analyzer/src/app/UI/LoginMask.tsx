'use client'

import { usePathname } from "next/navigation";
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export default function AppShell({ children }: { children: React.ReactNode}) {
    const pathName = usePathname();
    const isLoginPage = pathName ==='/login';

    if (isLoginPage) {
        return <>{children}</>
    }

    return (
        <div className="flex w-screen h-screen overflow-hidden bg-background">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <div className="flex-1 overflow-y-auto p-8 bg-background">
                    {children}
                </div>
            </main>
        </div>
    );
}