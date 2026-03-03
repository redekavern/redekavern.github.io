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
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['meta', { name: 'twitter:site', content: '@redekavern' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { property: 'og:image:width', content: '1200' }],
        ['meta', { property: 'og:image:height', content: '630' }],
        ['meta', { property: 'og:image:type', content: 'image/png' }],
        ['meta', { property: 'og:site_name', content: 'Redek à Vern' }],
        ['meta', { property: 'og:url', content: 'https://redekavern1.gitlab.io/' }],
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
            { icon: 'instagram', link: 'https://www.instagram.com/redekavern/' }
        ],

        // search: {
        //     provider: 'local'
        // },



        footer: {
            copyright: 'Copyright © 2026 Redek à Vern',
            message: `
        <div class="footer-socials">
      <a href="tel:+33600000000" aria-label="Téléphone">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
      </a>

      <a href="mailto:contact@redek-vern.fr" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </a>

      <a href="https://facebook.com/..." target="_blank" aria-label="Facebook">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-3.134c0-2.508 1.225-3.874 3.928-3.874 1.259 0 2.342.097 2.659.14v3.063h-1.871c-1.207 0-1.443.592-1.443 1.442v2.363h3.39l-.444 3.666h-2.946v7.981H9.101z"/></svg>
      </a>

      <a href="https://instagram.com/..." target="_blank" aria-label="Instagram">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.056.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.015-4.85-.07c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.584.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
      </a>
    </div>
      `,
        }

    },
    // outDir: '../public',
})
