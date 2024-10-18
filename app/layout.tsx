import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s — Amuse",
    default: "Welcome — Amuse",
  },
  description: "Amuse is a great mobile application",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
