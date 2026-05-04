# User Stories

## US-01 : Accès à l'Espace Privé Élève

**En tant que** parent d'élève (ou élève),
**Je veux** pouvoir me connecter avec un numéro de matricule et un code secret sur le site
**Afin de** consulter en toute confidentialité mon emploi du temps, le programme de mes devoirs et mes notes.

### Critères d'Acceptation :
1. **Interface de connexion :** Le site dispose d'une page "Espace Élève" avec un formulaire demandant le `Matricule` et un `Mot de passe/Code PIN`.
2. **Validation des accès :** Si les identifiants sont incorrects ou inexistants dans la base de données, un message d'erreur clair s'affiche.
3. **Tableau de bord de l'élève :** Une fois connecté, l'utilisateur voit son emploi du temps, ses devoirs et ses notes.
4. **Connexion BDD :** Le système interroge la base de données de l'école via le matricule.
5. **Déconnexion :** L'utilisateur peut fermer sa session de manière sécurisée.

## US-02 : Intégration et Gestion du Carrousel de la Page d'Accueil

**En tant que** visiteur du site,
**Je veux** voir un carrousel d'images animé sur la page d'accueil
**Afin de** découvrir visuellement les infrastructures de l'école de manière attrayante.

### Critères d'Acceptation :
1. **Accès Public :** Le carrousel est visible par tous sans authentification.
2. **Affichage :** Défilement automatique avec transitions fluides.
3. **Mise à jour manuelle :** Modifications effectuées par le développeur via le code source (Contrainte PO).

## US-03 : Contenu Informationnel de la Page d'Accueil

**En tant que** visiteur du site,
**Je veux** lire une présentation de l'école et voir des chiffres clés
**Afin de** comprendre rapidement l'identité et l'excellence du Collège Les Elysées.

### Critères d'Acceptation :
1. **Section Hero :** Zone d'accroche avec le nom de l'école et son slogan.
2. **Chiffres Clés :** Affichage de statistiques (ex: Taux de réussite, effectifs).
3. **Présentation :** Bloc "Qui sommes-nous ?" présentant la mission de l'école.
4. **Design Premium :** Utilisation d'animations fluides au scroll.

## US-04 : Socle Backend et Authentification Sécurisée

**En tant que** parent d'élève ou enseignant,
**Je veux** m'authentifier sur une plateforme sécurisée
**Afin de** protéger mes données personnelles et scolaires contre tout accès non autorisé.

### Critères d'Acceptation :
1. **Infrastructure :** Un véritable serveur backend est opérationnel (Node.js/Express ou équivalent).
2. **Persistence :** Une base de données est connectée pour stocker les utilisateurs (élèves et enseignants).
3. **Sécurité (Hachage) :** Les mots de passe ne sont pas stockés en clair mais hachés (ex: avec `bcrypt`).
4. **Authentification :** Le système de login de l'US-01 est migré pour utiliser cette nouvelle infrastructure réelle au lieu du mock.
5. **Gestion de session :** Utilisation de tokens sécurisés (JWT ou sessions) pour maintenir la connexion.
