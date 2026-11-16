export type ProjectId = "cesama" | "tribos" | "sobre";

export interface ProjectFeatureItem {
	label: string;
	text: string;
}

export interface ProjectModalData {
	wagonLabel: string;
	title: string;
	mediaType: "youtube" | "image";
	mediaSrc: string;
	mediaAlt: string;
	imageStyle?: "contain-dark" | "cover" | "avatar";
	description: string;
	featuresTitle: string;
	features: ProjectFeatureItem[];
	tags: string[];
	siteHref?: string;
	siteLabel?: string;
	showGithub: boolean;
}

export interface WagonConfig {
	id: ProjectId;
	tag: string;
	title: string;
	cta: string;
	ariaLabel: string;
}

export interface SkyKeyframe {
	hour: number;
	zenith: string;
	mid: string;
	horizon: string;
	oceanDeep: string;
	oceanSurface: string;
	cloudBody: string;
	cloudShade: string;
	nightOpacity: number;
	contrailOpacity: number;
}

export const WAGONS_CONFIG: WagonConfig[] = [
	{
		id: "cesama",
		tag: "VAGÃO 01 // ETE CESAMA",
		title: "PROJETO CESAMA",
		cta: "☁ Clique para abrir",
		ariaLabel: "Abrir projeto Sistema Cesama",
	},
	{
		id: "tribos",
		tag: "VAGÃO 02 // SCI-FI & WEB",
		title: "TRIBOS ANCESTRAIS",
		cta: "☁ Clique para abrir",
		ariaLabel: "Abrir projeto Tribos Ancestrais",
	},
	{
		id: "sobre",
		tag: "VAGÃO 03 // O AUTOR",
		title: "SOBRE & STACK",
		cta: "☁ Clique para abrir",
		ariaLabel: "Abrir Sobre Andrei Barbuto",
	},
];

export const PROJECTS_CONTENT: Record<ProjectId, ProjectModalData> = {
	cesama: {
		wagonLabel: "VAGÃO 01 // ETE CESAMA",
		title: "Gerenciamento de Análises — Cesama",
		mediaType: "youtube",
		mediaSrc: "https://www.youtube.com/embed/SbKSVSMG33Y?si=eu1nfMV0ejGvk9GO",
		mediaAlt: "Sistema Cesama - Gerenciamento de Análises",
		description:
			"Software criado para modernizar o trabalho nas Estações de Tratamento de Esgoto (ETEs) da Cesama, automatizando a análise de amostras e o registro de dados.",
		featuresTitle: "Telas & Funcionalidades",
		features: [
			{
				label: "Home",
				text: "Rotinas pendentes e parâmetros com acesso rápido.",
			},
			{
				label: "Rotinas",
				text: "Cálculo automático por parâmetro e observações.",
			},
			{
				label: "Consultas",
				text: "Filtros avançados para rotinas pendentes ou concluídas.",
			},
			{
				label: "Relatórios",
				text: "Relatórios externos dinâmicos e comparativos.",
			},
		],
		tags: ["Python", "Django", "SQL Server", "JavaScript", "HTML/CSS", "Git"],
		showGithub: true,
	},

	tribos: {
		wagonLabel: "VAGÃO 02 // OBRA SCI-FI & WEB",
		title: "Projeto Tribos Ancestrais",
		mediaType: "image",
		mediaSrc: "/img/gorila3.png",
		mediaAlt: "Tribos Ancestrais",
		imageStyle: "contain-dark",
		description:
			"Obra literária autoral de Ficção Científica iniciada em 2022 e publicada na web com arquitetura moderna focada em performance e leitura mobile.",
		featuresTitle: "Destaques do Projeto",
		features: [
			{
				label: "Obra Autoral",
				text: "Universo sci-fi original inspirado na cultura geek.",
			},
			{
				label: "Performance",
				text: "Refatorado para carregamento rápido de ilustrações.",
			},
			{
				label: "Mobile-First",
				text: "Design de leitura confortável pelo celular.",
			},
			{
				label: "Imersão",
				text: "Animações fluidas com React, Next.js e GSAP.",
			},
		],
		tags: ["React", "Next.js", "GSAP", "Git", "Photoshop"],
		siteHref: "https://www.tribosancestrais.com.br",
		siteLabel: "Acessar Site →",
		showGithub: true,
	},

	sobre: {
		wagonLabel: "VAGÃO 03 // O AUTOR",
		title: "Andrei Barbuto — Dev Full-Stack & Escritor",
		mediaType: "image",
		mediaSrc: "/img/perfil.png",
		mediaAlt: "Andrei Barbuto",
		imageStyle: "avatar",
		description: "Desenvolvedor Full-Stack e Escritor.",
		featuresTitle: "Especialidades",
		features: [
			{
				label: "Front-End",
				text: "React, Next.js, TypeScript, Tailwind e GSAP.",
			},
			{
				label: "Back-End",
				text: "Python, Django e bancos SQL Server.",
			},
			{
				label: "UI & Motion",
				text: "Interfaces interativas e direção de arte.",
			},
			{
				label: "Literatura",
				text: "Autor da obra sci-fi Tribos Ancestrais.",
			},
		],
		tags: ["React", "Next.js", "TypeScript", "Python", "Django", "SQL", "GSAP"],
		showGithub: true,
	},
};

