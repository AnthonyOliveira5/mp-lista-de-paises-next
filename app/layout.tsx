import "./globals.css";
import {Nunito_Sans} from 'next/font/google';
import Image from "next/image";

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Country List',
  description: 'A Country list created with Next 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="container flex items-center gap-3">
              <Image 
                width={48} 
                height={48} 
                src="/Logo.svg" 
                alt="Logo da aplicação - emoji de globo"
                />
              <h1 className="font-bold text-2xl">Country list</h1>              
            </section>
          </nav>
          {children}          
        </main>        
      </body>
    </html>
  );
}
