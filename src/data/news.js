// Données d'actualités - Vous pouvez ajouter de nouveaux articles ici
export const newsData = [
  {
    id: 1,
    title: "Formation de Sécurité pour les Nouveaux Étudiants",
    excerpt: "Les VPV organisent une session de formation obligatoire pour sensibiliser les nouveaux étudiants aux procédures de sécurité du campus.",
    content: `
      <p>Dans le cadre de l'accueil des nouveaux étudiants, l'équipe VPV organise une session de formation complète sur les procédures de sécurité du campus.</p>
      
      <h3>Programme de la formation :</h3>
      <ul>
        <li>Présentation des services VPV</li>
        <li>Procédures d'urgence</li>
        <li>Numéros importants à retenir</li>
        <li>Conseils de sécurité personnelle</li>
        <li>Visite des postes de sécurité</li>
      </ul>
      
      <p>Cette formation est obligatoire pour tous les nouveaux étudiants et se déroule pendant ...</p>
    `,
    image: "/src/assets/news-1.jpg",
    date: "2025-01-15",
    category: "Formation",
    author: "Équipe VPV"
  },
  {
    id: 2,
    title: "Prestation de serments de nouveaux elements de la brigade de vpv",
    excerpt: "La revolution de la structure",
    content: `
      <p>L'UCBC est entrain d'acceuillir les nouveaux elements de vpv .</p>
      
      <h3>Installation de nouveau elements :</h3>
      <ul>
        <li>12 elements de la brigades</li>
        <li>.......................................</li>
        <li>......................................</li>
        <l>........................</li>
      </ul>
      
      <p>...........................................................</p>
    `,
    image: "/src/assets/news-2.jpg",
    date: "2025-08-15",
    category: "integration",
    author: "Direction VPV"
  },
  {
    id: 3,
    title: "Bilan Sécurité 2024 : Une Année Réussie",
    excerpt: "Les statistiques de sécurité 2024 montrent une diminution significative des incidents sur le campus grâce aux efforts des VPV.",
    content: `
      <p>L'année 2024 marque une étape importante dans l'amélioration de la sécurité sur le campus de l'UCBC.</p>
      
      <h3>Chiffres clés 2024 :</h3>
      <ul>
        <li>-25% d'incidents de sécurité par rapport à 2023</li>
        <li>98% de satisfaction des étudiants</li>
        <li>Temps de réponse moyen : 3 minutes</li>
        <li>1,200 interventions préventives</li>
      </ul>
      
      <p>Ces résultats témoignent de l'efficacité des mesures mises en place et de l'engagement de toute l'équipe VPV.</p>
    `,
    image: "/src/assets/equipe.jpg",
    date: "2025-01-05",
    category: "Bilan",
    author: "Chef de Service VPV"
  },
  {
    id: 4,
    title: "présentation",
    excerpt: "j'aimerai vous presenter notre general en chef de la brigade de vpv.",
    content: `
      <p>cet annee nous avons y la chance d'etre diriger par des chef formidable.</p>
      
      <h3>Chiffres clés 2024 :</h3>
      <ul>
        <li>-25% d'incidents de sécurité par rapport à 2023</li>
        <li>98% de satisfaction des étudiants</li>
        <li>Temps de réponse moyen : 3 minutes</li>
        <li>1,200 interventions préventives</li>
      </ul>
      
      <p>Ces résultats témoignent de l'efficacité des mesures mises en place et de l'engagement de toute l'équipe VPV.</p>
    `,
    image: "/src/assets/sacca.jpg",
    date: "2025-01-05",
    category: "Bilan",
    author: "Chef de Service VPV"
  }

];

// Fonction pour ajouter une nouvelle actualité
export const addNews = (newsItem) => {
  const newId = Math.max(...newsData.map(item => item.id)) + 1;
  const newItem = {
    ...newsItem,
    id: newId,
    date: new Date().toISOString().split('T')[0]
  };
  newsData.unshift(newItem);
  return newItem;
};

// Fonction pour obtenir les actualités par catégorie
export const getNewsByCategory = (category) => {
  if (!category || category === 'all') return newsData;
  return newsData.filter(item => item.category.toLowerCase() === category.toLowerCase());
};

// Fonction pour obtenir une actualité par ID
export const getNewsById = (id) => {
  return newsData.find(item => item.id === parseInt(id));
};

