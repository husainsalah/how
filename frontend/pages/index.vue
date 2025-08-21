<script setup lang="ts">
/*
import { settingsQuery } from "~/sanity/queries";
import type { SettingsQueryResult } from "~/sanity/types";

const { data: settings } =
  await useSanityQuery<SettingsQueryResult>(settingsQuery);

*/
useSiteMetadata({
  title: "House of Wadjet Records",
  description:
    "Ancient Future Music",
//  ogImage: settings?.value?.ogImage || "",
});

usePageAnimation();
</script>
<template>
  <div class="relative">
    <div class="container relative"> 
      <div class="mx-auto xl:pt-10 pb-10 space-y-6 lg:px-12 flex flex-col items-center">
        <div class="flex flex-col gap-4 items-center">
          <h1 animate-breath class=" text-2xl md:text-4xl animate-(--breath) text-white prose uppercase">HOUSE OF 
            <span class="neonText header1">WADJET</span>          
          </h1>
          <h2 class="text-xl md:text-2xl text-white prose  font-weight-100 uppercase">ANCIENT 
            <span class="neonText header2">FUTURE</span> MUSIC
          </h2>
        </div>
      </div>
    </div>
  </div>       
  <div class="relative">
    <div class="container relative">
      <div class="grid mx-auto justify-center">
        <!--
        <h2 class="flex mx-auto justify-center text-lg md:text-lg text-white prose px-8 font-weight-100 uppercase">
          <a href="https://houseofwadjet.bandcamp.com" class="no-underline text-white hover:text-gray-400">DON'T LEAVE ME EP [WDJT-003]</a> 
        </h2>
        -->
        <h2 class="flex mx-auto justify-center text-lg md:text-lg text-white prose px-8 font-weight-100 uppercase">
          DON'T LEAVE ME EP [WDJT-003] Sept 30, 2025
        </h2>
        <div class="grid grid-cols-1 p-8">
          <div class="justify-end">
            <a href="https://houseofwadjet.bandcamp.com" class="no-underline text-white hover:text-gray-400">
              <img src="../assets/images/WDJT003.png" class="flex mx-auto justify-center max-w-auto md:max-w-100"  />
            </a>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>
<style>
.header2{
    animation: flicker 4s infinite alternate;     
}
.header1{
    animation: flicker 8s infinite alternate;     
}

.neonText {
  color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #006f60,
      0 0 82px #006f60,
      0 0 92px #006f60,
      0 0 102px #006f60,
      0 0 151px #006f60;
}

@keyframes flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #006f60,
      0 0 80px #006f60,
      0 0 90px #006f60,
      0 0 100px #006f60,
      0 0 150px #006f60;
  }
  20%, 24%, 55%, 67%, 79%, 91% {       
    text-shadow: none;
  }
}
</style>