# 🏆 Records des Courses (5 km & 10 km)

Retrouvez ci-dessous les meilleurs temps enregistrés pour nos épreuves. Le record absolu de chaque catégorie (Hommes / Femmes) est mis en avant !

<script setup>
import data from './data/records.json'

// Fonction utilitaire pour convertir un temps "mm:ss" en secondes totales
const timeToSeconds = (timeStr) => {
  if (!timeStr) return 999999
  const parts = timeStr.split(':')
  return parseInt(parts[0]) * 60 + parseInt(parts[1])
}

// Fonction pour trouver l'index du record le plus rapide dans un tableau spécifique
const getBestIndex = (recordsList) => {
  if (!recordsList || recordsList.length === 0) return -1
  
  let bestIndex = 0
  let minSeconds = timeToSeconds(recordsList[0].temps)

  for (let i = 1; i < recordsList.length; i++) {
    const currentSeconds = timeToSeconds(recordsList[i].temps)
    if (currentSeconds < minSeconds) {
      minSeconds = currentSeconds
      bestIndex = i
    }
  }
  return bestIndex
}
</script>

<div class="records-container">
  <div v-for="course in data.courses" :key="course.distance" class="course-card">
    <h2>{{ course.distance }}</h2>
    <!-- Boucle sur les catégories (hommes / femmes) -->
    <div v-for="(recordsList, genre) in course.categories" :key="genre" class="category-section">
      <h3 class="category-title">
        {{ genre === 'hommes' ? 'Hommes' : 'Femmes' }}
      </h3>
      <table class="records-table">
        <thead>
          <tr>
            <th>Année</th>
            <th>Nom</th>
            <th>Temps</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(record, index) in recordsList" 
            :key="index" 
            :class="{ 'absolute-record': index === getBestIndex(recordsList) }"
          >
            <td>
              {{ record.annee }}
            </td>
            <td>
              <strong>{{ record.nom }}</strong>
              <span v-if="index === getBestIndex(recordsList)" class="badge-record">🏆 Record</span>
            </td>
            <td><code>{{ record.temps }}</code></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<style scoped>
.records-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.course-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--vp-shadow-1);
}

.course-card > h2 {
  margin-top: 0;
  border-bottom: 2px solid var(--vp-c-brand);
  padding-bottom: 0.5rem;
  color: var(--vp-c-brand);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.category-section {
  margin-top: 1.5rem;
}

.category-title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.records-table {
  width: 100%;
  border-collapse: collapse;
}

.records-table th,
.records-table td {
  padding: 0.6rem 0.75rem;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 0.95rem;
}

.records-table th {
  font-weight: 600;
  color: var(--vp-c-text-2);
}

/* --- CORRECTION ICI : Utilisation de !important et d'un bleu explicite --- */
.records-table tr.absolute-record,
.records-table tr.absolute-record td {
  background-color: rgba(64, 150, 255, 0.15) !important;
  font-weight: bold;
}

/* Si vous préférez un vrai fond bleu vif, décommentez la ligne ci-dessous : */
/* .records-table tr.absolute-record td { color: #fff !important; background-color: #3b82f6 !important; } */

.badge-record {
  display: inline-block;
  background-color: var(--vp-c-brand);
  color: var(--vp-c-white);
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  margin-left: 0.5rem;
  vertical-align: middle;
  font-weight: 600;
}

code {
  background-color: var(--vp-c-default-soft);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: var(--vp-font-family-mono);
}
</style>