"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Filter, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'cultes' | 'communaute' | 'jeunes' | 'celebrations';
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  description: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Service Dominical du Matin",
    category: "cultes",
    type: "image",
    src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop",
    description: "Moment de louange et d'adoration lors du service dominical matinal"
  },
  {
    id: 2,
    title: "Baptême par Immersion",
    category: "celebrations",
    type: "image",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
    description: "Célébration du baptême par immersion dans nos eaux sacrées"
  },
  {
    id: 3,
    title: "Repas Communautaire",
    category: "communaute",
    type: "image",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
    description: "Partage fraternel lors du repas communautaire mensuel"
  },
  {
    id: 4,
    title: "Camp de Jeunes 2024",
    category: "jeunes",
    type: "image",
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=600&fit=crop",
    description: "Moments de joie et de communion au camp d'été des jeunes"
  },
  {
    id: 5,
    title: "Cérémonie de Mariage",
    category: "celebrations",
    type: "image",
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
    description: "Union bénie devant Dieu dans notre sanctuaire"
  },
  {
    id: 6,
    title: "École du Dimanche",
    category: "jeunes",
    type: "image",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
    description: "Enseignement biblique adapté aux enfants"
  },
  {
    id: 7,
    title: "Service de Louange",
    category: "cultes",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    description: "Enregistrement complet du service de louange du dimanche"
  },
  {
    id: 8,
    title: "Conférence Spirituelle",
    category: "communaute",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    description: "Conférence sur la croissance spirituelle"
  },
  {
    id: 9,
    title: "Chœur de l'Église",
    category: "cultes",
    type: "image",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    description: "Notre chœur lors de la préparation musicale"
  },
  {
    id: 10,
    title: "Action Caritative",
    category: "communaute",
    type: "image",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    description: "Distribution de vivres aux familles dans le besoin"
  },
  {
    id: 11,
    title: "Retraite Spirituelle",
    category: "jeunes",
    type: "image",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    description: "Temps de méditation et de prière en groupe"
  },
  {
    id: 12,
    title: "Fête de Noël",
    category: "celebrations",
    type: "image",
    src: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=600&fit=crop",
    description: "Célébration joyeuse de la naissance du Christ"
  }
];

const categories = [
  { key: 'all', label: 'Toutes les catégories', icon: Filter },
  { key: 'cultes', label: 'Cultes et Services', icon: Filter },
  { key: 'communaute', label: 'Événements Communautaires', icon: Filter },
  { key: 'jeunes', label: 'Activités des Jeunes', icon: Filter },
  { key: 'celebrations', label: 'Célébrations Spéciales', icon: Filter }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>(galleryData);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(galleryData);
    } else {
      setFilteredItems(galleryData.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  const handlePrevious = () => {
    const currentFilteredIndex = filteredItems.findIndex(item => item.id === selectedItem?.id);
    const prevIndex = currentFilteredIndex > 0 ? currentFilteredIndex - 1 : filteredItems.length - 1;
    setSelectedItem(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    const currentFilteredIndex = filteredItems.findIndex(item => item.id === selectedItem?.id);
    const nextIndex = currentFilteredIndex < filteredItems.length - 1 ? currentFilteredIndex + 1 : 0;
    setSelectedItem(filteredItems[nextIndex]);
  };

  const images = filteredItems.filter(item => item.type === 'image');
  const videos = filteredItems.filter(item => item.type === 'video');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/80 rounded-3xl border border-white/20 shadow-xl p-12 mb-8">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-6">
              Galerie
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez les moments précieux de notre communauté à travers nos photos et vidéos. 
              Revivez les cultes, les célébrations et les événements qui marquent la vie de notre église.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="px-4 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeCategory === category.key ? "default" : "outline"}
                onClick={() => setActiveCategory(category.key)}
                className={`backdrop-blur-md transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg scale-105'
                    : 'bg-white/80 hover:bg-white border-white/20 text-slate-700 hover:scale-105'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {images.length > 0 && (
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-white/80 rounded-3xl border border-white/20 shadow-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Galerie Photos</h2>
              <p className="text-slate-600 mb-8">Parcourez notre collection de moments précieux</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((item, index) => (
                  <Dialog key={item.id}>
                    <DialogTrigger asChild>
                      <Card 
                        className="group cursor-pointer backdrop-blur-md bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                        onClick={() => setSelectedItem(item)}
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                            <p className="text-sm text-white/90 line-clamp-2">{item.description}</p>
                          </div>
                        </div>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full h-[90vh] p-0 bg-black/90 border-none">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white"
                          onClick={() => setSelectedItem(null)}
                        >
                          <X className="w-6 h-6" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white"
                          onClick={handlePrevious}
                        >
                          <ChevronLeft className="w-8 h-8" />
                        </Button>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 text-white"
                          onClick={handleNext}
                        >
                          <ChevronRight className="w-8 h-8" />
                        </Button>

                        <img
                          src={selectedItem?.src}
                          alt={selectedItem?.title}
                          className="max-w-full max-h-full object-contain"
                        />
                        
                        <div className="absolute bottom-4 left-4 right-4 text-center text-white bg-black/50 backdrop-blur-md rounded-lg p-4">
                          <h3 className="text-xl font-semibold mb-2">{selectedItem?.title}</h3>
                          <p className="text-white/90">{selectedItem?.description}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Video Gallery */}
      {videos.length > 0 && (
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-md bg-white/80 rounded-3xl border border-white/20 shadow-xl p-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Galerie Vidéos</h2>
              <p className="text-slate-600 mb-8">Revivez nos services et événements en vidéo</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videos.map((item) => (
                  <Card key={item.id} className="group backdrop-blur-md bg-white/60 border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.thumbnail || item.src}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="lg" 
                              className="bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white/30 text-white transition-all duration-300 hover:scale-110"
                            >
                              <Play className="w-6 h-6 mr-2 fill-current" />
                              Regarder
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl w-full p-0 bg-black border-none">
                            <div className="relative aspect-video">
                              <video
                                controls
                                className="w-full h-full"
                                poster={item.thumbnail}
                              >
                                <source src={item.src} type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture vidéo.
                              </video>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <section className="px-4 mb-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="backdrop-blur-md bg-white/80 rounded-3xl border border-white/20 shadow-xl p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Aucun contenu trouvé</h3>
              <p className="text-slate-600">
                Aucune image ou vidéo ne correspond à cette catégorie pour le moment.
                Essayez de sélectionner une autre catégorie.
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}