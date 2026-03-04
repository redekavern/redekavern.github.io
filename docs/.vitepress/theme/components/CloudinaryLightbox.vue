<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    tag: { type: String, required: true },
    cloudName: { type: String, required: true }
})

const images = ref([])
const loading = ref(true)
const isLightboxOpen = ref(false)
const selectedIndex = ref(0)

// 1. Récupération automatique de la liste via le Tag
onMounted(async () => {
    try {
        const response = await fetch(`https://res.cloudinary.com/${props.cloudName}/image/list/${props.tag}.json`)
        if (!response.ok) throw new Error('Erreur Cloudinary')
        const data = await response.json()
        // On extrait juste le public_id de chaque ressource
        images.value = data.resources.map(res => res.public_id)
    } catch (err) {
        console.error("Erreur Galerie Redek:", err)
    } finally {
        loading.value = false
    }
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// 2. Logique de la Lightbox
const openLightbox = (index) => {
    selectedIndex.value = index
    isLightboxOpen.value = true
    document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
    isLightboxOpen.value = false
    document.body.style.overflow = ''
}

const next = () => selectedIndex.value = (selectedIndex.value + 1) % images.value.length
const prev = () => selectedIndex.value = (selectedIndex.value - 1 + images.value.length) % images.value.length

const handleKeydown = (e) => {
    if (!isLightboxOpen.value) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
}

// 3. URLs Cloudinary
const getThumb = (id) => `https://res.cloudinary.com/${props.cloudName}/image/upload/c_fill,ar_1:1,w_300,g_auto,f_auto,q_auto/${id}`
const getFull = (id) => `https://res.cloudinary.com/${props.cloudName}/image/upload/f_auto,q_auto,w_1600/${id}`
</script>

<template>
    <div v-if="loading" class="loader">Chargement des photos...</div>

    <div v-else>
        <div class="gallery-grid">
            <div v-for="(id, index) in images" :key="id" class="gallery-item" @click="openLightbox(index)">
                <img :src="getThumb(id)" loading="lazy" alt="Photo Redek" />
                <div class="zoom-icon">🔍</div>
            </div>
        </div>

        <Teleport to="body">
            <div v-if="isLightboxOpen" class="lightbox-overlay" @click.self="closeLightbox">
                <button class="close-btn" @click="closeLightbox">&times;</button>
                <button class="nav-btn prev" @click="prev">&#10094;</button>
                <button class="nav-btn next" @click="next">&#10095;</button>

                <div class="lightbox-content">
                    <img :src="getFull(images[selectedIndex])" alt="Photo Redek grand format" />
                    <p class="counter">{{ selectedIndex + 1 }} / {{ images.length }}</p>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
/* Grille */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 10px;
}

.gallery-item {
    position: relative;
    cursor: pointer;
    border-radius: 6px;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    display: block;
    transition: transform 0.3s;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

.zoom-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: 0.3s;
    font-size: 1.5rem;
}

.gallery-item:hover .zoom-icon {
    opacity: 1;
}

/* Lightbox */
.lightbox-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.lightbox-content {
    max-width: 90%;
    max-height: 85vh;
    text-align: center;
}

.lightbox-content img {
    max-width: 100%;
    max-height: 80vh;
    border: 3px solid #fff;
}

.counter {
    color: white;
    margin-top: 10px;
    font-family: sans-serif;
}

.close-btn,
.nav-btn {
    position: absolute;
    background: none;
    border: none;
    color: white;
    font-size: 2.5rem;
    cursor: pointer;
    padding: 20px;
}

.close-btn {
    top: 10px;
    right: 10px;
}

.prev {
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.next {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}

.loader {
    padding: 50px;
    text-align: center;
    font-weight: bold;
    color: var(--color-redek);
}
</style>