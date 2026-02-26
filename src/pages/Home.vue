<template>
  <!-- PAGE ROOT -->
  <v-sheet class="homepage-elegant" color="transparent">

    <!-- HERO : STUNNING FULL SCREEN -->
    <section class="hero-fullscreen">
      <!-- Animated Background -->
      <div class="hero-background">
        <div class="bg-gradient"></div>
        <div class="particles">
          <div v-for="i in 30" :key="i" class="particle" :style="particleStyle(i)"></div>
        </div>
        <div class="grid-overlay"></div>
      </div>

      <!-- Hero Content -->
      <v-container fluid class="hero-container">
        <v-row align="center" class="h-100">
          <v-col cols="12" md="7" class="hero-content-column d-flex flex-column justify-start pt-16 pt-md-0">
            <!-- Main Headline -->
            <h1 class="hero-main-title animate-fade-up delay-1">
              <span class="title-line">Own Your Security Governance!</span>
              <span class="title-line accent-line">
                <span class="accent-text">Not rent it</span>
              </span>
            </h1>

            <!-- Subheadline -->
            <p class="hero-subtitle animate-fade-up delay-2">
              Protect your data, people, and reputation with unified, adaptive cybersecurity solutions 
              built for modern enterprises. Custom-tailored cybersecurity and compliance solutions 
              empowering businesses to own their risk with confidence.
            </p>

            <!-- CTA Buttons -->
            <div class="hero-actions animate-fade-up delay-3">
              <v-btn
                color="white"
                size="x-large"
                class="cta-primary"
                @click="showJoinModal = true"
                rounded="xl"
                aria-label="Join our team"
              >
                <v-icon start size="large" color="#193762">mdi-calendar-star</v-icon>
                <span class="btn-text">Join Us</span>
              </v-btn>
              
              <v-btn
                variant="outlined"
                color="white"
                size="x-large"
                to="/product"
                class="cta-secondary"
                rounded="xl"
                aria-label="Explore our security platform"
              >
                <v-icon start size="large" color="white">mdi-arrow-right-circle</v-icon>
                <span class="btn-text">Explore Platform</span>
              </v-btn>
            </div>
          </v-col>

          <!-- Visual Column - COMPANY LOGO -->
          <v-col cols="12" md="5" class="hero-visual-column">
            <div class="logo-container">
              <img src="/02.png" alt="eigenSecure Logo" class="company-logo-image" />
              <div class="logo-glow"></div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- LAYERS OF PROTECTION - VUETIFY CAROUSEL WITH BOTTOM NAVIGATION -->
    <v-sheet class="section-carousel">
      <v-container>
        <div class="text-center mb-8">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            THE LAYERS OF PROTECTION
          </v-chip>
          <h2 class="section-title elegant-title">
            Complexity Managed.<br class="d-none d-md-block" />
            <span class="text-#193762">Security Simplified.</span> Governance Owned.
          </h2>
          <p class="section-subtitle elegant-subtitle">
            Explore our multi-layered approach to security governance
          </p>
        </div>

        <!-- Vuetify Carousel with Bottom Navigation -->
        <v-carousel
          v-model="carouselIndex"
          cycle
          interval="10000"
          hide-delimiter-background
          show-arrows
          delimiter-icon="mdi-circle"
          class="layers-carousel"
        >
          <v-carousel-item
            v-for="(layer, i) in layers"
            :key="i"
            :value="i"
          >
            <div class="carousel-item-content">
              <div class="carousel-number">{{ i + 1 }}</div>
              <h3 class="carousel-title">{{ layer.title }}</h3>
              <p class="carousel-description">{{ layer.description }}</p>
              <div class="carousel-icon">
                <v-icon size="48" color="#C4922C">mdi-shield-outline</v-icon>
              </div>
            </div>
          </v-carousel-item>

          <!-- Custom Navigation: Arrows + Dots in Bottom Middle -->
          <template v-slot:prev="{ props }">
            <v-btn
              icon
              variant="flat"
              color="#193762"
              class="carousel-nav-btn prev-btn"
              @click="props.onClick"
              aria-label="Previous slide"
            >
              <v-icon color="white">mdi-chevron-left</v-icon>
            </v-btn>
          </template>

          <template v-slot:next="{ props }">
            <v-btn
              icon
              variant="flat"
              color="#193762"
              class="carousel-nav-btn next-btn"
              @click="props.onClick"
              aria-label="Next slide"
            >
              <v-icon color="white">mdi-chevron-right</v-icon>
            </v-btn>
          </template>

          <!-- Custom Dots Container -->
          <template v-slot:delimiter="{ index, isActive, toggle }">
            <button
              class="custom-carousel-dot"
              :class="{ 'active': isActive }"
              @click="toggle"
              :aria-label="`Go to slide ${index + 1}`"
            >
              <span class="dot-number">{{ index + 1 }}</span>
            </button>
          </template>
        </v-carousel>

        <!-- Navigation Hint -->
        <div class="carousel-navigation-hint text-center mt-4">
          <span class="text-medium-emphasis">{{ carouselIndex + 1 }} / {{ layers.length }}</span>
        </div>
      </v-container>
    </v-sheet>

    <!-- CORE SERVICES - HONEYCOMB STRUCTURE (1-2-3 / 4-5 / 6-7-8 LAYOUT) WITH ICONS + TEXT ONLY -->
    <v-sheet class="section-services-honeycomb">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            CORE SOLUTIONS
          </v-chip>
          <h2 class="section-title elegant-title">
            Enterprise Security<br class="d-none d-md-block" />
            <span class="text-#193762">Governance Platform</span>
          </h2>
          <p class="section-subtitle elegant-subtitle">
            Comprehensive solutions for modern enterprise security needs
          </p>
        </div>

        <!-- Honeycomb Container -->
        <div class="honeycomb-container">
          <!-- Honeycomb Grid - 1-2-3 / 4-5 / 6-7-8 Layout -->
          <div class="honeycomb-grid">
            <!-- Row 1: Hexagons 1, 2, 3 -->
            <div class="honeycomb-row row-1">
              <div 
                v-for="index in [0, 1, 2]" 
                :key="index"
                class="honeycomb-hexagon-wrapper"
                @click="goToProduct"
                @keydown.enter="goToProduct"
                role="link"
                tabindex="0"
                style="cursor: pointer;"
              >
                <div 
                  class="honeycomb-hexagon"
                  :style="getHexagonStyle(index)"
                >
                  <!-- Icon + Text Only (No Numbers) -->
                  <div class="hexagon-content">
                    <div class="hexagon-icon">
                      <v-icon size="40" color="#193762">{{ services[index].icon }}</v-icon>
                    </div>
                    <div class="hexagon-title">{{ services[index].title }}</div>
                    <div class="hexagon-description">{{ services[index].description }}</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2: Hexagons 4, 5 (centered, offset) -->
            <div class="honeycomb-row row-2">
              <div class="row-2-spacer"></div>
              <div 
                v-for="index in [3, 4]" 
                :key="index"
                class="honeycomb-hexagon-wrapper"
                @click="goToProduct"
                @keydown.enter="goToProduct"
                role="link"
                tabindex="0"
                style="cursor: pointer;"
              >
                <div 
                  class="honeycomb-hexagon"
                  :style="getHexagonStyle(index)"
                >
                  <!-- Icon + Text Only (No Numbers) -->
                  <div class="hexagon-content">
                    <div class="hexagon-icon">
                      <v-icon size="40" color="#193762">{{ services[index].icon }}</v-icon>
                    </div>
                    <div class="hexagon-title">{{ services[index].title }}</div>
                    <div class="hexagon-description">{{ services[index].description }}</div>
                  </div>
                </div>
              </div>
              <div class="row-2-spacer"></div>
            </div>

            <!-- Row 3: Hexagons 6, 7, 8 -->
            <div class="honeycomb-row row-3">
              <div 
                v-for="index in [5, 6, 7]" 
                :key="index"
                class="honeycomb-hexagon-wrapper"
                @click="goToProduct"
                @keydown.enter="goToProduct"
                role="link"
                tabindex="0"
                style="cursor: pointer;"
              >
                <div 
                  class="honeycomb-hexagon"
                  :style="getHexagonStyle(index)"
                >
                  <!-- Icon + Text Only (No Numbers) -->
                  <div class="hexagon-content">
                    <div class="hexagon-icon">
                      <v-icon size="40" color="#193762">{{ services[index].icon }}</v-icon>
                    </div>
                    <div class="hexagon-title">{{ services[index].title }}</div>
                    <div class="hexagon-description">{{ services[index].description }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <!-- WHY EIGENSECURE SECTION -->
    <v-sheet class="section-why">
      <v-container>
        <div class="text-center mb-12">
          <h2 class="section-title elegant-title">
            Why <span class="gold-text">eigen</span><span class="blue-text">Secure</span>?
          </h2>
          <p class="section-subtitle elegant-subtitle">
            We are a governance intelligence partner built for organizations that demand clarity, control, and confidence.
          </p>
          <p class="why-intro mt-6">
            eigenSecure isn't just another cybersecurity merchant — We are a governance intelligence partner built for organizations that demand clarity, control, and confidence. Our solutions blend advanced engineering with deep domain insight, giving enterprises a platform that grows with them, learns with them, and evolves as their risk environment shifts.
          </p>
        </div>

        <v-row class="justify-center">
          <v-col
            v-for="(usp, index) in usps"
            :key="usp.title"
            cols="12"
            md="6"
            lg="4"
            class="d-flex"
          >
            <v-card 
              class="usp-card pa-6 h-100"
              :class="`animate-card delay-${index}`"
              hover
              rounded="lg"
            >
              <div class="usp-number">
                {{ index + 1 }}
              </div>
              
              <div class="usp-icon-wrapper mt-4">
                <v-icon 
                  size="48" 
                  color="#193762"
                  class="usp-icon"
                >
                  {{ usp.icon }}
                </v-icon>
              </div>

              <h3 class="usp-title mt-6 mb-4">{{ usp.title }}</h3>
              <p class="usp-description">
                {{ usp.description }}
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CTA SECTION -->
    <v-sheet class="section-cta">
      <v-container>
        <div class="cta-content text-center">
          <v-chip color="white" variant="flat" class="mb-6" size="small">
            GET STARTED
          </v-chip>
          
          <h2 class="cta-title elegant-title">
            Ready to <span class="text-white">Own Your Security</span><br class="d-none d-md-block" />
            Governance?
          </h2>
          
          <p class="cta-subtitle elegant-subtitle">
            Join leading enterprises who trust eigenSecure for intelligent security governance
          </p>

          <div class="cta-actions mt-8">
            <v-btn
              color="white"
              size="x-large"
              class="btn-elevated"
              :href="demoMailTo"
              rounded="lg"
              target="_blank"
              rel="noopener"
              aria-label="Schedule a demo - opens email client"
            >
              <v-icon start color="#193762">mdi-calendar-clock</v-icon>
              <span class="btn-text">Schedule a Demo</span>
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <!-- FOOTER -->
    <v-footer class="footer-section">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="footer-brand">
            <h3 class="footer-logo">
  <span class="gold-text">eigen</span><span class="blue-text">Secure</span>
</h3>
            <p class="footer-tagline mt-2">
              Governance intelligence for modern enterprises
            </p>
            <div class="social-icons mt-4">
              <!-- LinkedIn -->
              <v-btn 
                icon 
                variant="text" 
                color="white" 
                class="social-icon"
                href="https://linkedin.com/company/eigensecure"
                target="_blank"
                rel="noopener"
              >
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              
              <!-- Mail -->
              <v-btn 
                icon 
                variant="text" 
                color="white" 
                class="social-icon"
                href="mailto:info@eigensecure.com"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="footer-contact">
            <h4 class="footer-heading">Contact Information</h4>
            <div class="contact-info mt-3">
              <div class="contact-item">
                <v-icon size="small" color="white" class="mr-2">mdi-map-marker</v-icon>
                <span>Oscorp Industries,<br>New York</span>
              </div>
              <div class="contact-item mt-2">
                <v-icon size="small" color="white" class="mr-2">mdi-phone</v-icon>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="contact-item mt-2">
                <v-icon size="small" color="white" class="mr-2">mdi-email</v-icon>
                <span>info@eigensecure.com</span>
              </div>
              <div class="contact-item mt-2">
                <v-icon size="small" color="white" class="mr-2">mdi-clock</v-icon>
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="footer-links">
            <h4 class="footer-heading">Quick Links</h4>
            <div class="footer-links-list mt-3">
              <a href="/about" class="footer-link">About Us</a>
              <a 
                href="mailto:info@eigensecure.com" 
                class="footer-link"
              >
                Contact Us
              </a>
              <a 
                href="#" 
                class="footer-link"
                @click.prevent="openJoinModal"
              >
                Careers
              </a>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-4" color="rgba(255,255,255,0.2)"></v-divider>

        <div class="footer-bottom text-center">
          <p class="copyright">
            © {{ new Date().getFullYear() }} eigenSecure. All rights reserved.
          </p>
          <p class="footer-note mt-1">
            Own Your Security Governance. Not rent it.
          </p>
        </div>
      </v-container>
    </v-footer>

    <!-- Join Us Modal Component -->
    <JoinUsModal v-model="showJoinModal" />
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import JoinUsModal from '@/components/JoinUsModal.vue'

const router = useRouter()
const showJoinModal = ref(false)

const demoMailTo = 'mailto:sales@eigensecure.com?subject=Request%20a%20Demo%20-%20eigenSecure&body=Request%20a%20Demo%20—%20Client%20Submission%20Template%0A%0AI%20would%20like%20to%20request%20a%20personalized%20demo%20of%20the%20eigenSecure%20platform.%20Please%20find%20my%20details%20below:%0A%0ACompany%20Name:%20%0AContact%20Person:%20%0ADesignation:%20%0AEmail:%20%0APhone:%20%0AExpected%20Deployment%20Scale%20(SME%20/%20Enterprise):%20%0A%0AKindly%20share%20the%20available%20demo%20slots%20and%20any%20additional%20information%20required%20for%20scheduling.'

const carouselIndex = ref(0)

const layers = ref([
  { title: 'Evolving Threats?', description: 'Our platform equips you with real-time risk intelligence and proactive safeguards to stay ahead.' },
  { title: 'Compliance Overload?', description: 'We streamline ISO, NIST, and internal controls through intelligent automation.' },
  { title: 'Operational Gaps?', description: 'We bring risk, continuity, and attestations together in one cohesive, intuitive system.' },
  { title: 'Limited Visibility?', description: 'Role-based insights deliver clarity across risk, compliance, and controls—exactly when needed.' },
  { title: 'Audit Anxiety?', description: 'Continuous evidence tracking keeps you audit-ready, not audit-rushed.' },
  { title: 'Scaling Challenges?', description: 'Our architecture evolves with your organization, regulations, and risk environment.' },
  { title: 'Governance Gaps?', description: 'Built-in accountability ensures ownership is embedded into everyday security workflows.' },
  { title: 'Decision Fatigue?', description: 'Structured intelligence turns governance data into clear, actionable decisions.' }
])

const services = ref([
  { 
    title: 'Customized ISMS Tool', 
    description: 'One platform — own your controls & governance, own your security roadmap.',
    icon: 'mdi-shield-check'
  },
  { 
    title: 'Risk Management', 
    description: 'Own your risks. Lead with informed decisions.',
    icon: 'mdi-chart-timeline-variant'
  },
  { 
    title: 'IT Attestation & Compliance', 
    description: 'Own your compliance. Inspire confidence through accountability.',
    icon: 'mdi-file-document-check'
  },
  { 
    title: 'Security Exceptions Management', 
    description: 'Own your exceptions. Eliminate blind spots, strengthen governance.',
    icon: 'mdi-alert-circle-check'
  },
  { 
    title: 'Identity & Access Management (IAM)', 
    description: 'Own your access. Enforce trust by design.',
    icon: 'mdi-account-key'
  },
  { 
    title: 'AI & Agentic Enablement', 
    description: 'Own your intelligence. Lead with AI augmented Governance.',
    icon: 'mdi-robot'
  },
  { 
    title: 'Incident Detection & Response', 
    description: 'Own your response. Act before impact spreads.',
    icon: 'mdi-alert-decagram'
  },
  { 
    title: 'Core Directory & Oversight', 
    description: 'Own your visibility. Govern with precision.',
    icon: 'mdi-view-dashboard'
  }
])

const usps = ref([
  { 
    title: 'Architecture That Adapts to You', 
    description: 'A modular platform that shapes itself around your governance style, workflows, and maturity levels — not the other way around. Intuitive, flexible, and built to fit your organization perfectly.',
    icon: 'mdi-cog-transfer' 
  },
  { 
    title: 'Blazor-Driven Precision', 
    description: 'Experience a modern .NET interface engineered for performance, clarity, and real-time insight. It\'s not just a tool — it\'s a high-speed command center for governance intelligence.',
    icon: 'mdi-speedometer' 
  },
  { 
    title: 'Unified Security Ecosystem', 
    description: 'ISMS, Risk Management, BCM, and Security Exceptions work together seamlessly. One action updates everything — creating one source of truth and eliminating siloed decision-making.',
    icon: 'mdi-link-variant' 
  },
  { 
    title: 'Scalable, Yet Deeply Customizable', 
    description: 'Enterprise-ready, yet personalized to your internal controls, policies, scoring models, and continuity needs. Scalability without compromise — grow without redesigning your platform.',
    icon: 'mdi-expansion-card' 
  },
  { 
    title: 'Ownership at the Core', 
    description: 'Empowering your teams with clarity, visibility, and decision authority. You own the controls, the governance, and the roadmap. eigenSecure simply makes it effortless.',
    icon: 'mdi-shield-crown' 
  }
])

const getHexagonStyle = (index) => {
  const colors = [
    'rgba(25, 55, 98, 0.1)',
    'rgba(25, 55, 98, 0.12)',
    'rgba(25, 55, 98, 0.14)',
    'rgba(25, 55, 98, 0.16)',
    'rgba(25, 55, 98, 0.18)',
    'rgba(25, 55, 98, 0.2)',
    'rgba(25, 55, 98, 0.22)',
    'rgba(25, 55, 98, 0.24)'
  ]
  
  return {
    '--hex-color': colors[index]
  }
}

const particleStyle = (i) => {
  const size = Math.random() * 4 + 1
  const x = Math.random() * 100
  const y = Math.random() * 100
  const duration = Math.random() * 20 + 10
  const delay = Math.random() * 5
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${x}%`,
    top: `${y}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  }
}

