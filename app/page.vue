<template>
  <main class="font-sans">

    <!-- HERO -->
    <section class="hero py-16 bg-white">
      <div class="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Où chaque enfant s'épanouit</h1>
          <p class="text-lg text-gray-700 mb-6">Crèche agréée OFIECS. Éducation d'excellence pour les 6 mois à 5 ans.</p>
          <a href="#contact" class="btn inline-block bg-primary-500 text-white px-6 py-3 rounded-md">Réserver une visite</a>
        </div>
        <div class="flex-1">
          <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=2000&q=80" alt="Enfants heureux" class="hero-image rounded-lg shadow-md w-full object-cover">
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats py-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div class="text-3xl font-bold">15+</div>
            <div class="text-sm text-gray-600">Années d'expérience</div>
          </div>
          <div>
            <div class="text-3xl font-bold">120+</div>
            <div class="text-sm text-gray-600">Enfants épanouis</div>
          </div>
          <div>
            <div class="text-3xl font-bold">4.9</div>
            <div class="text-sm text-gray-600">Note parents</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="feature-section py-12 bg-gray-50">
      <div class="container mx-auto space-y-12">
        <div class="feature-grid md:flex md:items-center md:gap-8">
          <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1400&q=80" alt="Sécurité totale" class="feature-image w-full md:w-1/2 rounded-lg object-cover">
          <div class="feature-content md:w-1/2">
            <h2 class="text-2xl font-semibold">Sécurité totale</h2>
            <p class="text-gray-700">Infrastructures certifiées OFIECS. Surveillance 24/7. Protocoles d'urgence testés régulièrement.</p>
          </div>
        </div>

        <div class="feature-grid md:flex md:items-center md:gap-8 md:flex-row-reverse">
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&q=80" alt="Équipe qualifiée" class="feature-image w-full md:w-1/2 rounded-lg object-cover">
          <div class="feature-content md:w-1/2">
            <h2 class="text-2xl font-semibold">Équipe d'experts</h2>
            <p class="text-gray-700">Éducateurs certifiés petite enfance. Formation continue obligatoire. Ratios optimaux garantis.</p>
          </div>
        </div>

        <div class="feature-grid md:flex md:items-center md:gap-8">
          <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1400&q=80" alt="Apprentissage créatif" class="feature-image w-full md:w-1/2 rounded-lg object-cover">
          <div class="feature-content md:w-1/2">
            <h2 class="text-2xl font-semibold">Apprentissage créatif</h2>
            <p class="text-gray-700">Programmes adaptés par âge. Activités artistiques quotidiennes. Éveil STEM et développement socio-émotionnel.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAMS -->
    <section id="programmes" class="programs py-12">
      <div class="container mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-2xl font-semibold">Nos programmes</h2>
          <p class="text-gray-600">Trois programmes adaptés à chaque étape du développement.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="program-card bg-white rounded-lg shadow-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80" alt="Bébés" class="w-full h-48 object-cover">
            <div class="p-4">
              <div class="text-xs text-primary-500 mb-1">6-18 mois</div>
              <h3 class="font-semibold">Bébés</h3>
              <p class="text-gray-600 text-sm">Soins individualisés, éveil sensoriel, routines sécurisantes.</p>
            </div>
          </div>

          <div class="program-card bg-white rounded-lg shadow-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" alt="Tout-petits" class="w-full h-48 object-cover">
            <div class="p-4">
              <div class="text-xs text-primary-500 mb-1">18 mois - 3 ans</div>
              <h3 class="font-semibold">Tout-petits</h3>
              <p class="text-gray-600 text-sm">Apprentissage actif, développement social, exploration créative.</p>
            </div>
          </div>

          <div class="program-card bg-white rounded-lg shadow-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80" alt="Préscolaire" class="w-full h-48 object-cover">
            <div class="p-4">
              <div class="text-xs text-primary-500 mb-1">3-5 ans</div>
              <h3 class="font-semibold">Préscolaire</h3>
              <p class="text-gray-600 text-sm">Préparation à l'école, littératie, mathématiques, sciences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FULL WIDTH IMAGE -->
    <section class="full-image-section py-8">
      <div class="container mx-auto">
        <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=2000&q=80" alt="Journée à la crèche" class="w-full rounded-lg object-cover">
      </div>
    </section>

    <!-- GALLERY -->
    <section id="galerie" class="gallery py-12 bg-gray-50">
      <div class="container mx-auto">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-semibold">Galerie</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200&q=80" alt="Galerie 1" class="w-full rounded-lg object-cover">
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80" alt="Galerie 2" class="w-full rounded-lg object-cover">
          <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&q=80" alt="Galerie 3" class="w-full rounded-lg object-cover">
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials py-12">
      <div class="container mx-auto">
        <div class="text-center mb-6">
          <h2 class="text-2xl font-semibold">Témoignages</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-yellow-400 mb-2">★★★★★</div>
            <p class="text-gray-700">"Notre fille s'épanouit pleinement ici. Les éducateurs sont exceptionnels."</p>
            <div class="mt-4 font-semibold">Aminata Diallo</div>
            <div class="text-sm text-gray-500">Maman de Fatou</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-yellow-400 mb-2">★★★★★</div>
            <p class="text-gray-700">"L'accréditation OFIECS nous a rassurés. Excellent choix pour notre fils."</p>
            <div class="mt-4 font-semibold">Moussa Sarr</div>
            <div class="text-sm text-gray-500">Papa de Mamadou</div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="text-yellow-400 mb-2">★★★★★</div>
            <p class="text-gray-700">"Petits groupes, attention personnalisée. Nos jumeaux adorent y aller!"</p>
            <div class="mt-4 font-semibold">Khady Ndiaye</div>
            <div class="text-sm text-gray-500">Maman de jumeaux</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="final-cta py-12 bg-primary-50">
      <div class="container mx-auto">
        <div class="md:flex md:items-center md:gap-8">
          <div class="md:flex-1">
            <h2 class="text-2xl font-semibold">Rejoignez-nous</h2>
            <p class="text-gray-700">Réservez une visite et découvrez pourquoi les familles nous font confiance.</p>
            <a href="#contact" class="btn inline-block bg-white text-primary-600 px-6 py-3 rounded-md mt-4">Planifier une visite</a>
          </div>
          <div class="md:flex-1 mt-6 md:mt-0">
            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1400&q=80" alt="Rejoignez-nous" class="w-full rounded-lg object-cover">
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-semibold mb-4">Prêt à commencer?</h2>
        <div class="contact-info mb-4">
          <p>📍 123 Avenue des Enfants, Dakar</p>
          <p>📞 +221 33 123 4567</p>
          <p>✉️ bonjour@littlelearners.sn</p>
        </div>
        <a href="#" class="btn btn-white inline-block bg-primary-500 text-white px-6 py-3 rounded-md">Nous contacter</a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div class="font-bold">Little Learners</div>
          <div class="text-sm text-gray-300">Crèche agréée OFIECS depuis 2009</div>
        </div>
        <div class="footer-links flex gap-4">
          <a href="#" class="text-gray-300">Confidentialité</a>
          <a href="#" class="text-gray-300">Conditions</a>
          <a href="#" class="text-gray-300">Accessibilité</a>
        </div>
      </div>
    </footer>

  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href')
      if (!href || href === '#') return
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  })
})
</script>

<!-- Keep styling minimal; project CSS + Tailwind handle most visuals -->
<style>
/* minor helpers to match original classes if needed */
.btn { text-decoration: none }
.hero-image { height: 320px }
.feature-image { height: 260px }
</style>
