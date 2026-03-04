---
layout: doc
aside: false
---

<script setup>
import { onMounted, ref } from 'vue'

// 1. Ta liste brute de partenaires
import { listePartenaires } from './.vitepress/data/partenaires.js'

// 2. On crée une référence réactive pour la liste mélangée
const partenaires = ref([])

onMounted(() => {
  
  // On applique le mélange au montage du composant
  partenaires.value = listePartenaires()
})
</script>

# Nos Partenaires

<p class="intro-text">
  Nous remercions tous nos partenaires qui contribuent à la réussite de cet événement.
</p>

<div class="partners-grid">
  <a v-for="item in partenaires" 
     :key="item.name" 
     :href="item.url" 
     target="_blank" 
     rel="noopener" 
     class="partner-card">
    <img :src="item.img" :alt="item.name" class="partner-logo" />
  </a>
</div>

<style >
.intro-text {
  font-size: 1.25rem; /* Un peu plus grand que le texte normal */
  line-height: 1.6;
  color: var(--vp-c-text-2); /* Gris doux typique de VitePress */
  text-align: center;
  margin: 20px auto 40px auto;
  max-width: 800px; /* On limite la largeur du texte pour la lisibilité */
  font-weight: 500;
}

/* On cible la page spécifique via sa classe générée par VitePress */
/* Elle s'appelle "vp-doc _partenaires" dans ton code HTML */

.VPDoc:has(._partenaires) .container {
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 5vw !important; /* 5% de marge sur les côtés pour respirer */
}

.VPDoc:has(._partenaires) .content {
  max-width: 100% !important;
  width: 100% !important;
}

.VPDoc:has(._partenaires) .content-container {
  max-width: 100% !important;
  width: 100% !important;
}

/* La grille de logos */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  width: 100%;
  margin: 40px 0;
}

.partner-card {
  background: white;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  transition: all 0.3s ease;
}

.partner-card:hover {
  transform: scale(1.05);
  border-color: #33bcff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.partner-logo {
  max-width: 100%;
  max-height: 140px;
  object-fit: contain;
}

/* Forcer le fond blanc même en mode sombre pour la lisibilité des logos */
.dark .partner-card {
  background: #ffffff !important;
}
</style>
