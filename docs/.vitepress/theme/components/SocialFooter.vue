<script setup>
import { Icon } from '@iconify/vue'
// Importez les icônes une par une pour qu'elles soient incluses dans le build
import phoneIcon from '@iconify-icons/lucide/phone'
import mailIcon from '@iconify-icons/lucide/mail'
import facebookIcon from '@iconify-icons/mdi/facebook'
import instagramIcon from '@iconify-icons/mdi/instagram'
import linkedinIcon from '@iconify-icons/mdi/linkedin'
import linktreeIcon from '@iconify-icons/tabler/brand-linktree'

</script>

<template>
    <footer class="custom-footer">

        <div class="footer-socials">
            <a href="tel:+33619683307" aria-label="Téléphone">
                <Icon :icon="phoneIcon" width="24" height="24" />
            </a>

            <a href="mailto:redekavern@gmail.com" aria-label="Email">
                <Icon :icon="mailIcon" width="24" height="24" />
            </a>

            <a href="https://www.facebook.com/profile.php?id=100090918943830&locale=fr_FR" target="_blank"
                aria-label="Facebook">
                <Icon :icon="facebookIcon" width="24" height="24" />
            </a>

            <a href="https://www.instagram.com/redekavern/" target="_blank" aria-label="Instagram">
                <Icon :icon="instagramIcon" width="24" height="24" />
            </a>

            <a href="https://www.linkedin.com/in/redek-%C3%A0-vern-b29916269/recent-activity/all/" target="_blank"
                aria-label="Linkedin">
                <Icon :icon="linkedinIcon" width="24" height="24" />
            </a>

            <a href="https://linktr.ee/redeksite" target="_blank" aria-label="Linktree">
                <Icon :icon="linktreeIcon" width="24" height="24" />
            </a>
        </div>

        <p class="copyright">Copyright © 2026 Redek à Vern</p>
    </footer>
</template>

<style scoped>
.custom-footer {
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid var(--vp-c-divider);

    /* background-color: var(--vp-c-bg-alt); */
}

.footer-socials {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
}

.footer-socials a {
    color: var(--vp-c-text-2);
    transition: color 0.2s, transform 0.2s;
}

.footer-socials a:hover {
    color: var(--vp-c-brand);
    transform: translateY(-2px);
}

.copyright {
    font-size: 0.9rem;
    color: var(--vp-c-text-2);
}
</style>