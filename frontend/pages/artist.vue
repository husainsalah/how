<script setup lang="ts">
import { NuxtImg } from '#components';


useSiteMetadata({
  title: "Artists",
  description: "House of Wadjet, Ancient Future Music. Arists and Collaborators.",
});
</script>
<template>
    <div class="relative">
    <div class="container relative">
       
      <div
        class="mx-auto xl:pt-20 pb-30 space-y-6 lg:px-12 flex flex-col items-center"
      >
        <div class="flex flex-col gap-4 items-center">
            <h1 animate-breath class=" text-2xl md:text-4xl animate-(--breath) text-white prose uppercase">
                Art<span class="neonText header1">i</span>sts & Collaborators</h1>
        <div class="flex">
<div class="grid grid-cols-3 gap-8 p-12 justify-center">
  <div class="pb-6">
      <img src="frontend/assets/images/husain_color-037.jpg" style="width: 300px; height: 300px;object-fit: contain;background-color: black;" />
      <a>Insane Who Sane</a>
    </div>
     <div class="pb-6">
      <img src="frontend/assets/images/john-beltran.webp" style="width: 300px; height: 300px; object-fit: cover;" />
      <a>Indio AKA John Beltran</a>
    </div>
    <div class="pb-6">
      <img src="frontend/assets/images/BevLove.webp" style="width: 300px; height: 300px; object-fit: cover;" />
      <a>Bev Love</a>
    </div>
   
    
    <div class="pb-6">
      <img src="frontend/assets/images/Depeila.jpg" style="width: 300px; height: 300px; object-fit: cover;" />
      <a>DePeila</a>
    </div>
    <div class="pb-6">
      <img src="frontend/assets/images/Reggie_Dokes_.png" style="width: 300px; height: 300px; object-fit: cover;" />
      <a>Reggie Dokes</a>
    </div>
    <div class="pb-6">
      <img src="frontend/assets/images/Kenny-Hooper-Detroit-Orbiter.jpg" style="width: 300px; height: 300px; object-fit: contain;background-color: black;" />
      <a>Kenny Hooper</a>
    </div>




</div>
    
    </div>
    </div>
    </div>
    </div>
    </div>
</template>
