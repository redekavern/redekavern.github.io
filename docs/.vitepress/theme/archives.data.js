import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/archives/*.md', {
    transform (raw) {
        return raw
            .map(({ url, frontmatter }) => ({
                title: frontmatter.title,
                url,
                date: formatDate(frontmatter.date)
            }))
            .sort((a, b) => b.date.time - a.date.time)
    }
})

function formatDate (raw) {
    if (typeof raw === 'string' && raw.includes('/')) {
        const [day, month, year] = raw.split('/')
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
    const date = new Date(raw)
    return {
        time: +date,
        string: date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
    }
}