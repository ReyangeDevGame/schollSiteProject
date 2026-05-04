# Plan de Test Manuel : US-01 - Accès à l'Espace Privé Élève

Ce document sert de checklist pour vérifier que la fonctionnalité de connexion et le tableau de bord de l'élève fonctionnent conformément aux spécifications (US-01).

## Environnement de Test
- **URL de l'application :** *À définir (ex: http://localhost:3000)*
- **Comptes de test (Mock data) :**
  - Identifiant (Matricule) valide : `E12345`
  - Code PIN/Mot de passe valide : `1234`
  - Identifiant invalide : `E99999`
  - Code PIN/Mot de passe invalide : `0000`

---

## 📋 Checklist d'Exécution

### 1. Navigation Initiale
- [ ] **TC-01 : Lien vers l'Espace Élève**
  - **Action :** Aller sur la page d'accueil de l'école (`index.html`).
  - **Résultat attendu :** Un bouton ou lien clairement visible mène vers la page de connexion de l'Espace Élève (`espace-eleve.html`).

### 2. Authentification
- [ ] **TC-02 : Connexion Échouée (Identifiants incorrects)**
  - **Action :** Saisir un matricule valide mais un mauvais code PIN, puis valider.
  - **Résultat attendu :** La connexion est refusée. Un message d'erreur clair s'affiche (ex: "Identifiants incorrects").
- [ ] **TC-03 : Connexion Échouée (Matricule inexistant)**
  - **Action :** Saisir un matricule inexistant et n'importe quel mot de passe, puis valider.
  - **Résultat attendu :** La connexion est refusée. Un message d'erreur clair s'affiche.
- [ ] **TC-04 : Connexion Réussie**
  - **Action :** Saisir un matricule valide (`E12345`) et le code PIN valide (`1234`), puis valider.
  - **Résultat attendu :** La connexion réussit. L'utilisateur est redirigé vers le tableau de bord (`dashboard.html`).

### 3. Tableau de Bord (Dashboard)
- [ ] **TC-05 : Affichage des Informations de l'Élève**
  - **Action :** Observer le tableau de bord après une connexion réussie.
  - **Résultat attendu :** Le nom de l'élève connecté est visible.
- [ ] **TC-06 : Vérification des Sections (Emploi du temps, Devoirs, Notes)**
  - **Action :** Vérifier le contenu principal de la page.
  - **Résultat attendu :** Les 3 sections sont présentes et affichent les données mockées récupérées depuis l'API.

### 4. Sécurité et Déconnexion
- [ ] **TC-07 : Déconnexion**
  - **Action :** Cliquer sur le bouton "Déconnexion".
  - **Résultat attendu :** L'utilisateur est déconnecté, sa session (token JWT) est supprimée, et il est redirigé vers la page d'accueil ou de connexion.
- [ ] **TC-08 : Accès protégé (Non-autorisé)**
  - **Action :** Après déconnexion (ou sur un navigateur en navigation privée), essayer d'accéder directement à l'URL du tableau de bord (`dashboard.html`).
  - **Résultat attendu :** L'accès est refusé. L'utilisateur est redirigé automatiquement vers la page de connexion.
