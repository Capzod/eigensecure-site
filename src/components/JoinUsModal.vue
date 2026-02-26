<template>
  <v-dialog 
    v-model="show" 
    max-width="700px" 
    persistent
    @click:outside="closeModal"
    :fullscreen="mobile"
    transition="dialog-transition"
  >
    <!-- Center the modal vertically -->
    <v-card 
      class="join-modal mx-auto" 
      rounded="xl" 
      elevation="24"
      :class="{ 'mobile-modal': mobile }"
    >
      <!-- Loading Overlay -->
      <v-overlay
        :model-value="loading"
        class="align-center justify-center"
        persistent
        scrim="black"
      >
        <v-progress-circular
          size="64"
          color="#C4922C"
          indeterminate
        ></v-progress-circular>
        <p class="text-white mt-4">Submitting your application...</p>
      </v-overlay>

      <!-- Modal Header with centered close button -->
      <v-card-title class="modal-header d-flex align-center justify-space-between">
        <div class="header-content">
          <h2 class="modal-title">Join Us 🚀</h2>
          <p class="modal-subtitle">Become part of the eigenSecure team</p>
        </div>
        <v-btn
          icon
          variant="text"
          @click="closeModal"
          class="close-btn"
          :disabled="loading"
          size="small"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-divider></v-divider>

      <!-- Form Body -->
      <v-card-text class="modal-body">
        <v-form ref="formRef" v-model="valid" @submit.prevent="handleSubmit">
          <v-row>
            <!-- Full Name -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.fullName"
                :rules="[rules.required]"
                label="Full Name"
                placeholder="John Doe"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-account"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-text-field>
            </v-col>

            <!-- Email -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="Email"
                placeholder="john@example.com"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-email"
                type="email"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-text-field>
            </v-col>

            <!-- Phone -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.phone"
                :rules="[rules.required, rules.phone]"
                label="Phone"
                placeholder="+1 (555) 123-4567"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-phone"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-text-field>
            </v-col>

            <!-- Current Role -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.currentRole"
                :rules="[rules.required]"
                label="Current Role"
                placeholder="Security Analyst"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-badge-account"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-text-field>
            </v-col>

            <!-- Expertise -->
            <v-col cols="12" md="6">
              <v-select
                v-model="form.expertise"
                :items="expertiseOptions"
                :rules="[rules.required]"
                label="Expertise"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-brain"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-select>
            </v-col>

            <!-- Experience -->
            <v-col cols="12" md="6">
              <v-select
                v-model="form.experience"
                :items="experienceOptions"
                :rules="[rules.required]"
                label="Experience"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-timeline-clock"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-select>
            </v-col>

            <!-- Portfolio -->
            <v-col cols="12" md="6">
              <v-text-field
                v-model="form.portfolio"
                label="Portfolio/GitHub (optional)"
                placeholder="github.com/username"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-github"
                hide-details="auto"
                class="rectangle-field"
              ></v-text-field>
            </v-col>

            <!-- Notice Period -->
            <v-col cols="12" md="6">
              <v-select
                v-model="form.noticePeriod"
                :items="noticeOptions"
                :rules="[rules.required]"
                label="Notice Period"
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-calendar-clock"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-select>
            </v-col>

            <!-- Why Join Note -->
            <v-col cols="12">
              <v-textarea
                v-model="form.note"
                :rules="[rules.required]"
                label="Why join eigenSecure?"
                placeholder="I'm passionate about security governance because..."
                variant="outlined"
                density="comfortable"
                prepend-inner-icon="mdi-text-box"
                rows="3"
                required
                hide-details="auto"
                class="rectangle-field"
              ></v-textarea>
            </v-col>

            <!-- CV Upload -->
            <v-col cols="12">
              <v-file-input
                v-model="form.cv"
                :rules="[rules.required, rules.fileSize, rules.fileType]"
                label="Upload Resume"
                accept=".pdf,.doc,.docx"
                prepend-inner-icon="mdi-file-pdf-box"
                variant="outlined"
                density="comfortable"
                class="rectangle-field"
                required
                show-size
                :error-messages="cvError"
              >
                <template v-slot:selection="{ fileNames }">
                  <template v-for="fileName in fileNames" :key="fileName">
                    <v-chip
                      size="small"
                      color="#193762"
                      class="mr-2"
                    >
                      {{ fileName }}
                    </v-chip>
                  </template>
                </template>
              </v-file-input>
              <div class="file-hint mt-1">
                <v-icon size="small" color="#C4922C">mdi-information</v-icon>
                <span class="ml-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</span>
              </div>
            </v-col>
          </v-row>

          <!-- Form Actions -->
          <v-card-actions class="form-actions">
            <v-btn
              variant="text"
              size="large"
              @click="closeModal"
              :disabled="loading"
              class="cancel-btn"
            >
              Cancel
            </v-btn>
            
            <v-btn
              type="submit"
              size="large"
              :loading="loading"
              :disabled="!valid || loading"
              class="submit-btn"
            >
              <v-icon start>mdi-send</v-icon>
              Submit Application
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- Success Snackbar -->
    <v-snackbar
      v-model="showSuccess"
      :timeout="3000"
      color="success"
      location="center"
      max-width="400px"
      class="success-snackbar"
      content-class="centered-snackbar"
    >
      <div class="d-flex align-center">
        <v-icon start color="white">mdi-check-circle</v-icon>
        <span class="ml-2">Application Sent Successfully! We'll get in touch with you soon! 🎉</span>
      </div>
    </v-snackbar>
  </v-dialog>
