<template>
  <div class="login-container">
    <div class="grid login-form mt-10 mx-auto justify-center">
      <h1>Protected Area</h1>
      
      <div class="flex mx-auto justify-center">
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            id="password"
            v-model="password"
            type="password"
            :disabled="loading"
            placeholder="Enter password"
            required
          />
        </div>
        
        <button type="submit" :disabled="loading">
          {{ loading ? 'Authenticating...' : 'Login' }}
        </button>
        
        <div v-if="error" class="error">
          {{ error }}
        </div>
      </form>
      </div>
    </div>
  </div>
</template>

<script setup>

const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  loading.value = true
  error.value = ''
  
  try {
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: { password: password.value }
    })
    
    // Redirect to intended page or home
    const redirect = useRoute().query.redirect || '/protected'
    await navigateTo(redirect)
  } catch (err) {
    error.value = 'Invalid password. Please try again.'
  } finally {
    loading.value = false
  }
}

</script>

