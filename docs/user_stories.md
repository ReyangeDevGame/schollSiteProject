# User Stories

## US-01 : Accès à l'Espace Privé Élève (Raffiné depuis l'Icebox)

**En tant que** parent d'élève (ou élève),
**Je veux** pouvoir me connecter avec un numéro de matricule et un code secret sur le site
**Afin de** consulter en toute confidentialité mon emploi du temps, le programme de mes devoirs et mes notes.

### Critères d'Acceptation :
1. **Interface de connexion :** Le site dispose d'une page "Espace Élève" avec un formulaire demandant le `Matricule` et un `Mot de passe/Code PIN` (fusion des idées de l'Icebox pour la sécurité).
2. **Validation des accès :** Si les identifiants sont incorrects ou inexistants dans la base de données, un message d'erreur clair s'affiche ("Identifiants incorrects").
3. **Tableau de bord de l'élève :** Une fois connecté, l'utilisateur atterrit sur un tableau de bord affichant 3 sections distinctes :
# User Stories

## US-01 : Accès à l'Espace Privé Élève (Raffiné depuis l'Icebox)

**En tant que** parent d'élève (ou élève),
**Je veux** pouvoir me connecter avec un numéro de matricule et un code secret sur le site
**Afin de** consulter en toute confidentialité mon emploi du temps, le programme de mes devoirs et mes notes.

### Critères d'Acceptation :
1. **Interface de connexion :** Le site dispose d'une page "Espace Élève" avec un formulaire demandant le `Matricule` et un `Mot de passe/Code PIN` (fusion des idées de l'Icebox pour la sécurité).
2. **Validation des accès :** Si les identifiants sont incorrects ou inexistants dans la base de données, un message d'erreur clair s'affiche ("Identifiants incorrects").
3. **Tableau de bord de l'élève :** Une fois connecté, l'utilisateur atterrit sur un tableau de bord affichant 3 sections distinctes :
   - L'emploi du temps actuel de la classe de l'élève.
   - La liste des devoirs programmés.
   - Les notes récentes / le bulletin.
4. **Connexion BDD :** Le système doit être capable de faire une requête vers la base de données de l'école (ou une API) en utilisant le matricule comme clé primaire pour récupérer ces informations.
5. **Déconnexion :** L'utilisateur doit avoir un bouton pour se déconnecter et fermer sa session de manière sécurisée.

## US-02 : Intégration et Gestion du Carrousel de la Page d'Accueil

**En tant que** visiteur du site,
**Je veux** voir un carrousel d'images animé sur la page d'accueil
**Afin de** découvrir visuellement les infrastructures de l'école de manière attrayante.

### Critères d'Acceptation :
1. **Accès Public :** Le carrousel est visible par tous dès l'arrivée sur la page d'accueil, sans aucune authentification.
2. **Affichage :** Le carrousel fait défiler automatiquement plusieurs images de l'école avec des transitions fluides.
3. **Mise à jour manuelle (Contrainte PO) :** Il n'y a pas d'interface d'administration. Les modifications des images ou des informations affichées sont effectuées exclusivement par le développeur via des mises à jour du code source.
