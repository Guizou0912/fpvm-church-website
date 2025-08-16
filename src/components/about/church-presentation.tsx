"use client"

import { Heart, Users, BookOpen, Sparkles } from "lucide-react"

export default function ChurchPresentation() {
  return (
    <section className="bg-background py-8 sm:py-12 lg:py-16 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/30" />
      
      <div className="container max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column - Main Content */}
          <div className="relative">
            <div className="backdrop-blur-md bg-white/80 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary/20 rounded-full blur-sm" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent/20 rounded-full blur-sm" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
                    Notre Église
                  </h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6 text-text-secondary">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Fondée sur les valeurs chrétiennes d&apos;amour, de compassion et de communion, 
                    notre église FPVM FR-MG TENY FIAINANA ANALAMAHITSY est un lieu de paix et 
                    de spiritualité où chacun peut trouver sa place dans la famille de Dieu.
                  </p>
                  
                  <p className="leading-relaxed text-sm sm:text-base">
                    Depuis plus de deux décennies, nous servons notre communauté avec dévouement, 
                    offrant un espace de worship authentique, d&apos;apprentissage biblique et de 
                    croissance spirituelle. Notre histoire est marquée par l&apos;engagement 
                    constant envers l&apos;évangile et l&apos;amour du prochain.
                  </p>
                  
                  <div className="bg-primary/5 rounded-xl p-4 sm:p-6 border border-primary/10">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">Nos Valeurs</h4>
                        <p className="text-sm">
                          L&apos;amour inconditionnel, la foi vivante, la communion fraternelle, 
                          et le service désintéressé guident chacune de nos actions et 
                          nourrissent notre témoignage chrétien.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mission Statement */}
          <div className="relative">
            <div className="backdrop-blur-md bg-white/80 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-3 w-5 h-5 bg-accent/20 rounded-full blur-sm" />
              <div className="absolute -bottom-3 -left-2 w-7 h-7 bg-primary/20 rounded-full blur-sm" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary">
                    Notre Mission
                  </h2>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                    Nous nous engageons à répandre l&apos;amour du Christ et à bâtir 
                    une communauté forte, unie dans la foi et l&apos;espérance.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-accent/5 border border-accent/10">
                      <div className="p-1.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">Service Communautaire</h4>
                        <p className="text-xs sm:text-sm text-text-secondary">
                          Soutenir les familles dans le besoin et œuvrer pour la justice sociale
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="p-1.5 rounded-lg bg-primary/10 flex-shrink-0">
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">Croissance Spirituelle</h4>
                        <p className="text-xs sm:text-sm text-text-secondary">
                          Encourager l&apos;étude biblique et l&apos;approfondissement de la foi
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-accent/5 border border-accent/10">
                      <div className="p-1.5 rounded-lg bg-accent/10 flex-shrink-0">
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-1 text-sm sm:text-base">Worship Authentique</h4>
                        <p className="text-xs sm:text-sm text-text-secondary">
                          Célébrer Dieu dans la joie, la louange et la communion fraternelle
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 sm:p-6 border border-primary/20">
                    <p className="text-center text-text-primary font-medium italic text-sm sm:text-base">
                      &ldquo;Que votre lumière brille devant les hommes, afin qu&apos;ils voient 
                      vos bonnes œuvres et glorifient votre Père qui est dans les cieux.&rdquo;
                    </p>
                    <p className="text-center text-xs sm:text-sm text-text-secondary mt-2">
                      Matthieu 5:16
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}