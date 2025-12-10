import "./globals.css";
import LoginMask from "./UI/LoginMask";
import { AuthProvider } from "@/context/AuthContext"; 

export default function RootLayout({ children } : { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider> 
          <LoginMask>
            {children}
          </LoginMask>
        </AuthProvider>
      </body>
    </html>
  );
}