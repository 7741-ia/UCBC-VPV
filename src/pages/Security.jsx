import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield, 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Eye, 
  Lock,
  Users,
  Car,
  Home,
  Smartphone,
  FileText,
  Clock,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Security = () => {
  const [activeEmergency, setActiveEmergency] = useState(null);

  const emergencyProcedures = [
    {
      id: 'medical',
      title: 'Urgence Médicale',
      icon: AlertTriangle,
      color: 'destructive',
      steps: [
        'Appelez immédiatement le 911',
        'Contactez VPV au (555) 123-4567',
        'Ne déplacez pas la personne blessée',
        'Restez avec la victime jusqu\'à l\'arrivée des secours',
        'Fournissez les premiers secours si vous êtes formé'
      ]
    },
    {
      id: 'fire',
      title: 'Incendie',
      icon: AlertTriangle,
      color: 'destructive',
      steps: [
        'Déclenchez l\'alarme incendie',
        'Évacuez immédiatement le bâtiment',
        'Appelez le 911',
        'Rendez-vous au point de rassemblement',
        'N\'utilisez jamais les ascenseurs'
      ]
    },
    {
      id: 'security',
      title: 'Incident de Sécurité',
      icon: Shield,
      color: 'default',
      steps: [
        'Mettez-vous en sécurité',
        'Contactez VPV immédiatement',
        'Observez et mémorisez les détails',
        'Ne confrontez pas l\'agresseur',
        'Attendez l\'arrivée des agents VPV'
      ]
    },
    {
      id: 'suspicious',
      title: 'Activité Suspecte',
      icon: Eye,
      color: 'secondary',
      steps: [
        'Observez à distance sécuritaire',
        'Notez les détails importants',
        'Contactez VPV',
        'Ne suivez pas la personne suspecte',
        'Restez disponible pour témoigner'
      ]
    }
  ];

  const safetyTips = [
    {
      category: 'Personnel',
      icon: Users,
      tips: [
        'Restez vigilant et conscient de votre environnement',
        'Évitez de marcher seul la nuit',
        'Gardez vos objets de valeur en sécurité',
        'Informez quelqu\'un de vos déplacements',
        'Faites confiance à votre instinct'
      ]
    },
    {
      category: 'Résidence',
      icon: Home,
      tips: [
        'Verrouillez toujours votre porte',
        'Ne laissez pas entrer d\'inconnus',
        'Signalez les équipements défaillants',
        'Participez aux réunions de sécurité',
        'Connaissez vos voisins'
      ]
    },
    {
      category: 'Transport',
      icon: Car,
      tips: [
        'Garez-vous dans des zones éclairées',
        'Verrouillez votre véhicule',
        'Ne laissez rien de visible à l\'intérieur',
        'Utilisez les services d\'accompagnement nocturne',
        'Planifiez vos trajets à l\'avance'
      ]
    },
    {
      category: 'Numérique',
      icon: Smartphone,
      tips: [
        'Protégez vos mots de passe',
        'Méfiez-vous des emails suspects',
        'Utilisez des réseaux WiFi sécurisés',
        'Sauvegardez vos données importantes',
        'Signalez les tentatives de phishing'
      ]
    }
  ];

  const emergencyContacts = [
    { service: 'Urgences (Police/Pompiers/SAMU)', number: '911', available: '24h/24' },
    { service: 'VPV - Ligne directe', number: '(555) 123-4567', available: '24h/24' },
    { service: 'Sécurité Campus', number: '(555) 123-4568', available: '24h/24' },
    { service: 'Services médicaux UCBC', number: '(555) 123-4569', available: '8h-18h' },
    { service: 'Accompagnement nocturne', number: '(555) 123-4570', available: '18h-6h' }
  ];

  const campusLocations = [
    { name: 'Poste Principal VPV', location: 'Bâtiment Administration, RDC', hours: '24h/24' },
    { name: 'Poste Résidences', location: 'Complexe Résidentiel A', hours: '18h-8h' },
    { name: 'Poste Bibliothèque', location: 'Bibliothèque Centrale, Entrée', hours: '8h-24h' },
    { name: 'Poste Sportif', location: 'Centre Sportif', hours: '6h-23h' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Sécurité et Prévention</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Votre guide complet pour rester en sécurité sur le campus. Procédures d'urgence, 
              conseils de prévention et contacts utiles.
            </p>
          </div>
        </div>
      </section>

      {/* Contacts d'urgence - Toujours visible */}
      <section className="py-8 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Contacts d'Urgence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="font-bold">Urgences : 911</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="font-bold">VPV : (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="font-bold">Poste Principal : Admin RDC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal avec onglets */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="procedures" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="procedures">Procédures d'Urgence</TabsTrigger>
              <TabsTrigger value="prevention">Conseils Prévention</TabsTrigger>
              <TabsTrigger value="contacts">Contacts</TabsTrigger>
              <TabsTrigger value="locations">Localisation</TabsTrigger>
            </TabsList>

            {/* Procédures d'urgence */}
            <TabsContent value="procedures" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Procédures d'Urgence</h2>
                <p className="text-lg text-muted-foreground">
                  Que faire en cas d'urgence ? Suivez ces procédures étape par étape.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyProcedures.map((procedure) => (
                  <Card 
                    key={procedure.id} 
                    className={`cursor-pointer transition-all ${
                      activeEmergency === procedure.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setActiveEmergency(
                      activeEmergency === procedure.id ? null : procedure.id
                    )}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <procedure.icon className={`h-6 w-6 ${
                          procedure.color === 'destructive' ? 'text-destructive' : 'text-primary'
                        }`} />
                        <CardTitle>{procedure.title}</CardTitle>
                      </div>
                    </CardHeader>
                    {activeEmergency === procedure.id && (
                      <CardContent>
                        <ol className="space-y-2">
                          {procedure.steps.map((step, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <Badge variant="outline" className="mt-0.5 text-xs">
                                {index + 1}
                              </Badge>
                              <span className="text-sm">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Important :</strong> En cas d'urgence vitale, appelez toujours le 911 en premier, 
                  puis contactez VPV pour coordination sur le campus.
                </AlertDescription>
              </Alert>
            </TabsContent>

            {/* Conseils de prévention */}
            <TabsContent value="prevention" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Conseils de Prévention</h2>
                <p className="text-lg text-muted-foreground">
                  Des conseils pratiques pour prévenir les incidents et rester en sécurité.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safetyTips.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <category.icon className="h-6 w-6 text-primary" />
                        <CardTitle>Sécurité {category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Contacts */}
            <TabsContent value="contacts" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Contacts Utiles</h2>
                <p className="text-lg text-muted-foreground">
                  Tous les numéros importants à connaître pour votre sécurité.
                </p>
              </div>

              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{contact.service}</div>
                          <div className="text-2xl font-bold text-primary">{contact.number}</div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">
                            <Clock className="h-3 w-3 mr-1" />
                            {contact.available}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button asChild>
                  <Link to="/contact">Signaler un Incident</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Localisation */}
            <TabsContent value="locations" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Postes VPV sur le Campus</h2>
                <p className="text-lg text-muted-foreground">
                  Localisez les postes VPV les plus proches de vous.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {campusLocations.map((location, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{location.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{location.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <Badge variant="outline">{location.hours}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-muted/50">
                <CardContent className="p-6 text-center">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Plan du Campus</h3>
                  <p className="text-muted-foreground mb-4">
                    Téléchargez le plan détaillé du campus avec l'emplacement de tous les postes VPV 
                    et points d'urgence.
                  </p>
                  <Button variant="outline">
                    <FileText className="h-4 w-4 mr-2" />
                    Télécharger le Plan
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Security;

