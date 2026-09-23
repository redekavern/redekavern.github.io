---
layout: page
---

<script setup>
import { Icon } from '@iconify/vue';
</script>

<div class="parking-page-container">
  <div class="parking-section">
    <h3>
      <Icon icon="lucide:circle-parking" class="parking-icon" />
      <span>Où vous garer le jour de la course</span>
    </h3>
    <img src="/parkings/parkings_2026.webp" alt="Les parkings de la Redek à Vern 2026" class="parking-image" />
    <div class="parking-info">
      <div class="info-card">
        <h4><Icon icon="lucide:car" class="sub-icon" /> Les principaux parkings disponibles :</h4>
        <ul class="parking-list">
          <li>
            <span class="parking-name"><strong>Parking du terrain de foot</strong> <small>(Collège Théodore Monod)</small></span>
            <span class="parking-distance"><Icon icon="lucide:footprints" class="foot-icon" /> ~500 m <span class="time">(7 min)</span></span>
          </li>
          <li>
            <span class="parking-name"><strong>Parking du collège</strong> <small>(Collège Théodore Monod)</small></span>
            <span class="parking-distance"><Icon icon="lucide:footprints" class="foot-icon" /> ~350 m <span class="time">(5 min)</span></span>
          </li>
          <li>
            <span class="parking-name"><strong>Parking place de la Mairie</strong> <small>(U Express)</small></span>
            <span class="parking-distance"><Icon icon="lucide:footprints" class="foot-icon" /> ~350 m <span class="time">(5 min)</span></span>
          </li>
          <li>
            <span class="parking-name"><strong>Parking place des Droits de l'Homme</strong><small>(Place du marché)</small></span>
            <span class="parking-distance"><Icon icon="lucide:footprints" class="foot-icon" /> ~350 m <span class="time">(5 min)</span></span>
          </li>
        </ul>
      </div>
      <div class="info-card alert">
        <h4><Icon icon="lucide:alert-triangle" class="sub-icon alert-icon" /> Circulation et accès :</h4>
        <p>Attention, la circulation est <strong>fermée sur l'Avenue de la Chalotais à partir du rond point du Patis Fraux</strong> (barrières de signalisation indiquées sur le plan) à proximité de la zone de départ. Privilégiez les parkings indiqués en contournant la zone.</p>
      </div>
    </div>
  </div>
</div>

<style scoped>
.parking-page-container {
  max-width: 80% !important;
  width: 100%;
  margin: 1em auto;
}

.parking-section h3 {
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 2rem;
}

.parking-icon {
  font-size: 3rem;
  color: #3b82f6;
}

.parking-image {
  width: 80% !important;
  max-width: none !important;
  height: auto;
  display: block;
  margin: 2rem auto;
}

.parking-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.info-card {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.info-card h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.sub-icon {
  color: #3b82f6;
  font-size: 1.4rem;
}

.alert-icon {
  color: #ef4444;
}

/* Styles spécifiques pour structurer la liste proprement */
.parking-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.parking-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.parking-list li:last-child {
  border-bottom: none;
}

.parking-name {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.parking-name small {
  color: var(--vp-c-text-2);
  font-size: 0.85rem;
}

.parking-distance {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  font-weight: 500;
  background: var(--vp-c-bg);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  border: 1px solid var(--vp-c-divider);
  font-size: 0.9rem;
}

.foot-icon {
  color: #3b82f6;
  font-size: 1rem;
}

.time {
  color: var(--vp-c-text-2);
  font-weight: normal;
}

@media (max-width: 1024px) {
  .parking-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .parking-list li {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .parking-distance {
    align-self: flex-end;
  }
}
</style>