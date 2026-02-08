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
          <v-col cols="12" md="7" class="hero-content-column">
            <!-- Logo & Title -->
            <div class="hero-badge animate-fade-up">
              <div class="logo-title">
                <h1 class="company-logo">eigenSecure</h1>
                <v-chip color="white" variant="flat" size="small" class="glow ml-4">
                  <v-icon start size="small" color="#193762">mdi-shield-star</v-icon>
                  ENTERPRISE SECURITY
                </v-chip>
              </div>
            </div>

            <!-- Main Headline -->
            <h1 class="hero-main-title animate-fade-up delay-1">
              <span class="title-line">Own Your Security Governance.</span>
              <span class="title-line accent-line">
                <span class="accent-text">Not rent it!</span>
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
                :href="demoMailTo"
                rounded="xl"
                target="_blank"
                rel="noopener"
                aria-label="Book a demo - opens email client"
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

          <!-- Visual Column - CONCENTRIC SHIELD LAYERS -->
          <v-col cols="12" md="5" class="hero-visual-column">
            <div class="shield-concentric-wrapper">
              <div class="shield-concentric-container">
                <!-- Layer 3 - Outer outline (largest) -->
                <div class="shield-layer concentric-outer">
                  <v-icon size="400" color="rgba(255,255,255,0.15)" class="shield-outline-icon">mdi-shield-outline</v-icon>
                </div>
                
                <!-- Layer 2 - Middle outline -->
                <div class="shield-layer concentric-middle">
                  <v-icon size="290" color="rgba(255,255,255,0.25)" class="shield-outline-icon">mdi-shield-outline</v-icon>
                </div>
                
                <!-- Layer 1 - Main solid shield (smallest) -->
                <div class="shield-layer concentric-solid">
                  <v-icon size="200" color="white" class="shield-solid-icon">mdi-shield</v-icon>
                </div>
                
                <!-- Subtle glow -->
                <div class="shield-concentric-glow"></div>
              </div>
              
              <!-- Stats Overlay -->
              <div class="stats-overlay">
                <div class="stat">
                  <div class="stat-number">99.9%</div>
                  <div class="stat-label">Uptime</div>
                </div>
                <div class="stat">
                  <div class="stat-number">24/7</div>
                  <div class="stat-label">Monitoring</div>
                </div>
                <div class="stat">
                  <div class="stat-number">Zero</div>
                  <div class="stat-label">Breaches</div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- LAYERS OF PROTECTION SECTION - HONEYCOMB VERSION -->
    <v-sheet class="section-layers-honeycomb">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            THE LAYERS OF PROTECTION
          </v-chip>
          <h2 class="section-title elegant-title">
            Complexity Managed.<br class="d-none d-md-block" />
            <span class="text-#193762">Security Simplified.</span> Governance Owned.
          </h2>
          <p class="section-subtitle elegant-subtitle">
            Click any hexagon to explore our protection layers
          </p>
        </div>

        <!-- Honeycomb Container -->
        <div 
          class="honeycomb-container" 
          :class="{ 'has-active': activeLayer !== null }"
          @click.self="closeActiveLayer"
        >
          <!-- Background Overlay (BELOW hexagon) -->
          <div 
            v-if="activeLayer !== null" 
            class="honeycomb-background-overlay"
            @click="closeActiveLayer"
          ></div>

          <!-- Honeycomb Grid -->
          <div class="honeycomb-grid">
            <!-- Row 1: Hexagons 1, 2, 3 -->
            <div class="honeycomb-row row-1">
              <div 
                v-for="index in [0, 1, 2]" 
                :key="index"
                class="honeycomb-hexagon-wrapper"
                :class="{
                  'active': activeLayer === index,
                  'inactive': activeLayer !== null && activeLayer !== index
                }"
              >
                <div 
                  class="honeycomb-hexagon"
                  @click="activateLayer(index)"
                  :style="getHexagonStyle(index)"
                >
                  <!-- Normal State Content -->
                  <div class="hexagon-normal-content">
                    <div class="hexagon-number">{{ index + 1 }}</div>
                    <div class="hexagon-title">{{ layers[index].title }}</div>
                    <div class="hexagon-icon">
                      <v-icon size="32" color="#193762">mdi-shield-check</v-icon>
                    </div>
                  </div>
                  
                  <!-- Expanded State Content (hidden by default) -->
                  <div class="hexagon-expanded-content" v-if="activeLayer === index">
                    <div class="expanded-description">
                      {{ layers[index].description }}
                    </div>
                    <div class="expanded-close">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 2: Hexagons 4, 5 (offset) -->
            <div class="honeycomb-row row-2">
              <div 
                v-for="index in [3, 4]" 
                :key="index"
                class="honeycomb-hexagon-wrapper"
                :class="{
                  'active': activeLayer === index,
                  'inactive': activeLayer !== null && activeLayer !== index
                }"
              >
                <div 
                  class="honeycomb-hexagon"
                  @click="activateLayer(index)"
                  :style="getHexagonStyle(index)"
                >
                  <!-- Normal State Content -->
                  <div class="hexagon-normal-content">
                    <div class="hexagon-number">{{ index + 1 }}</div>
                    <div class="hexagon-title">{{ layers[index].title }}</div>
                    <div class="hexagon-icon">
                      <v-icon size="32" color="#193762">mdi-shield-check</v-icon>
                    </div>
                  </div>
                  
                  <!-- Expanded State Content (hidden by default) -->
                  <div class="hexagon-expanded-content" v-if="activeLayer === index">
                    <div class="expanded-description">
                      {{ layers[index].description }}
                    </div>
                    <div class="expanded-close">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Row 3: Hexagons 6, 7, 8 -->
            <div class="honeycomb-row row-3">
              <div 
                v-for="index in [5, 6, 7]" 
                :key="index"
                class="honeycomb-hexagon-wrapper"
                :class="{
                  'active': activeLayer === index,
                  'inactive': activeLayer !== null && activeLayer !== index
                }"
              >
                <div 
                  class="honeycomb-hexagon"
                  @click="activateLayer(index)"
                  :style="getHexagonStyle(index)"
                >
                  <!-- Normal State Content -->
                  <div class="hexagon-normal-content">
                    <div class="hexagon-number">{{ index + 1 }}</div>
                    <div class="hexagon-title">{{ layers[index].title }}</div>
                    <div class="hexagon-icon">
                      <v-icon size="32" color="#193762">mdi-shield-check</v-icon>
                    </div>
                  </div>
                  
                  <!-- Expanded State Content (hidden by default) -->
                  <div class="hexagon-expanded-content" v-if="activeLayer === index">
                    <div class="expanded-description">
                      {{ layers[index].description }}
                    </div>
                    <div class="expanded-close">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <!-- CORE SERVICES SECTION -->
    <v-sheet class="section-services">
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

        <v-row class="justify-center">
          <v-col
            v-for="(service, index) in services"
            :key="service.title"
            cols="12"
            md="6"
            lg="4"
            class="d-flex"
          >
            <v-card 
              class="service-card pa-6 h-100"
              :class="`animate-card delay-${index}`"
              hover
              rounded="lg"
            >
              <div class="service-icon-wrapper">
                <v-icon 
                  size="56" 
                  color="#193762"
                  class="service-icon"
                >
                  {{ service.icon }}
                </v-icon>
              </div>

              <h3 class="service-title mt-8 mb-4">{{ service.title }}</h3>
              <p class="service-description">
                {{ service.description }}
              </p>
              
              <div v-if="service.detailedDescription" class="service-detailed mt-4">
                <p class="service-detailed-text">{{ service.detailedDescription }}</p>
              </div>

              <div class="service-action mt-6">
                <v-btn
                  variant="text"
                  color="#193762"
                  :to="service.link"
                  class="service-link"
                  aria-label="Learn more about this service"
                >
                  <span class="btn-text">Learn More</span>
                  <v-icon end>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- WHY EIGENSECURE SECTION -->
    <v-sheet class="section-why">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            WHY CHOOSE US
          </v-chip>
          <h2 class="section-title elegant-title">
            Why <span class="text-#193762">eigenSecure</span>?
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
            v-for="(usps, index) in usps"
            :key="usps.title"
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
                  {{ usps.icon }}
                </v-icon>
              </div>

              <h3 class="usp-title mt-6 mb-4">{{ usps.title }}</h3>
              <p class="usp-description">
                {{ usps.description }}
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
            <h3 class="footer-logo">eigenSecure</h3>
            <p class="footer-tagline mt-2">
              Governance intelligence for modern enterprises
            </p>
            <div class="social-icons mt-6">
              <v-btn icon variant="text" color="white" class="social-icon">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="white" class="social-icon">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="white" class="social-icon">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="white" class="social-icon">
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="footer-contact">
            <h4 class="footer-heading">Contact Information</h4>
            <div class="contact-info mt-4">
              <div class="contact-item">
                <v-icon size="small" color="white" class="mr-2">mdi-map-marker</v-icon>
                <span>Oscorp Industries,<br>New York</span>
              </div>
              <div class="contact-item mt-3">
                <v-icon size="small" color="white" class="mr-2">mdi-phone</v-icon>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="contact-item mt-3">
                <v-icon size="small" color="white" class="mr-2">mdi-email</v-icon>
                <span>info@eigensecure.com</span>
              </div>
              <div class="contact-item mt-3">
                <v-icon size="small" color="white" class="mr-2">mdi-clock</v-icon>
                <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="footer-links">
            <h4 class="footer-heading">Quick Links</h4>
            <div class="footer-links-list mt-4">
              <a href="/privacy" class="footer-link">Privacy Policy</a>
              <a href="/terms" class="footer-link">Terms of Service</a>
              <a href="/license" class="footer-link">License Information</a>
              <a href="/products" class="footer-link">Products & Services</a>
              <a href="/contact" class="footer-link">Contact Us</a>
              <a href="/careers" class="footer-link">Careers</a>
            </div>
          </v-col>
        </v-row>

        <v-divider class="my-8" color="rgba(255,255,255,0.2)"></v-divider>

        <div class="footer-bottom text-center">
          <p class="copyright">
            © {{ new Date().getFullYear() }} eigenSecure. All rights reserved.
          </p>
          <p class="footer-note mt-2">
            Own Your Security Governance. Not rent it.
          </p>
        </div>
      </v-container>
    </v-footer>

  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'

