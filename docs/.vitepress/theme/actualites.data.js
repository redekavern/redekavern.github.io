// actualites.data.js
import { createContentLoader } from 'vitepress'

export default createContentLoader('posts/*.md', {
    render: true,
    transform (raw) {
        return raw
            .filter(({ frontmatter }) => {
                // On ne garde que les articles qui ont le tag "actu"
                return frontmatter.tags && frontmatter.tags.includes('actu')
            })
            .sort((a, b) => {
                // On trie par date décroissante (du plus récent au plus ancien)
                return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
            })
    }
})