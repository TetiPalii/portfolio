import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className="bg-[url('/images/heroMobile2x.jpg')] md:bg-[url('/images/heroTab2x.jpg')] xl:bg-[url('/images/heroDesk2x.jpg')] h-full w-full object-none bg-no-repeat text-white overflow-auto">
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}