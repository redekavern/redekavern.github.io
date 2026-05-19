<script setup>
import { data as posts } from '../actualites.data.js'

const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
</script>

<template>

    <div v-if="posts.length === 0" style="margin-top: 2rem; color: var(--vp-c-text-2);">
        Aucune actualité pour le moment. Revenez bientôt !
    </div>

    <div class="actu-grid" v-else>
        <article v-for="post in posts" :key="post.url" class="actu-item">

            <!-- En-tête de l'article -->
            <header class="actu-header">
                <span class="actu-date">{{ formatDate(post.frontmatter.date) }}</span>
                <h2>{{ post.frontmatter.title }}</h2>
            </header>

            <!-- CORPS DE L'ARTICLE (Le Markdown converti en HTML) -->
            <!-- La classe "vp-doc" applique le style graphique officiel de VitePress -->
            <div class="actu-body vp-doc" v-html="post.html"></div>

        </article>
    </div>
</template>

<style scoped>
.actu-timeline {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    /* Espace entre deux articles */
}

.actu-item {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--vp-c-divider);
    /* Ligne de séparation */
}

.actu-item:last-child {
    border-bottom: none;
    /* Enlève la ligne sous le tout dernier article */
}

.actu-header {
    margin-bottom: 1.5rem;
}

.actu-date {
    font-size: 0.9rem;
    color: var(--vp-c-brand-1);
    font-weight: bold;
    text-transform: capitalize;
}

.actu-header h2 {
    margin: 0.3rem 0 0 0 !important;
    border-top: none !important;
    padding-top: 0 !important;
    font-size: 1.8rem;
}

.actu-body {
    /* On ajuste un peu pour que ce soit aéré */
    font-size: 1.05rem;
    line-height: 1.6;
}
</style>
