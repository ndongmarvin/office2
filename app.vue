<template>
 <div class="app">
 <NuxtLayout>
    <NuxtPage />

  </NuxtLayout>
 </div>
</template>

<script setup lang="ts">
// Utilisation de l'API de Composition




</script>

<style>
/* Styles globaux */
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  min-height: 100vh;
  background-color: #f9fafb;
}

/* Support du mode sombre */
.dark .app {
  background-color: #111827;
  color: #f9fafb;
}

/* Utilitaires pour les transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Styles pour les boutons */
button {
  cursor: pointer;
}

/* Styles pour les formulaires */
input, select, textarea {
  outline: none;
}

/* Styles pour les tableaux */
table {
  border-collapse: collapse !important;
  border-spacing: 0;
  width: 100%;
}

h2 {
  font-size: 80px;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 48px;
  color: #1e3a8a;
  text-align: center;
}
</style> 