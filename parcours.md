---
title: Les Parcours 2025
editLink: false
---

<script setup>
// 1. On définit la liste des courses ici (facile à modifier pour 2026 !)
const annee = "2025"
const dossier = `/parcours/${annee}` // Attention : mettez `/redek/parcours/${annee}` si vous n'avez pas de domaine unique

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
    nom: "La randonnée",
    distance: "11,1 km",
    image: "randonnee.png",
    description: "Pour découvrir Vern sans pression.",
    lienTrace: ""
  },
]
</script>

# Les parcours de l'édition {{ annee }}

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
