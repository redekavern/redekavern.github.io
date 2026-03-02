import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'fr-FR',
    title: "Redek à Vern",
    description: "Les courses à pied de l'US Vern sur Seiche Athlétisme",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logos/logo-redek.webp',
        nav: [
            { text: 'Accueil', link: '/' },
            { text: 'Contacts', link: '/contacts' },
            { text: 'Actualités', link: '/actualites' },
            { text: 'Partenaires', link: '/partenaires' },
            { text: 'Photos', link: '/photos' },
            { text: 'Les parcours', link: '/parcours' },
        ],

        // sidebar: [
        //     {
        //         text: 'Examples',
        //         items: [
        //             { text: 'Markdown Examples', link: '/markdown-examples' },
        //             { text: 'Runtime API Examples', link: '/api-examples' }
        //         ]
        //     }
        // ],

        socialLinks: [
            { icon: 'facebook', link: 'https://www.facebook.com/profile.php?id=100090918943830&locale=fr_FR' },
            { icon: 'instagram', link: 'https://www.instagram.com/redekavern/' }
        ],

        search: {
            provider: 'local'
        },

        footer: {
            copyright: 'Copyright © 2026 Redek à Vern',
        }

    },
    outDir: '../public',
    base: '/redek/',
})
