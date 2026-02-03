<template>
  <div class="home-page">
    <!-- HERO -->
    <section class="hero">
        <div class="container">
            <!-- <div class="hero-badge">🏛️ Institution Publique</div> -->
            <h1>OFIECS — Office d'Inspection de l'Éducation</h1>
            <p>Garantir l'excellence éducative au Sénégal par l'inspection rigoureuse des établissements d'enseignement et des services à l'enfance.</p>
            <!-- <div class="hero-actions">
                <a href="#contact" class="btn-primary">Demander une inspection</a>
                <a href="/about" class="btn-secondary">En savoir plus</a>
            </div> -->
        </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number">20+</div>
            <div class="stat-label">Inspecteurs qualifiés</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">150+</div>
            <div class="stat-label">Établissements inspectés</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">99%</div>
            <div class="stat-label">Taux de conformité</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <FeatureSection
      title="Inspections rigoureuses"
      description="Évaluation complète de la qualité de l'éducation, de la sécurité et du bien-être des enfants. Méthodologie éprouvée et transparente."
      image-src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=1400&q=80"
      image-alt="Inspection OFIECS"
      :features="[
        'Évaluation complète et objective',
        'Méthodologie standardisée',
        'Critères clairs et transparents',
        'Rapports détaillés'
      ]"
    />

    <FeatureSection
      title="Inspecteurs certifiés"
      description="Plus de 20 professionnels qualifiés avec expertise en éducation, protection de l'enfance et gestion. Formation continue obligatoire."
      image-src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1400&q=80"
      image-alt="Équipe d'inspecteurs"
      :reverse="true"
      :features="[
        'Inspecteurs certifiés et qualifiés',
        'Expertise en éducation',
        'Formation continue obligatoire',
        'Objectivité garantie'
      ]"
    />

    <FeatureSection
      title="Rapports détaillés"
      description="Chaque inspection produit un rapport complet avec constats, recommandations et plan d'amélioration. Transparence et objectivité garanties."
      image-src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1400&q=80"
      image-alt="Rapports d'inspection"
      :features="[
        'Rapports complets et structurés',
        'Constats et recommandations',
        'Plan d\'amélioration détaillé',
        'Suivi personnalisé'
      ]"
    />

    <!-- PROGRAMS -->
    <section class="programs">
      <div class="container">
        <div class="section-header">
          <h2>Domaines d'inspection</h2>
          <p>Cinq domaines clés évalués lors de chaque inspection.</p>
        </div>

        <div class="program-grid">
          <ProgramCard
            v-for="program in programs"
            :key="program.id"
            :title="program.title"
            :description="program.description"
            :image-src="program.image"
            :age-range="program.ageRange"
            @click="handleProgramClick(program)"
          />
        </div>
      </div>
    </section>

    <!-- FULL WIDTH IMAGE -->
    <section class="full-image-section">
      <div class="container">
        <img 
          src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=2000&q=80" 
          alt="Inspection OFIECS" 
          class="full-image"
        >
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>Témoignages</h2>
        </div>

        <div class="testimonial-grid">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.id"
            class="testimonial-card"
          >
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">{{ testimonial.text }}</p>
            <div class="testimonial-author">{{ testimonial.author }}</div>
            <div class="testimonial-role">{{ testimonial.role }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="cta">
      <div class="container">
        <h2>Contactez-nous</h2>
        <p>Demandez une inspection pour votre établissement et améliorez vos standards de qualité.</p>
        <div class="contact-info">
          <p>📍 Siège OFIECS, Dakar, Sénégal</p>
          <p>📞 +221 33 XXX XXXX</p>
          <p>✉️ contact@ofiecs.sn</p>
        </div>
        <a href="#" class="btn">Nous contacter</a>
      </div>
    </section>
  </div>
</template>

<script>
import FeatureSection from '/components/FeatureSection.vue';
import ProgramCard from '/components/ProgramCard.vue';

export default {
  name: 'HomePage',
  components: {
    FeatureSection,
    ProgramCard
  },
  data() {
    return {
      programs: [
        {
          id: 1,
          title: 'Qualité de l\'éducation',
          description: 'Évaluation des programmes, méthodes pédagogiques et développement des compétences.',
          image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80',
          ageRange: 'Domaine 1'
        },
        {
          id: 2,
          title: 'Protection et sécurité',
          description: 'Sécurité physique, protection de l\'enfance, protocoles d\'urgence et hygiène.',
          image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
          ageRange: 'Domaine 2'
        },
        {
          id: 3,
          title: 'Leadership et gestion',
          description: 'Efficacité de la direction, gouvernance, gestion des ressources et vision stratégique.',
          image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80',
          ageRange: 'Domaine 3'
        }
      ],
      testimonials: [
        {
          id: 1,
          text: 'L\'inspection OFIECS nous a permis d\'identifier des axes d\'amélioration clairs. Rapport professionnel et constructif.',
          author: 'Aminata Diallo',
          role: 'Directrice, École Maternelle Les Bambins'
        },
        {
          id: 2,
          text: 'L\'accréditation OFIECS rassure les parents. Un gage de qualité et de transparence pour notre établissement.',
          author: 'Moussa Sarr',
          role: 'Directeur, Crèche Soleil Levant'
        },
        {
          id: 3,
          text: 'Inspecteurs compétents et objectifs. Les recommandations ont vraiment amélioré nos pratiques pédagogiques.',
          author: 'Khady Ndiaye',
          role: 'Responsable pédagogique, Garderie Arc-en-Ciel'
        }
      ]
    }
  },
  methods: {
    handleProgramClick(program) {
      console.log('Program clicked:', program);
      // Navigate to program detail or show modal
      this.$router.push(`/programmes/${program.id}`);
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 64px;
}

/* HERO */
.hero {
  padding: 200px 0 120px;
  background: linear-gradient(135deg, rgba(0, 33, 71, 0.9) 0%, rgba(0, 33, 71, 0.85) 100%), 
              url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=2000&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  text-align: center;
  color: #ffffff;
  position: relative;
}

.hero-badge {
  display: inline-block;
  padding: 12px 32px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.hero h1 {
  font-size: 96px;
  font-weight: 900;
  letter-spacing: -3px;
  margin-bottom: 32px;
  line-height: 1.1;
  color: #ffffff;
}

.hero p {
  font-size: 28px;
  font-weight: 300;
  max-width: 900px;
  margin: 0 auto 60px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
}

.hero-actions {
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 24px 64px;
  text-decoration: none;
  border-radius: 100px;
  font-size: 20px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #d4af37;
  color: #1e3a8a;
  box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
}

.btn-primary:hover {
  background: #b8930f;
  transform: translateY(-4px);
  box-shadow: 0 12px 48px rgba(212, 175, 55, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-4px);
}

/* STATS */
.stats {
  padding: 120px 0;
  background: #002147;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  max-width: 1400px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: 80px 40px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.stat-item:last-child {
  border-right: none;
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.03);
}

.stat-number {
  font-size: 96px;
  font-weight: 700;
  letter-spacing: -4px;
  margin-bottom: 16px;
  color: #ffffff;
  line-height: 1;
}

.stat-label {
  font-size: 21px;
  color: #a1a1a6;
  font-weight: 400;
  line-height: 1.4;
  max-width: 280px;
  margin: 0 auto;
}

/* PROGRAMS */
.programs {
  padding: 200px 0;
  background: #fafafa;
}

.section-header {
  margin-bottom: 160px;
}

.section-header h2 {
  font-size: 96px;
  font-weight: 800;
  letter-spacing: -2px;
  margin-bottom: 32px;
  color: #1e3a8a;
}

.section-header p {
  font-size: 28px;
  font-weight: 300;
  color: #666666;
  max-width: 700px;
}

.program-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
}

/* FULL IMAGE */
.full-image-section {
  padding: 200px 0;
}

.full-image {
  width: 100%;
  height: 900px;
  object-fit: cover;
  border-radius: 32px;
}

/* TESTIMONIALS */
.testimonials {
  padding: 200px 0;
  background: #fafafa;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
}

.testimonial-stars {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 32px;
}

.testimonial-text {
  font-size: 24px;
  font-weight: 300;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 40px;
}

.testimonial-author {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #000000;
}

.testimonial-role {
  font-size: 16px;
  color: #999999;
}

/* CTA */
.cta {
  padding: 200px 0;
  text-align: center;
}

.cta h2 {
  font-size: 96px;
  font-weight: 800;
  letter-spacing: -2px;
  margin-bottom: 48px;
  color: #1e3a8a;
}

.cta p {
  font-size: 32px;
  font-weight: 300;
  color: #666666;
  margin-bottom: 60px;
}

.contact-info {
  margin-bottom: 60px;
}

.contact-info p {
  font-size: 24px;
  color: #666666;
  margin-bottom: 20px;
}

.btn {
  display: inline-block;
  padding: 20px 48px;
  background: #000000;
  color: #ffffff;
  text-decoration: none;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s;
}

.btn:hover {
  background: #333333;
  transform: translateY(-2px);
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }

  .hero {
    padding: 160px 0 100px;
  }

  .hero h1 {
    font-size: 64px;
  }

  .hero p {
    font-size: 22px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    max-width: 400px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .stat-item {
    padding: 60px 30px;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .stat-item:last-child {
    border-bottom: none;
  }

  .stat-number {
    font-size: 72px;
    letter-spacing: -3px;
  }

  .stat-label {
    font-size: 19px;
  }

  .program-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .section-header h2,
  .cta h2 {
    font-size: 64px;
  }

  .full-image {
    height: 600px;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }

  .hero {
    padding: 120px 0 80px;
  }

  .hero-badge {
    font-size: 12px;
    padding: 10px 24px;
    margin-bottom: 32px;
  }

  .hero h1 {
    font-size: 40px;
    letter-spacing: -1.5px;
  }

  .hero p {
    font-size: 18px;
    margin-bottom: 48px;
  }

  .btn-primary,
  .btn-secondary {
    padding: 20px 48px;
    font-size: 18px;
    width: 100%;
  }

  .stats,
  .programs,
  .full-image-section,
  .testimonials,
  .cta {
    padding: 120px 0;
  }

  .stats-grid {
    max-width: 100%;
    gap: 32px;
  }

  .stat-item {
    padding: 32px 24px;
  }

  .stat-icon {
    font-size: 40px;
    margin-bottom: 16px;
  }

  .stat-number {
    font-size: 64px;
    letter-spacing: -2px;
  }

  .stat-label {
    font-size: 17px;
  }

  .section-header h2,
  .cta h2 {
    font-size: 48px;
  }

  .section-header p,
  .cta p {
    font-size: 20px;
  }

  .section-header {
    margin-bottom: 80px;
  }
}
</style>