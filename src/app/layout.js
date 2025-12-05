import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
});

export const metadata = {
  title: "Bibek — Portfolio",
  description: "Creative portfolio",
  icons: {
    icon: [{ url: "/public/favicon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${bodoni.variable} antialiased text-ink`}>
        <div className="min-h-screen bg-sage-700">
          <div className="container-page py-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
