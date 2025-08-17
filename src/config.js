// Configuration modifiable pour le site VPV
// Vous pouvez modifier ces valeurs pour personnaliser le site

export const siteConfig = {
  // Informations générales
  siteName: "VPV - Value Protection Volunteer",
  siteDescription: "Service de sécurité universitaire de l'UCBC",
  
  // Contact d'urgence
  emergencyPhone: "+2430000000",
  mainPhone: "+243999999",
  email: "danielamisi774@gmail.com",
  
  // Adresse
  address: {
    street: "123 Campus Drive",
    city: "Ville de beni",
    state: "UC",
    zip: "12345"
  },
  
  // Réseaux sociaux
  socialMedia: {
    facebook: "https://facebook.com/vpv-ucbc",
    twitter: "https://twitter.com/vpv_ucbc",
    instagram: "https://instagram.com/vpv_ucbc"
  },
  
  // Horaires de service
  hours: {
    weekdays: "24h/24, 7j/7",
    emergency: "Disponible en permanence"
  },
  
  // Couleurs du thème (optionnel - pour personnalisation avancée)
  theme: {
    primary: "#1e3a8a", // Bleu marine
    secondary: "#dc2626", // Rouge urgence
    accent: "#059669", // Vert sécurité
    neutral: "#1f2937" // Gris anthracite
  }
};

// Textes modifiables
export const content = {
  hero: {
    title: "VPV - Value Protection Volunteer",
    subtitle: "Votre sécurité, notre priorité",
    description: "Service de police universitaire dédié à maintenir l'ordre et à garantir la protection des étudiants et de leurs biens sur le campus de l'UCBC."
  },
  
  about: {
    mission: "Notre mission est d'assurer un environnement sûr et sécurisé pour tous les membres de la communauté universitaire de l'UCBC.",
    vision: "Être reconnus comme le service de sécurité universitaire de référence, alliant professionnalisme et proximité avec les étudiants."
  },
  
  services: [
    {
      title: "Patrouilles de Sécurité",
      description: "Rondes régulières sur le campus pour prévenir les incidents et assurer une présence rassurante.",
      icon: "shield-check"
    },
    {
      title: "Assistance aux Étudiants",
      description: "Aide et accompagnement des étudiants en cas de besoin, 24h/24 et 7j/7.",
      icon: "users"
    },
    {
      title: "Intervention d'Urgence",
      description: "Réponse rapide aux situations d'urgence et coordination avec les services compétents.",
      icon: "phone"
    },
    {
      title: "Prévention et Sensibilisation",
      description: "Programmes éducatifs pour sensibiliser la communauté aux questions de sécurité.",
      icon: "graduation-cap"
    }
  ]
};

