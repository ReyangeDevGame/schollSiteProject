# Spécification Technique : US-04 - Socle Backend et Authentification Sécurisée

## 1. Description
L'objectif de cette story est de transformer le prototype initial en une application robuste avec un véritable socle backend persistant et une authentification sécurisée. Nous passons d'un stockage de mots de passe en clair à un système de hachage (bcrypt) et d'une session simple à une gestion par JSON Web Tokens (JWT).

## 2. Architecture Technique

### Backend (Node.js / Express)
- **Framework :** Express.js
- **Base de données :** SQLite (via `sqlite3`)
- **Sécurité :** `bcryptjs` pour le hachage des mots de passe.
- **Authentification :** `jsonwebtoken` (JWT) pour la gestion des sessions sans état.

### Structure du projet (Refactorisation)
```
server/
├── routes/
│   ├── auth.js      # Inscription, Connexion, Déconnexion
│   ├── students.js  # Données élèves (emploi du temps, notes, devoirs)
│   └── admin.js     # Gestion (futur)
├── middleware/
│   └── auth.js      # Vérification du token JWT
├── db.js            # Configuration et schéma de la BDD
└── server.js        # Point d'entrée
```

## 3. Schéma de la Base de Données

### Table `users` (Nouveauté)
Permet de centraliser l'authentification pour différents rôles (Élèves, Enseignants, Admin).
- `id` : INTEGER (PK)
- `username` : TEXT (UNIQUE) -- Le matricule pour les élèves
- `password_hash` : TEXT
- `role` : TEXT ('student', 'teacher', 'admin')
- `created_at` : DATETIME

### Migration des données existantes
Les données de la table `students` (matricule, name, class) seront conservées, mais le champ `pin` sera supprimé au profit de la liaison avec la table `users`.

## 4. Endpoints API

### Auth
- `POST /api/auth/login` : Vérifie les identifiants, génère et renvoie un JWT.
- `POST /api/auth/logout` : (Optionnel côté serveur avec JWT, principalement géré côté client).

### Student (Protégé par JWT)
- `GET /api/student/me` : Renvoie les infos de l'élève connecté.
- `GET /api/student/schedule` : Renvoie l'emploi du temps.
- `GET /api/student/homework` : Renvoie les devoirs.
- `GET /api/student/grades` : Renvoie les notes.

## 5. Stratégie de Sécurité
1. **Hachage :** Utilisation de `bcrypt.hash()` avec un salt factor de 10.
2. **Tokens :** Les JWT seront signés avec une `SECRET_KEY` stockée dans une variable d'environnement.
3. **Protection :** Un middleware `authenticateToken` interceptera les requêtes sur les routes privées pour vérifier la validité du JWT dans le header `Authorization: Bearer <token>`.

## 6. Stratégie de Test

### Tests Unitaires (Backend)
- Vérifier que `bcrypt.compare()` fonctionne correctement entre un mot de passe clair et son hash en base.
- Vérifier la génération et le décodage d'un JWT.

### Tests d'Intégration
- Tenter une connexion avec de mauvais identifiants (Attendu : 401 Unauthorized).
- Tenter d'accéder à `/api/student/me` sans token (Attendu : 401 Unauthorized).
- Se connecter avec `ELEVE123` et vérifier que le token permet d'accéder à ses notes.

## 7. Fichiers à créer / modifier
- `[MODIFY] server/db.js` : Mise à jour du schéma (table `users`) et hachage des mots de passe des données de test.
- `[NEW] server/middleware/auth.js` : Création du middleware de protection des routes.
- `[NEW] server/routes/auth.js` : Implémentation de la logique de login avec JWT.
- `[MODIFY] server/routes/student.js` : Sécurisation des routes avec le middleware.
- `[MODIFY] package.json` : Ajout de la dépendance `bcryptjs`.
