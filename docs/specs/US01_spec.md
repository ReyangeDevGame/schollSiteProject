# Spécification Technique : US-01 - Accès à l'Espace Privé Élève

## 1. Description
Cette fonctionnalité permet aux parents ou élèves de se connecter avec un numéro de matricule et un code secret pour consulter en toute confidentialité l'emploi du temps, les devoirs programmés et les notes récentes.

## 2. Fichiers à créer/modifier

### Frontend (Interface Utilisateur)
- `public/index.html` (ou la page d'accueil) : [MODIFIER] Ajouter un lien/bouton de navigation vers l'Espace Élève.
- `public/espace-eleve.html` : [NOUVEAU] Page contenant le formulaire de connexion (Matricule + Code PIN/Mot de passe).
- `public/dashboard.html` : [NOUVEAU] Tableau de bord affichant les 3 sections (Emploi du temps, Devoirs, Notes) et le bouton de déconnexion.
- `public/css/style.css` : [MODIFIER] Ajouter les styles Premium pour les formulaires de connexion et le tableau de bord.
- `public/js/auth.js` : [NOUVEAU] Logique de validation du formulaire côté client et appel à l'API de connexion.
- `public/js/dashboard.js` : [NOUVEAU] Logique pour récupérer et afficher dynamiquement les données de l'élève depuis l'API.

### Backend (API & Base de données)
*(La structure dépend de la stack finale, exemple basé sur Node.js)*
- `server/server.js` : [NOUVEAU] Point d'entrée de l'API (endpoints `/api/login`, `/api/student/data`).
- `server/db.js` : [NOUVEAU] Module de connexion à la base de données existante de l'école.
- `server/routes/auth.js` : [NOUVEAU] Logique d'authentification.
- `server/routes/student.js` : [NOUVEAU] Logique de récupération des informations (Notes, Devoirs, Emploi du temps) par matricule.

## 3. Nouvelles librairies nécessaires

> **Note :** La pile technique exacte (Backend) reste à définir. En supposant une architecture légère basée sur **Node.js** pour l'API et **Vanilla JS / HTML / CSS** pour le frontend, voici les librairies pressenties :

- **Frontend :**
  - Aucune dépendance externe stricte. L'utilisation de l'API `fetch` native et de Vanilla CSS est privilégiée pour la performance.
- **Backend (Node.js) :**
  - `express` : Pour créer le serveur web et l'API REST.
  - `cors` : Pour autoriser les requêtes du frontend vers le backend.
  - `jsonwebtoken` (JWT) : Pour gérer la session de l'utilisateur de manière sécurisée après la connexion.
  - Driver de Base de données (ex: `mysql2`, `pg` pour PostgreSQL, ou `sqlite3`) en fonction du moteur de base de données de l'école.

## 4. Stratégie de test

### Tests d'Intégration et API
- **Scénario d'échec :** Envoyer une requête `POST /api/login` avec un faux matricule ou code PIN. Vérifier que l'API renvoie une erreur 401.
- **Scénario de succès :** Envoyer de bons identifiants, vérifier que l'API renvoie un token JWT valide.
- **Accès protégé :** Tenter d'accéder à `/api/student/data` sans token, vérifier le refus d'accès.

### Tests Fonctionnels (Interface E2E)
- Tenter de se connecter avec des informations incorrectes et vérifier l'affichage en rouge du message d'erreur "Identifiants incorrects" sur l'interface.
- Se connecter avec succès, atterrir sur le Dashboard et vérifier que les 3 sections se chargent correctement.
- Cliquer sur le bouton "Déconnexion" et vérifier le retour vers la page d'accueil ou de connexion, avec effacement du token local.

## 5. Dépendances / Prérequis
- Il est impératif d'obtenir l'accès ou la documentation de la structure de la **Base de Données existante de l'école** (Noms des tables pour les élèves, devoirs, notes et emplois du temps).
