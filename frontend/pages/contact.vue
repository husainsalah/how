<script lang="ts">
import emailjs from '@emailjs/browser'

export default defineComponent({
  setup() { },
  data() {
    return {
      formData: {
        from_name: '',
        reply_to: '',
        title: 'House of Wadjet inquiry',
        message: '',
        to_name: 'insane who sane'
      },
      showSuccess: false,
      isSubmitting: false
    }
  },
  mounted() {
    // Initialize EmailJS with your public key
    emailjs.init('CygEfhM_VBDEiqfeq') // You'll need to replace this with your actual EmailJS public key
  },
  methods: {
    async sendEmail() {
      if (this.isSubmitting) return
      
      // Validate form fields
      if (!this.formData.from_name.trim() || !this.formData.reply_to.trim() || !this.formData.title.trim() || !this.formData.message.trim()) {
        alert('Please fill in all fields before sending.')
        return
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.formData.reply_to)) {
        alert('Please enter a valid email address.')
        return
      }
      
      this.isSubmitting = true
      
      try {
        const templateParams = {
          to_name: 'Husain Salah',
          from_name: this.formData.from_name,
          reply_to: this.formData.reply_to,
          title: this.formData.title,
          message: this.formData.message,
          to_email: 'husain.salah@gmail.com',
          user_email: this.formData.reply_to,
          user_name: this.formData.from_name,
          user_title: this.formData.title,
          user_message: this.formData.message,
          // Standard EmailJS variables
          name: this.formData.from_name,
          email: this.formData.reply_to,
          subject: this.formData.title,
          content: this.formData.message
        }

        // Send email using EmailJS
        console.log('Sending email with params:', templateParams)
        const response = await emailjs.send(
          'service_5i0lj5q', // Replace with your EmailJS service ID
          'template_mopudua', // Replace with your EmailJS template ID
          templateParams
        )

        if (response.status === 200) {
          this.showSuccess = true
          // Reset form
          this.formData.from_name = ''
          this.formData.reply_to = ''
          this.formData.title = 'House of Wadjet inquiry'
          this.formData.message = ''
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.showSuccess = false
          }, 5000)
        }
      } catch (error: any) {
        console.error('Error sending email:', error)
        
        // More specific error handling
        if (error.status === 400) {
          alert('Bad request - please check your EmailJS configuration')
        } else if (error.status === 422) {
          alert('Template validation failed - please check your template variables')
        } else {
          alert('There was an error sending your email. Please try again.')
        }
      } finally {
        this.isSubmitting = false
      }
    },
  },
})
</script>

<template>
  
    <div class="relative">
    <div class="container relative">
       
      <div
        class="mx-auto xl:pt-10 pb-10 space-y-6 lg:px-12 flex flex-col items-center"
      >
    <div class="">
            <h1 animate-breath class=" text-2xl md:text-4xl animate-(--breath) text-white prose uppercase">
                CONT<span class="neonText header1">A</span>CT</h1>
        
    </div>    
    <div class="px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
    
    <div>
        
        <div class="note">
          Reach out to House of Wadjet and Insane Who Sane here. Inquiries, collaborations and genuine connections are all welcome!
          <div class="success-note" v-if="showSuccess">
            Thank you for your email. We will be in touch with you soon.
          </div>
          <form ref="form" @submit.prevent="sendEmail">
            <NInput type="hidden" name="to_name" v-model="formData.to_name" />
            <label>Name</label>
            <input type="text" name="from_name" v-model="formData.from_name" placeholder="Your Name" />
            <label>Email</label>
            <input type="email" name="reply_to" v-model="formData.reply_to" placeholder="Your Email" />
            <label>Inquiry Type</label>
            <select name="title" v-model="formData.title" class="form-select">
              <option value="House of Wadjet inquiry">House of Wadjet inquiry</option>
              <option value="Insane Who Sane inquiry">Insane Who Sane inquiry</option>
            </select>
            <label>Message</label>
            <textarea name="message" v-model="formData.message" cols="30" rows="5" placeholder="Message"></textarea>
            <input type="submit" :value="isSubmitting ? 'Sending...' : 'Send'" :disabled="isSubmitting" />
          </form>
        </div>
    </div>
    <div>
        <h1 class="text-md !important mt-10">Distribution</h1>
        <div class="note">
          For distribution contact normtalley at gmail dot com
        </div>
        <h1 class="text-md !important mt-10">Press Contact</h1>
        <div class="note">
          If you would like to reach out for press related matters contact h at vhe dot art.
        </div>
    </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style>
.note {
  margin-top: 2%;
  margin-bottom: 0;
  text-align: left;
  font-size: 1rem;
  font-weight: 100;
}

h1 {
  
  font-weight: 100;
  margin-bottom: 0rem;
  text-align: center;
  text-transform: uppercase;
}

.success-note {
  background-color: rgba(0, 128, 0, 0.2);
  color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 4px;
}

.form-fields {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 4px;
  font-weight: 100;
  font-size: 1rem;
}

input[type='text'],
input[type='email'],
textarea,
select {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
  width: 100%;
  background-color: black;
  color: white;
}

input[type='submit'] {
  background-color: rgb(0 0 0);
  color: white;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px 12px;
  font-weight: 100;
  cursor: pointer;
}

input[type='submit']:hover {
  background-color: #333;
}
</style>