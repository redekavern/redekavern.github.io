import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
    includeSrc: true, // Charge le contenu Markdown brut
    render: true,     // Compile le Markdown en HTML (recommandé)
    transform (raw) {
        return raw.map((post) => ({
            title: post.frontmatter.title,
            url: post.url,
            content: post.html, // Le contenu HTML complet
            date: formatDate(post.frontmatter.date)
        }))
            .sort((a, b) => b.date.time - a.date.time) // Trier par date décroissante
    }
})

function formatDate (raw) {
    // Si la date est au format "dd/mm/yyyy"
    if (typeof raw === 'string' && raw.includes('/')) {
        const [day, month, year] = raw.split('/')
        // On crée l'objet Date (Attention : les mois commencent à 0 en JS, donc month - 1)
        const date = new Date(year, month - 1, day)

        return {
            time: +date,
            string: date.toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
        }
    }

    // Fallback si la date est déjà un objet Date ou un autre format
    const date = new Date(raw)
    return {
        time: +date,
        string: date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
}