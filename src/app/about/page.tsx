import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, Cross, Users, Globe, Calendar, BookOpen, Star, Award } from "lucide-react"

export default function AboutPage() {
  const leaders = [
    {
      name: "Pasteur Jean RAKOTO",
      role: "Pasteur Principal",
      experience: "15 ans d'expérience",
      image: "/api/placeholder/200/200",
      description: "Pasteur dévoué servant avec passion notre communauté depuis 2009"
    },
    {
      name: "Mme Marie ANDRY",
      role: "Directrice de l'École du Dimanche",
      experience: "8 ans d'expérience",
      image: "/api/placeholder/200/200",
      description: "Responsable de l'éducation spirituelle des enfants et des jeunes"
    },
    {
      name: "M. Paul RABE",
      role: "Président du Conseil d'Église",
      experience: "10 ans d'expérience",
      image: "/api/placeholder/200/200",
      description: "Leader communautaire engagé dans la gestion et l'administration"
    }
  ]

  const timeline = [
    {
      year: "1985",
      event: "Fondation de l'église par le Pasteur Samuel HENRI",
      description: "Début avec 15 membres fondateurs dans une petite salle d'Analamahitsy"
    },
    {
      year: "1992",
      event: "Construction du premier sanctuaire",
      description: "Édification d'un bâtiment pouvant accueillir 150 personnes"
    },
    {
      year: "2005",
      event: "Expansion du ministère jeunesse",
      description: "Lancement de programmes spéciaux pour les jeunes et les étudiants"
    },
    {
      year: "2015",
      event: "Rénovation et agrandissement",
      description: "Modernisation du sanctuaire avec une capacité de 300 personnes"
    },
    {
      year: "2020",
      event: "Ministère digital",
      description: "Adaptation aux services en ligne et ministère numérique"
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Amour",
      description: "L'amour de Dieu au centre de toutes nos actions et relations communautaires"
    },
    {
      icon: Cross,
      title: "Foi",
      description: "Une foi vivante basée sur les Écritures et la grâce du Seigneur Jésus-Christ"
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Une famille spirituelle unie dans la fraternité et l'entraide mutuelle"
    },
    {
      icon: Globe,
      title: "Mission",
      description: "Évangélisation et service à la communauté locale et internationale"
    }
  ]

  const activities = [
    {
      icon: BookOpen,
      title: "École Biblique",
      description: "Formation biblique pour tous les âges chaque dimanche"
    },
    {
      icon: Users,
      title: "Groupes de Prière",
      description: "Cercles de prière hebdomadaires dans différents quartiers"
    },
    {
      icon: Heart,
      title: "Action Sociale",
      description: "Aide aux familles démunies et programmes communautaires"
    },
    {
      icon: Star,
      title: "Ministère Jeunesse",
      description: "Activités spéciales pour les jeunes et programmes d'éducation"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-violet-50">
      {/* Hero Section */}
      <section className="relative py-24 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-violet-600/10"></div>
        <div className="relative max-w-4xl mx-auto">
          <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <Cross className="h-8 w-8 text-blue-600 mr-3" />
                <Badge variant="secondary" className="bg-blue-100/80 text-blue-800 px-4 py-2">
                  Église Protestante
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                FPVM FR-MG TENY FIAINANA
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-8">
                ANALAMAHITSY
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."
              </p>
              <p className="text-lg text-slate-500 mt-4 font-medium">
                Jean 3:16
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Church History Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Notre Histoire
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Depuis plus de 35 ans, notre église sert fidèlement la communauté d'Analamahitsy 
              et des environs avec l'amour du Christ.
            </p>
          </div>

          <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Notre Fondation</h3>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                L'église FPVM FR-MG TENY FIAINANA ANALAMAHITSY a été fondée en 1985 par le Pasteur Samuel HENRI, 
                avec la vision de créer une communauté chrétienne dynamique et engagée dans la région d'Analamahitsy. 
                Ce qui a commencé comme un petit groupe de 15 croyants s'est transformé en une église florissante 
                de plus de 250 membres actifs.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Notre nom "TENY FIAINANA" signifie "Parole de Vie", reflétant notre engagement à proclamer 
                l'Évangile qui transforme les vies et apporte l'espoir éternel en Jésus-Christ.
              </p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <div className="grid gap-6">
            {timeline.map((item, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/80 text-lg px-4 py-2 font-bold">
                        {item.year}
                      </Badge>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">{item.event}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-50/50 to-violet-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Notre Équipe de Direction
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Des leaders dévoués et expérimentés qui guident notre communauté 
              avec sagesse et compassion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Users className="h-16 w-16 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{leader.name}</h3>
                  <Badge variant="secondary" className="mb-4 bg-blue-100/80 text-blue-800">
                    {leader.role}
                  </Badge>
                  <p className="text-slate-600 mb-4">{leader.description}</p>
                  <p className="text-sm text-violet-600 font-medium">{leader.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Vision */}
            <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                  <Star className="h-6 w-6 text-violet-600 mr-3" />
                  Notre Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  Être une église qui transforme des vies par l'amour du Christ, 
                  équipe les saints pour le ministère, et influence positivement 
                  notre communauté et au-delà.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-violet-50 p-6 rounded-lg">
                  <p className="text-slate-700 italic text-center">
                    "Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, 
                    du Fils et du Saint-Esprit, et enseignez-leur à observer tout ce que je vous ai prescrit."
                  </p>
                  <p className="text-blue-600 font-medium text-center mt-3">
                    - Matthieu 28:19-20
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-3" />
                Nos Valeurs Fondamentales
              </h3>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="backdrop-blur-md bg-white/80 border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center">
                          <value.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h4>
                          <p className="text-slate-600">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-violet-50/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Engagement Communautaire
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Nous croyons que l'église doit être active dans la communauté, 
              servant les autres avec l'amour pratique du Christ.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {activities.map((activity, index) => (
              <Card key={index} className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-violet-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <activity.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{activity.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Notre Impact dans la Communauté
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">250+</div>
                  <p className="text-slate-600">Membres Actifs</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-violet-600 mb-2">15</div>
                  <p className="text-slate-600">Programmes Communautaires</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-slate-600">Familles Aidées Annuellement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="backdrop-blur-md bg-gradient-to-r from-blue-50/80 to-violet-50/80 border-white/20 shadow-xl">
            <CardContent className="p-12">
              <Cross className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Rejoignez Notre Famille Spirituelle
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Que vous soyez à la recherche d'une communauté chrétienne authentique, 
                d'un lieu de croissance spirituelle, ou simplement curieux de découvrir 
                l'amour de Dieu, vous êtes les bienvenus chez nous.
              </p>
              <div className="bg-white/60 p-6 rounded-lg">
                <p className="text-blue-800