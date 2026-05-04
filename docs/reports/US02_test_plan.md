# Plan de Test Manuel : US-02 - Intégration et Gestion du Carrousel de la Page d'Accueil

Ce document sert de checklist pour s'assurer que le carrousel d'images de la page d'accueil respecte les attentes (US-02), notamment sa visibilité publique, son animation et la procédure de mise à jour manuelle par le développeur.

## Environnement de Test
- **URL de l'application :** http://localhost:3000/
- **Date d'exécution :** 2026-05-04
- **Testeur :** QA + Product Owner (validation manuelle)
- **Résultat global : ✅ TOUS LES TESTS PASSÉS**

---

## 📋 Checklist d'Exécution

### 1. Visibilité Publique
- [x] **TC-01 : Accès sans authentification** ✅ PASS
  - **Action :** Ouvrir le navigateur en mode navigation privée et se rendre sur la page d'accueil (`index.html`).
  - **Résultat attendu :** Le carrousel est immédiatement visible en haut de la page. Aucune connexion n'est demandée.
  - **Résultat obtenu :** Le carrousel s'affiche correctement sur la page d'accueil, aucune authentification requise.

### 2. Défilement Automatique
- [x] **TC-02 : Changement d'image automatique** ✅ PASS
  - **Action :** Observer le carrousel sans toucher à la souris pendant plus de 5 secondes.
  - **Résultat attendu :** L'image change toute seule avec une transition fluide au bout du délai défini (5s).
  - **Résultat obtenu :** Le défilement automatique fonctionne avec un intervalle de 5 secondes et une animation fade fluide.
- [x] **TC-03 : Pause au survol (Hover)** ✅ PASS
  - **Action :** Placer le curseur de la souris sur l'image du carrousel et attendre 6 à 7 secondes.
  - **Résultat attendu :** Le défilement automatique s'arrête. L'image ne change plus tant que le curseur est sur le carrousel. En retirant le curseur, le défilement automatique reprend.
  - **Résultat obtenu :** La pause au survol et la reprise fonctionnent comme prévu.

### 3. Contrôles Manuels
- [x] **TC-04 : Flèches de navigation (Précédent / Suivant)** ✅ PASS
  - **Action :** Cliquer manuellement sur les flèches du carrousel.
  - **Résultat attendu :** L'image change immédiatement (soit l'image précédente, soit l'image suivante) avec la bonne animation.
  - **Résultat obtenu :** Les flèches et les puces (dots) fonctionnent correctement avec la navigation dans les deux sens.

### 4. Responsivité (Responsive Design)
- [x] **TC-05 : Affichage multi-écrans** ✅ PASS
  - **Action :** Redimensionner la fenêtre du navigateur (Mobile, Tablette, Bureau) à l'aide des outils de développement (F12).
  - **Résultat attendu :** Le carrousel s'adapte à la largeur de l'écran. Les images ne sont pas déformées (ratio conservé) et les éventuelles flèches restent cliquables sur mobile.
  - **Résultat obtenu :** Le carrousel s'adapte correctement grâce au `aspect-ratio: 16/9` et `object-fit: cover`.

### 5. Mise à jour par le Développeur (Test de Contrainte PO)
- [x] **TC-06 : Ajout d'une nouvelle image manuellement** ✅ PASS
  - **Action :** 
    1. Ajouter une image dans `public/assets/images/carousel/`.
    2. Ajouter la balise `<img>` correspondante dans `public/index.html`.
    3. Rafraîchir la page d'accueil.
  - **Résultat attendu :** La nouvelle image est intégrée au cycle du carrousel sans nécessiter de backend ou d'interface d'administration.
  - **Résultat obtenu :** La procédure manuelle fonctionne comme documenté dans la spécification.
