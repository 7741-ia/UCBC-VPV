# Site Web VPV - Value Protection Volunteer

## Description
Site web moderne et professionnel pour le service de sécurité universitaire VPV (Value Protection Volunteer) de l'UCBC. Le site comprend toutes les fonctionnalités demandées : actualités, services, informations de contact, et bien plus.

## Fonctionnalités
- ✅ Page d'accueil avec hero section et statistiques
- ✅ Section actualités avec système de filtrage et pagination
- ✅ Pages de services détaillées
- ✅ Guide de sécurité et procédures d'urgence
- ✅ Formulaire de contact et signalement d'incidents
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Mode sombre/clair
- ✅ Navigation moderne avec menu hamburger mobile
- ✅ Bannière d'alerte configurable
- ✅ Footer complet avec liens sociaux

## Structure du Projet
```
vpv-website/
├── public/                 # Fichiers publics
├── src/
│   ├── assets/            # Images et assets
│   ├── components/        # Composants React réutilisables
│   ├── pages/            # Pages du site
│   ├── data/             # Données (actualités, etc.)
│   ├── config.js         # ⭐ CONFIGURATION MODIFIABLE
│   └── App.jsx           # Application principale
├── package.json          # Dépendances
└── README.md            # Ce fichier
```

## 🔧 Configuration Facile

### Fichier `src/config.js`
Ce fichier contient toutes les informations modifiables du site :

```javascript
export const siteConfig = {
  // Informations générales
  siteName: "VPV - Value Protection Volunteer",
  
  // Contact d'urgence
  emergencyPhone: "911",
  mainPhone: "+1 (555) 123-4567",
  email: "vpv@ucbc.edu",
  
  // Adresse
  address: {
    street: "123 Campus Drive",
    city: "University City",
    state: "UC",
    zip: "12345"
  },
  
  // Réseaux sociaux
  socialMedia: {
    facebook: "https://facebook.com/vpv-ucbc",
    twitter: "https://twitter.com/vpv_ucbc",
    instagram: "https://instagram.com/vpv_ucbc"
  }
};
```

### Fichier `src/data/news.js`
Pour ajouter de nouvelles actualités :

```javascript
// Ajoutez un nouvel objet dans le tableau newsData
{
  id: 4, // Numéro unique
  title: "Titre de votre actualité",
  excerpt: "Résumé court de l'actualité",
  content: "Contenu HTML complet de l'article",
  image: "/src/assets/votre-image.jpg",
  date: "2025-01-20",
  category: "Nouvelle Catégorie",
  author: "best"
}
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou pnpm

### Installation
```bash
# Installer les dépendances
npm install
# ou
pnpm install

# Démarrer le serveur de développement
npm run dev
# ou
pnpm run dev
```

Le site sera accessible sur `http://localhost:5173`

### Build pour Production
```bash
# Créer la version de production
npm run build
# ou
pnpm run build
```

Les fichiers de production seront dans le dossier `dist/`

## 📁 Ajout de Contenu

### Ajouter des Images
1. Placez vos images dans `src/assets/`
2. Importez-les dans vos composants :
```javascript
import monImage from '../assets/mon-image.jpg';
```

### Ajouter des Actualités
1. Ouvrez `src/data/news.js`
2. Ajoutez un nouvel objet dans le tableau `newsData`
3. L'actualité apparaîtra automatiquement sur le site

### Modifier les Textes
1. Ouvrez `src/config.js`
2. Modifiez les valeurs dans l'objet `content`
3. Les changements seront appliqués automatiquement

## 🌐 Hébergement

### Hébergement Statique (Recommandé)
Le site peut être hébergé sur :
- **Netlify** (gratuit) - Glissez-déposez le dossier `dist/`
- **Vercel** (gratuit) - Connectez votre repository GitHub
- **GitHub Pages** (gratuit) - Pour les projets open source
- **Firebase Hosting** (gratuit jusqu'à certaines limites)

### Hébergement Traditionnel
1. Exécutez `npm run build`
2. Uploadez le contenu du dossier `dist/` sur votre serveur web
3. Configurez votre serveur pour servir `index.html` pour toutes les routes

## 🎨 Personnalisation Avancée

### Couleurs
Les couleurs sont définies dans `src/App.css` :
```css
:root {
  --primary: oklch(0.205 0.15 258.8); /* Bleu marine VPV */
  --accent: oklch(0.4 0.15 142.5); /* Vert sécurité */
  --destructive: oklch(0.577 0.245 27.325); /* Rouge urgence */
}
```

### Composants UI
Le site utilise shadcn/ui pour les composants. Vous pouvez :
- Modifier les styles dans `src/App.css`
- Ajouter de nouveaux composants avec `npx shadcn@latest add [component]`

## 📱 Responsive Design
Le site est entièrement responsive et s'adapte à :
- 📱 Mobile (< 768px)
- 📱 Tablette (768px - 1199px)
- 💻 Desktop (≥ 1200px)

## 🔒 Sécurité
- Toutes les données sont statiques (pas de base de données)
- Formulaires configurés pour l'envoi par email
- Pas de données sensibles stockées côté client

## 📞 Support
Pour toute question technique :
1. Consultez la documentation React : https://react.dev
2. Documentation Vite : https://vitejs.dev
3. Documentation Tailwind CSS : https://tailwindcss.com

## 📄 Licence
Ce projet est créé spécifiquement pour VPV - UCBC. Tous droits réservés.

---

**Note importante :** Ce site est prêt à l'emploi et peut être hébergé immédiatement. Modifiez simplement les fichiers de configuration pour personnaliser le contenu selon vos besoins.

