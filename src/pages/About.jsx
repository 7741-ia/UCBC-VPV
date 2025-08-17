import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Target, Eye, Heart, Users, Award } from 'lucide-react';
import { content } from '../config';
import teamPhoto from '../assets/team-photo.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Sécurité",
      description: "La sécurité de tous est notre priorité absolue"
    },
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Nous agissons avec empathie et respect envers chacun"
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Nous maintenons une relation de confiance avec les étudiants"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans tous nos services"
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Création du service VPV",
      description: "Mise en place du premier service de sécurité universitaire à l'UCBC"
    },
    {
      year: "2015",
      title: "Expansion des services",
      description: "Extension de la couverture à l'ensemble du campus et ajout de nouveaux services"
    },
    {
      year: "2020",
      title: "Modernisation technologique",
      description: "Intégration de nouvelles technologies de surveillance et d'intervention"
    },
    {
      year: "2025",
      title: "Innovation continue",
      description: "Lancement de l'application mobile et des services numériques"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">À Propos de VPV</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre histoire, notre mission et les valeurs qui guident notre action quotidienne 
              pour la sécurité du campus de l'UCBC
            </p>
          </div>
        </div>
      </section>

      {/* Mission et Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold">Notre Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  {content.about.mission}
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold">Notre Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  {content.about.vision}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={teamPhoto} 
                alt="Équipe VPV"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
            <p className="text-lg text-muted-foreground">
              Les principes fondamentaux qui guident notre action quotidienne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire et Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Histoire</h2>
            <p className="text-lg text-muted-foreground">
              15 ans d'évolution au service de la sécurité universitaire
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne de temps */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary"></div>
              
              {timeline.map((event, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Point sur la timeline */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                  
                  {/* Contenu */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{event.year}</Badge>
                        </div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{event.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">VPV en Chiffres</h2>
            <p className="text-lg opacity-90">
              Quelques statistiques qui témoignent de notre engagement
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-sm opacity-80">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-80">Service continu</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Agents formés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-sm opacity-80">Étudiants protégés</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

