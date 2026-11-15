import type { Metadata } from "next";
import { Inter, Potta_One } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const potta = Potta_One({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-potta",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://andreibarbuto.vercel.app"),
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

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="pt-BR" className={`${inter.variable} ${potta.variable}`}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
