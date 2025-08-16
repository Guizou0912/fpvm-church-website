import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const GlassmorphicHero = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-violet-50/30">
      <div className="overflow-hidden border-b border-muted/50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center backdrop-blur-lg bg-white/70 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/30 shadow-xl w-full">
              <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-pretty bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight">
                FPVM FR-MG TENY FIAINANA ANALAMAHITSY
              </h1>
              <h2 className="mb-6 text-lg sm:text-xl lg:text-2xl text-primary/90 font-medium px-2">
                Église Protestante Malagasy - Une communauté de foi et d'amour
              </h2>
              <p className="mx-auto max-w-3xl text-sm sm:text-base lg:text-xl text-muted-foreground/90 leading-relaxed px-2">
                Rejoignez-nous dans la prière, la communion et l'adoration. Notre église vous accueille avec joie pour partager ensemble la Parole de Dieu.
              </p>
              <div className="mt-8 sm:mt-12 lg:mt-14 flex w-full flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <Button 
                  asChild
                  className="group transition-all rounded-full w-full sm:w-48 duration-300 hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90"
                >
                  <Link href="#about">
                    Découvrir notre église
                    <ChevronRight className="ml-2 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="group transition-all duration-300 hover:bg-violet-100/50 hover:scale-105 text-accent hover:text-accent w-full sm:w-auto"
                >
                  <Link href="#contact">
                    Horaires de culte
                    <ChevronRight className="ml-2 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative mt-16 sm:mt-20 lg:mt-28 px-2 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-2xl lg:rounded-[2rem] z-10" />
            <img
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Intérieur paisible de l'église FPVM"
              className="mx-auto h-64 sm:h-80 md:h-96 lg:max-h-[700px] w-full max-w-7xl rounded-2xl lg:rounded-[2rem] object-cover shadow-2xl ring-1 ring-muted/20 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { GlassmorphicHero };