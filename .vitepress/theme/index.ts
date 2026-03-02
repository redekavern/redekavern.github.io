// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ExtraContent from '../../articles/redek-2026.md'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
            'home-features-before': () => h('div', { class: 'vp-doc custom-home-content' }, [
                h(ExtraContent)
            ])
        })
    },
    enhanceApp ({ app, router, siteData }) {
        // ...
    }
} satisfies Theme
