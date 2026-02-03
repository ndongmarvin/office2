<template>
  <div class="min-h-screen flex flex-col bg-white">

    <!-- Header / Navbar -->
    <header class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold text-primary-600">OFIECS</NuxtLink>

        <nav class="hidden md:flex items-center gap-6">
          <NuxtLink to="#programmes" class="text-gray-700 hover:text-primary-500">Programmes</NuxtLink>
          <NuxtLink to="#galerie" class="text-gray-700 hover:text-primary-500">Galerie</NuxtLink>
          <NuxtLink to="#contact" class="text-gray-700 hover:text-primary-500">Contact</NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <button @click="open = !open" class="md:hidden p-2 rounded-md text-gray-700 bg-gray-100">
          <span v-if="!open" aria-hidden>☰</span>
          <span v-else aria-hidden>✕</span>
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="open" class="md:hidden border-t">
        <div class="px-4 py-3 flex flex-col gap-2">
          <NuxtLink to="#programmes" @click.native="open = false" class="py-2">Programmes</NuxtLink>
          <NuxtLink to="#galerie" @click.native="open = false" class="py-2">Galerie</NuxtLink>
          <NuxtLink to="#contact" @click.native="open = false" class="py-2">Contact</NuxtLink>
        </div>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div class="font-bold">OFIECS</div>
          <div class="text-sm text-gray-300">Office d'Inspection de l'Éducation, des Services à l'Enfance et des Compétences</div>
        </div>
        <div class="flex gap-4">
          <NuxtLink to="#" class="text-gray-300">Confidentialité</NuxtLink>
          <NuxtLink to="#" class="text-gray-300">Conditions</NuxtLink>
          <NuxtLink to="#" class="text-gray-300">Accessibilité</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped>
/* keep minimal — Tailwind provides main styling */
.container { max-width: 1200px }
</style>
