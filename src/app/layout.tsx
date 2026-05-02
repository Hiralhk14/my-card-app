import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/assets/scss/globals.scss";
import Sidebar from "@/shared/components/sidebar";
import Header from "@/shared/components/headers";

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
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 min-w-0 overflow-y-auto">
             <Header title="Home" />
            <div className="min-h-full flex flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
