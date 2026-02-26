<template>
  <v-sheet class="about-page" color="transparent">
    
    <!-- HERO SECTION - UNIQUE FOR ABOUT US -->
    <section class="hero-section about-hero">
      <div class="hero-background">
        <div class="bg-gradient about-gradient"></div>
        <div class="grid-overlay"></div>
        <!-- Unique floating hexagons for About page -->
        <div class="floating-hexagons">
          <div class="floating-hexagon h1"></div>
          <div class="floating-hexagon h2"></div>
          <div class="floating-hexagon h3"></div>
          <div class="floating-hexagon h4"></div>
          <div class="floating-hexagon h5"></div>
        </div>
        <div class="particles">
          <div v-for="i in 30" :key="i" class="particle" :style="particleStyle(i)"></div>
        </div>
      </div>

      <v-container fluid class="hero-container">
        <v-row align="center" class="h-100">
          <v-col cols="12" class="text-center">
          
            
            <h1 class="hero-title about-title animate-fade-up">
              <span class="title-line">Empowering organizations to own</span>
              <span class="title-line accent-line">
                <span class="accent-text">their security governance.</span>
              </span>
            </h1>
            
            <p class="hero-subtitle animate-fade-up delay-1">
              A remote-first cybersecurity organization helping modern enterprises transform 
              the way they understand, implement, and own their security frameworks.
            </p>
            
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- OUR STORY SECTION -->
    <v-sheet class="section-story">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            OUR FOUNDATION
          </v-chip>
          <h2 class="section-title elegant-title">
            Built on a Simple,<br class="d-none d-md-block" />
            <span class="text-#193762">Powerful Idea</span>
          </h2>
          <p class="section-subtitle elegant-subtitle mb-8">
            eigenSecure began three years ago with a vision to create both a laboratory for talent 
            and a command center for governance.
          </p>
          
          <div class="story-intro-card pa-8 rounded-lg mx-auto" style="max-width: 800px;">
            <p class="story-intro-text">
              Born at the end of 2022, we were built on a belief that governance should never be 
              outsourced or borrowed — it should be owned. Our mission was to create a space where 
              young professionals could sharpen their skills on real-world systems, and where 
              organizations could access enterprise-grade cybersecurity built on modern architectures, 
              cloud-native technology, and object-oriented design principles.
            </p>
            <p class="story-intro-text mt-4">
              Today, that foundation continues to shape everything we do.
            </p>
          </div>
        </div>

        <!-- TIMELINE - WITH ENHANCED "TODAY" SECTION -->
        <div class="timeline-section">
          <div class="text-center mb-12">
            <v-chip color="#C4922C" variant="flat" class="mb-4" size="small">
              OUR JOURNEY
            </v-chip>
            <h3 class="timeline-title">
              The eigenSecure Story
            </h3>
          </div>

          <!-- Timeline Container -->
          <div class="timeline-container" ref="timelineContainer">
            <!-- Dynamic Timeline Line - BEHIND the icons -->
            <div class="timeline-line">
              <div 
                class="timeline-progress" 
                :style="{ height: timelineProgress + '%' }"
              ></div>
            </div>

            <!-- Timeline Items -->
            <div 
              v-for="(item, index) in timelineItems" 
              :key="index"
              class="timeline-item"
              :class="{ 
                'left': index % 2 === 0, 
                'right': index % 2 === 1,
                'today-item': item.year === 'Today'
              }"
              :ref="el => timelineRefs[index] = el"
            >
              <!-- HEXAGON Timeline Dot - Enhanced for Today -->
              <div 
                class="timeline-hexagon" 
                :class="{ 'today-hexagon': item.year === 'Today' }"
                :style="{ borderColor: item.color }"
              >
                <div class="hexagon-inner" :style="{ backgroundColor: item.color }">
                  <v-icon size="small" color="white">{{ item.icon }}</v-icon>
                </div>
                <!-- Special glow for Today -->
                <div v-if="item.year === 'Today'" class="today-glow"></div>
              </div>

              <!-- Timeline Card - Enhanced for Today -->
              <v-hover v-slot="{ isHovering, props }">
                <div 
                  class="timeline-card"
                  :class="{ 
                    'hovered': isHovering,
                    'today-card': item.year === 'Today',
                    'today-active': item.year === 'Today' && timelineProgress > 80
                  }"
                  v-bind="props"
                >
                  <div class="timeline-card-content">
                    <!-- Year/Title -->
                    <div class="timeline-header">
                      <div class="timeline-year" :class="{ 'today-year': item.year === 'Today' }">{{ item.year }}</div>
                      <h4 class="timeline-card-title" :class="{ 'today-title': item.year === 'Today' }">{{ item.title }}</h4>
                    </div>
                    
                    <!-- Description -->
                    <p class="timeline-description">{{ item.description }}</p>
                    
                    <!-- Tags/Highlights -->
                    <div class="timeline-tags">
                      <v-chip
                        v-for="(tag, tagIndex) in item.tags"
                        :key="tagIndex"
                        :color="item.color"
                        variant="flat"
                        size="x-small"
                        class="mr-2 mb-1"
                      >
                        {{ tag }}
                      </v-chip>
                    </div>
                  </div>
                </div>
              </v-hover>
            </div>
          </div>
        </div>
      </v-container>
    </v-sheet>

    <!-- MISSION & VALUES (unchanged) -->
    <v-sheet class="section-values">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            OUR PRINCIPLES
          </v-chip>
          <h2 class="section-title elegant-title">
            Mission & Values
          </h2>
          <p class="section-subtitle elegant-subtitle mb-8">
            We exist to give organizations the clarity, freedom, and control they need to shape 
            their own security governance.
          </p>
        </div>

        <!-- MISSION & VALUES - 6 CARDS (2 rows of 3) -->
        <v-row>
          <!-- Row 1: First 3 cards -->
          <v-col
            v-for="(value, index) in values.slice(0, 3)"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            class="d-flex"
          >
            <v-card 
              class="value-card pa-6 h-100"
              :class="`animate-card delay-${index}`"
              hover
              rounded="lg"
              :color="value.color"
              variant="flat"
            >
              <div class="value-icon-wrapper mb-4">
                <v-icon 
                  size="48" 
                  :color="value.color === '#f8fafc' ? '#C4922C' : 'white'" 
                  class="value-icon"
                >
                  {{ value.icon }}
                </v-icon>
              </div>

              <h3 class="value-title mt-4 mb-4">{{ value.title }}</h3>
              <p class="value-description">
                {{ value.description }}
              </p>
              
              <div class="value-highlights mt-4">
                <div 
                  v-for="(highlight, hIndex) in value.highlights" 
                  :key="hIndex"
                  class="value-highlight"
                >
                  <v-icon size="x-small" color="#C4922C" class="mr-2">mdi-check</v-icon>
                  <span :class="{ 'text-white': value.color === '#193762' }">{{ highlight }}</span>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Row 2: Next 3 cards -->
          <v-col
            v-for="(value, index) in values.slice(3, 6)"
            :key="index + 3"
            cols="12"
            md="6"
            lg="4"
            class="d-flex"
          >
            <v-card 
              class="value-card pa-6 h-100"
              :class="`animate-card delay-${index + 3}`"
              hover
              rounded="lg"
              :color="value.color"
              variant="flat"
            >
              <div class="value-icon-wrapper mb-4">
                <v-icon 
                  size="48" 
                  :color="value.color === '#f8fafc' ? '#C4922C' : 'white'" 
                  class="value-icon"
                >
                  {{ value.icon }}
                </v-icon>
              </div>

              <h3 class="value-title mt-4 mb-4">{{ value.title }}</h3>
              <p class="value-description">
                {{ value.description }}
              </p>
              
              <div class="value-highlights mt-4">
                <div 
                  v-for="(highlight, hIndex) in value.highlights" 
                  :key="hIndex"
                  class="value-highlight"
                >
                  <v-icon size="x-small" color="#C4922C" class="mr-2">mdi-check</v-icon>
                  <span :class="{ 'text-white': value.color === '#193762' }">{{ highlight }}</span>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- CULTURE & ENVIRONMENT (unchanged) -->
    <v-sheet class="section-culture">
      <v-container>
        <div class="text-center mb-12">
          <v-chip color="#193762" variant="flat" class="mb-4" size="small">
            OUR CULTURE
          </v-chip>
          <h2 class="section-title elegant-title">
            Built on Three Pillars
          </h2>
          <p class="section-subtitle elegant-subtitle">
            A remote-first workplace defined by openness, autonomy, and growth
          </p>
        </div>

        <v-row class="justify-center">
          <v-col
            v-for="(pillar, index) in culturePillars"
            :key="index"
            cols="12"
            md="6"
            lg="4"
            class="d-flex"
          >
            <v-card 
              class="pillar-card pa-6 h-100"
              :class="`animate-card delay-${index}`"
              hover
              rounded="lg"
              elevation="2"
            >
              <div class="pillar-number">
                {{ index + 1 }}
              </div>
              
              <div class="pillar-icon-wrapper mt-4 mb-6">
                <div class="pillar-icon-circle" :style="{ backgroundColor: pillar.color }">
                  <v-icon size="32" color="white">{{ pillar.icon }}</v-icon>
                </div>
              </div>

              <h3 class="pillar-title mt-4 mb-4">{{ pillar.title }}</h3>
              <p class="pillar-description">
                {{ pillar.description }}
              </p>
              
              <div class="pillar-examples mt-6">
                <v-chip
                  v-for="(example, exIndex) in pillar.examples"
                  :key="exIndex"
                  :color="pillar.color"
                  variant="flat"
                  size="small"
                  class="mr-2 mb-2"
                >
                  {{ example }}
                </v-chip>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Testimonials Placeholder -->
        <div class="testimonials-placeholder text-center mt-16 pa-8 rounded-lg">
          <v-icon size="64" color="rgba(25, 55, 98, 0.2)" class="mb-4">mdi-format-quote-open</v-icon>
          <h4 class="placeholder-title mb-3">Team Voices</h4>
          <p class="placeholder-text">
            Employee testimonials can be added here when ready
          </p>
        </div>
      </v-container>
    </v-sheet>

    <!-- JOIN OUR TEAM -->
    <v-sheet class="section-join">
      <v-container>
        <div class="join-content">
          <v-row align="center">
            <v-col cols="12" md="6">
              <div class="join-text-content">
                <v-chip color="#C4922C" variant="flat" class="mb-6" size="small">
                  CAREERS
                </v-chip>
                
                <h2 class="join-title elegant-title mb-4">
                  Join Our Team
                </h2>
                
                <p class="join-subtitle mb-6">
                  If you're someone who thrives on learning, isn't afraid to experiment, and wants 
                  to build the future of Cybersecurity & Governance Technology, eigenSecure might 
                  be the place for you.
                </p>
                
                <div class="benefits-list mb-8">
                  <div class="benefit-item" v-for="(benefit, index) in benefits" :key="index">
                    <v-icon size="small" color="#C4922C" class="mr-3">mdi-check-circle</v-icon>
                    <span>{{ benefit }}</span>
                  </div>
                </div>
                
                <p class="join-callout">
                  Growth isn't just a benefit here — it's expected.
                </p>
              </div>
            </v-col>
            
            <v-col cols="12" md="6">
              <v-card class="join-form-card pa-6" rounded="lg" elevation="4">
                <div class="text-center mb-6">
                  <v-icon size="48" color="#193762" class="mb-4">mdi-account-plus</v-icon>
                  <h3 class="form-title mb-2">Ready to Join Us?</h3>
                  <p class="form-subtitle">Send us your details and let's start the conversation</p>
                </div>
                
                <v-btn
                  color="#193762"
                  size="x-large"
                  class="join-cta-btn"
                  :href="joinMailtoLink"
                  rounded="lg"
                  variant="flat"
                  block
                >
                  <v-icon start>mdi-send</v-icon>
                  Apply Now
                </v-btn>
                
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-sheet>

  </v-sheet>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Refs for dynamic scrolling