</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue'
import { useDisplay } from 'vuetify'
import axios from 'axios'

const props = defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

// Get display info for responsive
const { mobile } = useDisplay()

const show = ref(props.modelValue)
const valid = ref(false)
const loading = ref(false)
const showSuccess = ref(false)
const formRef = ref(null)
const cvError = ref('')

watch(() => props.modelValue, (newVal) => {
  show.value = newVal
})

watch(show, (newVal) => {
  emit('update:modelValue', newVal)
})

// Form data
const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  expertise: null,
  experience: null,
  currentRole: '',
  portfolio: '',
  noticePeriod: null,
  note: '',
  cv: null
})

// Validation rules
const rules = {
  required: v => !!v || 'This field is required',
  email: v => /.+@.+\..+/.test(v) || 'Please enter a valid email',
  phone: v => /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/.test(v) || 'Please enter a valid phone number',
  fileSize: (v) => {
    if (!v) return true
    const file = Array.isArray(v) ? v[0] : v
    if (!file) return true
    return file.size <= 5 * 1024 * 1024 || 'File size must be less than 5MB'
  },
  fileType: (v) => {
    if (!v) return true
    const file = Array.isArray(v) ? v[0] : v
    if (!file) return true
    const allowedTypes = ['application/pdf', 'application/msword', 
                         'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    return allowedTypes.includes(file.type) || 'Only PDF and Word documents are allowed'
  }
}

// Dropdown options
const expertiseOptions = [
  'Security Governance',
  'Risk Management',
  'Compliance (ISO/NIST)',
  'Identity & Access Management (IAM)',
  'Incident Response',
  'Security Architecture',
  'DevSecOps',
  'Penetration Testing',
  'Security Auditing',
  'BCP/DR Planning',
  'Security Consulting',
  'Other'
]

const experienceOptions = [
  'Fresher',
  '1-2 Years',
  '3-5 Years',
  '5-8 Years',
  '8-12 Years',
  '12+ Years'
]

const noticeOptions = [
  'Immediate',
  '15 Days',
  '30 Days',
  '45 Days',
  '60 Days',
  '90 Days'
]

// Close modal
const closeModal = () => {
  if (!loading.value) {
    show.value = false
    // Reset form after modal closes
    setTimeout(() => {
      if (formRef.value) {
        formRef.value.reset()
      }
    }, 300)
  }
}

// Handle form submission
const handleSubmit = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true

  try {
    // Handle CV file - v-file-input can return array or single file
    const cvFile = Array.isArray(form.cv) ? form.cv[0] : form.cv
    
    if (!cvFile) {
      cvError.value = 'Please upload your resume'
      loading.value = false
      return
    }

    const formData = new FormData()
    
    // Append all form fields
    formData.append("fullName", form.fullName)
    formData.append("email", form.email)
    formData.append("phone", form.phone)
    formData.append("expertise", form.expertise)
    formData.append("experience", form.experience)
    formData.append("currentRole", form.currentRole)
    formData.append("portfolio", form.portfolio || '')
    formData.append("noticePeriod", form.noticePeriod)
    formData.append("note", form.note)
    formData.append("cv", cvFile)

    await axios.post(
      "/api/join-us",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    )

    showSuccess.value = true
    loading.value = false
    
    // Close modal after success message
    setTimeout(() => {
      closeModal()
    }, 1500)

  } catch (err) {
    console.error(err)
    alert("Submission failed. Please try again.")
    loading.value = false
  }
}
</script>

