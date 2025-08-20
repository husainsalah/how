<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer>
    <div class="container">
      <div class="flex text-gray-600 uppercase mx-auto justify-center bottom-0 py-8 text-xs">
        
          Copyright © {{ currentYear }} House of Wadjet Records
        
      </div>
    </div>
  </footer>
</template>