const timelineContainer = ref(null)
const timelineRefs = ref([])
const timelineProgress = ref(0)

// Timeline items
const timelineItems = ref([
  {
    year: '2022',
    title: 'The Idea Takes Shape',
    description: 'A laboratory for talent. A command center for governance. eigenSecure was founded with a simple but ambitious vision: to create a space where governance is practiced, not theorized—and where security ownership is built from the ground up.',
    icon: 'mdi-lightbulb-on',
    color: '#193762',
    tags: ['Founding', 'Vision', 'Governance']
  },
  {
    year: 'Early Days',
    title: 'Remote by Design',
    description: 'Global minds, one purpose. What began as a small, remote-first team quickly became a distributed network of IT and cybersecurity professionals working across geographies, united by a shared commitment to modern security practices.',
    icon: 'mdi-earth',
    color: '#C4922C',
    tags: ['Remote-First', 'Global Team', 'Distributed']
  },
  {
    year: 'Foundation',
    title: 'Building the Foundation',
    description: 'Ownership over outsourcing. From the start, eigenSecure was built on the belief that security governance should never be borrowed or outsourced—it must be owned. This principle shaped how we designed our tools, workflows, and frameworks.',
    icon: 'mdi-home-group',
    color: '#193762',
    tags: ['Ownership', 'Principles', 'Foundation']
  },
  {
    year: 'Mission',
    title: 'A Dual Mission Emerges',
    description: 'Growing talent. Strengthening enterprises. We created an environment where young professionals could gain hands-on experience with real-world systems, while organizations gained access to enterprise-grade cybersecurity built on modern, cloud-native architectures.',
    icon: 'mdi-target',
    color: '#C4922C',
    tags: ['Talent Development', 'Enterprise Solutions', 'Dual Mission']
  },
  {
    year: 'Engineering',
    title: 'Engineering with Intent',
    description: 'Modern technology, practical security. Our solutions are grounded in object-oriented design principles, scalable architectures, and real operational needs—ensuring security frameworks that evolve with businesses, not against them.',
    icon: 'mdi-cog',
    color: '#193762',
    tags: ['Technology', 'Architecture', 'Design Principles']
  },
  {
    year: 'Today',
    title: 'Continuing the Journey',
    description: 'The same values, stronger execution. Today, eigenSecure continues to grow as a global, remote-first organization—helping enterprises take ownership of their security, governance, and resilience with clarity, confidence, and purpose.',
    icon: 'mdi-rocket-launch',
    color: '#C4922C',
    tags: ['Growth', 'Execution', 'Future']
  }
])

