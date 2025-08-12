import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Zentrok",
  description: "Creative Digital Marketing Agency",
   icons: {
    icon: "/zentrok.svg", // path from public folder
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
