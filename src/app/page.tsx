import { GlassmorphicHero } from "@/components/heros/glassmorphic-hero";
import ChurchPresentation from "@/components/about/church-presentation";
import { ThreeColumnImageCards } from "@/components/feature/three-column-image-cards";
import { GridOverlayGallery } from "@/components/gallery/grid-overlay-gallery";
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form";
import { ChurchConstructionSection } from "@/components/donation/church-construction";

export default function HomePage() {
  return (
    <>
      <GlassmorphicHero />
      <ChurchPresentation />
      <ThreeColumnImageCards />
      <ChurchConstructionSection />
      <GridOverlayGallery />
      <ComprehensiveContactForm />
    </>
  );
}