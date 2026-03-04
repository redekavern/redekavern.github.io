---
title: Albums Photos
editLink: false
---

<script setup>
const albums = [
  {
    annee: "2025",
    titre: "Édition 2025",
    description: "Toutes les photos de la course, du village et des podiums.",
    couverture: "/photos/covers/cover-2025.webp", // Image locale pour l'aperçu
    // lienExterne: "https://redekavern35.wordpress.com/photos-2025/",
    lienExterne: "/pages/photos-2025.html",
    // nbPhotos: "450 photos"
  },
  {
    annee: "2024",
    titre: "Édition 2024",
    description: "Souvenirs d'une édition ensoleillée au cœur de la vallée de la Seiche.",
    couverture: "/photos/covers/cover-2024.jpeg",
    lienExterne: "https://www.canva.com/design/DAG1SeZ2Ml0/o0Q7ZCkWqiPh5nz83_nbYg/view?utm_content=DAG1SeZ2Ml0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h275ace424d",
    // nbPhotos: "320 photos"
  },
  {
    annee: "2023",
    titre: "Édition 2023",
    description: "La Redek se mobilise pour l'association Le Rire Médecin.",
    couverture: "/photos/covers/cover-2023.jpeg",
    lienExterne: "https://www.canva.com/design/DAG3Qt13Jzc/Vl0FdWp2DT9Rsm55GAKWyg/view?utm_content=DAG3Qt13Jzc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h00d054183d",
    // nbPhotos: "320 photos"
  }
]
</script>

# Albums Photos

Revivez les moments forts de la Redek à travers nos galeries photos.

<div class="album-grid">
  <a v-for="album in albums" :key="album.annee" :href="album.lienExterne" target="_blank" class="album-card">
    <div class="album-image">
      <img :src="album.couverture" :alt="album.titre">
      <div class="album-overlay">
        <span>Ouvrir l'album</span>
      </div>
      <span class="year-badge">{{ album.annee }}</span>
    </div>
    <div class="album-info">
      <h3>{{ album.titre }}</h3>
      <p>{{ album.description }}</p>
      <small>{{ album.nbPhotos }}</small>
    </div>
  </a>
</div>

<style scoped>
.album-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 2rem;
}

.album-card {
  text-decoration: none !important;
  color: inherit !important;
  background-color: var(--vp-c-bg-soft);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.album-card:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.album-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.album-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.album-card:hover .album-image img {
  transform: scale(1.1);
}

.album-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.album-overlay span {
  color: white;
  border: 2px solid white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
}

.album-card:hover .album-overlay {
  opacity: 1;
}

.year-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: var(--vp-c-brand-1);
  color: white;
  padding: 2px 12px;
  border-radius: 12px;
  font-weight: bold;
}

.album-info {
  padding: 1.5rem;
}

.album-info h3 {
  margin: 0 0 0.5rem 0 !important;
  color: var(--vp-c-text-1);
}

.album-info p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.album-info small {
  color: var(--vp-c-text-2);
  font-style: italic;
}
</style>
