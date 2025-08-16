<script lang="ts" setup>
const currentYear = new Date().getFullYear();
</script>
<template>
  <footer>
    <div class="container">
      <div class="text-gray-600 uppercase mx-auto justify-center py-8 text-xs">
        <center>
          Copyright © {{ currentYear }} House of Wadjet Records
        </center>
      </div>
    </div>
  </footer>
</template>
