import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import { Announce } from "@/components/Announce";
import { Effects } from "@/components/Effects";
import { Header } from "@/components/Header";
import { LangProvider } from "@/components/Lang";
import { Footer } from "@/components/Sections";
import { BookingProvider } from "@/components/booking/Booking";
import { isLang, LANGS, tr, ui } from "@/lib/i18n";
import { site } from "@/lib/site";
import "../globals.css";

/** Montserrat — headings (calmrage system), Inter — text. Both cover Azerbaijani (ə, ğ, ı, İ, ş) and Cyrillic. */
const display = Montserrat({ subsets: ["latin", "latin-ext", "cyrillic"], weight: ["500", "600", "700", "800"], variable: "--font-display-src" });
const body = Inter({ subsets: ["latin", "latin-ext", "cyrillic"], weight: ["400", "500", "600"], variable: "--font-body-src" });

export const dynamicParams = false;
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const title = lang === "az" ? "Stomatoloq Nicat İbrahimov — implantlar, vinirlər, Bakı" : "Стоматолог Ниджат Ибрагимов — импланты, виниры, Баку";
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: lang === "az" ? "%s · Nicat İbrahimov" : "%s · Ниджат Ибрагимов" },
    description: tr(site.description, lang),
    openGraph: { title, description: tr(site.description, lang), images: ["/photos/doc-standing.jpg"], type: "website", locale: lang === "az" ? "az_AZ" : "ru_RU" },
    // Not launched yet — keep out of search results until the client approves.
    robots: { index: false, follow: false },
  };
}

export const viewport: Viewport = { themeColor: "#ffffff" };

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: site.name,
    description: tr(site.description, lang),
    telephone: "+994555737162",
    address: { "@type": "PostalAddress", addressLocality: "Baku", addressCountry: "AZ" },
    sameAs: [site.instagram],
  };

  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          {ui[lang].skip}
        </a>
        <LangProvider lang={lang}>
          <BookingProvider>
            <Announce lang={lang} />
            <Header />
            <main id="main">{children}</main>
            <Footer lang={lang} />
          </BookingProvider>
          <Effects />
        </LangProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