// Values - Now with 6 cards
const values = ref([
  {
    title: 'Ownership at the Core',
    description: 'Clients decide what their governance will look like — we provide the intelligence and tools to make it real. Every feature and workflow is designed to hand control back to the enterprise.',
    icon: 'mdi-shield-crown',
    color: '#193762',
    highlights: ['Client Empowerment', 'Control & Intelligence', 'Enterprise-First Design']
  },
  {
    title: 'People Over Positions',
    description: 'We hire for teams, not job titles. We look for curiosity, initiative, and potential rather than strict labels. If someone shows a hunger to learn and grow, we give them the ecosystem to thrive.',
    icon: 'mdi-account-group',
    color: '#f8fafc',
    highlights: ['Talent Focused', 'Growth Mindset', 'Potential Over Experience']
  },
  {
    title: 'Flexibility and Balance',
    description: 'As a remote-first company, we take work-life balance seriously. Our structure supports autonomy, asynchronous collaboration, and the understanding that human wellbeing is non-negotiable.',
    icon: 'mdi-calendar-heart',
    color: '#193762',
    highlights: ['Remote-First', 'Work-Life Balance', 'Autonomy & Trust']
  },
  {
    title: 'Commitment to Security & Ethics',
    description: 'Our approach combines engineering depth with a strong ethical framework. We align with leading global standards — ISO, NIST, SOC — ensuring everything we deliver meets strict security expectations.',
    icon: 'mdi-shield-check',
    color: '#f8fafc',
    highlights: ['Ethical Standards', 'Global Compliance', 'Security First']
  },
  {
    title: 'Engineering driven by Curiosity',
    description: 'Innovation is part of our routine. Every team member has access to the latest tech stack, opportunities to contribute to R&D, and real influence on deliverables.',
    icon: 'mdi-flask',
    color: '#193762',
    highlights: ['Innovation Culture', 'R&D Focus', 'Continuous Learning']
  },
  {
    title: 'Relentless Innovation',
    description: 'Innovation is embedded in how we think, design, and deliver. We continuously reimagine systems, refine intelligence, and create solutions that anticipate tomorrow\'s governance needs.',
    icon: 'mdi-lightbulb-group',
    color: '#f8fafc',
    highlights: ['Future-Ready', 'Continuous Improvement', 'Anticipatory Design']
  }
])

