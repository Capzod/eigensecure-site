<template>
  <v-sheet class="product-page" color="transparent">
    
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="bg-gradient"></div>
        <div class="grid-overlay"></div>
        <div class="particles">
          <div v-for="i in 20" :key="i" class="particle" :style="particleStyle(i)"></div>
        </div>
      </div>

      <v-container fluid class="hero-container">
        <v-row align="center" class="h-100">
          <v-col cols="12" class="text-center">
            <v-chip color="white" variant="flat" size="small" class="hero-badge mb-4">
              <v-icon start size="small" color="#193762">mdi-shield-star</v-icon>
              PRODUCTS & SERVICES
            </v-chip>
            
            <h1 class="hero-title animate-fade-up">
              Empowering You to Own Security,<br class="d-none d-md-block" />
              Not Just Rent It.
            </h1>
            
            <p class="hero-subtitle animate-fade-up delay-1">
              Comprehensive cybersecurity solutions for your enterprise. Protect, monitor, 
              and manage risks with intelligent tools and services that grow with your business.
            </p>
            
            <div class="hero-actions animate-fade-up delay-2">
              <v-btn
                color="white"
                size="x-large"
                class="cta-primary"
                :href="mailtoLink"
                rounded="xl"
                target="_blank"
                rel="noopener"
                aria-label="Connect with the team - opens email client"
              >
                <v-icon start size="large" color="#193762">mdi-account-group</v-icon>
                <span class="btn-text">Connect with the Team</span>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- INTRODUCTION SECTION -->
    <v-sheet class="section-introduction">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="10" xl="8">
            <div class="introduction-content text-center">
              <p class="introduction-text">
                eigenSecure delivers end-to-end cybersecurity governance, compliance, and risk management through 
                an intuitive platform. Built on cutting-edge .NET technology with a modern Blazor interface, 
                our solution provides real-time insights, centralized control, and seamless integration—empowering 
                organizations to proactively defend against evolving threats while maintaining regulatory compliance.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- MAIN PRODUCT CATALOGUE -->
    <v-sheet class="section-products">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            CORE PLATFORM
          </v-chip>
          <h2 class="section-title elegant-title">
            Complete Security Governance Ecosystem
          </h2>
          <p class="section-subtitle elegant-subtitle">
            Integrated solutions that work together to protect your enterprise
          </p>
        </div>

        <!-- Product 1: Cybersecurity Governance Ecosystem -->
        <v-card class="product-card mb-16" rounded="xl" elevation="4">
          <v-row no-gutters class="h-100">
            <v-col cols="12" md="6" class="product-content pa-8">
              <div class="product-badge">
                <v-chip color="#193762" variant="flat" size="small" class="mb-4">
                  <v-icon start size="small" color="white">mdi-shield-check</v-icon>
                  ISMS
                </v-chip>
              </div>
              
              <h3 class="product-headline mb-4">
                Build a Robust Information Security Management System
              </h3>
              
              <p class="product-description mb-6">
                Streamline your organization's information security processes through a unified platform 
                that integrates risk management, security exceptions, IT resiliency, compliance attestations, 
                and comprehensive reporting.
              </p>
              
              <div class="key-features mb-6">
                <h4 class="features-title mb-4">Key Features:</h4>
                <ul class="features-list">
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Unified Security Modules</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>End-to-End Risk & Exception Governance</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Business Continuity & Resiliency Oversight</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Compliance & Attestation Management</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Intelligent Dashboards & Reporting</li>
                </ul>
              </div>
              
              <v-btn
                color="#193762"
                size="large"
                :href="mailtoLink"
                class="product-cta"
                rounded="lg"
                variant="flat"
              >
                <v-icon start>mdi-information</v-icon>
                Learn More
              </v-btn>
            </v-col>
            
            <v-col cols="12" md="6" class="product-visual d-flex align-center justify-center pa-8">
              <div class="visual-wrapper">
                <div class="shield-visual">
                  <v-icon size="160" color="rgba(25, 55, 98, 0.15)">mdi-shield-outline</v-icon>
                  <v-icon size="120" color="rgba(25, 55, 98, 0.25)" class="shield-middle">mdi-shield-outline</v-icon>
                  <v-icon size="80" color="#193762" class="shield-inner">mdi-shield-check</v-icon>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!-- Product 2: Security Governance Management -->
        <v-card class="product-card mb-16" rounded="xl" elevation="4">
          <v-row no-gutters class="h-100" reverse>
            <v-col cols="12" md="6" class="product-visual d-flex align-center justify-center pa-8">
              <div class="visual-wrapper">
                <div class="risk-visual">
                  <v-icon size="160" color="rgba(25, 55, 98, 0.15)">mdi-chart-timeline-variant</v-icon>
                  <div class="risk-levels">
                    <div class="risk-level" v-for="level in 5" :key="level"></div>
                  </div>
                </div>
              </div>
            </v-col>
            
            <v-col cols="12" md="6" class="product-content pa-8">
              <div class="product-badge">
                <v-chip color="#193762" variant="flat" size="small" class="mb-4">
                  <v-icon start size="small" color="white">mdi-chart-box</v-icon>
                  RISK MANAGEMENT
                </v-chip>
              </div>
              
              <h3 class="product-headline mb-4">
                Comprehensive Risk Assessment Across Your Technology Ecosystem
              </h3>
              
              <p class="product-description mb-6">
                Manage risk across your entire technology landscape with structured assessment workflows 
                for SaaS applications, commercial products, internally developed applications, and third-party services.
              </p>
              
              <div class="key-features mb-6">
                <h4 class="features-title mb-4">Key Features:</h4>
                <ul class="features-list">
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Multi-Domain Risk Coverage</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Structured Assessment Workflows</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Automated Risk Scoring</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Mitigation Planning</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Complete Audit Trail</li>
                </ul>
              </div>
              
              <v-btn
                color="#193762"
                size="large"
                :href="mailtoLink"
                class="product-cta"
                rounded="lg"
                variant="flat"
              >
                <v-icon start>mdi-information</v-icon>
                Learn More
              </v-btn>
            </v-col>
          </v-row>
        </v-card>

        <!-- Product 3: Organizational Resilience -->
        <v-card class="product-card mb-16" rounded="xl" elevation="4">
          <v-row no-gutters class="h-100">
            <v-col cols="12" md="6" class="product-content pa-8">
              <div class="product-badge">
                <v-chip color="#193762" variant="flat" size="small" class="mb-4">
                  <v-icon start size="small" color="white">mdi-backup-restore</v-icon>
                  RESILIENCE
                </v-chip>
              </div>
              
              <h3 class="product-headline mb-4">
                Ensure Business Continuity & Disaster Recovery in Any Scenario
              </h3>
              
              <p class="product-description mb-6">
                Prepare your organization for disruptions with comprehensive business continuity 
                and disaster recovery management through structured annual campaigns.
              </p>
              
              <div class="key-features mb-6">
                <h4 class="features-title mb-4">Key Features:</h4>
                <ul class="features-list">
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Business Impact Analysis (BIA)</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Failure Mode Analysis (FMA)</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>DR Test Execution & Documentation</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>DR Plan Development</li>
                  <li><v-icon size="small" color="#C4922C" class="mr-2">mdi-check-circle</v-icon>Campaign Reporting & Analytics</li>
                </ul>
              </div>
              
              <v-btn
                color="#193762"
                size="large"
                :href="mailtoLink"
                class="product-cta"
                rounded="lg"
                variant="flat"
              >
                <v-icon start>mdi-information</v-icon>
                Learn More
              </v-btn>
            </v-col>
            
            <v-col cols="12" md="6" class="product-visual d-flex align-center justify-center pa-8">
              <div class="visual-wrapper">
                <div class="resilience-visual">
                  <v-icon size="160" color="rgba(25, 55, 98, 0.15)">mdi-shield-refresh</v-icon>
                  <div class="resilience-rings">
                    <div class="ring" v-for="ring in 3" :key="ring"></div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <!-- GRID OF ADDITIONAL PRODUCTS (4, 5, 6) -->
        <v-row class="mb-12">
          <v-col cols="12" md="6" lg="4" v-for="(product, index) in additionalProducts" :key="index">
            <v-card class="compact-product-card h-100" rounded="lg" hover elevation="2">
              <div class="card-content pa-6">
                <div class="compact-badge mb-4">
                  <v-chip :color="product.color" variant="flat" size="small">
                    <v-icon start size="small" color="white">{{ product.icon }}</v-icon>
                    {{ product.badge }}
                  </v-chip>
                </div>
                
                <h4 class="compact-title mb-3">{{ product.title }}</h4>
                <p class="compact-description mb-4">{{ product.description }}</p>
                
                <div class="compact-features mb-6">
                  <div class="feature" v-for="(feature, i) in product.features" :key="i">
                    <v-icon size="x-small" color="#C4922C" class="mr-2">mdi-check</v-icon>
                    <span class="feature-text">{{ feature }}</span>
                  </div>
                </div>
                
                <v-btn
                  :color="product.color"
                  size="default"
                  :href="mailtoLink"
                  class="compact-cta"
                  rounded="lg"
                  variant="flat"
                  block
                >
                  <v-icon start size="small">mdi-information</v-icon>
                  Learn More
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- EXCELLENCE SECTION -->
    <v-sheet class="section-excellence">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            PLATFORM EXCELLENCE
          </v-chip>
          <h2 class="section-title elegant-title">
            Enterprise-Grade Security Intelligence
          </h2>
          <p class="section-subtitle elegant-subtitle">
            Built for scale, reliability, and security to meet modern enterprise demands
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="6" lg="3" v-for="(feature, index) in excellenceFeatures" :key="index">
            <div class="excellence-card text-center pa-6">
              <div class="excellence-icon-wrapper mb-6">
                <v-icon size="56" color="#193762">{{ feature.icon }}</v-icon>
              </div>
              <h4 class="excellence-title mb-3">{{ feature.title }}</h4>
              <p class="excellence-description">{{ feature.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- TECHNOLOGY STACK -->
    <v-sheet class="section-technology">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            TECHNOLOGY
          </v-chip>
          <h2 class="section-title elegant-title">
            Built on Enterprise-Grade Technology
          </h2>
          <p class="section-subtitle elegant-subtitle">
            Modern, scalable architecture for mission-critical security operations
          </p>
        </div>

        <div class="tech-stack-grid">
          <div class="tech-category" v-for="category in techStack" :key="category.title">
            <h4 class="tech-category-title mb-4">{{ category.title }}</h4>
            <div class="tech-items">
              <div class="tech-item" v-for="item in category.items" :key="item">
                <v-icon size="small" color="#C4922C" class="mr-2">mdi-check</v-icon>
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <!-- FINAL CTA -->
    <v-sheet class="section-final-cta">
      <v-container>
        <div class="final-cta-content text-center">
          <v-chip color="white" variant="flat" class="mb-6" size="small">
            SEE IT IN ACTION
          </v-chip>
          
          <h2 class="cta-title elegant-title">
            Ready to Transform Your<br class="d-none d-md-block" />
            <span class="text-white">Security Operations?</span>
          </h2>
          
          <p class="cta-subtitle elegant-subtitle mb-6">
            Book a personalized demo and discover how our platform can strengthen your 
            security posture, streamline compliance, and reduce operational overhead.
          </p>

          <div class="cta-actions">
            <v-btn
              color="white"
              size="x-large"
              class="btn-elevated"
              :href="mailtoLink"
              rounded="lg"
              target="_blank"
              rel="noopener"
              aria-label="Connect with our team - opens email client"
            >
              <v-icon start color="#193762">mdi-account-group</v-icon>
              <span class="btn-text">Connect with Our Team</span>
            </v-btn>
          </div>
        </div>
      </v-container>
    </v-sheet>

  </v-sheet>
</template>

<script setup>
import { ref } from 'vue'

// Email template with pre-filled content
const mailtoLink = ref('mailto:sales@eigensecure.com?subject=Connect%20with%20eigenSecure%20Team&body=Connect%20With%20Our%20Team%0A%0AHello%20Team,%0A%0AI%20would%20like%20to%20connect%20with%20you%20to%20understand%20your%20services%20and%20explore%20how%20we%20can%20work%20together.%0A%0ACompany%20Name:%20_________%20%0AContact%20Person:%20_________%20%0ADesignation:%20_________%20%0AEmail:%20_________%20%0APhone:%20_________%20%0A%0AExpected%20Engagement%20Type:%20_________%20%0A%0AThank%20you,%0A%5BYour%20Name%5D')

// Additional Products (4, 5, 6)
const additionalProducts = ref([
  {
    badge: 'COMPLIANCE',
    title: 'Centralized IT Compliance and Attestation Management',
    description: 'Maintain continuous compliance across critical IT domains with a centralized attestation platform.',
    icon: 'mdi-file-document-check',
    color: '#193762',
    features: [
      'Continuity, Recovery & Change Compliance',
      'Identity, Access & Security Controls',
      'Risk & Asset Lifecycle Governance',
      'Unified Workflows & Approvals',
      'Centralized Dashboards & Audit-Ready Records'
    ]
  },
  {
    badge: 'EXCEPTIONS',
    title: 'Controlled Security Exception Management',
    description: 'Manage security policy exceptions through a rigorous approval framework that balances operational needs with security requirements.',
    icon: 'mdi-alert-circle-check',
    color: '#193762',
    features: [
      'Comprehensive Exception Management',
      'Multi-Level Approval Workflow',
      'Exception Lifecycle Tracking',
      'Automated Stakeholder Communications',
      'Enterprise-Wide Visibility'
    ]
  },
  {
    badge: 'RESOURCE CENTER',
    title: 'Personalized Security Profile and Organizational Intelligence',
    description: 'Access your complete security profile and organizational context in one centralized location.',
    icon: 'mdi-account-details',
    color: '#193762',
    features: [
      'Personal Security Dashboard',
      'Application Ownership Management',
      'Organizational Structure Intelligence',
      'Asset & Accountability Tracking',
      'Enterprise-Wide Visibility'
    ]
  }
])

// Excellence Features
const excellenceFeatures = ref([
  {
    icon: 'mdi-browser',
    title: 'Blazor-Powered Interface',
    description: 'Seamless, responsive UI built with modern .NET Blazor technology for desktop-class performance.'
  },
  {
    icon: 'mdi-chart-box',
    title: 'Automated Reports & Analytics',
    description: 'Transform security data into actionable insights instantly with intelligent reporting.'
  },
  {
    icon: 'mdi-bell-ring',
    title: 'Real-Time Alerts & Monitoring',
    description: 'Continuous monitoring with intelligent alerting that prioritizes critical security events.'
  },
  {
    icon: 'mdi-view-dashboard',
    title: 'Centralized Management Dashboard',
    description: 'Manage your entire security ecosystem from a single pane of glass with role-appropriate views.'
  }
])

// Technology Stack
const techStack = ref([
  {
    title: 'Frontend Architecture',
    items: ['Blazor WebAssembly']
  },
  {
    title: 'Backend Infrastructure',
    items: ['C# & .NET', 'ASP.NET Core']
  },
  {
    title: 'Data Layer',
    items: ['Microsoft SQL Server', 'Entity Framework Core']
  },
  {
    title: 'Integration & APIs',
    items: ['REST APIs', 'JSON']
  },
  {
    title: 'Cloud Platform',
    items: ['Microsoft Azure', 'Azure Active Directory']
  },
  {
    title: 'Security & Authentication',
    items: ['Multi-Factor Authentication', 'JWT Tokens', 'OAuth 2.0']
  }
])

// Particle animation (same as homepage)
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
/* HERO SECTION - Matches Homepage */
.hero-section {
  height: 70vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  background: #0B1C2D;
  display: flex;
  align-items: center;
}

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

.hero-container {
  height: 100%;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: white;
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.hero-badge {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.hero-actions {
  margin-top: 2rem;
}

.cta-primary {
  background: white !important;
  color: #193762 !important;
  font-weight: 600 !important;
  padding: 0 2rem !important;
  height: 56px !important;
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3) !important;
  transition: all 0.3s ease !important;
}

.cta-primary:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.4) !important;
  background: #C4922C !important;
  color: white !important;
}

/* INTRODUCTION */
.section-introduction {
  padding: 80px 0;
  background: white;
}

.introduction-text {
  font-size: 1.25rem;
  line-height: 1.8;
  color: #64748b;
  font-weight: 400;
}

/* PRODUCTS SECTION */
.section-products {
  padding: 80px 0;
  background: #f8fafc;
}

.product-card {
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
}

.product-card:hover {
  box-shadow: 0 20px 50px rgba(25, 55, 98, 0.15) !important;
  transform: translateY(-4px);
}

.product-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-headline {
  font-size: 2rem;
  font-weight: 700;
  color: #0B1C2D;
  line-height: 1.2;
}

.product-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #64748b;
}

