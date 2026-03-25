import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "GII Web",
  keywords: ["GII", "Web", "Next.js", "webpage"],
  description:
    "GII Web is a platform for sharing and discovering web development resources.",

  // ✅ Google Verification
  verification: {
    google: "wmN2wfP3S-R0AANiexObbTM64phtj3cPI-wDk2IaEkI",
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* ✅ JSON-LD Structured Data for SEO */}
        <Script
          id="site-navigation-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "SiteNavigationElement",
                  position: 1,
                  name: "About",
                  url: "https://globalinfotechindia.com/about/",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 2,
                  name: "Services",
                  url: "https://globalinfotechindia.com/services/",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 3,
                  name: "Portfolio",
                  url: "https://globalinfotechindia.com/portfolio/",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 4,
                  name: "Team",
                  url: "https://globalinfotechindia.com/our-team/",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 5,
                  name: "Contact Us",
                  url: "https://globalinfotechindia.com/contact-section/",
                },
              ],
            }),
          }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}