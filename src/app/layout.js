import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio",
  description: "Criado por Andrei Barbuto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:image" content="https://andreibarbuto.vercel.app/img/menCompleto1.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
