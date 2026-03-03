<script setup>
import { data as posts } from '../archives.data.js'
</script>

<template>
    <ul class="archive-list">
        <li v-for="post in posts" :key="post.url" class="archive-item">
            <span class="date">{{ post.date.string }}</span>
            <a :href="post.url" class="title">{{ post.title }}</a>
        </li>
    </ul>
</template>

<style scoped>
.archive-list {
    list-style: none;
    padding: 0;
}

.archive-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.8rem;
    align-items: baseline;
}

.date {
    font-family: monospace;
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
    min-width: 140px;
}

.title {
    font-weight: 500;
    color: var(--vp-c-brand);
    text-decoration: none;
}

.title:hover {
    text-decoration: underline;
}
</style>