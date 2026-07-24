# FizzBuzz & Tables de multiplication

Mini-site pédagogique (Akieni Academy) pour pratiquer les **boucles**, l’opérateur **modulo**, les **conditions imbriquées** et l’affichage dynamique en **HTML5 / CSS3 / JavaScript ES6+ natifs** — sans framework, sans librairie, sans bundler.

## Contenu du projet

| Fichier        | Rôle                                      |
|----------------|-------------------------------------------|
| `index.html`   | Structure sémantique (une page, deux sections) |
| `style.css`    | Styles (variables CSS, grille, flex, responsive) |
| `fizzbuzz.js`  | Logique FizzBuzz + pont DOM unique `afficher()` |
| `tables.js`    | Tables de multiplication (1 à 9)          |

## Fonctionnalités

### 1. FizzBuzz (1 à 100)

- Affiche 100 cases dans une grille CSS Grid (10 colonnes desktop, 5 sur mobile ≤ 600px).
- Règles :
  - multiple de **3 et 5** → `FizzBuzz` (classe `.fizzbuzz`)
  - multiple de **3** → `Fizz` (classe `.fizz`)
  - multiple de **5** → `Buzz` (classe `.buzz`)
  - sinon → le nombre lui-même
- Boucle `for` + conditions `if / else if / else` + modulo `%`.

### 2. Tables de multiplication (1 à 9)

- Une carte par table (`1 × … × 10`).
- Cartes alignées en **Flexbox** (`flex-wrap`) dans `#conteneur-tables`.
- Boucle `while` pour construire chaque table, boucle `for` pour générer les 9 cartes.

## Comment ouvrir le site

1. Ouvrir le dossier du projet dans l’Explorateur de fichiers.
2. Double-cliquer sur `index.html` **ou** cliquer droit → Ouvrir avec → votre navigateur (Chrome, Firefox, Edge…).
3. Option recommandée pour le développement : servir le dossier en local (Live Server dans VS Code, ou équivalent).

Aucun serveur backend n’est requis : tout tourne côté navigateur.

## Captures d’écran

À compléter après test dans les DevTools (mode responsive) :

### Mobile — 375px de large

![Capture mobile 375px](captures/mobile-375.png)

> *Insérer ici une capture de la page à 375px (grille FizzBuzz en 5 colonnes + cartes empilées).*

### Desktop — largeur confortable (≥ 1024px)

![Capture desktop](captures/desktop.png)

> *Insérer ici une capture desktop (grille 10 colonnes + cartes en flex-wrap).*

## Points techniques à retenir

- **Aucun CSS / JS inline** dans le HTML.
- **Toutes les couleurs** sont déclarées dans `:root` (variables CSS), jamais de code couleur dupliqué.
- Le JS ne touche au DOM qu’à travers **une seule** fonction bridge : `afficher(cible, html)` (définie dans `fizzbuzz.js`, réutilisée dans `tables.js`).

## Auteur

Projet pédagogique - **Akieni Academy**
