import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Fundacja Maxime",
  description: "Page By Filip Wrona",
  icons: {
    icon: [
      {
        url: '/favicon_white.svg',
        media: '(prefers-color-scheme: dark)'
      },
      {
        url: '/favicon_black.svg',
        media: '(prefers-color-scheme: light)'
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
