import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Phone, GraduationCap, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { siteConfig, content } from '../config';
import { newsData } from '../data/news';
import heroBanner from '../assets/hero-banner.jpg';

const Home = () => {
  const recentNews = newsData.slice(0, 3);
  
  const stats = [
    { label: 'Interventions/mois', value: '150+', icon: Shield },
    { label: 'Temps de réponse', value: '3 min', icon: Phone },
    { label: 'Étudiants protégés', value: '15,000+', icon: Users },
    { label: 'Satisfaction', value: '98%', icon: GraduationCap },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBanner})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-2 opacity-90">
            {content.hero.subtitle}
          </p>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            {content.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Signaler un Incident
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/services">
                Nos Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services de sécurité pour assurer votre protection sur le campus
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.map((service, index) => {
              const IconComponent = {
                'shield-check': Shield,
                'users': Users,
                'phone': Phone,
                'graduation-cap': GraduationCap
              }[service.icon] || Shield;

              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <IconComponent className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/services">
                Voir Tous les Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Actualités récentes */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Actualités Récentes</h2>
            <p className="text-lg text-muted-foreground">
              Restez informé des dernières nouvelles et mises à jour du service VPV
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/news/${article.id}`}>
                      Lire la suite
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link to="/news">
                Toutes les Actualités
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact d'urgence */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">En Cas d'Urgence</h2>
          <p className="text-lg mb-6 opacity-90">
            Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-xl font-bold">
              <Phone className="h-6 w-6" />
              <span>Urgence : {siteConfig.emergencyPhone}</span>
            </div>
            <div className="flex items-center space-x-2 text-lg">
              <Phone className="h-5 w-5" />
              <span>Standard : {siteConfig.mainPhone}</span>
            </div>
          </div>
          <div className="mt-6">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Nous Localiser
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