// Navigation functions
const goToProduct = () => {
  router.push('/product')
}

const openJoinModal = () => {
  showJoinModal.value = true
}
</script>

<style scoped>
/* RESET AND BASE */
.homepage-elegant {
  margin-top: 0;
}

/* Gold and Blue text colors */
.gold-text {
  color: #C4922C;
}

.blue-text {
  color: #193762;
}

/* HERO SECTION - FULL SCREEN */
.hero-fullscreen {
  height: 100vh;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #0B1C2D;
  margin-top: 0;
  padding-top: 0;
}

/* Hero column alignment - FIXED */
.hero-content-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 120px !important;
}

@media (max-width: 960px) {
  .hero-content-column {
    padding-top: 100px !important;
  }
}

@media (max-width: 600px) {
  .hero-content-column {
    padding-top: 80px !important;
  }
}

/* Animated Background */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.bg-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    #0B1C2D 0%, 
    #193762 30%, 
    #2d3748 70%, 
    #0B1C2D 100%);
  opacity: 0.9;
}

.grid-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: floatParticle linear infinite;
}

@keyframes floatParticle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(20px);
    opacity: 0;
  }
}

/* Hero Container */
.hero-container {
  height: 100%;
  z-index: 2;
  position: relative;
}

.hero-content-column {
  color: white;
}

