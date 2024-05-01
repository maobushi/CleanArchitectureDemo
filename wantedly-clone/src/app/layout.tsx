import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wantedly Clone",
  description: "Wantedly Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          <div className="flex flex-col gap-4">
            <p>Header</p>
            {children}
            <p>Footer</p>
          </div>
        }
      </body>
    </html>
  );
}
