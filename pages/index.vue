<template>
<main>
        <!-- NAVIGATION -->
    <nav>
        <div class="container">
            <a href="#" class="logo">OFIECS</a>
            <ul>
                <li><a href="#apropos">A propos</a></li>
                <li><a href="#galerie">Galerie</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
        <div class="container">
            <h1>Où chaque enfant s'épanouit</h1>
            <p>Crèche agréée OFIECS. Éducation d'excellence pour les 6 mois à 5 ans.</p>
            <a href="#contact" class="btn">Réserver une visite</a>
            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=2000&q=80" alt="Enfants heureux" class="hero-image">
        </div>
    </section>

    <!-- STATS -->
    <section class="stats">
        <div class="container">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">15+</div>
                    <div class="stat-label">Années d'expérience</div>
                </div>
                <div>
                    <div class="stat-number">120+</div>
                    <div class="stat-label">Enfants épanouis</div>
                </div>
                <div>
                    <div class="stat-number">4.9</div>
                    <div class="stat-label">Note parents</div>
                </div>
            </div>
        </div>
    </section>

    <!-- FEATURES -->
    <section class="feature-section">
        <div class="container">
            
            <!-- Feature 1 -->
            <div class="feature-grid">
                <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1400&q=80" alt="Sécurité totale" class="feature-image">
                <div class="feature-content">
                    <h2>Sécurité totale</h2>
                    <p>Infrastructures certifiées OFIECS. Surveillance 24/7. Protocoles d'urgence testés régulièrement.</p>
                </div>
            </div>

            <!-- Feature 2 -->
            <div class="feature-grid">
                <div class="feature-content" style="order: 1;">
                    <h2>Équipe d'experts</h2>
                    <p>Éducateurs certifiés petite enfance. Formation continue obligatoire. Ratios optimaux garantis.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&q=80" alt="Équipe qualifiée" class="feature-image" style="order: 2;">
            </div>

            <!-- Feature 3 -->
            <div class="feature-grid">
                <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1400&q=80" alt="Apprentissage créatif" class="feature-image">
                <div class="feature-content">
                    <h2>Apprentissage créatif</h2>
                    <p>Programmes adaptés par âge. Activités artistiques quotidiennes. Éveil STEM et développement socio-émotionnel.</p>
                </div>
            </div>

        </div>
    </section>

    <!-- PROGRAMS -->
    <section id="programmes" class="programs">
        <div class="container">
            <div class="section-header">
                <h2>Nos programmes</h2>
                <p>Trois programmes adaptés à chaque étape du développement.</p>
            </div>

            <div class="program-grid">
                
                <div class="program-card">
                    <img src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80" alt="Bébés" class="program-image">
                    <div class="program-meta">6-18 mois</div>
                    <h3>Bébés</h3>
                    <p>Soins individualisés, éveil sensoriel, routines sécurisantes.</p>
                </div>

                <div class="program-card">
                    <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" alt="Tout-petits" class="program-image">
                    <div class="program-meta">18 mois - 3 ans</div>
                    <h3>Tout-petits</h3>
                    <p>Apprentissage actif, développement social, exploration créative.</p>
                </div>

                <div class="program-card">
                    <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80" alt="Préscolaire" class="program-image">
                    <div class="program-meta">3-5 ans</div>
                    <h3>Préscolaire</h3>
                    <p>Préparation à l'école, littératie, mathématiques, sciences.</p>
                </div>

            </div>
        </div>
    </section>

    <!-- FULL WIDTH IMAGE -->
    <section class="full-image-section">
        <div class="container">
            <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=2000&q=80" alt="Journée à la crèche" class="full-image">
        </div>
    </section>

    <!-- GALLERY -->
    <section id="galerie" class="gallery">
        <div class="container">
            <div class="section-header">
                <h2>Galerie</h2>
            </div>

            <div class="gallery-grid">
                <!-- Row 1: 2 images -->
                <div class="gallery-row-2">
                    <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1200&q=80" alt="Galerie 1" class="gallery-image">
                    <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80" alt="Galerie 2" class="gallery-image">
                </div>

                <!-- Row 2: 3 images -->
                <div class="gallery-row-3">
                    <img src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80" alt="Galerie 3" class="gallery-image gallery-image-small">
                    <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80" alt="Galerie 4" class="gallery-image gallery-image-small">
                    <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" alt="Galerie 5" class="gallery-image gallery-image-small">
                </div>

                <!-- Row 3: Full width -->
                <img src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=2000&q=80" alt="Galerie 6" class="gallery-image gallery-image-full">
            </div>
        </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2>Témoignages</h2>
            </div>

            <div class="testimonial-grid">
                
                <div>
                    <div class="testimonial-stars">★★★★★</div>
                    <p class="testimonial-text">"Notre fille s'épanouit pleinement ici. Les éducateurs sont exceptionnels."</p>
                    <div class="testimonial-author">Aminata Diallo</div>
                    <div class="testimonial-role">Maman de Fatou</div>
                </div>

                <div>
                    <div class="testimonial-stars">★★★★★</div>
                    <p class="testimonial-text">"L'accréditation OFIECS nous a rassurés. Excellent choix pour notre fils."</p>
                    <div class="testimonial-author">Moussa Sarr</div>
                    <div class="testimonial-role">Papa de Mamadou</div>
                </div>

                <div>
                    <div class="testimonial-stars">★★★★★</div>
                    <p class="testimonial-text">"Petits groupes, attention personnalisée. Nos jumeaux adorent y aller!"</p>
                    <div class="testimonial-author">Khady Ndiaye</div>
                    <div class="testimonial-role">Maman de jumeaux</div>
                </div>

            </div>
        </div>
    </section>

    <!-- FINAL CTA -->
    <section class="final-cta">
        <div class="container">
            <div class="final-grid">
                <div>
                    <h2>Rejoignez-nous</h2>
                    <p>Réservez une visite et découvrez pourquoi les familles nous font confiance.</p>
                    <a href="#contact" class="btn">Planifier une visite</a>
                </div>
                <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1400&q=80" alt="Rejoignez-nous" class="feature-image">
            </div>
        </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact">
        <div class="container">
            <h2>Prêt à commencer?</h2>
            
            <div class="contact-info">
                <p>📍 123 Avenue des Enfants, Dakar</p>
                <p>📞 +221 33 123 4567</p>
                <p>✉️ bonjour@littlelearners.sn</p>
            </div>

            <a href="#" class="btn btn-white">Nous contacter</a>
        </div>
    </section>

</main>
</template>

<script setup>
import { onMounted } from 'vue'
definePageMeta({    
  title: 'Little Learners - Crèche Agréée OFIECS à Dakar',
  layout:'main',
  meta: [
    { name: 'description', content: "Découvrez Little Learners, une crèche agréée OFIECS à Dakar offrant un environnement sûr et stimulant pour les enfants de 6 mois à 5 ans. Réservez une visite aujourd'hui!" },
    { name: 'keywords', content: 'crèche Dakar, OFIECS, garde d\'enfants, éducation petite enfance, programmes préscolaires, sécurité enfants, développement enfantin' },
    { name: 'author', content: 'Little Learners' },
  ],
})
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
