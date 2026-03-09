import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {/* <div className="mt-20"> */}

        {children}
        {/* </div> */}
        <Footer />
      </body>
    </html>
  );
}