export const DRIVER_STOP_LINES: string[] = [
	"Parada pra café com pão de queijo!",
	"Última estação...",
	"Parada para lanche...",
	"Parada pro cafezinho...",
	"Segura o trem, sô!",
	"Uai, puxando o freio!",
	"Vai um pão de queijo aí?",
];

export const DRIVER_DEPART_LINES: string[] = [
	"Próxima parada: Disneylândia!",
	"Ponto final: Guarapari!",
	"Partiu Guarapari! 💨",
	"Chaminé no talo, sô!",
	"Trem bão demais da conta!",
	"Bora que o café esfria!",
];

export const SKY_KEYFRAMES: SkyKeyframe[] = [
	{
		hour: 0,
		zenith: "#071120",
		mid: "#10233f",
		horizon: "#1c365c",
		oceanDeep: "#09192e",
		oceanSurface: "#163154",
		cloudBody: "#455d80",
		cloudShade: "#2a3d59",
		nightOpacity: 1,
		contrailOpacity: 0.14,
	},
	{
		hour: 5,
		zenith: "#0c182e",
		mid: "#193054",
		horizon: "#334d73",
		oceanDeep: "#0f223d",
		oceanSurface: "#223f66",
		cloudBody: "#5c7396",
		cloudShade: "#3b4f70",
		nightOpacity: 0.9,
		contrailOpacity: 0.22,
	},
	{
		hour: 6.1,
		zenith: "#2c4678",
		mid: "#80759c",
		horizon: "#f7b176",
		oceanDeep: "#25496e",
		oceanSurface: "#d9936c",
		cloudBody: "#ffe3cc",
		cloudShade: "#e5a898",
		nightOpacity: 0.25,
		contrailOpacity: 0.55,
	},
	{
		hour: 7.4,
		zenith: "#258dc1",
		mid: "#46afdf",
		horizon: "#87d5f5",
		oceanDeep: "#3198c8",
		oceanSurface: "#69c5eb",
		cloudBody: "#ffffff",
		cloudShade: "#b8e7fa",
		nightOpacity: 0,
		contrailOpacity: 0.85,
	},
	{
		hour: 16.2,
		zenith: "#258dc1",
		mid: "#46afdf",
		horizon: "#87d5f5",
		oceanDeep: "#3198c8",
		oceanSurface: "#69c5eb",
		cloudBody: "#ffffff",
		cloudShade: "#b8e7fa",
		nightOpacity: 0,
		contrailOpacity: 0.85,
	},
	{
		hour: 17.75,
		zenith: "#283d6b",
		mid: "#c96757",
		horizon: "#f7b267",
		oceanDeep: "#223b5e",
		oceanSurface: "#e08758",
		cloudBody: "#ffdfd1",
		cloudShade: "#d98279",
		nightOpacity: 0.38,
		contrailOpacity: 0.65,
	},
	{
		hour: 18.6,
		zenith: "#0f203c",
		mid: "#233d63",
		horizon: "#4a5c80",
		oceanDeep: "#102340",
		oceanSurface: "#26446b",
		cloudBody: "#667d9e",
		cloudShade: "#415575",
		nightOpacity: 0.88,
		contrailOpacity: 0.25,
	},
	{
		hour: 19.5,
		zenith: "#071120",
		mid: "#10233f",
		horizon: "#1c365c",
		oceanDeep: "#09192e",
		oceanSurface: "#163154",
		cloudBody: "#455d80",
		cloudShade: "#2a3d59",
		nightOpacity: 1,
		contrailOpacity: 0.14,
	},
	{
		hour: 24,
		zenith: "#071120",
		mid: "#10233f",
		horizon: "#1c365c",
		oceanDeep: "#09192e",
		oceanSurface: "#163154",
		cloudBody: "#455d80",
		cloudShade: "#2a3d59",
		nightOpacity: 1,
		contrailOpacity: 0.14,
	},
];
