---
title: Infos bénévoles
editLink: false
search: false
head:
  - - meta
    - name: robots
      content: noindex, nofollow
---

<script setup>
import { ref, computed } from 'vue'

// Logique d'accès (sans localStorage)
const passwordInput = ref('')
const isAuthenticated = ref(false)
const PASSWORD_SECRET = 'BénévolesRedek35770'

const verifyPassword = () => {
  if (passwordInput.value === PASSWORD_SECRET) {
    isAuthenticated.value = true
  } else {
    alert('Mot de passe incorrect')
  }
}
</script>

<!-- Écran de verrouillage -->
<div v-if="!isAuthenticated" style="max-width: 400px; margin: 2rem auto; padding: 2rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; background: var(--vp-c-bg-soft); text-align: center;">
  <p>Cet espace est réservé aux bénévoles de la Redek. Saisissez le mot de passe fourni :</p>
  
  <!-- On utilise une balise <form> avec un @submit.prevent -->
  <form @submit.prevent="verifyPassword">
    <!-- Astuce : Un champ username caché pour feinter le navigateur -->
    <input type="text" name="username" value="benevole" style="display:none;" autocomplete="username" />
    <input 
      v-model="passwordInput" 
      type="password" 
      name="password"
      placeholder="Mot de passe" 
      autocomplete="current-password"
      style="width: 100%; padding: 10px; margin: 15px 0; border-radius: 6px; border: 1px solid var(--vp-c-brand-1); background: var(--vp-c-bg); color: var(--vp-c-text-1);"
    />
    <!-- Le bouton devient un type="submit" -->
    <button type="submit" class="btn-auth">Valider</button>
  </form>
  
  <!-- <p v-if="errorMsg" style="color: #e50914; margin-top: 10px; font-weight: bold;">{{ errorMsg }}</p> -->
</div>
<!-- Contenu protégé -->
<div v-else>

### Bienvenue dans l'espace bénévole ! 🏃‍♂️

- **Briefing général :** le vendredi 25 septembre 2026 (lieu à préciser).

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
