---
title: L'affiche des partenaires de la Redek
layout: doc

editLink: false
search: true
---

# L'affiche des partenaires 2026 de la Redek à Vern

Voici l'affiche grand format (A0) des partenaires de la Redek. 

Différentes variantes s'offrent à vous pour la couleur de fond et l'ordre des logos:

<div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Couleur de fond</th>
        <th>Variantes (1 à 5)</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="row in [
        { label: 'Fond Clair', theme: 'light' },
        { label: 'Fond Sombre', theme: 'dark' }
      ]" :key="row.theme">
        <td><strong>{{ row.label }}</strong></td>
        <td>
          <template v-for="i in 5" :key="i">
            <a :href="`/affiches/partenaires/redek-partenaires-2026-a0-${i}-${row.theme}.png`" :download="`redek-partenaires-2026-a0-${i}-${row.theme}.png`">Affiche {{ i }}</a>
            <span v-if="i < 5"> | </span>
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</div>

**Visualiser en taille réelle** : Cliquez directement sur l'image ci-dessous pour l'ouvrir en plein écran.

---

[![Affiche Partenaires A0](/affiches/partenaires/redek-partenaires-2026-a0-1-light.png)](/affiches/partenaires/redek-partenaires-2026-a0-1-light.png)

[![Affiche Partenaires A0](/affiches/partenaires/redek-partenaires-2026-a0-1-dark.png)](/affiches/partenaires/redek-partenaires-2026-a0-1-dark.png)


<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}
th, td {
  border: 1px solid var(--vp-c-divider);
  padding: 12px 16px;
  text-align: left;
}
th {
  background-color: var(--vp-c-bg-alt);
}
</style>