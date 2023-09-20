import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProviderWrapper from "@/src/components/ProviderWrapper";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hunter",
  description: "The job hunting platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