const demoMailTo = 'mailto:sales@eigensecure.com?subject=Request%20a%20Demo%20-%20eigenSecure&body=Request%20a%20Demo%20—%20Client%20Submission%20Template%0A%0AI%20would%20like%20to%20request%20a%20personalized%20demo%20of%20the%20eigenSecure%20platform.%20Please%20find%20my%20details%20below:%0A%0ACompany%20Name:%20%0AContact%20Person:%20%0ADesignation:%20%0AEmail:%20%0APhone:%20%0AExpected%20Deployment%20Scale%20(SME%20/%20Enterprise):%20%0A%0AKindly%20share%20the%20available%20demo%20slots%20and%20any%20additional%20information%20required%20for%20scheduling.'

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

const activeLayer = ref(null)

const activateLayer = (index) => {
  activeLayer.value = index
}

const closeActiveLayer = () => {
  activeLayer.value = null
}

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

const services = ref([
  { 
    title: 'Customized ISMS Tool', 
    description: 'One platform — own your controls, own your governance, own your security roadmap.',
    detailedDescription: 'Define your own control sets, map risks directly to policies, automate compliance tracking, and generate audit-ready reports with ease. Whether you are starting your ISMS journey or enhancing an existing mature framework, the solution scales with your business, ensuring clarity, consistency, and continuous improvement at every stage.',
    icon: 'mdi-shield-check', 
    link: '/products#isms' 
  },
  { 
    title: 'Risk Management', 
    description: 'Own your risks. Lead with informed decisions.',
    detailedDescription: 'Take control of your organization\'s risk landscape with real-time visibility, structured assessments, and intelligent prioritization. Our Risk Management module empowers leadership teams to identify threats early, evaluate their impact, and align mitigation strategies with business objectives — strengthening governance and improving overall decision-making.',
    icon: 'mdi-chart-timeline-variant', 
    link: '/products#risk' 
  },
  { 
    title: 'Business Continuity & Disaster Recovery', 
    description: 'Own your resilience. Stay ready for anything.',
    detailedDescription: 'Stay prepared for the unexpected with a robust continuity and recovery framework. This module helps you plan, document, and test your response strategies, ensuring your critical operations remain functional during disruptions. With dynamic workflows and automated recovery actions, you can maintain resilience and restore operations swiftly and confidently.',
    icon: 'mdi-backup-restore', 
    link: '/products#bcdr' 
  },
  { 
    title: 'IT Attestation & Compliance', 
    description: 'Own your compliance. Inspire confidence through accountability.',
    detailedDescription: 'Simplify compliance and demonstrate accountability with a centralized system for audits, controls, and evidence management. Whether you\'re aligning with ISO 27001, NIST, SOC, or internal governance standards, our Compliance module streamlines documentation, reduces manual effort, and keeps your organization audit-ready at all times.',
    icon: 'mdi-file-document-check', 
    link: '/products#compliance' 
  },
  { 
    title: 'Security Exceptions Management', 
    description: 'Own your exceptions. Eliminate blind spots, strengthen governance.',
    detailedDescription: 'Gain full transparency into accepted risks and deviations with structured exception tracking. This module enables teams to document exceptions, evaluate residual risk, define timelines, and maintain governance integrity. It helps organizations prevent blind spots, enforce accountability, and ensure exceptions are managed systematically — not forgotten.',
    icon: 'mdi-alert-circle-check', 
    link: '/products#exceptions' 
  },
  { 
    title: 'Identity & Access Management', 
    description: 'Own your access. Enforce trust by design.',
    detailedDescription: 'Establish strong identity governance across users, applications, and systems. This service helps you define access policies, manage entitlements, monitor privileged access, and align identity controls with security and compliance requirements. By embedding accountability into access decisions, you reduce risk, prevent misuse, and ensure the right access is granted for the right reasons—always.',
    icon: 'mdi-account-key', 
    link: '/products#iam' 
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
</script>

<style scoped>
/* RESET AND BASE */
.homepage-elegant {
  margin-top: 0;
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

.logo-title {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.company-logo {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  margin: 0;
}

.hero-badge .glow {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  color: #193762;
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

.accent-text::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 3px;
  background: #C4922C;
  border-radius: 2px;
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

/* Trust Indicators */
.trust-indicators {
  max-width: 600px;
}

.trust-title {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.trust-icons {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.trust-icon {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
}

/* CONCENTRIC SHIELD LAYERS */
.shield-concentric-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.shield-concentric-container {
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.shield-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.concentric-solid {
  z-index: 3;
}

.concentric-middle {
  z-index: 2;
  filter: blur(0.5px);
}

.concentric-outer {
  z-index: 1;
  filter: blur(1px);
}


@keyframes rotateRing {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Glow effect */
.shield-concentric-glow {
  position: absolute;
  width: 240px;
  height: 240px;
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 40%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Breathing animations */
.concentric-outer {
  animation: breatheOuter 12s ease-in-out infinite;
}

.concentric-middle {
  animation: breatheMiddle 10s ease-in-out infinite;
  animation-delay: 2s;
}

.concentric-solid {
  animation: breatheSolid 8s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes breatheOuter {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.2; }
}

@keyframes breatheMiddle {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.3; }
}

@keyframes breatheSolid {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 1; }
}

/* Hover effects */
.shield-concentric-container:hover .concentric-outer {
  opacity: 0.25;
  transform: translate(-50%, -50%) scale(1.02);
}

.shield-concentric-container:hover .concentric-middle {
  opacity: 0.35;
  transform: translate(-50%, -50%) scale(1.015);
}

.shield-concentric-container:hover .concentric-solid {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.01);
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.4));
}

/* Stats Overlay */
.stats-overlay {
  position: absolute;
  bottom: -100px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: rgba(11, 28, 45, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
  z-index: 5;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
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

/* LAYERS HONEYCOMB SECTION */
.section-layers-honeycomb {
  padding: 120px 0;
  background: white;
  position: relative;
  overflow: visible;
}

/* Honeycomb Container */
.honeycomb-container {
  position: relative;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

/* Background Overlay (BELOW the hexagon) */
.honeycomb-background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(11, 28, 45, 0.6);
  z-index: 90;
  animation: fadeInOverlay 0s ease-out;
}

@keyframes fadeInOverlay {
  from { opacity: 0; }
  to { opacity: 1; }
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
  gap: 0;
}

/* Honeycomb row positioning */
.row-1 {
  margin-bottom: -30px;
}

.row-2 {
  margin-bottom: -30px;
  transform: translateX(0px);
}

.row-3 {
  /* Last row, no margin needed */
}

/* Honeycomb Hexagon */
.honeycomb-hexagon-wrapper {
  position: relative;
  width: 200px;
  height: 220px;
  margin: 0 10px;
  transition: all 0s cubic-bezier(0.34, 1.56, 0.64, 1);
  z-index: 1;
}

/* Active state - CLEAN EXPANSION */
.honeycomb-hexagon-wrapper.active {
  z-index: 1000 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.8) !important; /* Larger scale */
  margin: 0;
  width: 200px;
  height: 220px;
}

.honeycomb-hexagon-wrapper.inactive {
  opacity: 0.9;
  transform: scale(0.7);
  pointer-events: none;
}

.honeycomb-hexagon {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--hex-color, rgba(25, 55, 98, 0.1));
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.honeycomb-hexagon:hover {
  transform: translateY(-5px) scale(1.05);
  background: rgba(196, 146, 44, 0.15);
  box-shadow: 0 15px 30px rgba(196, 146, 44, 0.2);
}

.honeycomb-hexagon-wrapper.active .honeycomb-hexagon {
  background: white !important; /* SOLID WHITE - no blur/overlay */
  box-shadow: 0 25px 50px rgba(11, 28, 45, 0.3);
  transform: none;
  z-index: 101;
}

/* Optional: Add a pseudo-element for extra coverage */
.honeycomb-hexagon-wrapper.active .honeycomb-hexagon::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: white;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: -1;
}

.hexagon-border {
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  border: 2px solid #193762;
  opacity: 0.2;
  transition: all 0.4s ease;
}

.honeycomb-hexagon:hover .hexagon-border {
  opacity: 0.8;
  border-color: #C4922C;
}

.honeycomb-hexagon-wrapper.active .hexagon-border {
  border-color: #C4922C;
  opacity: 1;
  border-width: 3px;
}

/* Normal State Content (visible when NOT active) */
.hexagon-normal-content {
  text-align: center;
  padding: 45px 20px;
  color: #193762;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.honeycomb-hexagon-wrapper.active .hexagon-normal-content {
  opacity: 0; /* Hide normal content when expanded */
}

.hexagon-number {
  font-size: 1.5rem;
  font-weight: 700;
  color: #193762;
  opacity: 0.8;
}

.hexagon-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  transition: all 0.3s ease;
}

.honeycomb-hexagon:hover .hexagon-title {
  color: #C4922C;
}

.hexagon-icon {
  margin-top: 8px;
  transition: all 0.3s ease;
}

.honeycomb-hexagon:hover .hexagon-icon .v-icon {
  color: #C4922C !important;
}

/* Expanded State Content (visible ONLY when active) */
.hexagon-expanded-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  z-index: 102;
  opacity: 0;
  animation: fadeInExpandedContent 0.3s ease-out 0.2s forwards;
}



@keyframes fadeInExpandedContent {
  from { 
    opacity: 0; 
    transform: translate(-50%, -50%) scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: translate(-50%, -50%) scale(1); 
  }
}

.expanded-description {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #64748b;
  text-align: center;
  width: 100%;
}

.expanded-close {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 103;
}

.expanded-close .v-btn:hover {
  background: #C4922C;
  color: white;
}

/* SERVICES SECTION */
.section-services {
  padding: 120px 0;
  background: #f8fafc;
}

.service-card {
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: #C4922C;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(196, 146, 44, 0.1);
}

.service-icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(25, 55, 98, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  background: rgba(196, 146, 44, 0.1);
}

.service-card:hover .service-icon {
  color: #C4922C;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #193762;
}

.service-description {
  line-height: 1.6;
  font-size: 1rem;
  color: #64748b;
  font-weight: 500;
}

.service-detailed {
  margin-top: 1rem;
}

.service-detailed-text {
  line-height: 1.7;
  font-size: 0.95rem;
  color: #64748b;
  font-style: italic;
}

.service-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-link:hover {
  color: #C4922C;
}

.service-link:hover .v-icon {
  color: #C4922C;
  transform: translateX(4px);
  transition: transform 0.3s ease;
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

/* FOOTER SECTION */
.footer-section {
  background: #0B1C2D;
  color: white;
  padding: 80px 0 40px;
}

.footer-brand {
  padding-right: 40px;
}

.footer-logo {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
}

.footer-tagline {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
  line-height: 1.5;
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
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.contact-item span {
  flex: 1;
}

.footer-links-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.footer-link:hover {
  color: #C4922C;
  transform: translateX(5px);
}

.footer-bottom {
  color: rgba(255, 255, 255, 0.6);
}

.copyright {
  font-size: 0.95rem;
}

.footer-note {
  font-size: 0.875rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.5);
}

/* ACCESSIBILITY & PERFORMANCE */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up,
  .animate-card,
  .particle,
  .shield-layer,
  .accent-ring,
  .shield-concentric-container:hover .shield-layer,
  .service-link:hover .v-icon,
  .footer-link:hover,
  .honeycomb-hexagon-wrapper,
  .honeycomb-hexagon,
  .honeycomb-background-overlay,
  .hexagon-expanded-content,
  .honeycomb-grid {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}

/* Reduce particles on mobile for performance */
@media (max-width: 768px) {
  .particle {
    display: none;
  }
}

/* RESPONSIVE - HONEYCOMB */
@media (max-width: 1200px) {
  .honeycomb-hexagon-wrapper {
    width: 160px;
    height: 176px;
    margin: 0 8px;
  }
  
  .row-2 {
    transform: translateX(0px);
  }
  
  .honeycomb-hexagon-wrapper.active {
    transform: translate(-50%, -50%) scale(1.6) !important;
  }
  
  .hexagon-normal-content {
    padding: 20px 15px;
    gap: 10px;
  }
  
  .hexagon-number {
    font-size: 1.25rem;
  }
  
  .hexagon-title {
    font-size: 0.875rem;
  }
  
  .expanded-description {
    font-size: 1rem;
  }
  
  .hexagon-expanded-content {
    padding: 30px 20px;
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
  
  .company-logo {
    font-size: 2rem;
  }
  
  .logo-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .shield-concentric-wrapper {
    height: 300px;
    margin-top: 3rem;
  }
  
  .shield-concentric-container {
    width: 180px;
    height: 180px;
  }
  
  .concentric-solid .v-icon {
    font-size: 120px !important;
  }
  
  .concentric-middle .v-icon {
    font-size: 140px !important;
  }
  
  .concentric-outer .v-icon {
    font-size: 160px !important;
  }
  
  .shield-concentric-glow {
    width: 180px;
    height: 180px;
  }
  
  .accent-ring {
    width: 50px;
    height: 50px;
  }
  
  .elegant-title,
  .cta-title {
    font-size: 2.25rem;
  }
  
  /* Honeycomb Responsive */
  .honeycomb-hexagon-wrapper {
    width: 130px;
    height: 143px;
    margin: 0 6px;
  }
  
  .row-2 {
    transform: translateX(0px);
    margin-bottom: -24px;
  }
  
  .row-1 {
    margin-bottom: -24px;
  }
  
  .honeycomb-hexagon-wrapper.active {
    transform: translate(-50%, -50%) scale(1.5) !important;
  }
  
  .hexagon-normal-content {
    padding: 15px 10px;
    gap: 8px;
  }
  
  .hexagon-number {
    font-size: 1.125rem;
  }
  
  .hexagon-title {
    font-size: 0.75rem;
  }
  
  .expanded-description {
    font-size: 0.875rem;
  }
  
  .hexagon-expanded-content {
    padding: 20px 15px;
  }
  
  .expanded-close .v-btn {
    width: 32px !important;
    height: 32px !important;
  }
  
  .footer-brand {
    padding-right: 0;
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .honeycomb-hexagon-wrapper {
    width: 100px;
    height: 110px;
    margin: 0 5px;
  }
  
  .row-2 {
    transform: translateX(0px);
    margin-bottom: -20px;
  }
  
  .row-1 {
    margin-bottom: -20px;
  }
  
  .honeycomb-hexagon-wrapper.active {
    transform: translate(-50%, -50%) scale(1.4) !important;
  }
  
  .hexagon-normal-content {
    padding: 10px 8px;
    gap: 6px;
  }
  
  .hexagon-number {
    font-size: 1rem;
  }
  
  .hexagon-title {
    font-size: 0.65rem;
  }
  
  .expanded-description {
    font-size: 0.75rem;
  }
  
  .hexagon-expanded-content {
    padding: 15px 10px;
  }
  
  .expanded-close {
    top: 10px;
    right: 10px;
  }
  
  .expanded-close .v-btn {
    width: 28px !important;
    height: 28px !important;
  }
  
  .expanded-close .v-icon {
    font-size: 14px !important;
  }
}

@media (max-width: 600px) {
  .hero-main-title {
    font-size: 2rem;
  }
  
  .company-logo {
    font-size: 1.75rem;
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
  
  .trust-icons {
    flex-direction: column;
    gap: 1rem;
  }
  
  .shield-concentric-wrapper {
    height: 250px;
  }
  
  .shield-concentric-container {
    width: 150px;
    height: 150px;
  }
  
  .concentric-solid .v-icon {
    font-size: 100px !important;
  }
  
  .concentric-middle .v-icon {
    font-size: 120px !important;
  }
  
  .concentric-outer .v-icon {
    font-size: 140px !important;
  }
  
  .shield-concentric-glow {
    width: 150px;
    height: 150px;
  }
  
  .accent-ring {
    width: 40px;
    height: 40px;
  }
  
  .accent-dot {
    width: 6px;
    height: 6px;
  }
  
  .stats-overlay {
    padding: 0.75rem;
  }
  
  .stat-number {
    font-size: 1.25rem;
  }
  
  .stat-label {
    font-size: 0.65rem;
  }
  
  /* Honeycomb Mobile */
  .honeycomb-hexagon-wrapper {
    width: 80px;
    height: 88px;
    margin: 0 4px;
  }
  
  .row-2 {
    transform: translateX(0px);
    margin-bottom: -16px;
  }
  
  .row-1 {
    margin-bottom: -16px;
  }
  
  .honeycomb-container {
    min-height: 400px;
  }
  
  .honeycomb-hexagon-wrapper.active {
    transform: translate(-50%, -50%) scale(1.3) !important;
  }
  
  .hexagon-normal-content {
    padding: 8px 6px;
    gap: 4px;
  }
  
  .hexagon-number {
    font-size: 0.875rem;
  }
  
  .hexagon-title {
    font-size: 0.55rem;
  }
  
  .expanded-description {
    font-size: 0.65rem;
  }
  
  .hexagon-expanded-content {
    padding: 12px 8px;
  }
  
  .expanded-close {
    top: 8px;
    right: 8px;
  }
  
  .expanded-close .v-btn {
    width: 24px !important;
    height: 24px !important;
  }
  
  .footer-section {
    padding: 60px 0 30px;
  }
  
  .footer-logo {
    font-size: 1.75rem;
  }
}

@media (max-width: 480px) {
  .honeycomb-hexagon-wrapper {
    width: 65px;
    height: 72px;
    margin: 0 3px;
  }
  
  .row-2 {
    transform: translateX(35.5px);
    margin-bottom: -12px;
  }
  
  .row-1 {
    margin-bottom: -12px;
  }
  
  .honeycomb-hexagon-wrapper.active {
    transform: translate(-50%, -50%) scale(1.2) !important;
  }
  
  .hexagon-normal-content {
    padding: 6px 4px;
    gap: 3px;
  }
  
  .hexagon-title {
    font-size: 0.5rem;
    line-height: 1.1;
  }
  
  .expanded-description {
    font-size: 0.55rem;
  }
  
  .hexagon-expanded-content {
    padding: 10px 6px;
  }
}

/* Very small mobile (like iPhone SE) */
@media (max-width: 375px) {
  .honeycomb-hexagon-wrapper {
    width: 55px;
    height: 61px;
    margin: 0 2px;
  }
  
  .row-2 {
    transform: translateX(29.5px);
    margin-bottom: -10px;
  }
  
  .row-1 {
    margin-bottom: -10px;
  }
  
  .honeycomb-hexagon-wrapper.active {
    transform: translate(-50%, -50%) scale(1.1) !important;
  }
  
  .hexagon-normal-content {
    padding: 4px 3px;
    gap: 2px;
  }
  
  .hexagon-number {
    font-size: 0.75rem;
  }
  
  .hexagon-title {
    font-size: 0.45rem;
  }
  
  .expanded-description {
    font-size: 0.5rem;
  }
  
  .hexagon-expanded-content {
    padding: 8px 5px;
  }
  
  .expanded-close {
    top: 6px;
    right: 6px;
  }
  
  .expanded-close .v-btn {
    width: 20px !important;
    height: 20px !important;
  }
  
  .expanded-close .v-icon {
    font-size: 12px !important;
  }
}

/* Accessibility: Keyboard navigation */
.honeycomb-hexagon:focus {
  outline: 2px solid #C4922C;
  outline-offset: 4px;
}

/* Add this to the very end of your CSS */
.honeycomb-hexagon-wrapper.active .honeycomb-hexagon {
  background: white !important;
  -webkit-backdrop-filter: blur(0px) !important;
  backdrop-filter: blur(0px) !important;
}
</style>