/* Main Title */
.hero-main-title {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 1.5rem 0;
  letter-spacing: -0.5px;
  color: white;
}

.title-line {
  display: block;
}

.accent-line {
  margin-top: 0.5rem;
}

.accent-text {
  color: #C4922C;
  position: relative;
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

/* CTA Buttons */
.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.cta-primary {
  background: white !important;
  color: #193762 !important;
  font-weight: 600 !important;
  padding: 0 2rem !important;
  height: 56px !important;
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.4) !important;
  transition: all 0.3s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.cta-primary:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.6) !important;
  background: #C4922C !important;
  color: white !important;
}

.cta-primary:hover .v-icon {
  color: white !important;
}

.cta-secondary {
  border: 2px solid rgba(255, 255, 255, 0.3) !important;
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  color: white !important;
  font-weight: 600 !important;
  padding: 0 2rem !important;
  height: 56px !important;
  transition: all 0.3s ease !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.cta-secondary:hover {
  border-color: #C4922C !important;
  background: rgba(196, 146, 44, 0.2) !important;
  transform: translateY(-3px) !important;
}

.cta-secondary:hover .v-icon {
  color: #C4922C !important;
}

.btn-text {
  display: inline-block;
  text-align: center;
  flex: 1;
}

/* Hero Visual Column - COMPANY LOGO */
.hero-visual-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.company-logo-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 3;
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
  animation: breatheLogo 4s ease-in-out infinite;
}

