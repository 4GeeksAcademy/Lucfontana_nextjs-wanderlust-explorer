import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { FavoritesProvider } from "@/context/FavoritesContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wanderlust Labs",
    template: "%s | Wanderlust Labs",
  },
  description: "Explorador de experiencias y paquetes de viaje de Wanderlust Labs.",
  keywords: ["travel tech", "experiencias", "paquetes", "viajes", "wanderlust"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <FavoritesProvider>
          <div className="flex min-h-full flex-col">
            <Navbar />
            {children}
            <footer className="border-t border-black/10 bg-white/80">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-black/65 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
                <p>Wanderlust Labs, experiencias curadas para viajeros contemporaneos.</p>
                <p>Diseno mobile-first, accesible y optimizado para descubrimiento.</p>
              </div>
            </footer>
          </div>
        </FavoritesProvider>
      </body>
    </html>
  );
}
