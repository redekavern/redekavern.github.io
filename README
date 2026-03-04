# 🏃 Site Web - La Redek

Ce projet est le site officiel de **La Redek à Vern**. Il est construit avec [VitePress](https://vitepress.dev/), un générateur de site statique basé sur Vue.js, optimisé pour la vitesse et la simplicité de rédaction.

---

## 🛠️ Structure du Projet

- **`docs/index.md`** : Contenu de la page d'accueil.
- **`docs/.vitepress/`** : Configuration du site (menus, thèmes).
- **`docs/.vitepress/data/`** : Fichiers de données (dont `partenaires.js`).
- **`docs/.vitepress/theme/components/`** : Composants Vue (Bandeau défilant, etc.).
- **`public/`** : Stockage des images, logos et documents PDF.

---

## 📝 Guide de mise à jour

### 1. Ajouter un article sur la page d'accueil

La page d'accueil est gérée par le fichier `docs/index.md`.

- Ouvrez le fichier.
- Repérez la section sous la balise `<script setup>`.
- Ajoutez votre texte en utilisant la syntaxe Markdown :
  - `## Titre` pour un titre de section.
  - `**texte**` pour du gras.
  - `[Lien](https://...)` pour un lien hypertexte.

### 2. Gérer les Partenaires (Ajout/Suppression)

La liste est centralisée dans `.vitepress/data/partenaires.js` pour être mise à jour partout simultanément (accueil et page partenaires).

- **Pour ajouter un partenaire :**
  1. Ajoutez le logo dans `public/logos/partenaires/`.
  2. Dans `partenaires.js`, ajoutez une ligne dans le tableau :
     ```javascript
     {
       name: "Nom Sponsor",
       img: "/logos/partenaires/nom-image.webp",
       url: "[https://lien-sponsor.com](https://lien-sponsor.com)"
     },
     ```
- **Pour supprimer :** Retirez simplement le bloc `{ ... }` du partenaire concerné.
- **Note :** Les logos s'affichent automatiquement en bleu ciel (#33bcff) grâce à un filtre CSS, puis passent en couleur au survol.

### 3. 📸 Gestion des Photos (Cloudinary)

Pour ne pas alourdir le projet technique, les photos de l'événement ne sont pas stockées sur le serveur du site, mais sur **Cloudinary**.

#### Étape 1 : Téléchargement (Upload)

1. Connectez-vous à votre console **Cloudinary**.
2. Créez un dossier pour l'année (ex: `Redek-2026`).
3. Téléversez vos photos.

#### Étape 2 : Tagging (Indispensable)

Pour que les photos s'affichent automatiquement ou soient faciles à retrouver :

- Sélectionnez les images de l'édition.
- Ajoutez-leur un **Tag** spécifique (ex: `Redek2026`).
- Cela permet de créer la galeries dynamique.

#### Étape 3 : Créer la page de l'édition sur le site

Pour chaque nouvelle année, créez un fichier (ex: `docs/photos-2026.md`) :

1. Utilisez ce fichier pour insérer les liens vers vos albums Cloudinary ou intégrer un widget de galerie.
2. Référencez cette page dans le fichier `photos.md`, ajouter la page et sa légende dans la tableau `album`.
