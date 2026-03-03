<script setup>
import { data as posts } from '../posts.data.js'
</script>

<template>
    <div class="blog-container">
        <div v-for="post in posts" :key="post.url" class="blog-post">
            <a :href="post.url" class="post-link">
                <h1 class="post-title">{{ post.title }}</h1>
                <p class="post-date">{{ post.date.string }}</p>
                <div v-if="post.content" class="post-excerpt" v-html="post.content"></div>
            </a>
        </div>
    </div>
</template>

<style scoped>
.blog-container {
    margin-top: 2rem;
}

.blog-post {
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--vp-c-divider);
}

.post-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.post-link:hover .post-title {
    color: var(--vp-c-brand);
}

.post-title {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.post-date {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
    margin: 0.5rem 0;
}

.post-excerpt {
    color: var(--vp-c-text-1);
    line-height: 1.6;
}
</style>