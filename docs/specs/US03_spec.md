# Spécification Technique : US-03 - Refonte Visuelle de la Page d'Accueil

## 1. Description
Cette spécification détaille la transformation de la page d'accueil pour adopter un design professionnel et institutionnel, incluant une barre de navigation, une section hero, des statistiques et une présentation de l'établissement.

## 2. Éléments Visuels (Design System)
- **Couleurs** : 
  - Primaire : Bleu Marine (#1e3a8a)
  - Secondaire : Bleu Ciel (#3b82f6)
  - Arrière-plan : Blanc / Gris très clair (#f8fafc)
  - Accents : Jaune Or / Ambre (optionnel pour les boutons secondaires)
- **Typographie** : Inter (Sans-serif) pour le corps et les titres, avec une emphase sur la hiérarchie.

## 3. Fichiers à modifier

### [index.html](file:///c:/projet%20personnels/site%20ecole/public/index.html)
- **Navigation** : Logo (nom de l'école), Accueil, Services, Galerie, Actualités, Contact, Bouton "Espace Parents".
- **Hero** : Titre "Bienvenue au Collège Les Elysées", sous-titre inspirant, boutons "Nos services" et "Portail parents".
- **Stats** : 4 colonnes (680 Élèves, 42 Enseignants, 24 Classes, 96% Réussite).
- **Notre établissement** : Titre, sous-titre, et 2 cartes ("Excellence académique", "Épanouissement personnel").

### [style.css](file:///c:/projet%20personnels/site%20ecole/public/css/style.css)
- Mise à jour des variables CSS (`:root`).
- Nouveaux styles pour `.navbar`, `.hero`, `.stats-section`, `.about-section`.
- Refonte des cartes et des boutons.

## 4. Stratégie de test
- Vérifier l'alignement et l'espacement sur Desktop.
- Vérifier l'empilement des colonnes sur Mobile (Statistiques et Cartes).
- S'assurer que le carrousel est toujours fonctionnel sous la section Hero ou Galerie.