// Culture Pillars
const culturePillars = ref([
  {
    title: 'Agency',
    description: 'Everyone owns their work. Everyone has a voice. Everyone has the room to question, explore, and improve.',
    icon: 'mdi-account-tie',
    color: '#193762',
    examples: ['Ownership', 'Voice', 'Exploration', 'Improvement']
  },
  {
    title: 'Mentorship',
    description: 'Graduate Hires evolve into confident, industry-ready professionals through hands-on exposure, guidance from senior engineers, and opportunities that usually come much later.',
    icon: 'mdi-school',
    color: '#C4922C',
    examples: ['Hands-On Learning', 'Senior Guidance', 'Accelerated Growth', 'Real Projects']
  },
  {
    title: 'Kindness & Humanity',
    description: 'We believe in leadership that treats people as humans first. Compassion and clarity are part of our operating system.',
    icon: 'mdi-heart',
    color: '#193762',
    examples: ['Compassion', 'Clarity', 'Human-First', 'Respect']
  }
])

// Benefits
const benefits = ref([
  'Fully remote, flexible environment',
  'Supportive mentors and kind leadership',
  'Exposure to enterprise-level architectures',
  'Rich R&D culture with experiments',
  'Work-life balance anchored in trust',
  'Projects that matter — mission-critical and impactful'
])

