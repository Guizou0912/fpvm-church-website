import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Cross, Users, Clock, MapPin, Phone, Mail, Calendar, BookOpen, Handshake, Star, ArrowRight, Play, Image as ImageIcon, ChevronRight } from "lucide-react";

export default function Home() {
  const serviceSchedule = [
    { day: "Dimanche Matin", time: "08h00 - 11h00", type: "Service Principal" },
    { day: "Dimanche Soir", time: "16h00 - 18h00", type: "Service du Soir" },
    { day: "Mercredi Soir", time: "18h00 - 20h00", type: "Prière et Étude" },
    { day: "Vendredi Soir", time: "18h00 - 20h00", type: "Ministère Jeunesse" }
  ];

  const recentEvents = [
    {
      title: "Conférence Spirituelle",
      date: "15 Janvier 2024",
      description: "Série de messages sur la croissance spirituelle",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop"
    },
    {
      title: "Camp de Jeunes",
      date: "28 Décembre 2023", 
      description: "Retraite de trois jours pour les jeunes",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&h=300&fit=crop"
    },
    {
      title: "Action Caritative",
      date: "20 Décembre 2023",
      description: "Distribution de vivres aux familles démunies",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
    }
  ];

  const ministries = [
    {
      icon: BookOpen,
      title: "École Biblique",
      description: "Formation spirituelle pour tous les âges"
    },
    {
      icon: Users,
      title: "Ministère Jeunesse",
      description: "Programmes dédiés aux jeunes et étudiants"
    },
    {
      icon: Heart,
      title: "Action Sociale",
      description: "Aide aux familles et à la communauté"
    },
    {
      icon: Handshake,
      title: "Groupes de Prière",
      description: "Cercles de prière dans différents quartiers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Cross className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-slate-800">FPVM TENY FIAINANA</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                À propos
              </Link>
              <Link href="/gallery" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Galerie
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
              <Link href="/donation">
                <Button className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-medium px-6">
                  Faire un don
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="backdrop-blur-md bg-white/80 rounded-3xl border border-white/20 shadow-xl p-12 mb-8">
            <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 mb-6 px-4 py-2">
              Église Protestante FPVM
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              FPVM FR-MG<br />
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                TENY FIAINANA
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-600 mb-8">
              ANALAMAHITSY
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3 text-lg font-medium">
                  Découvrir notre église
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="backdrop-blur-md bg-white/60 border-white/30 hover:bg-white/80 px-8 py-3 text-lg font-medium">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Horaires des Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Rejoignez-nous pour nos services de culte et moments de communion fraternelle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceSchedule.map((service, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{service.day}</h3>
                  <p className="text-2xl font-semibold text-violet-600 mb-2">{service.time}</p>
                  <Badge variant="secondary" className="bg-blue-100/80 text-blue-800">
                    {service.type}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50/50 to-violet-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">Notre Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Depuis plus de 35 ans, l'église FPVM FR-MG TENY FIAINANA ANALAMAHITSY 
                sert fidèlement la communauté avec l'amour du Christ. Notre nom "TENY FIAINANA" 
                signifie "Parole de Vie", reflétant notre engagement à proclamer l'Évangile 
                qui transforme les vies.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Nous sommes une famille spirituelle unie dans la foi, l'espoir et l'amour, 
                dédiée à l'adoration de Dieu, à l'édification mutuelle et au service de notre communauté.
              </p>
              <Link href="/about">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white">
                  En savoir plus
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">250+</div>
                    <p className="text-slate-600">Membres Actifs</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-violet-600 mb-2">35+</div>
                    <p className="text-slate-600">Années de Service</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
                    <p className="text-slate-600">Programmes</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-violet-600 mb-2">500+</div>
                    <p className="text-slate-600">Familles Aidées</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Événements Récents</h2>
            <p className="text-lg text-slate-600">
              Découvrez les derniers événements et activités de notre église
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {recentEvents.map((event, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 mb-3">
                    {event.date}
                  </Badge>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                  <p className="text-slate-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="backdrop-blur-md bg-white/60 border-white/30 hover:bg-white/80">
                <ImageIcon className="mr-2 h-5 w-5" />
                Voir toute la galerie
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ministries Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-violet-50/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Nos Ministères</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Découvrez les différents ministères et programmes de notre église qui 
              touchent tous les aspects de la vie spirituelle et communautaire
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <ministry.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{ministry.title}</h3>
                  <p className="text-slate-600">{ministry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-800 mb-6">Visitez-nous</h2>
                <p className="text-lg text-slate-600">
                  Vous êtes les bienvenus dans notre église. Venez nous rencontrer !
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Adresse</h3>
                  <p className="text-slate-600">
                    Analamahitsy<br />
                    Antananarivo, Madagascar
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Téléphone</h3>
                  <p className="text-slate-600">
                    +261 34 XX XXX XX<br />
                    +261 32 XX XXX XX
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600">
                    contact@fpvmtenyfiainana.mg<br />
                    pasteur@fpvmtenyfiainana.mg
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-3">
                    Nous contacter
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Cross className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl text-white">FPVM TENY FIAINANA</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Une église qui transforme des vies par l'amour du Christ depuis 1985.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  À propos
                </Link>
                <Link href="/gallery" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Galerie
                </Link>
                <Link href="/contact" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
                <Link href="/donation" className="block text-slate-300 hover:text-blue-400 transition-colors">
                  Faire un don
                </Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Horaires</h4>
              <div className="space-y-2 text-slate-300">
                <div>Dimanche: 08h-11h, 16h-18h</div>
                <div>Mercredi: 18h-20h</div>
                <div>Vendredi: 18h-20h</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-slate-300">
                <div>Analamahitsy</div>
                <div>Antananarivo, Madagascar</div>
                <div>contact@fpvmtenyfiainana.mg</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; 2024 FPVM FR-MG TENY FIAINANA ANALAMAHITSY. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}