.key-features {
  background: rgba(25, 55, 98, 0.03);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #C4922C;
}

.features-title {
  color: #193762;
  font-weight: 600;
  font-size: 1.125rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  padding: 8px 0;
  color: #64748b;
  display: flex;
  align-items: center;
}

.product-cta {
  align-self: flex-start;
  background: #193762 !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

.product-cta:hover {
  background: #C4922C !important;
  transform: translateX(5px);
}

.product-visual {
  background: rgba(25, 55, 98, 0.02);
}

.shield-visual {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.shield-middle {
  position: absolute;
  opacity: 0.8;
}

.shield-inner {
  position: absolute;
  animation: pulse 2s ease-in-out infinite;
}

.risk-visual {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.risk-levels {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.risk-level {
  height: 6px;
  background: linear-gradient(90deg, #C4922C 0%, #193762 100%);
  border-radius: 3px;
  opacity: 0.7;
  animation: slideIn 1s ease-out forwards;
}

.risk-level:nth-child(1) { width: 60%; animation-delay: 0.1s; }
.risk-level:nth-child(2) { width: 75%; animation-delay: 0.2s; }
.risk-level:nth-child(3) { width: 90%; animation-delay: 0.3s; }
.risk-level:nth-child(4) { width: 65%; animation-delay: 0.4s; }
.risk-level:nth-child(5) { width: 80%; animation-delay: 0.5s; }

.resilience-visual {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.resilience-rings {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ring {
  position: absolute;
  border: 2px solid rgba(25, 55, 98, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring:nth-child(1) { width: 180px; height: 180px; }
.ring:nth-child(2) { width: 140px; height: 140px; animation: pulseRing 3s ease-in-out infinite; }
.ring:nth-child(3) { width: 100px; height: 100px; }

/* COMPACT PRODUCT CARDS */
.compact-product-card {
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.compact-product-card:hover {
  border-color: #C4922C;
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(196, 146, 44, 0.1) !important;
}

.compact-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0B1C2D;
  line-height: 1.3;
}

.compact-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #64748b;
}

.compact-features {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.feature {
  display: flex;
  align-items: flex-start;
  color: #64748b;
  font-size: 0.875rem;
}

.feature-text {
  line-height: 1.5;
}

.compact-cta {
  background: #193762 !important;
  color: white !important;
  transition: all 0.3s ease !important;
}

.compact-cta:hover {
  background: #C4922C !important;
}

/* EXCELLENCE SECTION */
.section-excellence {
  padding: 80px 0;
  background: white;
}

.excellence-card {
  transition: all 0.3s ease;
}

.excellence-card:hover {
  transform: translateY(-5px);
}

.excellence-icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(25, 55, 98, 0.08);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.excellence-card:hover .excellence-icon-wrapper {
  background: rgba(196, 146, 44, 0.1);
}

.excellence-card:hover .v-icon {
  color: #C4922C !important;
}

.excellence-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #193762;
}

.excellence-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #64748b;
}

/* TECHNOLOGY SECTION */
.section-technology {
  padding: 80px 0;
  background: #f8fafc;
}

.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.tech-category {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.tech-category:hover {
  border-color: #C4922C;
  box-shadow: 0 10px 25px rgba(196, 146, 44, 0.1);
}

.tech-category-title {
  color: #193762;
  font-weight: 600;
  font-size: 1.125rem;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tech-item {
  display: flex;
  align-items: center;
  color: #64748b;
  font-size: 0.95rem;
}

/* FINAL CTA SECTION */
.section-final-cta {
  padding: 100px 0;
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
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.btn-elevated {
  box-shadow: 0 8px 30px rgba(255, 255, 255, 0.3) !important;
  transition: all 0.3s ease !important;
  background: white !important;
  color: #193762 !important;
}

.btn-elevated:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 12px 40px rgba(255, 255, 255, 0.4) !important;
  background: #C4922C !important;
  color: white !important;
}

/* ANIMATIONS */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes pulseRing {
  0%, 100% { border-color: rgba(196, 146, 44, 0.2); }
  50% { border-color: rgba(196, 146, 44, 0.4); }
}

@keyframes slideIn {
  from { transform: translateX(-20px); opacity: 0; }
  to { transform: translateX(0); opacity: 0.7; }
}

.animate-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
  opacity: 0;
}

.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.4s; }

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

/* RESPONSIVE DESIGN */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-section {
    height: 60vh;
    min-height: 500px;
  }
  
  .product-headline {
    font-size: 1.75rem;
  }
  
  .cta-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .section-introduction,
  .section-products,
  .section-excellence,
  .section-technology {
    padding: 60px 0;
  }
  
  .product-card {
    margin-bottom: 32px !important;
  }
  
  .product-visual {
    padding: 40px 24px !important;
  }
  
  .tech-stack-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .hero-section {
    height: auto;
    min-height: auto;
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 1.75rem;
  }
  
  .cta-primary,
  .btn-elevated {
    width: 100%;
    justify-content: center;
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .product-card,
  .compact-product-card,
  .excellence-card,
  .tech-category,
  .cta-primary,
  .btn-elevated,
  .animate-fade-up,
  .particle,
  .shield-inner,
  .risk-level,
  .ring {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
</style>