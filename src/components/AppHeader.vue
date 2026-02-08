<template>
  <header class="app-header">
    <!-- LOGO - Using original approach -->
    <div class="logo">
      <img 
        src="/EigenSecureLogo.png" 
        alt="eigenSecure logo" 
        class="logo-img"
      />
    </div>

    <!-- NAV - Fixed centering -->
    <nav class="nav">
      <v-fade-transition group>
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path"
          class="nav-link"
          v-ripple
        >
          <span class="nav-text">{{ item.label }}</span>
          <v-expand-transition>
            <div 
              v-if="$route.path === item.path" 
              class="nav-active-indicator"
            />
          </v-expand-transition>
        </router-link>
      </v-fade-transition>
    </nav>

    <!-- CTA -->
    <v-scale-transition>
      <v-btn
        class="cta"
        :href="demoMailTo"
        color="#D4AF37"
        size="default"
        rounded="lg"
        variant="flat"
      >
        <v-icon start size="small">mdi-calendar-star</v-icon>
        Book a Demo
      </v-btn>
    </v-scale-transition>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/product', label: 'Product' },
  { path: '/about', label: 'About' }
]

const demoMailTo = 'mailto:sales@eigensecure.com?subject=Request%20a%20Demo%20-%20eigenSecure'
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px; /* Reduced from 80px */
  background: white;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

/* LOGO - Fixed visibility */
.logo {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.logo-img {
  height: 68px; /* Slightly larger than original 36px */
  width: auto;
  display: block;
}

/* NAV - Fixed centering */
.nav {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 32px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #0B1C2D;
  font-weight: 500;
  padding: 8px 4px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-text {
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

.nav-link:hover .nav-text {
  color: #D4AF37;
  transform: translateY(-1px);
}

.nav-link.router-link-active .nav-text {
  color: #D4AF37;
  font-weight: 600;
}

.nav-active-indicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #D4AF37;
  border-radius: 2px 2px 0 0;
}

/* CTA Button */
.cta {
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.2);
}

.cta:hover {
  transform: translateY(-52%);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
}

/* Scale transition for CTA */
.v-scale-transition-enter-active,
.v-scale-transition-leave-active {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-scale-transition-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.v-scale-transition-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Ripple effect */
.v-ripple__animation {
  color: rgba(212, 175, 55, 0.2);
}

/* Ensure Vuetify transitions work */
:deep(.v-fade-transition-enter-active),
:deep(.v-fade-transition-leave-active) {
  transition: opacity 0.3s ease !important;
}

:deep(.v-fade-transition-enter-from),
:deep(.v-fade-transition-leave-to) {
  opacity: 0 !important;
}

/* Expand transition */
:deep(.v-expand-transition-enter-active),
:deep(.v-expand-transition-leave-active) {
  transition: all 0.3s ease !important;
}

:deep(.v-expand-transition-enter-from),
:deep(.v-expand-transition-leave-to) {
  opacity: 0;
  transform: scaleY(0);
}
</style>