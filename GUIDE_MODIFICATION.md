# 📝 Guide de Modification - Site VPV

## 🎯 Zones Modifiables Principales

### 1. Informations de Contact (`src/config.js`)

```javascript
// Modifiez ces valeurs selon vos besoins
export const siteConfig = {
  // Numéros de téléphone
  emergencyPhone: "911",           // ← Changez ici
  mainPhone: "+1 (555) 123-4567",  // ← Changez ici
  email: "vpv@ucbc.edu",           // ← Changez ici
  
  // Adresse complète
  address: {
    street: "123 Campus Drive",     // ← Changez ici
    city: "University City",        // ← Changez ici
    state: "UC",                   // ← Changez ici
    zip: "12345"                   // ← Changez ici
  },
  
  // Liens réseaux sociaux
  socialMedia: {
    facebook: "https://facebook.com/vpv-ucbc",    // ← Changez ici
    twitter: "https://twitter.com/vpv_ucbc",      // ← Changez ici
    instagram: "https://instagram.com/vpv_ucbc"   // ← Changez ici
  }
};
```

### 2. Textes Principaux (`src/config.js`)

```javascript
export const content = {
  hero: {
    title: "VPV - Value Protection Volunteer",     // ← Titre principal
    subtitle: "Votre sécurité, notre priorité",   // ← Sous-titre
    description: "Service de police universitaire..." // ← Description
  },
  
  about: {
    mission: "Notre mission est d'assurer...",     // ← Mission
    vision: "Être reconnus comme le service..."    // ← Vision
  }
};
```

### 3. Actualités (`src/data/news.js`)

#### Ajouter une Nouvelle Actualité
```javascript
// Ajoutez cet objet au début du tableau newsData
{
  id: 4, // Numéro unique (incrémentez)
  title: "Votre Titre d'Actualité",
  excerpt: "Résumé court qui apparaît sur les cartes",
  content: `
    <p>Votre contenu HTML complet ici.</p>
    <h3>Sous-titre</h3>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
    </ul>
  `,
  image: "/src/assets/votre-image.jpg", // Placez l'image dans src/assets/
  date: "2025-01-20", // Format YYYY-MM-DD
  category: "Votre Catégorie",
  author: "Nom de l'Auteur"
}
```

#### Modifier une Actualité Existante
1. Ouvrez `src/data/news.js`
2. Trouvez l'actualité par son `id`
3. Modifiez les champs souhaités
4. Sauvegardez le fichier

### 4. Images

#### Remplacer les Images Existantes
1. Placez votre nouvelle image dans `src/assets/`
2. Donnez-lui le même nom que l'ancienne OU
3. Modifiez les références dans les fichiers :
   - `src/pages/Home.jsx` pour l'image hero
   - `src/data/news.js` pour les images d'actualités

#### Ajouter de Nouvelles Images
1. Copiez l'image dans `src/assets/`
2. Importez-la dans votre composant :
```javascript
import nouvelleImage from '../assets/nouvelle-image.jpg';
```

### 5. Couleurs du Site (`src/App.css`)

```css
:root {
  /* Couleur principale (bleu marine) */
  --primary: oklch(0.205 0.15 258.8);
  
  /* Couleur d'accent (vert sécurité) */
  --accent: oklch(0.4 0.15 142.5);
  
  /* Couleur d'urgence (rouge) */
  --destructive: oklch(0.577 0.245 27.325);
}
```

## 🔄 Modifications Courantes

### Changer le Numéro d'Urgence
1. Ouvrez `src/config.js`
2. Modifiez `emergencyPhone: "911"` → `emergencyPhone: "VOTRE_NUMERO"`

### Ajouter un Nouveau Service
1. Ouvrez `src/config.js`
2. Ajoutez un objet dans le tableau `services` :
```javascript
{
  title: "Nouveau Service",
  description: "Description du service",
  icon: "shield-check" // Nom de l'icône Lucide
}
```

### Modifier les Horaires
1. Ouvrez `src/config.js`
2. Modifiez l'objet `hours` :
```javascript
hours: {
  weekdays: "Lun-Ven 8h00-18h00",  // ← Changez ici
  emergency: "24h/24, 7j/7"        // ← Changez ici
}
```

### Changer le Logo
1. Remplacez `src/assets/vpv-logo.png` par votre logo
2. Gardez le même nom de fichier OU
3. Modifiez les références dans `src/components/Header.jsx`

## 📱 Bannière d'Alerte

Pour modifier le message d'alerte en haut du site :
1. Ouvrez `src/App.jsx`
2. Trouvez la ligne :
```javascript
message="Nouveau : Application mobile VPV disponible sur App Store et Google Play"
```
3. Remplacez le texte par votre message

Pour désactiver la bannière :
1. Dans `src/App.jsx`, changez :
```javascript
const [showAlert, setShowAlert] = useState(true);
```
en :
```javascript
const [showAlert, setShowAlert] = useState(false);
```

## 🎨 Personnalisation Avancée

### Ajouter une Nouvelle Page
1. Créez un fichier dans `src/pages/` (ex: `NouvellePage.jsx`)
2. Ajoutez la route dans `src/App.jsx` :
```javascript
<Route path="/nouvelle-page" element={<NouvellePage />} />
```
3. Ajoutez le lien dans `src/components/Header.jsx`

### Modifier le Footer
Ouvrez `src/components/Footer.jsx` et modifiez les sections selon vos besoins.

## ⚠️ Points d'Attention

### Fichiers à NE PAS Modifier (sauf expertise technique)
- `package.json`
- `vite.config.js`
- `tailwind.config.js`
- Fichiers dans `src/components/ui/`

### Sauvegarde Recommandée
Avant toute modification importante :
1. Faites une copie du dossier complet
2. Ou utilisez Git pour versionner vos changements

### Test Après Modification
Après chaque modification :
1. Sauvegardez le fichier
2. Vérifiez que le site fonctionne toujours
3. Testez sur mobile et desktop

## 🆘 En Cas de Problème

### Le Site Ne Se Charge Plus
1. Vérifiez la console du navigateur (F12)
2. Regardez les erreurs dans le terminal
3. Restaurez la dernière version fonctionnelle

### Erreur de Syntaxe JavaScript
- Vérifiez les virgules, accolades et guillemets
- Utilisez un éditeur avec coloration syntaxique

### Image Ne S'Affiche Pas
- Vérifiez le chemin de l'image
- Assurez-vous que l'image est dans `src/assets/`
- Vérifiez l'extension du fichier (.jpg, .png, etc.)

---

**💡 Conseil :** Commencez par de petites modifications et testez à chaque étape !

