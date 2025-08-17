import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Send
} from 'lucide-react';
import { siteConfig } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    priority: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        type: '',
        priority: '',
        location: '',
        message: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: [
        { label: 'Urgences', value: siteConfig.emergencyPhone, highlight: true },
        { label: 'Standard', value: siteConfig.mainPhone },
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        { label: 'Contact général', value: siteConfig.email },
        { label: 'Signalements', value: 'incidents@vpv-ucbc.edu' },
      ]
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        { 
          label: 'Poste principal', 
          value: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}` 
        },
      ]
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        { label: 'Service d\'urgence', value: siteConfig.hours.emergency },
        { label: 'Accueil standard', value: 'Lun-Ven 8h00-18h00' },
      ]
    }
  ];

  const incidentTypes = [
    'Urgence médicale',
    'Incident de sécurité',
    'Activité suspecte',
    'Vol ou vandalisme',
    'Harcèlement',
    'Problème technique',
    'Demande d\'accompagnement',
    'Autre'
  ];

  const priorityLevels = [
    { value: 'urgent', label: 'Urgent - Intervention immédiate', color: 'destructive' },
    { value: 'high', label: 'Élevée - Dans l\'heure', color: 'warning' },
    { value: 'medium', label: 'Moyenne - Dans la journée', color: 'default' },
    { value: 'low', label: 'Faible - Quand possible', color: 'secondary' }
  ];

  const campusLocations = [
    'Bâtiment Administration',
    'Bibliothèque Centrale',
    'Résidences Universitaires',
    'Centre Sportif',
    'Cafétéria Principale',
    'Laboratoires Sciences',
    'Parking Principal',
    'Autre (préciser dans le message)'
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Nous Contacter</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Besoin d'aide ou souhaitez signaler un incident ? Notre équipe VPV est là pour vous. 
              Contactez-nous 24h/24 et 7j/7.
            </p>
          </div>
        </div>
      </section>

      {/* Alerte urgence */}
      <section className="py-4 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <Alert className="border-destructive-foreground/20">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-center">
              <strong>URGENCE :</strong> En cas d'urgence vitale, appelez immédiatement le <strong>+243 000 000 000</strong> 
              puis contactez VPV au <strong>{siteConfig.mainPhone}</strong>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Signaler un Incident ou Demander de l'Aide</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire pour nous faire part de votre demande. 
                  Nous vous répondrons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <Alert className="mb-6 border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Votre message a été envoyé avec succès. Notre équipe vous contactera rapidement.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Pour vous recontacter rapidement"
                    />
                  </div>

                  {/* Type d'incident */}
                  <div>
                    <Label htmlFor="type">Type d'incident ou de demande *</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type" />
                      </SelectTrigger>
                      <SelectContent>
                        {incidentTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Priorité */}
                  <div>
                    <Label htmlFor="priority">Niveau de priorité *</Label>
                    <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez la priorité" />
                      </SelectTrigger>
                      <SelectContent>
                        {priorityLevels.map(level => (
                          <SelectItem key={level.value} value={level.value}>
                            {level.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Localisation */}
                  <div>
                    <Label htmlFor="location">Localisation sur le campus</Label>
                    <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Où s'est produit l'incident ?" />
                      </SelectTrigger>
                      <SelectContent>
                        {campusLocations.map(location => (
                          <SelectItem key={location} value={location}>{location}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Description détaillée *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Décrivez l'incident ou votre demande en détail..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le Signalement
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Contacts */}
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <info.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        <div className="text-sm text-muted-foreground">{detail.label}</div>
                        <div className={`font-medium ${detail.highlight ? 'text-destructive text-lg' : ''}`}>
                          {detail.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Réseaux sociaux */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Suivez-nous</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href={siteConfig.socialMedia.facebook} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a 
                    href={siteConfig.socialMedia.twitter} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a 
                    href={siteConfig.socialMedia.instagram} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Carte du campus (placeholder) */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Localisation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-sm">Plan du Campus</div>
                    <div className="text-xs">Poste Principal VPV</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <MapPin className="mr-2 h-4 w-4" />
                  Voir sur Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

