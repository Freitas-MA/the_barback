import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { pageData } from "../MockData/MockData";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Barback",
  description: "Your professional bartender helper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar pageData={pageData} />
        {children}
        <Footer pageData={pageData} />
      </body>
    </html>
  );
}
