const packageJson = require('../package.json');

// Détecte l'environnement de déploiement
const isGitHubPages = window.location.hostname.endsWith('.github.io');
const isNetlify = window.location.hostname.endsWith('.netlify.app');

// URLs de la page d'accueil pour chaque environnement
const homepages = {
  githubPages: 'https://developor45ju.github.io/kasa-oc-p7/', // Remplacez par vos informations
  netlify: 'https://agence-kasa.netlify.app/' // Remplacez par votre URL Netlify
};

// Obtient l'URL correcte en fonction de l'environnement
const homepageUrl = isGitHubPages ? packageJson.homepages = homepages.githubPages : (isNetlify ? packageJson.homepages = homepages.netlify : null);

// Redirige si nécessaire
if (homepageUrl && window.location.pathname === '/') {
  window.location.href = homepageUrl;
}
