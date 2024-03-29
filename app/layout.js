import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link href="/">Home</Link>
          <Link href="/5819">Jackets & Vests</Link>
          <Link href="/5882">Avalanche safety</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
