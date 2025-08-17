import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Phone, 
  GraduationCap, 
  Car, 
  Camera, 
  MapPin, 
  Clock,
  AlertTriangle,
  FileText,
  Headphones,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import patrolService from '../assets/patrol-service.jpg';
import emergencyResponse from '../assets/emergency-response.jpg';

const Services = () => {
  const mainServices = [
    {
      icon: Shield,
      title: "Patrouilles de Sécurité",
      description: "Rondes régulières sur l'ensemble du campus pour prévenir les incidents et assurer une présence rassurante.",
      features: ["Patrouilles 24h/24", "Couverture complète du campus", "Intervention rapide", "Rapport d'activité"],
      image: patrolService
    },
    {
      icon: Users,
      title: "Assistance aux Étudiants",
      description: "Aide et accompagnement personnalisé pour tous les membres de la communauté universitaire.",
      features: ["Accompagnement nocturne", "Aide d'urgence", "Support psychologique", "Orientation campus"],
      image: emergencyResponse
    },
    {
      icon: Phone,
      title: "Intervention d'Urgence",
      description: "Réponse immédiate aux situations d'urgence avec coordination des services compétents.",
      features: ["Temps de réponse < 3 min", "Équipe formée", "Coordination services", "Suivi post-incident"],
      image: emergencyResponse
    },
    {
      icon: GraduationCap,
      title: "Prévention et Sensibilisation",
      description: "Programmes éducatifs et sessions de formation pour sensibiliser à la sécurité.",
      features: ["Formations sécurité", "Ateliers prévention", "Campagnes sensibilisation", "Guides pratiques"],
      image: patrolService
    }
  ];

  const additionalServices = [
    {
      icon: Car,
      title: "Patrouilles Motorisées",
      description: "Surveillance mobile pour une couverture étendue du campus"
    },
    {
      icon: Camera,
      title: "Surveillance Vidéo",
      description: "Système de vidéosurveillance moderne et efficace"
    },
    {
      icon: MapPin,
      title: "Bornes d'Urgence",
      description: "Points d'appel d'urgence répartis sur tout le campus"
    },
    {
      icon: Clock,
      title: "Service 24h/24",
      description: "Disponibilité permanente pour votre sécurité"
    },
    {
      icon: AlertTriangle,
      title: "Gestion des Incidents",
      description: "Traitement professionnel de tous types d'incidents"
    },
    {
      icon: FileText,
      title: "Rapports de Sécurité",
      description: "Documentation complète et suivi des interventions"
    },
    {
      icon: Headphones,
      title: "Centre d'Appel",
      description: "Réception et traitement des appels d'urgence"
    },
    {
      icon: Smartphone,
      title: "Application Mobile",
      description: "App VPV pour signalements et alertes en temps réel"
    }
  ];

  const serviceHours = [
    { service: "Patrouilles", hours: "24h/24, 7j/7" },
    { service: "Centre d'appel", hours: "24h/24, 7j/7" },
    { service: "Accompagnement", hours: "18h00 - 06h00" },
    { service: "Formation", hours: "Lun-Ven 9h00-17h00" }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nos Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une gamme complète de services de sécurité professionnels pour assurer votre protection 
              et votre tranquillité d'esprit sur le campus de l'UCBC
            </p>
          </div>
        </div>
      </section>

      {/* Services principaux */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services Principaux</h2>
            <p className="text-lg text-muted-foreground">
              Nos quatre piliers de service pour votre sécurité
            </p>
          </div>

          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  <div className={`aspect-video lg:aspect-auto overflow-hidden ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className={`p-6 lg:p-8 ${
                    index % 2 === 1 ? 'lg:col-start-1' : ''
                  }`}>
                    <div className="flex items-center mb-4">
                      <service.icon className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild>
                      <Link to="/contact">Demander ce service</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services additionnels */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services Complémentaires</h2>
            <p className="text-lg text-muted-foreground">
              Des services additionnels pour une sécurité complète
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Horaires de service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Horaires de Service</h2>
              <p className="text-lg text-muted-foreground">
                Nos horaires d'intervention pour chaque type de service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceHours.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold">{item.service}</div>
                      <Badge variant="outline">{item.hours}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Card className="bg-destructive text-destructive-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-2">
                    <Phone className="h-6 w-6 mr-2" />
                    <span className="text-xl font-bold">Urgences : 911</span>
                  </div>
                  <p className="opacity-90">
                    En cas d'urgence, contactez immédiatement le 911 ou notre ligne directe
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'Assistance ?</h2>
          <p className="text-lg mb-8 opacity-90">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question 
            ou demande de service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Nous Contacter</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/security">Guide de Sécurité</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