<style scoped>
/* Dialog positioning */
:deep(.v-overlay__content) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.join-modal {
  background: white;
  border-radius: 24px !important;
  overflow: hidden;
  animation: slideIn 0.3s ease-out;
  width: 100%;
  margin: 16px;
}

/* Mobile modal */
.mobile-modal {
  margin: 0;
  border-radius: 0 !important;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Modal Header */
.modal-header {
  padding: 24px 24px 16px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(25, 55, 98, 0.1);
  min-height: auto !important;
  flex: 0 0 auto;
}

.header-content {
  flex: 1;
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: #193762;
  margin: 0;
  line-height: 1.2;
}

.modal-subtitle {
  color: #64748b;
  margin: 4px 0 0 0;
  font-size: 0.95rem;
}

.close-btn {
  color: #64748b;
  transition: all 0.3s ease;
  margin: -4px -8px 0 0;
  flex-shrink: 0;
}

.close-btn:hover {
  color: #193762;
  background: rgba(25, 55, 98, 0.05);
  transform: rotate(90deg);
}

/* Form Body */
.modal-body {
  padding: 24px !important;
  max-height: calc(80vh - 130px);
  overflow-y: auto;
  flex: 1 1 auto;
}

/* For mobile, take more height */
.mobile-modal .modal-body {
  max-height: calc(100vh - 140px);
}

/* Rectangle field styling */
.rectangle-field :deep(.v-field) {
  border-radius: 0px !important;
  transition: all 0.3s ease;
}

.rectangle-field :deep(.v-field--variant-outlined .v-field__outline__start),
.rectangle-field :deep(.v-field--variant-outlined .v-field__outline__end) {
  border-radius: 0px !important;
}

.rectangle-field :deep(.v-field--variant-outlined .v-field__outline) {
  border-radius: 0px !important;
}

.rectangle-field :deep(.v-field--focused) {
  border-color: #C4922C !important;
}

.rectangle-field :deep(.v-field--focused .v-field__outline) {
  color: #C4922C !important;
  border-width: 2px;
}

.rectangle-field :deep(.v-field:hover) {
  background: rgba(196, 146, 44, 0.02);
}

.rectangle-field :deep(.v-label) {
  color: #64748b;
  font-weight: 500;
}

.rectangle-field :deep(.v-field--focused .v-label) {
  color: #C4922C !important;
}

/* File input hint */
.file-hint {
  font-size: 0.85rem;
  color: #64748b;
  display: flex;
  align-items: center;
}

/* Custom scrollbar */
.modal-body::-webkit-scrollbar {
  width: 6px;
}

.modal-body::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: #C4922C;
  border-radius: 10px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: #193762;
}

/* Form Actions */
.form-actions {
  padding: 20px 0 0 !important;
  gap: 16px;
  border-top: 2px solid rgba(25, 55, 98, 0.1);
  margin-top: 20px;
  flex: 0 0 auto;
}

