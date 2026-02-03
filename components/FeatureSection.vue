<template>
  <section class="feature-section">
    <div class="container">
      <div class="feature-grid" :class="{ 'reverse': reverse }">
        <img 
          :src="imageSrc" 
          :alt="imageAlt" 
          class="feature-image"
        >
        <div class="feature-content">
          <h2 class="feature-title">{{ title }}</h2>
          <p class="feature-description">{{ description }}</p>
          <ul v-if="features && features.length" class="feature-list">
            <li v-for="(feature, index) in features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeatureSection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: 'Feature image'
    },
    features: {
      type: Array,
      default: () => []
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.feature-section {
  padding: 200px 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 64px;
}

.feature-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 120px;
  align-items: center;
}

.feature-grid.reverse {
  direction: rtl;
}

.feature-grid.reverse > * {
  direction: ltr;
}

.feature-image {
  width: 100%;
  height: 700px;
  object-fit: cover;
  border-radius: 32px;
}

.feature-title {
  font-size: 88px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -2px;
  margin-bottom: 40px;
  color: #000000;
}

.feature-description {
  font-size: 28px;
  font-weight: 300;
  color: #666666;
  line-height: 1.5;
  margin-bottom: 40px;
}

.feature-list {
  list-style: none;
}

.feature-list li {
  font-size: 20px;
  color: #333333;
  margin-bottom: 20px;
  padding-left: 40px;
  position: relative;
}

.feature-list li::before {
  content: '—';
  position: absolute;
  left: 0;
  font-weight: 700;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .container {
    padding: 0 40px;
  }

  .feature-section {
    padding: 120px 0;
  }

  .feature-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .feature-grid.reverse {
    direction: ltr;
  }

  .feature-title {
    font-size: 56px;
  }

  .feature-description {
    font-size: 24px;
  }

  .feature-image {
    height: 500px;
  }
}

@media (max-width: 640px) {
  .container {
    padding: 0 24px;
  }

  .feature-title {
    font-size: 40px;
  }

  .feature-description {
    font-size: 20px;
  }
}
</style>