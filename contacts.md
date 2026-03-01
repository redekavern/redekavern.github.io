---
layout: doc
---

<script setup>
import { Icon } from '@iconify/vue';
</script>

<div class="contact-card">
  <h3>📍 Nous contacter</h3>
  
  <div class="contact-links">

<a href="https://www.google.com/maps/place/US+Vern+Athl%C3%A9tisme/@48.0443885,-1.6035768,431m/data=!3m2!1e3!4b1!4m6!3m5!1s0x480f274a06e31b0d:0x358d4f055d628434!8m2!3d48.0443885!4d-1.6035768!16s%2Fg%2F11s2nzm1kh?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" class="contact-item">
    <Icon icon="mdi:map-marker" width="24" height="24" color="#33bcff" />
    <span>7a Av. de la Chalotais, 35770 Vern-sur-Seiche</span>
  </a>

<a href="sms:+33619683307" class="contact-item">
    <Icon icon="mdi-message-processing" class="icon" />
    <span>sms au 06 19 68 33 07</span>
  </a>

<a href="tel:+33619683307" class="contact-item">
    <Icon icon="mdi:phone" class="icon" />
    <span>appeler le 06 19 68 33 07</span>
  </a>

<a href="mailto:redekavern@gmail.com" class="contact-item">
    <Icon icon="mdi:mail" class="icon" />
    <span>écrire à redekavern@gmail.com</span>
  </a>

  </div>
</div>

<style scoped>
.contact-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  max-width: 500px;
}

.contact-card h3 {
  margin-top: 0 !important;
  margin-bottom: 15px !important;
  border-top: none !important;
  color: var(--vp-c-text-1);
  font-size: 1.2rem;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none !important;
  color: var(--vp-c-text-1);
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.contact-item:hover {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-brand-1) !important;
}

.icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: #33bcff
}

@media (max-width: 640px) {
  .contact-item span {
    font-size: 0.9rem;
  }
}
</style>
