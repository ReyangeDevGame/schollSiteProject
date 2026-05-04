# Rétrospective - Sprint 03

## Questions Clés pour le Bilan
1. **Succès :** L'implémentation du contenu de la page d'accueil (US-03) et la définition des nouvelles contraintes techniques (Backend réel, Auth sécurisée) sont-elles satisfaisantes ?
2. **Difficultés :** Avons-nous rencontré des blocages dans l'intégration des nouveaux contenus ou dans la projection vers une architecture backend plus complexe ?
3. **Améliorations :** Quelles mesures prendre pour assurer une transition fluide du frontend statique vers l'implémentation du backend réel au prochain sprint ?

---

## Retours de l'Équipe (À remplir)

### 🏗️ Architect
1. **Succès :** La transition vers une architecture backend réelle a été parfaitement cadrée. La spécification technique de l'US-04 pose des bases solides : utilisation de Bcrypt pour la sécurité, JWT pour la gestion des sessions et une structure Express modulaire. Cela nous permet de quitter sereinement le mode "mock" pour une application professionnelle.
2. **Difficultés :** Le défi majeur a été de projeter l'intégration d'un système d'authentification robuste sans alourdir le frontend déjà en place. La gestion de la migration des anciens identifiants (PINs en clair) vers des mots de passe hachés a nécessité une réflexion particulière sur l'intégrité des données.
3. **Améliorations :** Pour le Sprint 04, il est impératif d'utiliser un fichier `.env` pour sécuriser les clés secrètes. Je préconise également la mise en place d'un script de "seed" pour initialiser la base de données avec les nouveaux comptes sécurisés afin de faciliter le travail du Coder et du QA.

### 💻 Coder
1. **Succès :** La refonte visuelle (US-03) a été un succès majeur ; le passage d'un style "Glassmorphism" sombre à un design institutionnel clair est très réussi et respecte les maquettes du PO. Côté backend (US-04), l'implémentation de Bcrypt et JWT rend l'application réellement sécurisée. J'ai également réussi à centrer la page de connexion à la demande du PO et à corriger rapidement un blocage de défilement sur l'accueil.
2. **Difficultés :** Une difficulté technique inattendue est survenue avec le bloc `db.serialize()` de SQLite qui ne gère pas nativement les fonctions `async`. Cela a empêché la création initiale de la table `users` car le hachage des mots de passe (promesse) ne bloquait pas l'exécution. J'ai dû corriger cela en utilisant `bcrypt.hashSync()` pour l'initialisation de la base et en forçant une réinitialisation du fichier `school.db`.
3. **Améliorations :** Pour les prochaines évolutions, je recommande de systématiser l'utilisation de méthodes synchrones (ou de bibliothèques SQLite gérant les promesses comme `sqlite`) pour tout ce qui touche à l'initialisation système. Il faut également être très vigilant sur les propriétés CSS globales (comme `overflow`) qui peuvent impacter tout le site lors d'une refonte.

### 🧪 QA
1. **Succès :** La mise en place de plans de test distincts pour le frontend (US-03) et le backend (US-04) a permis une validation rigoureuse des deux aspects. J'ai pu confirmer manuellement que les mots de passe sont désormais hachés en base (sécurité renforcée) et que le système JWT bloque effectivement les accès non autorisés aux données élèves.
2. **Difficultés :** L'absence d'interface d'administration a rendu la vérification de l'état interne de la base de données (hachage, rôles) assez fastidieuse, nécessitant l'exécution de scripts de vérification en ligne de commande.
3. **Améliorations :** Pour le prochain sprint, je suggère d'automatiser les tests de régression sur l'API (ex: via Postman ou un script de test Node) pour valider instantanément que les routes restent protégées après chaque modification du middleware d'authentification.

### 🚀 DevOps
1. **Succès :** Le passage à la version `v0.2.0` s'est fait sans accroc majeur. La structuration du `CHANGELOG.md` est désormais exemplaire et permet de suivre précisément l'évolution du projet (Frontend vs Backend). L'intégration de nouvelles dépendances sensibles (`bcryptjs`, `jsonwebtoken`) a été gérée proprement dans le dépôt.
2. **Difficultés :** La gestion de la base de données SQLite (`school.db`) reste délicate sous Windows : les verrous de fichiers imposés par le processus Node.js obligent à couper manuellement le serveur avant certaines manipulations Git. L'absence de variables d'environnement (`.env`) commence à se faire sentir pour la sécurité des secrets JWT.
3. **Améliorations :** Pour le Sprint 04, il est urgent de : (1) mettre en place un fichier `.env.example` pour standardiser la configuration locale, et (2) créer un script `npm run clean-port` qui libère automatiquement le port 3000 pour éviter les erreurs `EADDRINUSE` fréquentes lors des redémarrages.
