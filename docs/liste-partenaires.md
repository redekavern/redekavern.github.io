---
title: Liste des Partenaires
editLink: false
search: false
head:
  - - meta
    - name: robots
      content: noindex, nofollow
---

<script setup>
import { ref, computed } from 'vue'
import { partenaires } from './.vitepress/data/partenaires.js'

// Logique d'accès (sans localStorage)
const passwordInput = ref('')
const isAuthenticated = ref(false)
const PASSWORD_SECRET = 'TeamRedek35770'

const verifyPassword = () => {
  if (passwordInput.value === PASSWORD_SECRET) {
    isAuthenticated.value = true
  } else {
    alert('Mot de passe incorrect')
  }
}

// État du tri : par défaut sur le nom, ordre croissant
const sortKey = ref('name')
const sortOrder = ref(1) // 1 = Croissant, -1 = Décroissant

// Calcul de la liste triée
const sortedPartenaires = computed(() => {
  return [...partenaires].sort((a, b) => {
    // On récupère les valeurs (on gère le champ 'update' qui peut être absent)
    const valA = a[sortKey.value] || ''
    const valB = b[sortKey.value] || ''
    
    if (valA < valB) return -1 * sortOrder.value
    if (valA > valB) return 1 * sortOrder.value
    return 0
  })
})

// Fonction pour changer la colonne de tri ou l'ordre
const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value *= -1
  } else {
    sortKey.value = key
    sortOrder.value = 1
  }
}
</script>

<!-- Écran de verrouillage -->
<div v-if="!isAuthenticated" class="auth-container">
  <h2 style="margin-top: 0;">Accès réservé</h2>
  <p>Veuillez saisir le mot de passe pour accéder à cet annuaire :</p>
  <div class="auth-form">
    <input 
      v-model="passwordInput" 
      type="password" 
      placeholder="Mot de passe" 
      @keyup.enter="verifyPassword"
    />
    <button @click="verifyPassword">Accéder</button>
  </div>
</div>

<!-- Contenu protégé -->
<div v-else>
  <h1>Annuaire des Partenaires</h1>

  <p>Retrouvez ci-dessous la liste complète de nos partenaires. Cliquez sur les en-têtes <strong>Nom</strong> ou <strong>Mis à jour</strong> pour trier les données.</p>

  <div class="table-wrapper">
    <table class="sortable-table">
      <thead>
        <tr>
          <th class="index-cell">#</th>
          <th>Logo</th>
          <th @click="sortBy('name')" class="clickable-header">
            Nom 
            <span class="sort-icon">{{ sortKey === 'name' ? (sortOrder === 1 ? '▲' : '▼') : '↕' }}</span>
          </th>
          <th>Site Web</th>
          <th @click="sortBy('update')" class="clickable-header">
            Mis à jour
            <span class="sort-icon">{{ sortKey === 'update' ? (sortOrder === 1 ? '▲' : '▼') : '↕' }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in sortedPartenaires" :key="p.name">
          <td class="index-cell">{{ index + 1 }}</td>
          <td class="logo-cell">
            <img :src="p.img" :alt="p.name" class="mini-logo">
          </td>
          <td><strong>{{ p.name }}</strong></td>
          <td>
            <a :href="p.url" target="_blank" rel="noopener">Consulter le site</a>
          </td>
          <td class="date-cell">{{ p.update || '-' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style scoped>
.table-wrapper {
  margin-top: 2rem;
  overflow-x: auto;
}
.sortable-table {
  width: 100%;
  border-collapse: collapse;
}
.sortable-table th, .sortable-table td {
  padding: 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  text-align: left;
}
.clickable-header {
  cursor: pointer;
  user-select: none;
}
.clickable-header:hover {
  color: var(--vp-c-brand-1);
}
.logo-cell {
  background-color: #ffffff !important;
  text-align: center;
  width: 120px;
}
.mini-logo {
  max-height: 40px;
  object-fit: contain;
}
.index-cell { text-align: center; width: 40px; color: var(--vp-c-text-2); font-weight: bold; }
.date-cell { font-family: monospace; font-size: 0.9em; }

/* Styles pour l'authentification */
.auth-container {
  margin: 3rem auto;
  text-align: center;
  padding: 2.5rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  max-width: 400px;
  border: 1px solid var(--vp-c-divider);
}
.auth-form { display: flex; gap: 10px; margin-top: 1.5rem; }
.auth-form input {
  flex: 1;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
}
.auth-form button { background: var(--vp-c-brand-1); color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold; }
.auth-form button:hover { opacity: 0.9; }
</style>
