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
