<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer>
    <div class="container">
      <div class="text-gray-600 uppercase flex flex-col justify-center py-8 text-xs lg:flex-row">
        Copyright © {{ currentYear }} House of Wadjet Records
      </div>
    </div>
  </footer>
</template>
