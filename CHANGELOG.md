# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/).

## [Unreleased]

### Ajouté
- (En attente de la prochaine User Story)

---

## [v0.2.0] - 2026-05-04

### Ajouté
- **US-02 : Carrousel de la Page d'Accueil**
  - Spécifications techniques pour la fonctionnalité (`docs/specs/US02_spec.md`).
  - Structure HTML du carrousel intégrée dans `public/index.html`.
  - Styles premium animés dans `public/css/carousel.css`.
  - Logique de défilement automatique et manuel en Vanilla JS.
- **US-03 : Contenu Informationnel de la Page d'Accueil**
  - Implémentation des sections Hero, Statistiques et "À propos".
  - Refonte du design system pour une identité visuelle "Collège Les Elysées".
  - Animations fluides au scroll.
- **US-04 : Socle Backend et Authentification Sécurisée**
  - Migration vers un stockage persistant avec SQLite.
  - Hachage des mots de passe avec Bcrypt.
  - Authentification par JSON Web Tokens (JWT).
  - Refactorisation complète de l'API (routes/middleware/db).

---

## [v0.1.0] - 2026-05-04

### Ajouté
- **US-01 : Accès à l'Espace Privé Élève**
  - Spécifications techniques pour la fonctionnalité (`docs/specs/US01_spec.md`).
  - Interface frontend pour la page de connexion (`public/espace-eleve.html`).
  - Backend API avec Node.js et Express pour l'authentification simulée (`server/server.js`, routes).
  - Plan de test manuel pour l'assurance qualité (`docs/reports/US01_test_plan.md`).
  - Validation QA réussie (Tests fonctionnels passés avec succès).
- Initialisation du dépôt Git et synchronisation avec GitHub (`ReyangeDevGame/schollSiteProject`).
- Mise en place du `.gitignore` (exclusion de `node_modules`, `.env`, fichiers `.db`).
- Rétrospective du Sprint 01 archivée (`docs/retrospectives/SPRINT_01.md`).
