// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import PostList from './components/PostList.vue'
import ArchiveList from './components/ArchiveList.vue'
import SocialFooter from './components/SocialFooter.vue'
import CloudinaryLightbox from './components/CloudinaryLightbox.vue'
import BandeauPartenaires from './components/BandeauPartenaires.vue'
import CookieBanner from './components/CookieBanner.vue'

export default {
    extends: DefaultTheme,

    enhanceApp ({ app }) {
        // On enregistre le composant globalement
        app.component('PostList', PostList)
        app.component('ArchiveList', ArchiveList)
        app.component('CloudinaryLightbox', CloudinaryLightbox)
        app.component('BandeauPartenaires', BandeauPartenaires)
        app.component('CookieBanner', CookieBanner)
    },

    Layout () {
        return h(DefaultTheme.Layout, null, {
            // On utilise le slot 'doc-footer-before' ou 'nav-screen-content-after' 
            // Mais pour le footer global, on utilise souvent 'layout-bottom'
            'layout-bottom': () => [
                h(SocialFooter),
                h(CookieBanner)
            ]
        })
    },

} satisfies Theme
