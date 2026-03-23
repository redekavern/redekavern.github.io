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
    lastUpdated: true,
    sitemap: {
        hostname: 'https://redekavern.github.io',
        xmlns: { // trim the xml namespace
            news: false,
            xhtml: false,
            image: false,
            video: false,
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'author', content: 'Redek à Vern Team' }],
        ['meta', { name: 'twitter:site', content: '@redekavern' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'og:image', content: 'https://redekavern.github.io/affiches/redek-2026-2216x608.webp' }],
        ['meta', { property: 'og:image:type', content: 'image/jpg' }],
        ['meta', { property: 'og:site_name', content: 'Redek à Vern' }],
        ['meta', { property: 'og:url', content: 'https://redekavern.github.io/' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'fr_FR' }],
        ['meta', { property: 'og:title', content: 'Redek à Vern' }],
        ['meta', { property: 'og:description', content: 'Redek à Vern : participez à nos courses annuelles à Vern-sur-Seiche. Une partie du bénéfice est reversé au profit du Rire Médecin. Retrouvez les parcours, les horaires et inscrivez-vous en ligne pour soutenir une noble cause.' }],
        ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-G2D2YZPCFF' }],
        ['meta', {
            'http-equiv': 'Content-Security-Policy', content: `
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            img-src 'self' data: https:;
            font-src 'self' https://fonts.gstatic.com;
            connect-src 'self' https://api.iconify.design https://res.cloudinary.com;
            object-src 'none';
            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'self';
        `.replace(/\s+/g, ' ').trim()
        }],
        ['meta', { 'http-equiv': 'X-Content-Type-Options', content: 'nosniff' }],
        ['meta', { name: 'referrer', content: 'strict-origin-when-cross-origin' }],
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
        logo: {
            src: '/logos/logo-redek.webp',
            alt: 'Logo de la course à pied Redek à Vern'
        },
        siteTitle: false,
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
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/redek-%C3%A0-vern-b29916269/recent-activity/all/' },
            {
                icon: {
                    svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><title xmlns="">strava</title><path fill="currentColor" d="m15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>'
                },
                link: 'https://strava.app.link/gKwP673Yy1b',
                ariaLabel: 'strava'
            }
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
