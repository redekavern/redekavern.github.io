<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
    // On vérifie si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('redek-cookie-consent')
    if (!consent) {
        isVisible.value = true
    }
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
    <Transition name="fade">
        <div v-if="isVisible" class="cookie-banner">
            <div class="cookie-content">
                <p>
                    🏃 <b>La Redek</b> utilise des cookies pour analyser l'audience et améliorer votre expérience.
                </p>
                <div class="cookie-actions">
                    <button @click="acceptCookies" class="btn-accept">Accepter</button>
                    <button @click="declineCookies" class="btn-decline">Refuser</button>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.cookie-banner {
    position: fixed !important;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 500px;
    background: var(--vp-c-bg-soft);
    border: 2px solid #33bcff;
    /* Votre bleu Redek */
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    z-index: 100;
    padding: 20px;
}

.cookie-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
}

.cookie-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
}

button {
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-accept {
    background: #33bcff;
    color: white;
    border: none;
}

.btn-decline {
    background: transparent;
    border: 1px solid var(--vp-c-divider);
}

button:hover {
    transform: scale(1.05);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>