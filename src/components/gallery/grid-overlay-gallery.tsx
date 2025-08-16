"use client";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

type stat = {
  number: string;
  text: string;
};

interface CardData {
  title: string;
  link: string;
  background: string;
  stats: Array<stat>;
  category: string;
  isVideo?: boolean;
}

// Church activity gallery items
const LIST: Array<CardData> = [
  {
    title: "Culte Dominical",
    link: "#",
    background:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Chaque", text: "Dimanche matin" }],
    category: "Cultes",
  },
  {
    title: "Chorale de l'Église",
    link: "#",
    background:
      "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "20+", text: "Choristes actifs" }],
    category: "Cultes",
    isVideo: true,
  },
  {
    title: "Conférence Spirituelle",
    link: "#",
    background:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "100+", text: "Participants" }],
    category: "Événements",
  },
  {
    title: "Repas Communautaire",
    link: "#",
    background:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "Chaque", text: "Premier dimanche" }],
    category: "Communauté",
  },
  {
    title: "École du Dimanche",
    link: "#",
    background:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "30+", text: "Enfants et jeunes" }],
    category: "Jeunesse",
    isVideo: true,
  },
  {
    title: "Camp de Jeunes",
    link: "#",
    background:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [{ number: "3", text: "Jours de communion" }],
    category: "Jeunesse",
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Cultes":
      return "bg-blue-500/20 text-blue-700 border-blue-300/30";
    case "Événements":
      return "bg-violet-500/20 text-violet-700 border-violet-300/30";
    case "Communauté":
      return "bg-green-500/20 text-green-700 border-green-300/30";
    case "Jeunesse":
      return "bg-orange-500/20 text-orange-700 border-orange-300/30";
    default:
      return "bg-gray-500/20 text-gray-700 border-gray-300/30";
  }
};

const Card = ({ link, background, title, stats, category, isVideo }: CardData) => {
  return (
    <a
      href={link}
      style={{ backgroundImage: `url(${background})` }}
      className="before:content-[] relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[30rem] w-full overflow-hidden rounded-lg sm:rounded-xl bg-black/80 bg-cover bg-center bg-no-repeat p-4 sm:p-5 transition-all duration-300 before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-black/50 before:transition-all before:duration-300 hover:before:bg-black/30 group"
    >
      <div className="relative z-20 flex size-full flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${getCategoryColor(category)}`}>
            {category}
          </span>
          {isVideo && (
            <div className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-300">
              <Play className="size-3 sm:size-4 text-white fill-white" />
            </div>
          )}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4 group-hover:bg-white/20 group-hover:backdrop-blur-md transition-all duration-300">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex flex-col gap-1 sm:gap-2">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-[1.2] font-normal text-white">
                {title}
              </div>
              <div className="text-xs sm:text-sm text-white/80 leading-relaxed">
                {stats[0]?.number} {stats[0]?.text}
              </div>
            </div>
            <Button variant="secondary" size="sm" className="w-fit bg-blue-500/20 backdrop-blur-sm border-blue-300/30 text-white hover:bg-blue-500/30 hover:text-white text-xs sm:text-sm">
              Voir plus
              <ArrowRight className="size-3 sm:size-4 ml-1 sm:ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </a>
  );
};

const GridOverlayGallery = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3 sm:mb-4 leading-tight">
            Galerie - Vie de l'Église
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Découvrez la richesse de notre communauté à travers nos cultes, événements et moments de partage
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {LIST.map((item, i) => (
            <Card key={`gallery-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { GridOverlayGallery };