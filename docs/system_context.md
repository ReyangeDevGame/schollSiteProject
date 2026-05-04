# Contexte du Système : Site Web de l'École

## 1. Vision du Projet
Créer la vitrine en ligne de l'école pour centraliser et faciliter l'accès aux informations. Le site doit offrir une page d'accueil attrayante (avec un carrousel d'images dynamique) présentant l'établissement et permettant de naviguer facilement et intuitivement vers les différents services proposés via des liens dédiés.

## 2. Utilisateurs Cibles
- **Le grand public :** Toute personne cherchant des informations générales sur l'établissement, son fonctionnement ou sa localisation.
- **Les parents d'élèves :** Pour le suivi scolaire, les démarches administratives, l'accès aux plannings et les informations spécifiques à leurs enfants.

## 3. Fonctionnalités Détaillées

### Espace Public (Navigation principale)
- **Accueil :** Section Hero (accroche), Chiffres clés (ex: nombre d'élèves, taux de réussite), et présentation générale de l'établissement.
- **Services :** Informations sur la cantine, le transport scolaire, la bibliothèque, le sport, l'infirmerie et les ateliers.
- **Galerie :** Album photos des infrastructures et des événements de l'école.
- **Actualités :** Flux des dernières nouvelles et annonces.
- **Contact :** Coordonnées complètes, organigramme (Direction, Secrétariat).

### Portail Parents (Espace sécurisé)
- **Connexion sécurisée :** Authentification par matricule (Identifiant de test : `EL-2024-0342`).
- **Emploi du temps :** Consultation de la grille hebdomadaire complète des cours.
- **Devoirs :** Liste des travaux à faire avec dates limites et alertes pour les urgences.
- **Notes et Résultats :** Affichage des notes, moyennes par matière, rang de l'élève et appréciations des professeurs.

## 4. Contraintes et Architecture Technique
- **Backend & BDD :** Mise en place d'un véritable serveur (ex: Node.js, PHP ou Django) avec une base de données persistante pour stocker les informations des élèves, les notes et les devoirs.
- **Sécurité :** Système d'authentification robuste avec hachage sécurisé des mots de passe.
- **Administration :** Création d'un panel administrateur dédié aux enseignants pour la saisie et la mise à jour des notes et du programme de devoirs.
- **Déploiement :** Le site doit être prêt pour un hébergement professionnel (OVH, Infomaniak ou serveur dédié).