.logo-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  z-index: 2;
  animation: pulseGlow 4s ease-in-out infinite;
}

@keyframes breatheLogo {
  0%, 100% {
    transform: scale(1);
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
  }
  50% {
    transform: scale(1.05);
    filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.5));
  }
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* CAROUSEL SECTION - WITH BOTTOM NAVIGATION */
.section-carousel {
  padding: 80px 0;
  background: white;
}

.layers-carousel {
  height: 450px;
  box-shadow: 0 20px 40px rgba(11, 28, 45, 0.08);
  border-radius: 24px;
  overflow: hidden;
  position: relative;
}

.carousel-item-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  background: linear-gradient(135deg, #f8fafc, #ffffff);
  position: relative;
}

.carousel-number {
  width: 48px;
  height: 48px;
  background: #193762;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 24px;
}

.carousel-title {
  font-size: 2rem;
  font-weight: 700;
  color: #193762;
  margin-bottom: 16px;
}

.carousel-description {
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.7;
  max-width: 600px;
  margin-bottom: 24px;
}

.carousel-icon {
  margin-top: 16px;
}

/* Bottom Navigation Container */
.v-carousel__controls {
  position: absolute !important;
  bottom: 20px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(10px) !important;
  padding: 8px 16px !important;
  border-radius: 40px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1) !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  width: auto !important;
}