// Pre-filled email template for joining
const joinMailtoLink = ref('mailto:careers@eigensecure.com?subject=Joining%20eigenSecure%20Team&body=Application%20for%20eigenSecure%20%0A%0AFull%20Name:%20_________%20%0AEmail%20Address:%20_________%20%0APhone%20Number:%20_________%20%0AArea%20of%20Expertise%20/%20Primary%20Skillset:%20_________%20%0AYears%20of%20Experience:%20_________%20%0ACurrent%20Role%20/%20Title:%20_________%20%0APortfolio%20or%20GitHub%20(optional):%20_________%20%0ANotice%20Period%20(if%20any):%20_________%20%0A%0AA%20brief%20note%20on%20why%20you%20want%20to%20join%20eigenSecure:%0A%0A___________________________________________________________%0A%0A___________________________________________________________%0A%0A%0APlease%20attach%20your%20resume%20to%20this%20email.%0A%0AThank%20you,%0A%5BYour%20Name%5D')

// Particle animation
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

// Dynamic timeline progress calculation
const calculateTimelineProgress = () => {
  if (!timelineContainer.value) return
  
  const container = timelineContainer.value
  const containerRect = container.getBoundingClientRect()
  const containerTop = containerRect.top + window.scrollY
  const containerBottom = containerTop + containerRect.height
  
  const scrollPosition = window.scrollY + window.innerHeight * 0.3
  const viewportHeight = window.innerHeight
  
  // Calculate progress based on scroll position
  if (scrollPosition < containerTop) {
    timelineProgress.value = 0
  } else if (scrollPosition > containerBottom) {
    timelineProgress.value = 100
  } else {
    const visibleHeight = scrollPosition - containerTop
    const totalHeight = containerRect.height
    timelineProgress.value = Math.min((visibleHeight / totalHeight) * 100, 100)
  }
  
  // Add active class to timeline items based on scroll position
  timelineRefs.value.forEach((item, index) => {
    if (item) {
      const itemRect = item.getBoundingClientRect()
      const itemTop = itemRect.top + window.scrollY
      
      if (scrollPosition > itemTop - viewportHeight * 0.2) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    }
  })
}

// Setup scroll listener
onMounted(() => {
  window.addEventListener('scroll', calculateTimelineProgress)
  window.addEventListener('resize', calculateTimelineProgress)
  // Initial calculation
  setTimeout(calculateTimelineProgress, 100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', calculateTimelineProgress)
  window.removeEventListener('resize', calculateTimelineProgress)
})
</script>

<style scoped>
/* HERO SECTION - UNIQUE FOR ABOUT US */
.hero-section {
  height: 70vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  background: #0B1C2D;
  display: flex;
  align-items: center;
}

/* Unique gradient for About page */
.about-gradient {
  background: linear-gradient(135deg, 
    #0B1C2D 0%, 
    #1a2f4a 30%, 
    #2a3f5a 70%, 
    #193762 100%) !important;
  opacity: 0.95;
}

/* Floating hexagons animation for About page */
.floating-hexagons {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.floating-hexagon {
  position: absolute;
  width: 80px;
  height: 90px;
  background: rgba(196, 146, 44, 0.1);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: floatHexagon 20s ease-in-out infinite;
  border: 1px solid rgba(196, 146, 44, 0.2);
}

.h1 {
  top: 15%;
  left: 5%;
  width: 60px;
  height: 68px;
  animation-delay: 0s;
}

.h2 {
  bottom: 20%;
  right: 8%;
  width: 100px;
  height: 113px;
  animation-delay: 2s;
  background: rgba(25, 55, 98, 0.15);
  border-color: rgba(25, 55, 98, 0.3);
}

.h3 {
  top: 40%;
  right: 15%;
  width: 40px;
  height: 45px;
  animation-delay: 4s;
}

.h4 {
  bottom: 30%;
  left: 10%;
  width: 70px;
  height: 79px;
  animation-delay: 6s;
  background: rgba(196, 146, 44, 0.08);
}

.h5 {
  top: 60%;
  left: 20%;
  width: 50px;
  height: 56px;
  animation-delay: 8s;
}

@keyframes floatHexagon {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translateY(-30px) rotate(10deg);
    opacity: 0.6;
  }
}

/* About badge */
.about-badge {
  display: inline-block;
}

.glow-chip {
  background: #C4922C !important;
  color: white !important;
  box-shadow: 0 0 30px rgba(196, 146, 44, 0.5);
  padding: 8px 16px !important;
  font-weight: 600;
}

/* About stats */
.about-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #C4922C;
  line-height: 1.2;
}

.stat-label {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* About title enhancements */
.about-title {
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
}

.accent-line {
  margin-top: 0.5rem;
}

.accent-text {
  color: #C4922C;
  display: inline-block;
  font-weight: 800;
}

/* Hero Background (keeping original) */
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
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.9);
}

