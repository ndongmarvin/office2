<template>
  <div class="app-layout">
    <!-- NAVIGATION -->
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">OFIECS</router-link>
        <ul class="nav-links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À Propos</router-link></li>
          <li><router-link to="/inspections">Inspections</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <a href="#contact" class="cta-button">Demander une inspection</a>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="main-content">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <div class="brand-name">OFIECS</div>
            <div class="brand-tagline">Office d'Inspection de l'Éducation, des Services à l'Enfance et des Compétences</div>
          </div>
          <div class="footer-links">
            <router-link to="/privacy">Confidentialité</router-link>
            <router-link to="/terms">Conditions</router-link>
            <router-link to="/accessibility">Accessibilité</router-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  mounted() {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app-layout {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #ffffff;
  color: #000000;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* CONTAINER */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 64px;
}

/* NAVIGATION */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #1e3a8a; /* Bleu marine institutionnel */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}

.logo {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff; /* Blanc pour contraster avec le bleu marine */
  text-decoration: none;
  letter-spacing: -0.5px;
  transition: opacity 0.3s;
}

.logo:hover {
  opacity: 0.85;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 48px;
  align-items: center;
}

.nav-links a {
  color: rgba(255, 255, 255, 0.85); /* Blanc légèrement transparent */
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

.nav-links a:hover {
  color: #ffffff;
}

.nav-links a.router-link-active {
  color: #ffffff;
  font-weight: 600;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  right: 0;
  height: 2px;
  background: #d4af37; /* Accent or */
}

/* CTA Button dans le navbar */
.cta-button {
  background: #d4af37; /* Or */
  color: #1e3a8a; /* Bleu marine */
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
  border: 2px solid #d4af37;
}

.cta-button:hover {
  background: #b8930f; /* Or foncé */
  border-color: #b8930f;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

/* MAIN CONTENT */
.main-content {
  min-height: 100vh;
}

/* FOOTER */
.footer {
  padding: 80px 0;
  border-top: 1px solid #e5e7eb;
  background: #1e3a8a; /* Bleu marine institutionnel */
  color: #ffffff;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-name {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
}

.brand-tagline {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  max-width: 400px;
}

.footer-links {
  display: flex;
  gap: 48px;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #ffffff;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }

  .nav-links,
  .cta-button {
    display: none;
  }
  
  /* TODO: Add mobile menu toggle */
}

@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }

  .footer-content {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 16px;
  }
}
</style>