/* Navigation Buttons */
.carousel-nav-btn {
  background: #193762 !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1) !important;
  transition: all 0.3s ease !important;
}

.carousel-nav-btn:hover {
  background: #C4922C !important;
  transform: scale(1.1) !important;
}

.prev-btn {
  margin-right: 8px;
}

.next-btn {
  margin-left: 8px;
}

/* Custom Carousel Dots */
.custom-carousel-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(25, 55, 98, 0.1);
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 4px;
}

.custom-carousel-dot:hover {
  background: rgba(25, 55, 98, 0.2);
  transform: scale(1.1);
}

.custom-carousel-dot.active {
  background: #193762;
  border-color: #C4922C;
}

.custom-carousel-dot.active .dot-number {
  color: white;
}

.dot-number {
  font-size: 0.75rem;
  font-weight: 600;
  color: #193762;
}

.carousel-navigation-hint {
  color: #64748b;
  font-size: 0.875rem;
}

/* SERVICES HONEYCOMB SECTION - 1-2-3 / 4-5 / 6-7-8 LAYOUT */
.section-services-honeycomb {
  padding: 120px 0;
  background: #f8fafc;
  position: relative;
  overflow: visible;
}

/* Honeycomb Container */
.honeycomb-container {
  position: relative;
  min-height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Honeycomb Grid */
.honeycomb-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  transition: all 0.5s ease;
  position: relative;
  z-index: 95;
}

