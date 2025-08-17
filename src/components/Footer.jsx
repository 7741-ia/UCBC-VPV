import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { siteConfig } from '../config';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <div>
                <div className="text-lg font-bold">VPV</div>
                <div className="text-sm opacity-80">Value Protection Volunteer</div>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Service de sécurité universitaire dédié à la protection des étudiants et du campus de l'UCBC.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100 transition-opacity">Accueil</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity">À Propos</Link></li>
              <li><Link to="/news" className="opacity-80 hover:opacity-100 transition-opacity">Actualités</Link></li>
              <li><Link to="/services" className="opacity-80 hover:opacity-100 transition-opacity">Services</Link></li>
              <li><Link to="/security" className="opacity-80 hover:opacity-100 transition-opacity">Sécurité</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Urgence : {siteConfig.emergencyPhone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.mainPhone}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <div>
                  <div>{siteConfig.address.street}</div>
                  <div>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Horaires et réseaux sociaux */}
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <p className="text-sm opacity-80 mb-4">{siteConfig.hours.weekdays}</p>
            <p className="text-sm opacity-80 mb-4">{siteConfig.hours.emergency}</p>
            
            <h4 className="font-semibold mb-2">Suivez-nous</h4>
            <div className="flex space-x-2">
              <a href={siteConfig.socialMedia.facebook} className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={siteConfig.socialMedia.twitter} className="opacity-80 hover:opacity-100 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.socialMedia.instagram} className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2025 VPV - Value Protection Volunteer, UCBC. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

