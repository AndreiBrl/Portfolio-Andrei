import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, M_PLUS_Rounded_1c, Zen_Maru_Gothic } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["600", "700"],
	style: ["normal", "italic"],
	variable: "--font-ghibli-serif",
});

const mPlusRounded = M_PLUS_Rounded_1c({
	subsets: ["latin"],
	weight: ["400", "500", "700", "800"],
	variable: "--font-body",
});

const zenMaruGothic = Zen_Maru_Gothic({
	subsets: ["latin"],
	weight: ["500", "700", "900"],
	variable: "--font-cloud",
});

export const viewport: Viewport = {
	themeColor: "#55595c",
	viewportFit: "cover",
};

export const metadata: Metadata = {
	metadataBase: new URL("https://andreibarbuto.vercel.app"),
	title: "Andrei Barbuto — Estação Ghibli // Portfólio Interativo",
	description: "Portfólio interativo de Andrei Barbuto — Desenvolvedor Web & Escritor",
	openGraph: {
		images: [
			{
				url: "https://andreibarbuto.vercel.app/img/ete_cesama.png",
				width: 800,
				height: 600,
				alt: "Portfólio Andrei Barbuto",
			},
		],
	},
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="pt-BR"
			className={`${cormorant.variable} ${mPlusRounded.variable} ${zenMaruGothic.variable}`}
		>
			<body className={mPlusRounded.className}>{children}</body>
		</html>
	);
}
