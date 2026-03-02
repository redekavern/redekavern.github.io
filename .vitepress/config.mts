import { defineConfig } from 'vitepress'

const isGitLab = process.env.GITLAB_CI === 'true';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'fr-FR',
    // base: isGitLab ? '/redek/' : '/',
    base: '/',
    title: "Redek à Vern",
    description: "Les courses à pied de l'US Vern sur Seiche Athlétisme",
    head: [
        ['meta', { name: 'twitter:site', content: '@redekavern' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:image:type', content: 'image/png' }],
        ['meta', { property: 'og:site_name', content: 'Redek à Vern' }],
        ['meta', { property: 'og:url', content: 'https://redek.vercel.app/' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'fr_FR' }],
        ['meta', { property: 'og:title', content: 'Redek à Vern' }],

    ],
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
    // outDir: '../public',
})
