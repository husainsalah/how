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
        class="mx-auto xl:pt-10 pb-10 space-y-6 lg:px-12 flex flex-col items-center"
      >
        <div class="flex flex-col gap-4 items-center">
            <h1 animate-breath class=" text-2xl md:text-4xl animate-(--breath) text-white prose uppercase">
                Art<span class="neonText header1">i</span>sts</h1>
        <div class="flex">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-12 justify-center">
  <div class="pb-6">
      <NuxtLink to="insane-who-sane" class="flex mx-auto justify-center"><img src="frontend/assets/images/husain_color-037.jpg" class="artist-image"  /></NuxtLink>
      <NuxtLink to="insane-who-sane" class="flex mx-auto justify-center">Insane Who Sane</NuxtLink>
    </div>
     <div class="pb-6">
      <a href="https://johnbeltranmusic.bandcamp.com/music"><img src="frontend/assets/images/john-beltran.webp"  class="artist-image" /></a>
      <a href="https://johnbeltranmusic.bandcamp.com/music" class="flex mx-auto justify-center">Indio (John Beltran)</a>
    </div>
    <div class="pb-6">
      <a href="https://bevlove.bandcamp.com/album/bevlove-gocray"><img src="frontend/assets/images/BevLove.webp"  class="artist-image" /></a>
      <a href="https://bevlove.bandcamp.com/album/bevlove-gocray" class="flex mx-auto justify-center">BevLove</a>
    </div>
   
    
    <div class="pb-6">
      <img src="frontend/assets/images/Depeila.jpg"  class="artist-image" />
      <span class="flex mx-auto justify-center">DePeila</span>
    </div>
    <div class="pb-6">
      <a href="https://reggiedokes.bandcamp.com/"><img src="frontend/assets/images/Reggie_Dokes_.png"  class="artist-image" /></a>
      <a href="https://reggiedokes.bandcamp.com/" class="flex mx-auto justify-center">Reggie Dokes</a>
    </div>
    <div class="pb-6">
      <a href="https://kennyhooper313.bandcamp.com/music"><img src="frontend/assets/images/Kenny-Hooper-Detroit-Orbiter.jpg"  class="artist-image" /></a>
      <a href="https://kennyhooper313.bandcamp.com/music" class="flex mx-auto justify-center" >Kenny Hooper</a>
    </div>




</div>
    
    </div>
    </div>
    </div>
    </div>
    </div>
</template>
<style scoped>
img.artist-image {
    width: 60em; 
    height: 22em;
    object-fit: cover;
    background-color: black;
}
</style>