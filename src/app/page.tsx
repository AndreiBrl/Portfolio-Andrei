import { HeroSection } from "@/components/sections/HeroSection";
import { HorizontalShowcase } from "@/components/sections/HorizontalShowcase";
import { ProjectCesama } from "@/components/sections/ProjectCesama";
import { ProjectTribos } from "@/components/sections/ProjectTribos";

export default function HomePage() {
	return (
		<main className="relative h-auto w-full overflow-hidden bg-cream">
			<HeroSection />
			<HorizontalShowcase />
			<ProjectCesama />
			<ProjectTribos />
		</main>
	);
}
