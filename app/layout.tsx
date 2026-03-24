import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GII Web",
  keywords: ["GII", "Web", "Next.js", "webpage"],
  description: "GII Web is a platform for sharing and discovering web development resources.",

  // ✅ Google Verification Added Here
  verification: {
    google: "wmN2wfP3S-R0AANiexObbTM64phtj3cPI-wDk2IaEkI",
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}