<script setup lang="ts">
import { NuxtLink } from '#components';

useSiteMetadata({
  title: "Press",
  description: "House of Wadjet, Ancient Future Music. Press, Radio Play and more.",
});
</script>
<template>
    <div class="relative">
    <div class="container relative">
       
      <div
        class="mx-auto xl:pt-10 pb-10 space-y-6 lg:px-12 flex flex-col items-center"
      >
        <div class="flex flex-col gap-4 items-center">
            <h1 animate-breath class=" text-2xl md:text-4xl animate-(--breath) text-white prose uppercase">
                PR<span class="neonText header1">e</span>ss</h1>
       
       <h2>For password protected press page: <NuxtLink to="login" class="uppercase">click here</NuxtLink></h2>   
                <div class="flex">
       
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 justify-center">
  
    <div class="pb-6">
      <a href="https://5mag.net/calendar/festivals/post-disco-pre-techno-panel-movement-2025/"><img src="frontend/assets/images/discototechno.jpg"  class="press-image" /></a>
      <a href="https://5mag.net/calendar/festivals/post-disco-pre-techno-panel-movement-2025/">From Post-Disco to Pre-Techno: Movement week panel spotlights the emergence of techno in Detroit</a> 
      <br />
      <span class="text-sm">5Mag, Terry Mathew</span> <br /> 
      <span class="text-xs">May 19, 2025</span>
    </div>
  
  
    <div class="pb-6">
      <a href="https://worldwidefm.net/episode/brownswood-basement-gilles-peterson-89"><img src="frontend/assets/images/Brownswood-Basement-06-06-2024.webp" class="press-image" /></a>
      <a href="https://worldwidefm.net/episode/brownswood-basement-gilles-peterson-89">Gilles Peterson w/ Kiiōtō, Colleen 'Cosmo' Murphy, Rikki Stein & Mark Murphy</a> 
      <br />
      <span class="text-sm">Brownswood Basement by Giles Peterson</span> <br /> 
      <span class="text-xs">June 6, 2024</span>
    </div>
  
  
    <div class="pb-6">
      <a href="https://www.electronicaandroll.com/2023/07/insane-who-sane-hace-equipo-con-depelia.html"><img src="frontend/assets/images/Insane Who Sane.jpg"  class="press-image" /></a>
      <a href="https://www.electronicaandroll.com/2023/07/insane-who-sane-hace-equipo-con-depelia.html">Insane Who Sane hace equipo con DePeila en Keep Pushin Aun EP</a> 
      <br />
      <span class="text-sm">Electrónica & Roll, Sergio Bifeis</span> <br /> 
      <span class="text-xs">July 19, 2023</span>
    </div>
</div>
    
    </div>
    
    
    </div>
    </div>
    </div>
    </div>
</template>
<style scoped>
img.press-image {
    width: 60em; 
    height: 22em;
    object-fit: cover;
    background-color: black;
}
</style>