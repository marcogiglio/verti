import Navigation from "./components/navigation/navbar";
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
})

export const metadata: Metadata = {
  title: "Verti",
  description: "Unlimited Luxury",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${archivo.className} bg-mid-verti`}>
      <div className="flex flex-col h-screen">

      <main className="flex-1 overflow-y-auto">
            {children}
      </main>
      </div>
      </body>
    </html>
  );
}
