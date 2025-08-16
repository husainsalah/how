<script setup lang="ts">
import { postsQuery, settingsQuery } from "~/sanity/queries";
import type { PostsQueryResult, SettingsQueryResult } from "~/sanity/types";

const { data: posts } = await useSanityQuery<PostsQueryResult>(postsQuery);
const { data: settings } =
  await useSanityQuery<SettingsQueryResult>(settingsQuery);
import { ref } from 'vue'
import ResponsiveVideoList from '@/components/ResponsiveVideoList.vue'

// Define your playlist
const videoPlaylist = ref([
 /* {
    id: '1108175383',
    platform: 'vimeo',
    title: 'Insane Who Sane - Don\'t Leave Me',
    author: 'House of Wadjet Records',
    duration: 60 // in seconds
  },
*/
  {
    id: '1108175383',
    platform: 'vimeo',
    title: 'Insane Who Sane - Chase You (INDIO RMX)',
    author: 'House of Wadjet Records',
    duration: 60
  },
   {
    id: '1108186804',
    platform: 'vimeo',
    title: 'Insane Who Sane - Chase You (Original Mix)',
    author: 'House of Wadjet Records',
    duration: 60,
  },
  
  // Add more videos as needed
])

// Handle video change event
const handleVideoChange = (video) => {
  console.log('Video changed:', video)
}

useSiteMetadata({
  title: "House of Wadjet Records",
  description:
    "Ancient Future Music",
  ogImage: settings?.value?.ogImage || "",
});

usePageAnimation();
</script>

<template>
  <div class="relative">
    <div class="container relative">
       
      <div
        class="mx-auto xl:pt-10 pb-10 space-y-6 lg:px-12 flex flex-col items-center"
      >
      
      <div class="flex flex-col gap-4 items-center">
        
          <h1 animate-breath class=" text-2xl md:text-4xl animate-(--breath) text-white prose uppercase">
HOUSE OF <span class="neonText header1">WADJET</span>          </h1>
<h2 class="text-xl md:text-2xl text-white prose  font-weight-100 uppercase">
ANCIENT <span class="neonText header2">FUTURE</span> MUSIC</h2>
</div>
</div>
      </div>
    </div>
          
       <div class="relative">
    <div class="container relative max-w-40%">
      
         
      <center>
              <h2 class="text-lg md:text-lg text-white prose px-8 font-weight-100 uppercase">
          DON'T LEAVE ME EP [WDJT-003] <span class="text-base lowercase"> available now on - <a href="https://houseofwadjet.bandcamp.com" class="text-white text-sm lowercase hover:text-green-100">bandcamp</a></span></h2>
          <p class="px-8"></p>
        
         <div class="grid grid-cols-1 gap-8 p-8">
          <div class="justify-end">
          <img src="../assets/images/WDJT003.png" class="max-w-auto md:max-w-100"  />
          </div>
 
 <!--         <div class="">
              
           <ResponsiveVideo 
    videoId="1108175383" 
    platform="vimeo" 
    title=""
    :playlist="videoPlaylist"
    showPlaylist
    playlistTitle=""
    playlistLayout="grid"
    @videoChange="handleVideoChange"
  />
    </div>
    -->
          </div> 

        

          </center>
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