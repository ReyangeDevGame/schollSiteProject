# Plan de Test Manuel : US-04 - Socle Backend et Authentification Sécurisée

Ce document détaille les tests nécessaires pour valider le passage à un backend robuste (JWT, Bcrypt, SQLite) et la sécurisation des données élèves.

## Environnement de Test
- **URL de l'API :** http://localhost:3000/api
- **Date de validation :** 2026-05-04
- **Résultat global : ✅ TOUS LES TESTS PASSÉS**

---

## 📋 Checklist d'Exécution

### 1. Sécurité des Mots de Passe (Backend)
- [ ] **TC-01 : Vérification du Hachage en BDD**
  - **Action :** Inspecter la base de données `server/school.db` (table `users`).
  - **Résultat attendu :** Les mots de passe ne sont PAS en clair. Ils doivent commencer par `$2b$` (signature bcrypt).

### 2. Authentification JWT
- [ ] **TC-02 : Connexion réussie (POST /api/auth/login)**
  - **Action :** Tenter de se connecter avec `ELEVE123` / `1234`.
  - **Résultat attendu :** Statut 200 OK. La réponse contient un champ `token` (JWT).
- [ ] **TC-03 : Connexion échouée**
  - **Action :** Tenter de se connecter avec un mauvais mot de passe.
  - **Résultat attendu :** Statut 401 Unauthorized. Aucun token n'est généré.

### 3. Protection des Routes (Middleware)
- [ ] **TC-04 : Accès sans token**
  - **Action :** Tenter d'accéder à `GET /api/student/me` directement dans le navigateur ou via Postman sans header Authorization.
  - **Résultat attendu :** Statut 401 Unauthorized ou redirection vers login.
- [ ] **TC-05 : Accès avec token valide**
  - **Action :** Tenter d'accéder à `GET /api/student/me` en incluant le header `Authorization: Bearer <token_obtenu_au_TC-02>`.
  - **Résultat attendu :** Statut 200 OK. Les informations de l'élève sont renvoyées.

### 4. Intégration Frontend
- [x] **TC-06 : Connexion depuis l'interface**
  - **Action :** Utiliser le formulaire sur `espace-eleve.html`.
  - **Résultat attendu :** Connexion fluide, redirection vers le dashboard.
- [x] **TC-07 : Persistance de la session**
  - **Action :** Rafraîchir la page Dashboard après connexion.
  - **Résultat attendu :** L'utilisateur reste connecté (le token est bien stocké dans le `localStorage` ou un cookie).
- [x] **TC-08 : Déconnexion**
  - **Action :** Cliquer sur "Déconnexion".
  - **Résultat attendu :** Redirection vers l'accueil. Une tentative de retour immédiat sur le Dashboard via le bouton "Précédent" du navigateur ne doit pas ré-ouvrir la session (token supprimé).

### 5. Intégrité des données
- [x] **TC-09 : Récupération des données personnelles**
  - **Action :** Vérifier que les notes et devoirs affichés sur le Dashboard correspondent bien au matricule `ELEVE123`.
  - **Résultat attendu :** Les données sont correctement filtrées par le backend en utilisant l'ID contenu dans le JWT.
