---
title: Les Parcours 2026
editLink: false
---

<script setup>
// 1. On définit la liste des courses ici (facile à modifier pour 2026 !)
const annee = "2026"
const dossier = `/parcours/${annee}` 

const courses = [
  {
    nom: "La 5 km Running Conseil",
    distance: "5 km",
    image: "5km.png",
    description: "Un tracé rapide pour les amateurs de vitesse.",
    //lienTrace: "https://www.openrunner.com/..." 
  },
  {
    nom: "La 10 km du BDS",
    distance: "10 km",
    image: "10km.png",
    description: "Le parcours à travers la vallée de la Seiche.",
    // lienTrace: "https://www.openrunner.com/..."
  },
  {
    nom: "Le parcours benjamins et minimes by CMB",
    // distance: "8 km",
    image: "benjamin-minime.png",
    description: "2 boucles calibrées pour les jeunes.",
    lienTrace: ""
  },
  {
    nom: "Le parcours poussin by CMB",
    // distance: "8 km",
    image: "poussin.png",
    description: "1 boucle.",
    lienTrace: ""
  },
  {
    nom: "Le parcours éveil athlé by CMB",
    // distance: "8 km",
    image: "eveil.png",
    description: "Quelques centaines de mètres pour faire plaisir aux plus jeunes.",
    lienTrace: ""
  },
  {
    nom: 'La randonnée "U Express Vern/Seiche"',
    distance: "11,1 km",
    image: "randonnee.png",
    description: "Pour découvrir Vern sans pression.",
    lienTrace: ""
  },
]
</script>

# Les parcours de l'édition {{ annee }}

<div style="border: 1px solid #ddd; border-top: 5px solid #0056b3; padding: 20px; border-radius: 4px; background-color: #f8f9fa; margin-top: 2em; display: flex; align-items: center; gap: 20px;">
    <div style="flex: 1;">
        <div style="margin-bottom: 10px; font-size: 1.1em;">
        Cette année, <strong><a href="https://www.e.leclerc/?srsltid=AfmBOopBOqlJ6TMXGMhTMxsNR0eF8qRRN1PQqD0ckg_TNVgA11SjAKwj" style="color: #0056b3; text-decoration: none;" target="_blank">Leclerc Val d’Orson</a></strong>
        s’engage auprès des nouvelles générations avec le <strong>"Challenge Jeunes Leclerc Val d’Orson"</strong>.
        </div>
        <div style="margin: 0; color: #555;">
        Ce partenariat permet de récompenser les lauréats (filles et garçons) de chaque catégorie jeune des différentes courses.
        </div>
    </div>
    <div style="flex-shrink: 0; width: 120px;">
        <a href="https://www.e.leclerc/?srsltid=AfmBOopBOqlJ6TMXGMhTMxsNR0eF8qRRN1PQqD0ckg_TNVgA11SjAKwj"  target="_blank">
        <img src="/logos/partenaires/leclerc-vern.webp" alt="Logo Leclerc Val d'Orson" style="max-width: 100%; height: auto; display: block; border: none;">
        </a>
    </div>

</div>

Retrouvez ci-dessous le détail des épreuves.

<div class="parcours-grid">

  <div v-for="course in courses" :key="course.nom" class="parcours-card">
    <div class="card-image">
    <a :href="`${dossier}/${course.image}`" target="_blank">
      <img :src="`${dossier}/${course.image}`" :alt="course.nom">
      </a>
      <span class="badge">{{ course.distance }}</span>
    </div>
    <div class="info">
    <h3>{{ course.nom }}</h3>
      <p>{{ course.description }}</p>
  </div>
  <div class="actions">
        <a :href="`${dossier}/${course.image}`" target="_blank" class="btn secondary">Plan</a>
        <a v-if="course.lienTrace" :href="course.lienTrace" target="_blank" class="btn primary">Tracé GPS</a>
      </div>
  </div>
</div>

<style scoped>
.parcours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 2rem;
}

.parcours-card {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-image {
  position: relative;
  height: 180px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: var(--vp-c-brand-1);
  color: white;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.info {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info h3 {
  margin: 0 0 0.5rem 0 !important;
}

.actions {
    margin: 1px 1px 1px 1px;
  margin-top: auto;
  display: flex;
  gap: 12px;
}

.btn {
  margin: 1px;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  text-decoration: none !important;
  text-align: center;
  flex: 1;
  border: 1px solid transparent;
}

.btn.primary { background: var(--vp-c-brand-1); color: white !important; }
.btn.secondary { 
    border: 1px solid var(--vp-c-brand-1); 
    color: var(--vp-c-brand-1) !important; 
    background-color: transparent;
    }

.btn:hover { opacity: 0.8; }
</style>
