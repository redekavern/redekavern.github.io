// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import PostList from './components/PostList.vue'
import ArchiveList from './components/ArchiveList.vue'
import SocialFooter from './components/SocialFooter.vue'
import CloudinaryLightbox from './components/CloudinaryLightbox.vue'

export default {
    extends: DefaultTheme,
    Layout () {
        return h(DefaultTheme.Layout, null, {
            // On utilise le slot 'doc-footer-before' ou 'nav-screen-content-after' 
            // Mais pour le footer global, on utilise souvent 'layout-bottom'
            'layout-bottom': () => h(SocialFooter)
        })
    },
    enhanceApp ({ app }) {
        // On enregistre le composant globalement
        app.component('PostList', PostList)
        app.component('ArchiveList', ArchiveList)
        app.component('CloudinaryLightbox', CloudinaryLightbox)
    }
} satisfies Theme
