export interface HeroData {
	imageSrc: string;
	imageAlt: string;
	title: string;
	subtitle: string;
	scrollText: string;
	scrollArrowSrc: string;
}

export interface ProfileData {
	name: string;
	japaneseName: string;
	roles: string[];
	projectsHeading: string;
}

export interface SocialLink {
	id: string;
	title: string;
	href: string;
	iconSrc: string;
	iconSize: "lg" | "sm";
	download?: boolean;
	external?: boolean;
}

export interface ProjectPreview {
	id: string;
	title: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
	ctaLabel: string;
}

export interface CesamaLabeledItem {
	label: string;
	description: string;
}

export interface CesamaData {
	sectionId: string;
	logoSrc: string;
	logoAlt: string;
	videoCard: {
		subtitle: string;
		title: string;
		youtubeEmbedUrl: string;
		youtubeTitle: string;
	};
	overviewCard: {
		title: string;
		description: string;
	};
	featuresCard: {
		title: string;
		items: CesamaLabeledItem[];
	};
	technologiesCard: {
		title: string;
		items: CesamaLabeledItem[];
	};
}

export interface TribosData {
	sectionId: string;
	imageSrc: string;
	imageAlt: string;
	subtitle: string;
	title: string;
	conceptionTitle: string;
	conceptionParagraphs: [string, string];
	ctaLabel: string;
	ctaHref: string;
	technologiesTitle: string;
	technologies: string[];
}

export const HERO_DATA: HeroData = {
	imageSrc: "/img/menCompleto1.png",
	imageAlt: "Logo",
	title: "Bem vindo, Visitante",
	subtitle: "Aqui compartilho todas as minhas criações",
	scrollText: "SCROLL DOWN",
	scrollArrowSrc: "/img/scrowArrow.png",
};

export const PROFILE_DATA: ProfileData = {
	name: "Andrei Barbuto.",
	japaneseName: "バルブト アンドレイ",
	roles: ["Desenvolvedor Web.", "Escritor."],
	projectsHeading: "Projetos",
};

export const SOCIAL_LINKS: SocialLink[] = [
	{
		id: "github",
		title: "GitHub",
		href: "https://github.com/AndreiBrl",
		iconSrc: "/img/github.png",
		iconSize: "lg",
		external: true,
	},
	{
		id: "curriculo",
		title: "Currículo",
		href: "/curriculo.pdf",
		iconSrc: "/img/curriculo.png",
		iconSize: "sm",
		download: true,
	},
	{
		id: "linkedin",
		title: "Linkedin",
		href: "https://www.linkedin.com/in/andreibarbuto/",
		iconSrc: "/img/linkedin.png",
		iconSize: "sm",
		external: true,
	},
];

export const PROJECT_PREVIEWS: ProjectPreview[] = [
	{
		id: "cesama",
		title: "Sistema para Estação de Esgoto",
		href: "#sistemaCesama",
		imageSrc: "/img/ete_cesama.png",
		imageAlt: "Logo",
		ctaLabel: "Acessar",
	},
	{
		id: "tribos",
		title: "Projeto Tribos Ancestrais",
		href: "#tribos",
		imageSrc: "/img/gorila.jpeg",
		imageAlt: "Logo",
		ctaLabel: "Acessar",
	},
];

