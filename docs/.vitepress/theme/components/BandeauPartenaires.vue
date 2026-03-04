<script setup>
import { computed } from 'vue'

const props = defineProps({
    partenaires: {
        type: Array,
        required: true
    }
})

// On double la liste pour créer l'effet de boucle infinie sans saut visuel
const doubleListe = computed(() => {
    return [...props.partenaires, ...props.partenaires]
})
</script>

<template>
    <div v-if="partenaires.length > 0" class="marquee-container">
        <div class="marquee-content">
            <a v-for="(p, index) in doubleListe" :key="index" :href="p.url" target="_blank" class="partner-link"
                :title="p.name">
                <img :src="p.img" :alt="p.name" class="partner-logo" />
            </a>
        </div>
    </div>
</template>

<style scoped>
.marquee-container {
    width: 100%;
    overflow: hidden;
    background: var(--color-redek-blue-pastel);
    padding: 5px 0;
    border-top: 1px solid var(--color-redek-blue-pastel);
    border-bottom: 1px solid var(--color-redek-blue-pastel);
    /* On retire display: flex ici pour laisser le contenu déborder naturellement */
    position: relative;

    border-radius: 8px;
}

.marquee-content {
    display: flex;
    gap: 50px;
    width: max-content;
    flex-wrap: nowrap;
    /* EMPÊCHE le retour à la ligne */
    animation: scroll 180s linear infinite !important;
    /* Augmenté à 60s car 160 logos c'est long ! */
    will-change: transform;
}

/* Pause au survol */
.marquee-container:hover .marquee-content {
    animation-play-state: paused;
}

.partner-link {
    display: flex;
    flex-shrink: 0;
    /* INTERDIT au logo de rétrécir */
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    filter: grayscale(100%);
    /* filter: url(#redek-duotone); */
    opacity: 0.7;
    border-radius: 8px;
}

.partner-link:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
    opacity: 1;
}

.partner-logo {
    height: 60px;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    display: block;
}

/* L'animation avec préfixes pour être sûr */
@keyframes scroll {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

@media (max-width: 768px) {
    .partner-logo {
        height: 40px;
    }

    .marquee-content {
        gap: 30px;
        /* Sur mobile, on peut aller un peu plus vite */
        animation-duration: 30s;
    }
}
</style>