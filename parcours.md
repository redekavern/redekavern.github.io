---
title: Les Parcours
editLink: false
---

# Parcours de l'édition 2025

Découvrez les tracés de la Redek à Vern pour cette année. Cliquez sur les images pour les agrandir.

<div class="parcours-grid">

  <div class="parcours-card">
    <img src="/parcours/2025/5km.png" alt="Parcours 5km">
    <div class="info">
      <h3>Le 5 km de Running Conseil</h3>
      <p>En bleu la première boucle, en rouge la seconde boucle.</p>
      <a href="/parcours/2025/5km.png" target="_blank" class="btn">Voir en grand</a>
    </div>
  </div>

  <div class="parcours-card">
    <img src="/parcours/2025/10km.png" alt="Parcours 10km">
    <div class="info">
      <h3>Le 10 km du BDS</h3>
      <p>En bleu la première boucle, en rouge la seconde boucle.</p>
      <a href="/parcours/2025/10km.png" target="_blank" class="btn">Voir en grand</a>
    </div>
  </div>

<div class="parcours-card">
    <img src="/parcours/2025/benjamin-minime.png" alt="Parcours benjamins et minimse">
    <div class="info">
      <h3>Benjamins et minimes by CMB</h3>
      <p>En bleu la première boucle, en rouge la seconde.</p>
      <a href="/parcours/2025/benjamin-minime.png" target="_blank" class="btn">Voir en grand</a>
    </div>
  </div>
</div>

<style>
.parcours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 2rem;
}

.parcours-card {
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.parcours-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
}

.parcours-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.parcours-card .info {
  padding: 1.5rem;
}

.parcours-card h3 {
  margin: 0 0 0.5rem 0 !important;
  color: var(--vp-c-text-1);
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 15px;
  background-color: var(--vp-c-brand-1);
  color: white !important;
  border-radius: 8px;
  text-decoration: none !important;
  font-size: 0.9em;
}
</style>
