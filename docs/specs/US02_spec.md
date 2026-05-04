# Spécification Technique : US-02 - Intégration du Carrousel de la Page d'Accueil

## 1. Description
Conformément aux directives du Product Owner, le site public n'aura pas de panneau d'administration pour la gestion de contenu. Les modifications (ajout/suppression d'images du carrousel) seront réalisées exclusivement par le développeur dans le code source. L'objectif technique est donc de créer un carrousel HTML/CSS/JS performant et facile à maintenir pour le développeur.

## 2. Fichiers à créer/modifier

### Frontend (Interface Utilisateur)
- `public/index.html` : [MODIFIER] Intégration de la structure HTML du carrousel (balises `<img>` ou `div` avec background-image).
- `public/css/carousel.css` : [NOUVEAU] Styles Vanilla CSS pour l'apparence du carrousel, les animations de transition (fade ou slide) et les contrôles (flèches de navigation, puces).
- `public/js/carousel.js` : [NOUVEAU] Script Vanilla JS pour gérer le défilement automatique et les événements de navigation manuelle.
- `public/assets/images/carousel/` : [NOUVEAU] Dossier statique contenant les images physiques du carrousel ajoutées par le développeur.

### Backend (API & Base de données)
- **Aucune modification requise.** Le carrousel fonctionnant de manière purement statique côté client, le backend Node.js et la base de données SQLite ne sont pas sollicités pour cette fonctionnalité.

## 3. Nouvelles librairies nécessaires
- **Aucune.** Tout sera développé en HTML, CSS et JavaScript Vanilla pour maximiser les performances et la simplicité de maintenance. Pas de `multer`, ni de JWT d'administration nécessaires.

## 4. Stratégie de test

### Tests Fonctionnels (Interface E2E)
- **Visibilité publique :** Vérifier que le carrousel s'affiche correctement sur `http://localhost:3000/` sans aucune connexion requise.
- **Défilement automatique :** Vérifier que les images changent automatiquement après un délai défini (ex: 5 secondes).
- **Contrôles manuels :** Cliquer sur les flèches "Précédent" / "Suivant" et s'assurer que le carrousel réagit correctement.
- **Responsivité :** Vérifier le comportement du carrousel sur différentes résolutions (Mobile, Tablette, Desktop).

### Procédure de mise à jour (Test Développeur)
- Le développeur ajoute manuellement une nouvelle image `.jpg` dans `public/assets/images/carousel/`.
- Le développeur ajoute une balise `<img>` correspondante dans `public/index.html`.
- Vérifier que le site met bien à jour l'affichage après un rafraîchissement.

## 5. Dépendances / Contraintes
- Pour optimiser les temps de chargement, le développeur devra veiller à compresser manuellement les images (ex: format `.webp`, poids < 300Ko) avant de les intégrer dans le dossier public.