/* OUR STORY SECTION */
.section-story {
  padding: 100px 0;
  background: white;
}

.story-intro-card {
  background: rgba(25, 55, 98, 0.03);
  border: 1px solid rgba(25, 55, 98, 0.1);
}

.story-intro-text {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #64748b;
  font-weight: 400;
}

/* TIMELINE - ENHANCED FOR TODAY */
.timeline-section {
  margin-top: 80px;
}

.timeline-title {
  font-size: 2.25rem;
  font-weight: 700;
  color: #0B1C2D;
  margin-bottom: 2rem;
}

.timeline-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

/* FIXED: Timeline line is BEHIND icons (lower z-index) */
.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: rgba(25, 55, 98, 0.1);
  transform: translateX(-50%);
  z-index: 0;
  overflow: hidden;
}

.timeline-progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: linear-gradient(to bottom, #193762, #C4922C);
  transition: height 0.3s ease;
  z-index: 0;
}

/* HEXAGON TIMELINE DOT - ENHANCED FOR TODAY */
.timeline-hexagon {
  position: absolute;
  left: 50%;
  top: 0;
  width: 56px;
  height: 56px;
  transform: translateX(-50%);
  z-index: 1000;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: white;
  border: 4px solid;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* TODAY HEXAGON SPECIAL EFFECTS */
.today-hexagon {
  width: 70px !important;
  height: 70px !important;
  border-width: 5px !important;
  border-color: #C4922C !important;
  animation: pulseHexagon 2s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(196, 146, 44, 0.6);
}

.today-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle at center, rgba(196, 146, 44, 0.4) 0%, rgba(196, 146, 44, 0) 70%);
  border-radius: 50%;
  z-index: -1;
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes pulseHexagon {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 30px rgba(196, 146, 44, 0.6);
  }
  50% {
    transform: translateX(-50%) scale(1.15);
    box-shadow: 0 0 50px rgba(196, 146, 44, 0.9);
  }
}

@keyframes glowPulse {
  0%, 100% {
    opacity: 0.6;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
}

.timeline-hexagon::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: white;
  z-index: 1;
}