.cancel-btn {
  color: #64748b !important;
  font-weight: 600;
  flex: 1;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;
}

.cancel-btn:hover {
  background: rgba(100, 116, 139, 0.1) !important;
  color: #193762 !important;
  transform: translateY(-2px);
}

.submit-btn {
  background: #193762 !important;
  color: white !important;
  font-weight: 600 !important;
  flex: 2;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 4px 12px rgba(25, 55, 98, 0.3) !important;
}

.submit-btn:hover {
  background: #C4922C !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 20px rgba(196, 146, 44, 0.4) !important;
}

.submit-btn:disabled {
  opacity: 0.6;
  transform: none !important;
  box-shadow: none !important;
}

/* Success Snackbar - Middle of Screen */
.success-snackbar {
  z-index: 9999 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

:deep(.v-snackbar__wrapper) {
  background: linear-gradient(135deg, #4caf50, #45a049) !important;
  font-weight: 500;
  border-radius: 50px !important;
  min-width: 400px;
  max-width: 90vw;
  box-shadow: 0 4px 20px rgba(76, 175, 80, 0.4) !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: fixed !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  margin: 0 auto;
  pointer-events: auto;
  animation: popIn 0.3s ease-out;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

:deep(.v-snackbar__content) {
  padding: 16px 28px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
}

/* For mobile screens */
@media (max-width: 600px) {
  :deep(.v-snackbar__wrapper) {
    min-width: auto;
    width: calc(100% - 32px);
    max-width: calc(100% - 32px);
    top: 50% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) !important;
  }
  
  :deep(.v-snackbar__content) {
    padding: 12px 20px !important;
    font-size: 1rem;
  }
}

/* Loading overlay */
:deep(.v-overlay__scrim) {
  opacity: 0.8 !important;
  backdrop-filter: blur(3px);
}

:deep(.v-overlay .v-progress-circular) {
  margin-bottom: 16px;
}

/* Responsive */
@media (max-width: 600px) {
  .modal-header {
    padding: 20px 20px 12px;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
  
  .modal-subtitle {
    font-size: 0.9rem;
  }
  
  .modal-body {
    padding: 20px !important;
  }
  
  .form-actions {
    flex-direction: column-reverse;
    gap: 12px;
  }
  
  .cancel-btn,
  .submit-btn {
    width: 100%;
    flex: none;
  }
  
  :deep(.v-snackbar__wrapper) {
    min-width: 90vw !important;
    margin: 0 16px;
  }
}

@media (max-width: 480px) {
  .modal-title {
    font-size: 1.35rem;
  }
  
  .modal-body {
    padding: 16px !important;
  }
  
  .rectangle-field :deep(.v-field__input) {
    font-size: 0.95rem;
  }
}

/* Animation for form fields */
.rectangle-field {
  animation: fadeIn 0.5s ease-out;
  animation-fill-mode: both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger animation for fields */
v-col:nth-child(1) .rectangle-field { animation-delay: 0.05s; }
v-col:nth-child(2) .rectangle-field { animation-delay: 0.1s; }
v-col:nth-child(3) .rectangle-field { animation-delay: 0.15s; }
v-col:nth-child(4) .rectangle-field { animation-delay: 0.2s; }
v-col:nth-child(5) .rectangle-field { animation-delay: 0.25s; }
v-col:nth-child(6) .rectangle-field { animation-delay: 0.3s; }
v-col:nth-child(7) .rectangle-field { animation-delay: 0.35s; }
v-col:nth-child(8) .rectangle-field { animation-delay: 0.4s; }
v-col:nth-child(9) .rectangle-field { animation-delay: 0.45s; }
v-col:nth-child(10) .rectangle-field { animation-delay: 0.5s; }

/* Reduce motion */
@media (prefers-reduced-motion: reduce) {
  .join-modal,
  .close-btn,
  .submit-btn,
  .cancel-btn,
  .rectangle-field {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
</style>