export const CESAMA_DATA: CesamaData = {
	sectionId: "sistemaCesama",
	logoSrc: "/img/cesamaLogo.png",
	logoAlt: "Logo",
	videoCard: {
		subtitle: "O Sistema",
		title: "Gerenciamento de Análises",
		youtubeEmbedUrl: "https://www.youtube.com/embed/SbKSVSMG33Y?si=eu1nfMV0ejGvk9GO",
		youtubeTitle: "YouTube video player",
	},
	overviewCard: {
		title: "Visão Geral",
		description:
			"O software foi criado para modernizar e agilizar o trabalho dos funcionários das Estações de Tratamento de Esgoto (ETEs) da Cesama, automatizando a análise de amostras e o registro de dados, antes feito manualmente. Com telas intuitivas, painéis de relatórios e filtros de busca avançados, o sistema facilita as atividades diárias, reduz erros e otimiza o tempo de trabalho. Assim, os usuários têm mais dados organizados, maior eficiência e mais tempo para análise.",
	},
	featuresCard: {
		title: "Telas / Funcionalidades",
		items: [
			{
				label: "Home:",
				description:
					"Usuário visualiza as rotinas pendentes e os parâmetros ainda não preenchidos. Podendo acessar cada rotina que seja criador para poder editá-la",
			},
			{
				label: "Rotinas (Laboratório e Operação):",
				description:
					"Usuário preenche os dados de forma flexível e dinâmica, podendo criar observações para cada amostra e adicionar colunas conforme necessário. Cada parâmetro possui sua regra de cálculo.",
			},
			{
				label: "Consulta de Rotinas:",
				description:
					"Usuário pode filtrar de forma avançada e acessar facilmente rotinas pendentes ou finalizadas.",
			},
			{
				label: "Relatórios:",
				description:
					"Usuário cria relatórios externos, podendo preenchê-los de forma aleatória e adicionar observações.",
			},
			{
				label: "Consulta de Relatórios:",
				description:
					"Usuário consulta os relatórios já criados atráves de filtros avançados e dinâmicos.",
			},
			{
				label: "Rotina Finalizada:",
				description:
					"Usuário acessa todos os dados da rotina interna e dos relatórios externos, permitindo comparações e análise simples de dados. (em desenvolvimento).",
			},
		],
	},
	technologiesCard: {
		title: "Tecnologias / FrameWorks",
		items: [
			{
				label: "Python:",
				description:
					"Utilizada no backend para construir a lógica do sistema de forma eficiente e escalável.",
			},
			{
				label: "Django:",
				description:
					"Framework web que permite o desenvolvimento interativo e ágil, facilitando a criação de aplicações robustas.",
			},
			{
				label: "HTML/CSS:",
				description:
					"Linguagens essenciais para a marcação e estilização do conteúdo, proporcionando uma interface visual atraente e responsiva.",
			},
			{
				label: "JavaScript:",
				description:
					"Usada para manipulação do DOM e chamadas assíncronas ao backend, permitindo interações dinâmicas na interface do usuário.",
			},
			{
				label: "Git:",
				description:
					"Sistema de versionamento de código que possibilita o controle de alterações e colaboração eficiente entre desenvolvedores.",
			},
			{
				label: "SQL Server:",
				description:
					"Banco de dados relacional utilizado para armazenar e gerenciar dados de maneira segura e eficiente.",
			},
		],
	},
};

export const TRIBOS_DATA: TribosData = {
	sectionId: "tribos",
	imageSrc: "/img/gorila3.png",
	imageAlt: "Logo",
	subtitle: "O Projeto",
	title: "TRIBOS ANCESTRAIS",
	conceptionTitle: "Concepção e Futuro",
	conceptionParagraphs: [
		"O projeto Tribos Ancestrais é uma obra literária de Ficção Científica em construção escrita por mim, a obra é baseada em toda cultura geek que já vivencei até hoje. A concepção da ideia se deu 2022 onde comecei a escrever de fato. No final do ano de 2023 decidi divulgar alguns capítulos e para isso iniciei a construção em React.",
		"O futuro do projeto agora tomará novos rumos, o site foi refatorado utilizando tecnologias melhores para acomodação de imagens vizando desempenho e usabilidade. Além disso, um novo design de leitura foi criado para que os usuários possam ler com facilidade pelo celular.",
	],
	ctaLabel: "Acessar",
	ctaHref: "https://www.tribosancestrais.com.br",
	technologiesTitle: "Tecnologias",
	technologies: ["- React", "- Next", "- Gsap", "- Git", "- Adobe Photoshop"],
};
