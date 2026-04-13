<script setup>
import { onMounted, ref } from 'vue'
import { listePartenairesSoiree2026 } from '@data/partenairesSoiree2026.js'

const partenaires = ref([])
onMounted(() => {
    // Le mélange se fait ici, au moment où le composant apparaît vraiment
    partenaires.value = [...listePartenairesSoiree2026()].sort(() => Math.random() - 0.5)
})
</script>

<template>
    <div class="partners-grid">
        <a v-for="item in partenaires" :key="item.name" :href="item.url" class="partner-card">
            <img :src="item.img" :alt="item.name" class="partner-logo" />
        </a>
    </div>
</template>

<style>
.VPDoc:has(._partenaires) .container {
    max-width: 100% !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 5vw !important;
    /* 5% de marge sur les côtés pour respirer */
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
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
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
    height: 100px;
    transition: all 0.3s ease;
}

.partner-card:hover {
    transform: scale(1.05);
    border-color: #33bcff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.partner-logo {
    max-width: 95%;
    max-height: 70px;
    object-fit: contain;
}

/* Forcer le fond blanc même en mode sombre pour la lisibilité des logos */
.dark .partner-card {
    background: #ffffff !important;
}
</style>
