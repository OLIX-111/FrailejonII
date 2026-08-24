import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Altos de Frailejón – Villas de Lujo en La Romana | L'Romana Real Estate",
  description:
    "Altos de Frailejón: villas y apartamentos de lujo en La Estancia Golf & Country Club, La Romana, República Dominicana. Campo de golf Pete Dye, Terraza 19, cancha de tennis y más. Reserva desde US$ 3,000.",
  keywords: [
    "Altos de Frailejón",
    "Frailejón Village",
    "villas de lujo La Romana",
    "apartamentos La Estancia",
    "La Estancia Golf Country Club",
    "real estate República Dominicana",
    "inversión inmobiliaria La Romana",
    "Pete Dye golf",
    "Casa de Campo La Romana",
  ],
  openGraph: {
    title: "Altos de Frailejón – Villas de Lujo en La Romana",
    description:
      "Villas y apartamentos de lujo en La Estancia Golf & Country Club. A 6 min del aeropuerto, 3 min de la playa. Reserva desde US$ 3,000.",
    locale: "es_DO",
    type: "website",
    images: [
      {
        url: "/render 1.png",
        width: 1200,
        height: 630,
        alt: "Altos de Frailejón – Villas de lujo en La Romana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altos de Frailejón – Villas de Lujo en La Romana",
    description:
      "Villas y apartamentos de lujo en La Estancia Golf & Country Club. Reserva desde US$ 3,000.",
    images: ["/render 1.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#0d0d0d]">{children}</body>
    </html>
  );
}
