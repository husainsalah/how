<script lang="ts">
//import emailjs from '@emailjs/browser' // Correct import

export default defineComponent({
  setup() { },
  data() {
    return {
      formData: {
        from_name: '',
        reply_to: '',
        message: '',
        to_name: 'Hagi Craig'
      },
      showSuccess: false
    }
  },
  methods: {
    sendEmail() {
  /*    emailjs
        .sendForm('service_ywofrs7', 'template_vneyid5', this.$refs.form,
          'zs2hKXXZF72uoaetc' // Public key should be provided directly
        )
        .then(
          () => {
            console.log('SUCCESS!');
            this.showSuccess = true;
            // Reset form fields
            this.formData.from_name = '';
            this.formData.reply_to = '';
            this.formData.message = '';
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert("Email not sent! Error: " + error.text);
          },
        );
        */
    },
  },
})
</script>

<template>
  
    <div class="relative">
    <div class="container relative">
       
      <div
        class="mx-auto xl:pt-20 pb-30 space-y-6 lg:px-12 flex flex-col items-center"
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
            <label>Message</label>
            <textarea name="message" v-model="formData.message" cols="30" rows="5" placeholder="Message"></textarea>
            <input type="submit" value="Send" />
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
textarea {
  border: 1px solid #ccc;
  font-size: 1rem;
  padding: 6px 10px;
  border-radius: 4px;
  width: 100%;
  background-color: black;

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