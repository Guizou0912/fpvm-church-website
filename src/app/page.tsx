import { GlassmorphicHero } from "@/components/heros/glassmorphic-hero";
import ChurchPresentation from "@/components/about/church-presentation";
import { ThreeColumnImageCards } from "@/components/feature/three-column-image-cards";
import { GridOverlayGallery } from "@/components/gallery/grid-overlay-gallery";
import { ComprehensiveContactForm } from "@/components/contact/comprehensive-contact-form";

export default function HomePage() {
  return (
    <>
      <GlassmorphicHero />
      <ChurchPresentation />
      <ThreeColumnImageCards />
      <GridOverlayGallery />
      <ComprehensiveContactForm />
    </>
  );
}