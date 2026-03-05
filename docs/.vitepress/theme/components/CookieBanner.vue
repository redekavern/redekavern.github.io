<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    // On vérifie si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('redek-cookie-consent')
    if (!consent) {
        isVisible.value = true
    }
    // isVisible.value = true;
    // console.log("Bandeau chargé ! Valeur isVisible :", isVisible.value)
})

const acceptCookies = () => {
    localStorage.setItem('redek-cookie-consent', 'accepted')
    isVisible.value = false
    // Ici, on pourrait recharger pour activer GA, 
    // mais la plupart des petits sites acceptent le tracking après clic
}

const declineCookies = () => {
    localStorage.setItem('redek-cookie-consent', 'declined')
    isVisible.value = false
}
</script>

<template>
    <div v-if="isVisible" class="cookie-banner">
        <div class="cookie-content">
            <p>
                <span class="emoji">🏃</span>
                <strong>Respect de votre vie privée</strong><br>
                La Redek utilise des cookies uniquement pour mesurer l'audience du site.
                Ces données sont anonymisées, <b>ne sont pas utilisées pour la publicité</b>
                et ne sont <b>jamais revendues</b>.
            </p>
            <div class="cookie-actions">
                <button @click="acceptCookies" class="btn-accept">Accepter</button>
                <button @click="declineCookies" class="btn-decline">Refuser</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cookie-banner {
    position: fixed !important;
    bottom: 30px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    z-index: 10001 !important;
    /* On monte encore d'un cran */

    width: 90% !important;
    max-width: 480px !important;
    height: auto !important;
    /* Permet au cadre de grandir avec le texte */
    min-height: 150px !important;
    /* Sécurité pour ne pas qu'il soit trop plat */
    padding: 30px !important;
    /* Plus d'espace pour que ça respire */
    display: flex !important;
    /* On passe en flex pour tout aligner */
    flex-direction: column !important;


    /* FORCE LE FOND SOMBRE ICI */
    background: #1a1c1e !important;
    background-color: #1a1c1e !important;

    /* On s'assure que rien n'est transparent */
    opacity: 1 !important;
    visibility: visible !important;

    /* Style Redek */
    color: #ffffff !important;
    border: 2px solid #33bcff !important;
    border-radius: 20px !important;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8) !important;

    display: block !important;
}

.cookie-content {
    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
    text-align: center !important;
    visibility: visible !important;
}

.cookie-content p {
    margin: 0 !important;
    font-size: 0.95rem !important;
    line-height: 1.5 !important;
}

.cookie-actions {
    display: flex !important;
    gap: 12px !important;
    justify-content: center !important;
    margin-top: 8px !important;
}

button {
    padding: 10px 24px !important;
    border-radius: 25px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    font-size: 0.9rem !important;
    border: none !important;
}

.btn-accept {
    background-color: #33bcff !important;
    color: white !important;
}

.btn-decline {
    background-color: transparent !important;
    color: var(--vp-c-text-2) !important;
    border: 1px solid var(--vp-c-divider) !important;
}
</style>