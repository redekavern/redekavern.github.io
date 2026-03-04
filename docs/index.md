---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Redek à Vern"
  text: ""
  tagline: Les courses à pied de l'US Vern
  image:
    src: /affiches/redek-2026.jpg
    alt: Redek à Vern 2026
  actions:
    - theme: brand
      text: Inscriptions
      link: https://www.klikego.com

# features:
#   - title: Inscriptions
#     details: Les inscriptions ouvrent bientôt, bloquez dès maintenant le 27 septembre !
#   - title: Une course solidaire
#     details: Cette année encore la Redek est solidaire du Rire Médecin
#   - title: Bénévoles
#     details: Vous souhaitez devenir bénévole ? Contactez nous.
---

<script setup>
import { onMounted, ref } from 'vue'
// Assurez-vous que le chemin vers votre fichier JS est correct
import { listePartenaires } from './.vitepress/data/partenaires.js'

const partenaires = ref([])

onMounted(() => {
  // On appelle la fonction pour avoir le tableau mélangé au chargement
  partenaires.value = listePartenaires()
})
</script>

<BandeauPartenaires :partenaires="partenaires" />

<PostList />
