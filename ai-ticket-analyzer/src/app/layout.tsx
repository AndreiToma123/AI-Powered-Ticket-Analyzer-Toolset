import { Sidebar } from "./UI/Sidebar";
import { Header } from "./UI/Header";

export default function RootLayout({ children } : { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        {
          <div className="flex w-screen h-screen overflow-hidden bg-[#f5f6fa]">
            <Sidebar />
            <main className="flex-1 flex flex-col overflow-hidden">
              <Header />
              <div className="flex-1 overflow-y-auto p-8">
                {children}
              </div>
            </main>
          </div>
        }
      </body>
    
    
    </html>
  );
}

