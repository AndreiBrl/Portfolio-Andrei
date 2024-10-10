import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio",
  description: "Criado por Andrei Barbuto",
  openGraph: {
    images: [
      {
        url: "https://andreibarbuto.vercel.app/img/menCompleto1.png",
        width: 800,
        height: 600,
        alt: "Imagem de Andrei Barbuto",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
