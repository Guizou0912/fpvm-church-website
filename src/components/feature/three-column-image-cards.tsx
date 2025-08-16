"use client";

import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const schedules = [
  {
    title: "Culte Dominical",
    time: "Dimanche 9h00-11h00",
    description: "Service principal avec prédication et communion",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Étude Biblique",
    time: "Mercredi 19h00-20h30",
    description: "Approfondissement de la Parole de Dieu",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
  {
    title: "Prière & Louange",
    time: "Vendredi 18h30-20h00",
    description: "Temps de prière et d'adoration",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0",
  },
];

const ThreeColumnImageCards = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-blue-50/30 to-violet-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="m-auto mb-12 sm:mb-16 lg:mb-24 max-w-xl text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-primary font-display leading-tight">
            Horaires de Culte et Événements
          </h2>
          <p className="m-auto max-w-3xl text-base sm:text-lg lg:text-xl text-muted-foreground">
            Rejoignez-nous pour nos services de culte et activités communautaires
          </p>
        </div>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {schedules.map((schedule, index) => (
            <Card key={index} className="border-0 pt-0 backdrop-blur-md bg-white/90 border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={schedule.image}
                alt={schedule.title}
                className="aspect-video w-full rounded-t-xl object-cover"
              />
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-accent">{schedule.time}</span>
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-semibold text-primary font-display leading-tight">{schedule.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{schedule.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ThreeColumnImageCards };