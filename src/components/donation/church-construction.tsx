"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Building2, Church, Heart, Users, Hammer, Wrench, BrickWall, Shield } from "lucide-react";

export const ChurchConstructionSection = () => {
  const donationAmounts = [
    { amount: 50000, label: "50 000 Ar" },
    { amount: 100000, label: "100 000 Ar" },
    { amount: 250000, label: "250 000 Ar" },
    { amount: 500000, label: "500 000 Ar" },
    { amount: 1000000, label: "1 000 000 Ar" },
  ];

  const constructionNeeds = [
    { icon: BrickWall, title: "Matériaux de construction", progress: 65, target: "15 000 000 Ar" },
    { icon: Hammer, title: "Main-d'œuvre", progress: 45, target: "8 000 000 Ar" },
    { icon: Building2, title: "Structure du toit", progress: 30, target: "12 000 000 Ar" },
    { icon: Shield, title: "Finitions intérieures", progress: 15, target: "10 000 000 Ar" },
  ];

  const totalProgress = 52;

  return (
    <section className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-violet-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-violet-100/30" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-violet-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/60 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
            <Church className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Projet de Construction</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Construisons ensemble la
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600"> Maison de Dieu</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Rejoignez-nous dans ce projet sacré pour édifier un nouveau sanctuaire qui servira notre communauté 
            et glorifiera le nom de notre Seigneur Jésus-Christ.
          </p>

          {/* Bible Verse */}
          <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-8 max-w-2xl mx-auto">
            <blockquote className="text-lg italic text-slate-700 mb-4">
              "Si l'Éternel ne bâtit la maison, ceux qui la bâtissent travaillent en vain."
            </blockquote>
            <cite className="text-blue-600 font-semibold">- Psaume 127:1</cite>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="mb-16">
          <Card className="bg-white/70 backdrop-blur-md border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-slate-800 mb-2">
                Progression du Projet
              </CardTitle>
              <p className="text-slate-600">Notre objectif : 45 000 000 Ariary</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{totalProgress}%</div>
                  <Progress value={totalProgress} className="h-4 mb-4" />
                  <p className="text-slate-600">23 400 000 Ar collectés sur 45 000 000 Ar</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {constructionNeeds.map((need, index) => (
                    <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <need.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-800 text-sm">{need.title}</h4>
                        </div>
                      </div>
                      <Progress value={need.progress} className="h-2 mb-2" />
                      <div className="flex justify-between text-xs text-slate-600">
                        <span>{need.progress}%</span>
                        <span>{need.target}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Donation Options */}
          <div className="space-y-8">
            <Card className="bg-white/70 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-red-500" />
                  Faites un Don
                </CardTitle>
                <p className="text-slate-600">
                  Chaque contribution, petite ou grande, nous rapproche de notre objectif.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {donationAmounts.map((donation, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-16 bg-white/60 backdrop-blur-sm border-white/30 hover:bg-blue-50/80 hover:border-blue-200 transition-all duration-300"
                    >
                      {donation.label}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    className="h-16 bg-gradient-to-r from-blue-50/80 to-violet-50/80 backdrop-blur-sm border-white/30 hover:from-blue-100/80 hover:to-violet-100/80 transition-all duration-300"
                  >
                    Montant libre
                  </Button>
                </div>

                <div className="space-y-3">
                  <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
                    Donner Maintenant
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="bg-white/60 backdrop-blur-sm border-white/30 hover:bg-green-50/80">
                      Mobile Money
                    </Button>
                    <Button variant="outline" className="bg-white/60 backdrop-blur-sm border-white/30 hover:bg-blue-50/80">
                      Virement Bancaire
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-white/70 backdrop-blur-md border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-slate-800">
                  Informations de Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <div>
                  <strong>Pasteur Responsable:</strong> Pasteur RANDRIAMANDRATO
                </div>
                <div>
                  <strong>Téléphone:</strong> +261 34 XX XXX XX
                </div>
                <div>
                  <strong>Email:</strong> fpvm.analamahitsy@gmail.com
                </div>
                <div>
                  <strong>Adresse:</strong> Analamahitsy, Antananarivo
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-8">
            <Card className="bg-white/70 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  Notre Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Ce nouveau sanctuaire sera un lieu de culte moderne pouvant accueillir plus de 500 fidèles, 
                  avec des installations adaptées pour les enfants, les jeunes et les activités communautaires.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-blue-50/60 backdrop-blur-sm rounded-xl border border-blue-100/50">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-bold text-2xl text-slate-800">500+</div>
                    <div className="text-sm text-slate-600">Places assises</div>
                  </div>
                  <div className="text-center p-4 bg-violet-50/60 backdrop-blur-sm rounded-xl border border-violet-100/50">
                    <Church className="w-8 h-8 text-violet-600 mx-auto mb-2" />
                    <div className="font-bold text-2xl text-slate-800">800m²</div>
                    <div className="text-sm text-slate-600">Surface totale</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="bg-gradient-to-br from-blue-50/80 to-violet-50/80 backdrop-blur-md border-white/20 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Church className="w-8 h-8 text-white" />
                  </div>
                  <blockquote className="text-lg italic text-slate-700 mb-4 leading-relaxed">
                    "Ensemble, nous bâtissons plus qu'un édifice. Nous construisons un lieu où les cœurs se rencontrent, 
                    où les âmes trouvent la paix, et où la Parole de Dieu résonne pour les générations futures."
                  </blockquote>
                  <cite className="font-semibold text-blue-700">
                    - Pasteur RANDRIAMANDRATO
                  </cite>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-blue-600/10 to-violet-600/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Soyez Partenaire de cette Œuvre
              </h3>
              <p className="text-slate-600 mb-6">
                Votre générosité aujourd'hui façonnera l'avenir spirituel de notre communauté.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Faire un Don Maintenant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};