import type { Metadata } from "next";
import { Inter, Rhodium_Libre } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const rhodium = Rhodium_Libre({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Sherashov",
  description: "Website portfolio by Oleksandr Sherashov(web developer)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rhodium.className}>
        <Header />
        <main className="flex min-h-screen flex-col px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
