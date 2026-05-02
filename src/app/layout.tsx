import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "@/assets/scss/globals.scss";
import Sidebar from "@/shared/components/sidebar";
import Header from "@/shared/components/headers";
import Footer from "@/shared/components/footer";

import ReduxProvider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My card Management App",
  description: "Manage card data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-hidden`}>
        <ReduxProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 min-w-0 overflow-y-auto">
              <Header />
              <div className="min-h-full flex flex-col">
                <div className="flex-1">{children}</div>
                <Footer/>
              </div>
            </main>
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#1B3A6B",
                color: "#fff",
                fontSize: "14px",
                borderRadius: "8px",
              },
              success: {
                iconTheme: { primary: "#22C55E", secondary: "#fff" },
              },
              error: {
                iconTheme: { primary: "#EF4444", secondary: "#fff" },
              },
            }}
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
