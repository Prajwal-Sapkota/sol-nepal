
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QueryProvider from "./QueryProvider";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | SOL Nepal",
    default: "SOL Nepal",
  },
  description:
    "The Society of Otolaryngologists of Nepal (SOL Nepal) is an organization of Otorhinolaryngologists dedicated to advancing ENT care across Nepal.",
  keywords: ["ENT", "Otolaryngology", "Nepal", "SOL Nepal"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Header/>
          <main>{children}</main>
          <Footer/>
        </QueryProvider>
      </body>
    </html>
  );
}
