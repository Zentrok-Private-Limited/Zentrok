import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zentrok",
  description: "Creative Digital Marketing Agency",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // Default favicon
      { url: "/favicon.svg", type: "image/svg+xml" }, // SVG version
    ],
    apple: "/apple-touch-icon.png", // For iOS devices
    shortcut: "/favicon.ico",
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
        <Navbar />
        <main className="pt-20">{children}</main>
        <div className="aurora">
          <span></span>
        </div>
      </body>
    </html>
  );
}
