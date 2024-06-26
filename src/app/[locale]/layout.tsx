import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="font-serif">
      <body className={`h-full w-full text-white overflow-auto font-serif`}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}