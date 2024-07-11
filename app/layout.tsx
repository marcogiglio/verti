import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link';
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
      <body className={`${archivo.className} bg-light-verti`}>
        <main className="flex flex-col min-h-screen">
          <nav className="h-16 bg-light-verti w-full max-sm:hidden border-solid border-dark-verti border-b">
            <div className="flex flex-row flex-grow h-full">
              <div className="flex w-1/6"></div>
              <div className="flex w-1/4 items-center">
              <Link href="/">
                <Image
                  src="/logo_text_dark.png"
                  alt="Verti"
                  height={40}
                  width={120}
                  className='object-contain'
                />
              </Link>
              </div>
              <ul className="flex w-5/12 items-center justify-between md:pl-10">
                <li>
                  <Link href="/concept" className="text-dark-verti hover:text-mid-verti font-bold">
                    CONCEPT
                  </Link>
                </li>
                <li>
                  <Link href="/destinations" className="text-dark-verti hover:text-mid-verti font-bold">
                    DESTINATIONS
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="text-dark-verti  hover:text-mid-verti font-bold">
                    CONTACTS
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="text-dark-verti  hover:text-mid-verti">
                    <button className="h-10 w-40 bg-mid-verti shadow rounded z-0 font-bold hover:bg-dark-verti hover:text-light-verti text-xl tracking-tighter">RESERVE </button>
                  </Link>
                </li>
              </ul>
              </div>
            <div className="flex w-1/6"></div>

          </nav>
          <div className="flex-grow">
            {children}
          </div>
          <footer className="h-16 bg-light-verti w-full max-sm:hidden border-solid border-dark-verti border-t">
            {/* Footer content */}
          </footer>
        </main>
      </body>
    </html>
  );
}