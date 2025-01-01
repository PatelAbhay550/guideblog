import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guideblog - All Coding Guides in One Place",
  description:
    "All Coding Guides in One Place. Learn to code with us! We have guides on all popular programming languages and frameworks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <meta name="google-site-verification" content="rl2W28uLLr_WgiAP10zE6xtnWXQajRU4kXQOVmqXbuA" />
    </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
