# Rétrospective - Sprint 02

## Questions Clés pour le Bilan
1. **Succès :** Qu'est-ce qui a bien fonctionné dans la livraison du carrousel et de l'intégration visuelle de la page d'accueil ?
2. **Difficultés :** Quels obstacles techniques ou organisationnels avons-nous rencontrés (compatibilité cross-browser, performance des images, coordination entre les rôles) ?
3. **Améliorations :** Quelles décisions (choix de stack, processus Git, scripts de lancement) devons-nous figer ou améliorer avant d'attaquer les fonctionnalités plus complexes des sprints suivants ?

---

## Retours de l'Équipe (À remplir)

### 🏗️ Architect
1. **Succès :** Le choix architectural de rester 100% Frontend (HTML/CSS Vanilla + JS pur, sans appel backend ni dépendance externe) pour le carrousel était exactement la bonne décision. La séparation des préoccupations (`carousel.css` dédié + `carousel.js` dédié) rend l'ensemble très lisible et facile à faire évoluer. La contrainte "gestion par le développeur uniquement" a permis d'éviter toute complexité inutile (pas de multer, pas de JWT, pas de BDD) et a été parfaitement respectée dans la spec.
2. **Difficultés :** Le principal point de tension architectural est apparu lors de la coordination : la spec indiquait un système de slides basé sur `opacity` avec une classe `.active`, mais le Coder a finalisé avec un système basé sur `display: none / block` et une animation `fade`. Les deux approches sont valides, mais cette divergence illustre le besoin d'une validation explicite de la spec avant le début du codage pour éviter ce type d'écart.
3. **Améliorations :** Pour les prochains sprints, je propose de systématiser une étape de "sign-off" entre Architect et Coder avant que le développement ne commence. Cela permettra de geler les conventions (nomenclature des classes CSS, stratégie d'animation) et d'éviter les refactorisations en cours de route.

### 💻 Coder
1. **Succès :** L'implémentation du carrousel a été rapide et propre grâce à la décision de rester en Vanilla JS/CSS sans librairie externe. Le défilement automatique (avec pause au survol), les flèches de navigation et les points indicateurs fonctionnent parfaitement. J'ai également profité de ce sprint pour personnaliser l'identité visuelle complète du site avec le vrai nom de l'établissement (*Collège Les Elysées*, Abidjan, Commune d'Abobo, rue T213), en mettant à jour les titres, méta-descriptions, la navbar et le badge de connexion de manière cohérente sur les 3 pages.
2. **Difficultés :** Le téléchargement automatique des images placeholder via PowerShell a échoué (erreur 404 Unsplash). Il a fallu gérer ce cas manuellement. Par ailleurs, une balise `</div>` en trop a été générée lors du patch de `index.html` et a dû être corrigée immédiatement — ce type de régression HTML est difficile à détecter sans un outil de lint ou de validation automatique.
3. **Améliorations :** Mettre en place un validateur HTML (ex: `htmlhint`) dans le pipeline de dev pour détecter les balises orphelines avant même que le QA ne teste. Pour les images, préparer un set d'images placeholder locales dans le repo dès le départ pour ne pas dépendre d'une URL externe lors du développement.

### 🧪 QA
1. **Succès :** Le plan de test manuel (`US02_test_plan.md`) a été rédigé en amont et a couvert exhaustivement les 6 cas de test critiques : visibilité publique, défilement automatique, pause au survol, contrôles manuels (flèches + puces), responsivité et procédure de mise à jour développeur. Tous les tests ont été **validés avec succès** par le Product Owner, confirmant la conformité totale avec les critères d'acceptation de l'US-02.
2. **Difficultés :** L'exécution automatisée des tests via le navigateur de test a rencontré des problèmes techniques (erreurs d'accès fichiers, sessions corrompues) qui ont empêché de générer un rapport de test automatisé complet. La validation a dû être confirmée manuellement par le PO. De plus, l'image `slide1.jpg` était absente du dossier `carousel/` (seuls `slide2.jpg` et `slide3.jpg` étaient présents), ce qui aurait pu provoquer une image cassée — ce point mérite une vérification.
3. **Améliorations :** Pour les prochains sprints, je recommande : (1) intégrer un outil de test E2E léger (ex: Playwright ou Puppeteer) pour fiabiliser les tests automatisés et ne plus dépendre uniquement de la validation manuelle, et (2) ajouter une étape de vérification d'intégrité des assets (toutes les images référencées dans le HTML existent bien dans le dossier) dans le processus de QA.

### 🚀 DevOps
1. **Succès :** La clôture du sprint a été parfaitement fluide. Le `CHANGELOG.md` a été structuré avec un vrai système de versionnement (`[Unreleased]` / `[v0.1.0]`), les commits sont propres et descriptifs (`feat(US-02): ...`), et le `push` vers GitHub s'est exécuté sans aucun conflit — preuve que les leçons du Sprint 01 (tuer les processus Node avant toute manipulation Git, s'assurer d'un dépôt distant vide) ont porté leurs fruits.
2. **Difficultés :** Aucun blocage majeur côté pipeline ce sprint. Le point de vigilance reste l'absence d'un pipeline CI/CD : les vérifications (lint HTML/JS, intégrité des assets) sont entièrement manuelles et reposent sur la discipline de l'équipe. La régression HTML (balise `</div>` en trop) mentionnée par le Coder et l'image manquante (`slide1.jpg`) relevée par le QA auraient pu être détectées automatiquement.
3. **Améliorations :** Pour le Sprint 03, mettre en place a minima : (1) un hook `pre-commit` via `husky` + `htmlhint` pour valider la structure HTML avant chaque commit, et (2) un script de vérification d'intégrité des assets (`node scripts/check-assets.js`) qui s'assure que toutes les images référencées dans le HTML existent physiquement dans le dépôt.