.hexagon-inner {
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-item.active .timeline-hexagon {
  transform: translateX(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

.timeline-item.active .hexagon-inner {
  background: linear-gradient(135deg, var(--item-color, #193762), color-mix(in srgb, var(--item-color, #193762) 80%, white 20%));
}

.timeline-item {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  align-items: flex-start;
  opacity: 0.4;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.timeline-item.active {
  opacity: 1;
  transform: translateY(0);
}

.timeline-item.left {
  justify-content: flex-start;
  padding-right: calc(50% + 40px);
}

.timeline-item.right {
  justify-content: flex-end;
  padding-left: calc(50% + 40px);
}

/* TIMELINE CARD - ENHANCED FOR TODAY */
.timeline-card {
  width: 100%;
  max-width: 500px;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 6px 20px rgba(25, 55, 98, 0.08);
  border: 1px solid rgba(25, 55, 98, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* TODAY CARD SPECIAL EFFECTS */
.today-card {
  background: linear-gradient(135deg, #ffffff, #fef9e7) !important;
  border: 2px solid #C4922C !important;
  box-shadow: 0 10px 30px rgba(196, 146, 44, 0.2) !important;
  transform: scale(1.02);
  position: relative;
  overflow: hidden;
}

.today-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(196, 146, 44, 0.1) 50%,
    transparent 70%
  );
  animation: shine 3s ease-in-out infinite;
  z-index: 1;
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(45deg);
  }
}

.today-card.today-active {
  animation: cardPulse 2s ease-in-out infinite;
}

@keyframes cardPulse {
  0%, 100% {
    box-shadow: 0 10px 30px rgba(196, 146, 44, 0.2);
  }
  50% {
    box-shadow: 0 20px 50px rgba(196, 146, 44, 0.4);
  }
}

.today-year {
  color: #C4922C !important;
  font-size: 1.25rem !important;
  font-weight: 800 !important;
}

.today-title {
  color: #193762 !important;
  font-size: 1.75rem !important;
  background: linear-gradient(135deg, #193762, #C4922C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.future-element {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px dashed rgba(196, 146, 44, 0.3);
  color: #C4922C;
  font-weight: 600;
  font-size: 0.9rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #C4922C;
  border-radius: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
}

.timeline-card.hovered {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(25, 55, 98, 0.15);
  border-color: #C4922C;
}

.timeline-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #C4922C;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.timeline-card.hovered::before {
  opacity: 1;
}

.timeline-header {
  margin-bottom: 16px;
}

.timeline-year {
  font-size: 1.125rem;
  font-weight: 700;
  color: #193762;
  margin-bottom: 8px;
}

.timeline-card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0B1C2D;
  line-height: 1.3;
}

.timeline-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 16px;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* ===== FIXED VALUES SECTION - WITH GUARANTEED GOLD BORDERS ===== */
.section-values {
  padding: 100px 0;
  background: #f8fafc;
}

/* Common value card styles */
.value-card {
  transition: all 0.3s ease;
  position: relative;
  overflow: visible;
  border-radius: 12px !important;
}

/* Blue cards (dark background) */
.value-card[color="#193762"] {
  background: #193762 !important;
  border: 2px solid transparent !important;
  color: white;
}

.value-card[color="#193762"] .value-title,
.value-card[color="#193762"] .value-description,
.value-card[color="#193762"] .value-highlight {
  color: white;
}

.value-card[color="#193762"] .value-icon-wrapper {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.value-card[color="#193762"]:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2) !important;
  border-color: #C4922C !important;
}

.value-card[color="#193762"]:hover .value-icon-wrapper {
  background: rgba(255, 255, 255, 0.3);
}

/* Light cards with gold border ALWAYS VISIBLE */
.v-card.value-card[color="#f8fafc"] {
  background: #f8fafc !important;
  border: 2px solid #C4922C !important;
  border-color: #C4922C !important;
  border-style: solid !important;
  border-width: 2px !important;
  color: #193762;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(196, 146, 44, 0.15);
}

/* Extra specificity to ensure border shows */
.v-application .v-card.value-card[color="#f8fafc"] {
  border: 2px solid #C4922C !important;
}

/* Light card text colors */
.value-card[color="#f8fafc"] .value-title {
  color: #193762;
}

.value-card[color="#f8fafc"] .value-description {
  color: #64748b;
}

.value-card[color="#f8fafc"] .value-highlight {
  color: #193762;
}

/* Light card icon styles */
.value-card[color="#f8fafc"] .value-icon-wrapper {
  background: rgba(196, 146, 44, 0.1);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.value-card[color="#f8fafc"] .value-icon {
  color: #C4922C !important;
}

.value-card[color="#f8fafc"]:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(196, 146, 44, 0.3) !important;
  border-color: #C4922C !important;
}

.value-card[color="#f8fafc"]:hover .value-icon-wrapper {
  background: rgba(196, 146, 44, 0.2);
}

/* Common icon wrapper styles */
.value-icon-wrapper {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: all 0.3s ease;
}

/* Title styles */
.value-title {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
}

/* Description styles */
.value-description {
  font-size: 1rem;
  line-height: 1.6;
}

/* Highlights container */
.value-highlights {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Individual highlight items */
.value-highlight {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.value-highlight .v-icon {
  color: #C4922C !important;
  margin-right: 8px;
  flex-shrink: 0;
}

.value-highlight span {
  line-height: 1.4;
}

/* Animation delays for cards */
.delay-0 { animation-delay: 0.1s; }
.delay-1 { animation-delay: 0.2s; }
.delay-2 { animation-delay: 0.3s; }
.delay-3 { animation-delay: 0.4s; }
.delay-4 { animation-delay: 0.5s; }
.delay-5 { animation-delay: 0.6s; }

/* CULTURE SECTION */
.section-culture {
  padding: 100px 0;
  background: white;
}

.pillar-card {
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}

.pillar-card:hover {
  border-color: #C4922C;
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(196, 146, 44, 0.1) !important;
}

.pillar-number {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(25, 55, 98, 0.1);
  line-height: 1;
  position: absolute;
  top: 16px;
  right: 24px;
}

.pillar-icon-wrapper {
  display: flex;
  justify-content: center;
}

.pillar-icon-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.pillar-title {
  font-size: 1.375rem;
  font-weight: 600;
  color: #193762;
  line-height: 1.3;
}

.pillar-description {
  line-height: 1.6;
  font-size: 1rem;
  color: #64748b;
}

.pillar-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.testimonials-placeholder {
  background: rgba(25, 55, 98, 0.03);
  border: 2px dashed rgba(25, 55, 98, 0.2);
}

.placeholder-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #193762;
}

.placeholder-text {
  font-size: 1rem;
  color: #64748b;
  font-style: italic;
}

/* JOIN SECTION */
.section-join {
  padding: 100px 0;
  background: linear-gradient(135deg, #0B1C2D 0%, #193762 100%);
  color: white;
}

.join-title {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  color: white;
}

.join-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 600px;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.95);
}

.join-callout {
  font-size: 1.375rem;
  font-weight: 600;
  color: #C4922C;
  font-style: italic;
}

.join-form-card {
  background: white;
}

.form-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #193762;
}

.form-subtitle {
  font-size: 1rem;
  color: #64748b;
  margin-bottom: 24px;
}

.join-cta-btn {
  background: #193762 !important;
  color: white !important;
  font-weight: 600 !important;
  height: 56px !important;
  transition: all 0.3s ease !important;
}

.join-cta-btn:hover {
  background: #C4922C !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(196, 146, 44, 0.3) !important;
}

.note-text {
  font-size: 0.875rem;
  color: #64748b;
  font-style: italic;
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

.animate-card {
  animation: fadeUp 0.6s ease-out forwards;
  opacity: 0;
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
  
  .about-stats {
    gap: 20px;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
  
  .timeline-line {
    left: 32px;
  }
  
  .timeline-item.left,
  .timeline-item.right {
    padding: 0 0 0 80px;
    justify-content: flex-start;
  }
  
  .timeline-hexagon {
    left: 32px;
  }
  
  .today-hexagon {
    left: 32px !important;
    width: 60px !important;
    height: 60px !important;
  }
  
  .timeline-card {
    max-width: 100%;
  }
  
  .section-story,
  .section-values,
  .section-culture,
  .section-join {
    padding: 60px 0;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.125rem;
  }
  
  .about-stats {
    flex-wrap: wrap;
  }
  
  .timeline-title {
    font-size: 1.75rem;
  }
  
  .timeline-card-title {
    font-size: 1.25rem;
  }
  
  .today-title {
    font-size: 1.5rem !important;
  }
  
  .timeline-hexagon {
    width: 48px;
    height: 48px;
  }
  
  .today-hexagon {
    width: 55px !important;
    height: 55px !important;
  }
  
  .join-title {
    font-size: 2rem;
  }
  
  .benefit-item {
    font-size: 1rem;
  }
}

@media (max-width: 600px) {
  .hero-section {
    height: auto;
    min-height: auto;
    padding: 100px 0 60px;
  }
  
  .floating-hexagon {
    display: none;
  }
  
  .timeline-hexagon {
    width: 44px;
    height: 44px;
  }
  
  .today-hexagon {
    width: 50px !important;
    height: 50px !important;
  }
  
  .timeline-item {
    margin-bottom: 60px;
  }
  
  .timeline-card {
    padding: 20px;
  }
}

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .particle,
  .timeline-progress,
  .timeline-hexagon,
  .timeline-item,
  .timeline-card,
  .value-card,
  .pillar-card,
  .join-cta-btn,
  .animate-fade-up,
  .animate-card,
  .floating-hexagon,
  .today-hexagon,
  .today-glow,
  .today-card::after {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
  
  .timeline-progress {
    transition: none !important;
  }
}
</style>