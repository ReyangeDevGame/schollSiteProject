# Rétrospective - Sprint 01 [ARCHIVÉ]

## 🌟 Synthèse Globale du Business Analyst
Le Sprint 01 a été un franc succès pour la mise en place des fondations. L'US-01 (Espace Élève) a été livrée avec une interface premium et un backend mocké fonctionnel. L'équipe a fait preuve d'une grande efficacité sur la structuration du projet, la documentation (specs, test plans) et la mise en place du pipeline de base.

**Points de vigilance et Plan d'Action (Pré-Sprint 02) :**
1. **Décision Architecture & BDD (Priorité Haute) :** Une réunion avec le Product Owner est requise immédiatement pour valider définitivement la stack backend (Node.js vs Python vs PHP) et obtenir les spécifications/accès de la base de données réelle de l'école. Le développement ne peut plus continuer de manière optimale sur un "mock".
2. **Amélioration des Process et Scripts (DevOps/QA) :** Améliorer les scripts de lancement locaux (gestion des ports, kill des processus pour libérer la DB SQLite, contournement de la politique d'exécution PowerShell) pour fluidifier le dev et éviter les conflits de rebase Git.
3. **Tests :** Préparer l'infrastructure pour intégrer des tests automatisés E2E au lieu de se reposer uniquement sur les validations manuelles.

---

## Questions Clés pour le Bilan
1. **Succès :** Qu'est-ce qui a bien fonctionné durant ce sprint (collaboration, conception, mise en place des fondations) ?
2. **Difficultés :** Quels ont été les principaux blocages, erreurs inattendues ou défis techniques rencontrés par l'équipe ?
3. **Améliorations :** Quelles sont les 1 ou 2 actions concrètes à mettre en place pour améliorer notre efficacité lors du Sprint 02 ?

---

## Retours de l'Équipe (À remplir)

### 🏗️ Architect
1. **Succès :** La mise en place rapide de la structure du projet et la documentation initiale (contexte système, user stories) ont permis un excellent cadrage. La rédaction de la spécification technique pour l'US-01 s'est déroulée de manière fluide et pose des bases solides pour le développement de l'espace élève.
2. **Difficultés :** L'absence d'une décision ferme concernant la pile technologique backend (Node.js vs Python vs PHP) et la nature de la base de données existante de l'école (MySQL, PostgreSQL) m'a empêché de finaliser complètement l'architecture de l'API pour le moment.
3. **Améliorations :** Il est impératif d'organiser une réunion de validation avec le Product Owner pour acter la stack technologique et obtenir l'accès à la BDD avant le démarrage effectif du prochain Sprint, afin de ne pas bloquer l'équipe de développement.

### 💻 Coder
1. **Succès :** L'implémentation complète de l'US-01 s'est très bien déroulée. L'interface utilisateur premium (glassmorphism, animations) a été rapidement intégrée, et la mise en place d'un backend "mock" avec Node.js et SQLite nous a permis de valider tout le flux de données depuis l'authentification (JWT) jusqu'au tableau de bord de manière autonome.
2. **Difficultés :** Le principal défi a été l'absence de base de données de production. Le développement du mock SQLite a ajouté un peu de travail, et j'ai rencontré un blocage avec les stratégies d'exécution de PowerShell lors du lancement de `npm install`, nécessitant un contournement avec `cmd.exe`.
3. **Améliorations :** Obtenir la validation définitive de la stack (Node.js) et un schéma clair de la base de données réelle de l'école nous permettrait de développer directement les requêtes finales et d'éviter un travail de refactorisation.

### 🧪 QA
1. **Succès :** La création préalable d'un plan de test détaillé (`US01_test_plan.md`) a permis une validation systématique et exhaustive de l'US-01. Les tests d'authentification et de sécurité des routes ont tous été validés avec succès via le navigateur.
2. **Difficultés :** De petits obstacles liés à l'environnement local (serveur déjà en cours d'exécution sur le port 3000, erreurs de politique d'exécution PowerShell) ont ralenti le lancement initial des tests automatisés, forçant à s'adapter pour effectuer la vérification de l'interface.
3. **Améliorations :** Pour le prochain sprint, il serait utile de configurer des scripts de démarrage plus robustes (qui nettoient les ports utilisés par exemple) et potentiellement d'intégrer des tests automatisés de bout en bout (E2E) pour faciliter le travail de QA au lieu de reposer uniquement sur des sessions de tests manuels assistés.
### 🚀 DevOps
1. **Succès :** L'initialisation du dépôt Git local, la mise en place du `.gitignore`, la clôture formelle de l'US-01 (nettoyage de `task.md`, création du `CHANGELOG.md`) et la synchronisation avec le dépôt GitHub distant se sont parfaitement terminées.
2. **Difficultés :** La liaison avec le dépôt GitHub a été compliquée par un conflit d'historique (le dépôt distant n'était pas complètement vide). Cela a généré des problèmes de *rebase*, qui ont été aggravés par le fait que la base de données locale SQLite (`server/school.db`) était verrouillée par le processus Node.js, empêchant un `git reset` propre.
3. **Améliorations :** Pour éviter ces conflits à l'avenir, il faudra privilégier le clonage du dépôt distant dès le départ (avant tout développement local) ou s'assurer que le dépôt distant est créé 100% vide. Il sera aussi nécessaire de couper systématiquement les processus (serveur, base de données) avant des manipulations Git complexes.
