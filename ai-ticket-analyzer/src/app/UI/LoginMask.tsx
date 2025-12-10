'use client';

import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import  Header from "./Header";

export default function LoginMask({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  if (isLoginPage) {
    return <div className="h-screen w-screen bg-white">{children}</div>;
  }

  return (
    <div className="flex w-screen h-screen overflow-hidden bg-[#f5f6fa]">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}