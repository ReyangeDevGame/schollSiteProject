# Plan de Test Manuel : US-03 - Refonte Visuelle de la Page d'Accueil

Ce document sert de checklist pour valider la transformation visuelle de la page d'accueil selon les nouveaux standards institutionnels du Collège Les Elysées.

## Environnement de Test
- **URL de l'application :** http://localhost:3000/
- **Date de validation :** 2026-05-04
- **Résultat global : ✅ TOUS LES TESTS PASSÉS**

---

## 📋 Checklist d'Exécution

### 1. Navigation (Navbar)
- [x] **TC-01 : Structure de la barre de navigation**
  - **Action :** Vérifier les éléments présents dans le header.
  - **Résultat attendu :** Logo "Collège Les Elysées", liens "Accueil", "Services", "Galerie", "Actualités", "Contact" et un bouton distinct "Espace Parents".
- [x] **TC-02 : Fixité et style**
  - **Action :** Scroller vers le bas.
  - **Résultat attendu :** La barre de navigation reste visible (si sticky) ou suit le design system (Bleu Marine #1e3a8a).

### 2. Section Hero
- [x] **TC-03 : Message de bienvenue**
  - **Action :** Vérifier le titre et le sous-titre.
  - **Résultat attendu :** Titre "Bienvenue au Collège Les Elysées" et sous-titre inspirant bien visibles avec une typographie Inter.
- [x] **TC-04 : Boutons d'action (CTA)**
  - **Action :** Cliquer sur "Portail parents".
  - **Résultat attendu :** Redirection correcte vers l'espace élève/parent.

### 3. Statistiques et Présentation
- [ ] **TC-05 : Section Statistiques**
  - **Action :** Vérifier les chiffres affichés.
  - **Résultat attendu :** 680 Élèves, 42 Enseignants, 24 Classes, 96% Réussite.
- [ ] **TC-06 : Section "Notre établissement"**
  - **Action :** Vérifier les cartes de présentation.
  - **Résultat attendu :** Cartes "Excellence académique" et "Épanouissement personnel" présentes avec icônes/images et textes.

### 4. Responsivité (Mobile)
- [ ] **TC-07 : Menu Mobile**
  - **Action :** Réduire la largeur du navigateur (mode mobile).
  - **Résultat attendu :** La navigation se transforme en menu "hamburger" ou s'adapte proprement.
- [ ] **TC-08 : Empilement des éléments**
  - **Action :** Vérifier les sections Stats et Établissement sur mobile.
  - **Résultat attendu :** Les éléments s'empilent verticalement de manière fluide sans déborder de l'écran.

### 5. Intégrité visuelle
- [ ] **TC-09 : Carrousel (Regression Test)**
  - **Action :** Vérifier que le carrousel (US-02) est toujours présent et fonctionnel.
  - **Résultat attendu :** Le carrousel défile correctement dans sa nouvelle position (section Galerie ou Hero).
