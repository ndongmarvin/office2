<template>
  <div class="app-layout">
    <!-- NAVIGATION -->
    <nav class="navbar">
      <div class="container">
        <router-link to="/" class="logo">
          <img src="/logo-white.png" alt="OFIECS" class="logo-img" />
        </router-link>
        
        <!-- Desktop Navigation -->
        <ul class="nav-links">
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/about">À Propos</router-link></li>
          <li><router-link to="/inspections">Inspections</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        
        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-button" 
          @click="toggleMobileMenu"
          :class="{ 'active': isMobileMenuOpen }"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div class="mobile-menu" :class="{ 'open': isMobileMenuOpen }">
        <ul class="mobile-nav-links">
          <li><router-link to="/" @click="closeMobileMenu">Accueil</router-link></li>
          <li><router-link to="/about" @click="closeMobileMenu">À Propos</router-link></li>
          <li><router-link to="/inspections" @click="closeMobileMenu">Inspections</router-link></li>
          <li><router-link to="/contact" @click="closeMobileMenu">Contact</router-link></li>
        </ul>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Column 1: Logo & Description -->
          <div class="footer-column footer-about">
            <img src="/logo-white.png" alt="OFIECS" class="footer-logo" />
            <p class="footer-description">Office d'Inspection de l'Éducation, des Services à l'Enfance et des Compétences - République du Sénégal</p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" class="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Contact -->
          <div class="footer-column">
            <h3 class="footer-title">Contact</h3>
            <ul class="footer-list footer-contact">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Dakar, Sénégal</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>+221 33 XXX XX XX</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>contact@ofiecs.sn</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
          <p>&copy; 2026 OFIECS - Tous droits réservés</p>
          <div class="footer-legal-links">
            <a href="#mentions">Mentions légales</a>
            <span class="separator">|</span>
            <a href="#confidentialite">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
  data() {
    return {
      isMobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      // Prevent body scroll when menu is open
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  },
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
  },
  beforeUnmount() {
    // Clean up body overflow on component unmount
    document.body.style.overflow = '';
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
  background: #002147; /* Bleu marine institutionnel */
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
  display: flex;
  align-items: center;
}

.logo-img {
  height: 100px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  opacity: 0.85;
}

.logo:hover .logo-img {
  transform: scale(1.05);
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

/* MOBILE MENU BUTTON */
.mobile-menu-button {
  display: none; /* Caché par défaut sur desktop */
  flex-direction: column;
  gap: 6px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.mobile-menu-button span {
  width: 28px;
  height: 3px;
  background: #ffffff;
  border-radius: 3px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-button.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.mobile-menu-button.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* MOBILE MENU */
.mobile-menu {
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  height: calc(100vh - 80px);
  background: #002147;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  z-index: 999;
  padding: 30px 0 80px;
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.mobile-nav-links li {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
}

.mobile-nav-links a {
  display: block;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  padding: 16px 40px;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}

.mobile-nav-links a:hover,
.mobile-nav-links a.router-link-active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  padding-left: 56px;
  border-left: 4px solid #d4af37;
}

/* MAIN CONTENT */
.main-content {
  min-height: 100vh;
  padding-top: 80px; /* Compense le navbar fixe */
}

/* FOOTER */
.footer {
  padding: 80px 0 0;
  background: #002147; /* UN dark blue */
  color: #ffffff;
  border-top: 4px solid #1e3a8a;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 80px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-about {
  max-width: 320px;
}

.footer-logo {
  height: 60px;
  width: 60px;
}

.footer-description {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
}

.footer-social {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #1e3a8a;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
}

.social-link svg {
  width: 18px;
  height: 18px;
}

.footer-title {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-list li {
  display: flex;
  align-items: flex-start;
}

.footer-list a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 14px;
  line-height: 1.6;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
}

.footer-list a:hover {
  color: #d4af37;
  padding-left: 8px;
}

.footer-contact li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 14px;
}

.footer-contact svg {
  flex-shrink: 0;
  opacity: 0.7;
}

/* FOOTER BOTTOM */
.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 32px 0;
  text-align: center;
}

.footer-bottom p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  margin: 0;
}

.footer-legal-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}

.footer-legal-links a {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-legal-links a:hover {
  color: #d4af37;
}

.footer-legal-links .separator {
  color: rgba(255, 255, 255, 0.3);
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
  
  .mobile-menu-button {
    display: flex;
  }

  .main-content {
    padding-top: 80px;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-about {
    text-align: center;
  }

  .footer-column {
    text-align: center;
  }

  .footer-logo {
    margin: 0 auto 20px;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-list {
    align-items: center;
  }

  .footer-contact li {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }

  .navbar .container {
    height: 70px;
  }

  .logo {
    font-size: 20px;
  }
  .logo-img {
    height: 70px;

  }

  .mobile-menu {
    top: 70px;
    height: calc(100vh - 70px);
    padding: 24px 0 60px;
  }

  .main-content {
    padding-top: 70px;
  }


  .footer-logo {
    height: 40px;
  }

  .mobile-nav-links a {
    font-size: 18px;
    padding: 14px 24px;
  }

  .mobile-nav-links a:hover,
  .mobile-nav-links a.router-link-active {
    padding-left: 40px;
  }

  .footer {
    padding: 48px 0 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 32px;
  }

  .footer-about {
    grid-column: 1;
    max-width: 100%;
    text-align: center;
  }

  .footer-column {
    text-align: center;
  }

  /* Hide contact column on mobile */
  .footer-column:not(.footer-about) {
    display: none;
  }

  .footer-logo {
    height: 50px;
    width: auto;
    margin: 0 auto 16px;
  }

  .footer-description {
    text-align: center;
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 24px;
    padding: 0 10px;
  }

  .footer-social {
    justify-content: center;
    gap: 16px;
  }

  .social-link {
    width: 44px;
    height: 44px;
  }

  .social-link svg {
    width: 20px;
    height: 20px;
  }

  .footer-bottom {
    gap: 8px;
    padding: 24px 0;
    flex-direction: column;
    align-items: center;
  }

  .footer-bottom p {
    font-size: 12px;
  }

  .footer-legal-links {
    font-size: 11px;
  }

  .footer-legal-links .separator {
    margin: 0 8px;
  }
}
</style>