.honeycomb-row {
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

/* Honeycomb row positioning - 1-2-3 / 4-5 / 6-7-8 */
.row-1 {
  margin-bottom: -30px;
}

.row-2 {
  margin-bottom: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-2-spacer {
  width: 240px; /* Matches hexagon width + margin */
  visibility: hidden;
}

.row-3 {
  margin-bottom: 0;
}

/* Honeycomb Hexagon */
.honeycomb-hexagon-wrapper {
  position: relative;
  width: 220px;
  height: 242px;
  margin: 0 10px;
  transition: all 0.3s ease;
  z-index: 1;
  cursor: pointer;
}

.honeycomb-hexagon {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--hex-color, rgba(25, 55, 98, 0.1));
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 2px solid transparent;
}

.honeycomb-hexagon:hover {
  transform: translateY(-5px) scale(1.02);
  background: rgba(196, 146, 44, 0.15);
  border-color: rgba(196, 146, 44, 0.3);
  box-shadow: 0 15px 30px rgba(196, 146, 44, 0.2);
}

/* Hexagon Content - Icon + Text Only */
.hexagon-content {
  text-align: center;
  padding: 15px 12px;
  color: #193762;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

.hexagon-icon {
  margin-top: 5px;
  transition: all 0.3s ease;
}

.honeycomb-hexagon:hover .hexagon-icon .v-icon {
  color: #C4922C !important;
}

.hexagon-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  color: #193762;
  transition: all 0.3s ease;
}

.honeycomb-hexagon:hover .hexagon-title {
  color: #C4922C;
}

.hexagon-description {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #64748b;
  margin-top: 4px;
  max-height: 80px;
  overflow-y: auto;
  padding: 0 5px;
}

/* Custom scrollbar for description */
.hexagon-description::-webkit-scrollbar {
  width: 3px;
}

.hexagon-description::-webkit-scrollbar-track {
  background: rgba(25, 55, 98, 0.05);
  border-radius: 3px;
}

.hexagon-description::-webkit-scrollbar-thumb {
  background: rgba(196, 146, 44, 0.3);
  border-radius: 3px;
}

/* WHY EIGENSECURE SECTION */
.section-why {
  padding: 120px 0;
  background: white;
}

.elegant-title {
  font-size: 2.75rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.3px;
}

.elegant-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.why-intro {
  font-size: 1.125rem;
  color: #64748b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

.usp-card {
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  background: #f8fafc;
}

.usp-card:hover {
  border-color: #C4922C;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(196, 146, 44, 0.1);
  background: white;
}

.usp-number {
  width: 40px;
  height: 40px;
  background: #193762;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.125rem;
  transition: all 0.3s ease;
}

.usp-card:hover .usp-number {
  background: #C4922C;
  transform: scale(1.1);
}

.usp-icon-wrapper {
  width: 70px;
  height: 70px;
  background: rgba(25, 55, 98, 0.08);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.usp-card:hover .usp-icon-wrapper {
  background: rgba(196, 146, 44, 0.1);
}

.usp-card:hover .usp-icon {
  color: #C4922C;
}

.usp-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #193762;
  line-height: 1.3;
}

.usp-description {
  line-height: 1.6;
  font-size: 1rem;
  color: #64748b;
}

/* CTA SECTION */
.section-cta {
  padding: 120px 0;
  background: linear-gradient(135deg, #0B1C2D 0%, #193762 100%);
  color: white;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.cta-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.btn-elevated {
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  background: white;
  color: #193762;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-elevated:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.4);
  background: #C4922C;
  color: white;
}

.btn-elevated:hover .v-icon {
  color: white;
}

/* FOOTER SECTION - UPDATED */
.footer-section {
  background: #0B1C2D;
  color: white;
  padding: 40px 0 20px; /* Reduced height */
}

.footer-brand {
  padding-right: 30px;
}

.footer-logo {
  font-size: 1.75rem; /* Slightly smaller */
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.4;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-icon {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.social-icon:hover {
  background: #C4922C;
  border-color: #C4922C;
  transform: translateY(-3px);
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  font-size: 0.95rem;
}

.contact-item span {
  flex: 1;
}

.footer-links-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  cursor: pointer;
}

.footer-link:hover {
  color: #C4922C;
  transform: translateX(5px);
}

.footer-bottom {
  color: rgba(255, 255, 255, 0.6);
}

.copyright {
  font-size: 0.9rem;
}

.footer-note {
  font-size: 0.85rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
}

/* ANIMATIONS */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
  opacity: 0;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }
.delay-3 { animation-delay: 0.6s; }
.delay-4 { animation-delay: 0.8s; }

.animate-card {
  animation: fadeUp 0.6s ease-out forwards;
  opacity: 0;
}

.delay-0 { animation-delay: 0.1s; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.4s; }
.delay-4 { animation-delay: 0.5s; }
.delay-5 { animation-delay: 0.6s; }
.delay-6 { animation-delay: 0.7s; }
.delay-7 { animation-delay: 0.8s; }

/* RESPONSIVE */
@media (max-width: 1400px) {
  .honeycomb-hexagon-wrapper {
    width: 200px;
    height: 220px;
    margin: 0 8px;
  }
  
  .row-2-spacer {
    width: 216px;
  }
  
  .hexagon-content {
    padding: 18px 12px;
  }
  
  .hexagon-description {
    font-size: 0.8rem;
  }
}

@media (max-width: 1200px) {
  .honeycomb-hexagon-wrapper {
    width: 180px;
    height: 198px;
    margin: 0 6px;
  }
  
  .row-2-spacer {
    width: 192px;
  }
  
  .hexagon-content {
    padding: 16px 10px;
    gap: 6px;
  }
  
  .hexagon-title {
    font-size: 0.9rem;
  }
  
  .hexagon-description {
    font-size: 0.75rem;
    max-height: 70px;
  }
}

@media (max-width: 960px) {
  .hero-fullscreen {
    height: auto;
    min-height: auto;
    padding: 120px 0 80px;
  }
  
  .hero-main-title {
    font-size: 2.5rem;
  }
  
  .logo-container {
    height: 300px;
    margin-top: 3rem;
  }
  
  .company-logo-image {
    max-height: 280px;
  }
  
  .elegant-title,
  .cta-title {
    font-size: 2.25rem;
  }
  
  .carousel-title {
    font-size: 1.75rem;
  }
  
  .carousel-description {
    font-size: 1rem;
  }
  
  .layers-carousel {
    height: 450px;
  }
  
  .honeycomb-hexagon-wrapper {
    width: 150px;
    height: 165px;
    margin: 0 5px;
  }
  
  .row-2-spacer {
    width: 160px;
  }
  
  .row-1 {
    margin-bottom: -24px;
  }
  
  .row-2 {
    margin-bottom: -24px;
  }
  
  .hexagon-content {
    padding: 14px 8px;
    gap: 5px;
  }
  
  .hexagon-title {
    font-size: 0.8rem;
  }
  
  .hexagon-description {
    font-size: 0.7rem;
    max-height: 60px;
  }
  
  .footer-brand {
    padding-right: 0;
    margin-bottom: 2rem;
  }
  
  .footer-section {
    padding: 30px 0 20px;
  }
}

@media (max-width: 768px) {
  .honeycomb-hexagon-wrapper {
    width: 120px;
    height: 132px;
    margin: 0 4px;
  }
  
  .row-2-spacer {
    width: 128px;
  }
  
  .row-1 {
    margin-bottom: -20px;
  }
  
  .row-2 {
    margin-bottom: -20px;
  }
  
  .hexagon-content {
    padding: 12px 6px;
    gap: 4px;
  }
  
  .hexagon-title {
    font-size: 0.7rem;
  }
  
  .hexagon-description {
    font-size: 0.65rem;
    max-height: 50px;
  }
}

@media (max-width: 600px) {
  .hero-main-title {
    font-size: 2rem;
  }
  
  .hero-subtitle,
  .elegant-subtitle,
  .cta-subtitle {
    font-size: 1.125rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .cta-primary,
  .cta-secondary,
  .btn-elevated {
    width: 100%;
    margin-bottom: 1rem;
    justify-content: center;
  }
  
  .logo-container {
    height: 250px;
  }
  
  .company-logo-image {
    max-height: 230px;
  }
  
  .carousel-item-content {
    padding: 32px;
  }
  
  .carousel-number {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
    margin-bottom: 16px;
  }
  
  .carousel-title {
    font-size: 1.5rem;
  }
  
  .carousel-description {
    font-size: 0.95rem;
  }
  
  .layers-carousel {
    height: 500px;
  }
  
  .honeycomb-hexagon-wrapper {
    width: 100px;
    height: 110px;
    margin: 0 3px;
  }
  
  .row-2-spacer {
    width: 106px;
  }
  
  .row-1 {
    margin-bottom: -16px;
  }
  
  .row-2 {
    margin-bottom: -16px;
  }
  
  .honeycomb-container {
    min-height: 550px;
  }
  
  .hexagon-content {
    padding: 10px 5px;
    gap: 3px;
  }
  
  .hexagon-title {
    font-size: 0.65rem;
  }
  
  .hexagon-description {
    font-size: 0.6rem;
    max-height: 45px;
  }
  
  .footer-section {
    padding: 25px 0 15px;
  }
  
  .footer-logo {
    font-size: 1.5rem;
  }
  
  .contact-item {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .hero-main-title {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-actions {
    gap: 0.75rem;
  }
  
  .cta-primary,
  .cta-secondary {
    padding: 0 1.5rem !important;
    height: 48px !important;
    font-size: 0.95rem !important;
  }
  
  .logo-container {
    height: 200px;
  }
  
  .company-logo-image {
    max-height: 180px;
  }
  
  .carousel-item-content {
    padding: 24px;
  }
  
  .carousel-number {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  .carousel-title {
    font-size: 1.25rem;
  }
  
  .carousel-description {
    font-size: 0.875rem;
  }
  
  .layers-carousel {
    height: 450px;
  }
  
  .v-carousel__controls {
    padding: 6px 12px !important;
  }
  
  .carousel-nav-btn {
    width: 32px !important;
    height: 32px !important;
  }
  
  .custom-carousel-dot {
    width: 28px;
    height: 28px;
  }
  
  .honeycomb-hexagon-wrapper {
    width: 80px;
    height: 88px;
    margin: 0 2px;
  }
  
  .row-2-spacer {
    width: 84px;
  }
  
  .row-1 {
    margin-bottom: -12px;
  }
  
  .row-2 {
    margin-bottom: -12px;
  }
  
  .hexagon-content {
    padding: 8px 4px;
    gap: 2px;
  }
  
  .hexagon-title {
    font-size: 0.55rem;
  }
  
  .hexagon-description {
    font-size: 0.5rem;
    max-height: 40px;
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up,
  .animate-card,
  .particle,
  .company-logo-image,
  .logo-glow,
  .honeycomb-hexagon-wrapper,
  .honeycomb-hexagon,
  .custom-carousel-dot,
  .carousel-nav-btn {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
</style>