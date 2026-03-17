import { defineConfig } from 'vitepress'

const isGitLab = process.env.GITLAB_CI === 'true';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'fr-FR',
    // base: isGitLab ? '/redek/' : '/',
    base: '/',
    srcDir: '.',
    title: "Redek à Vern",
    description: "Les courses à pied de l'US Vern sur Seiche Athlétisme",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'twitter:site', content: '@redekavern' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'og:image', content: 'https://redekavern.github.io/affiches/redek-2026.jpg' }],
        ['meta', { property: 'og:image:type', content: 'image/jpg' }],
        ['meta', { property: 'og:site_name', content: 'Redek à Vern' }],
        ['meta', { property: 'og:url', content: 'https://redekavern1.gitlab.io/' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'fr_FR' }],
        ['meta', { property: 'og:title', content: 'Redek à Vern' }],
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-G2D2YZPCFF' }],
        ['meta', {
            'http-equiv': 'Content-Security-Policy', content: `
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: https:;
            font-src 'self' data:;
            connect-src 'self' https://api.iconify.design;
            frame-ancestors 'none';
            object-src 'none';
            base-uri 'self';
            form-action 'self';
        `.replace(/\s+/g, ' ').trim()
        }
        ],
        ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
        ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }],
        ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
        // Configuration de la propriété
        ['script', {}, `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G2D2YZPCFF', {
    'cookie_domain': 'redekavern1.gitlab.io',
    'cookie_flags': 'SameSite=None;Secure'
  });`
        ]

    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logos/logo-redek.webp',
        nav: [
            { text: 'Accueil', link: '/' },
            { text: 'Contacts', link: '/contacts' },
            // { text: 'Actualités', link: '/actualites' },
            { text: 'Partenaires', link: '/partenaires' },
            { text: 'Photos', link: '/photos' },
            { text: 'Les parcours', link: '/parcours' },
            { text: 'Les archives', link: '/archives' },
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
            { icon: 'instagram', link: 'https://www.instagram.com/redekavern/' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/redek-%C3%A0-vern-b29916269/recent-activity/all/' }
        ],

        // search: {
        //     provider: 'local'
        // },



        // footer: {
        //     copyright: 'Copyright © 2026 Redek à Vern',

        // }

    },
    // outDir: '../public',
})
