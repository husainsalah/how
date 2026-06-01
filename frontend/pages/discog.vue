<script setup lang="ts">

useSiteMetadata({
  title: "Discography",
  description: "House of Wadjet, Ancient Future Music. All releases.",
});
</script>
<template>
    <div class="relative">
    <div class="container relative">
       
     <div
        class="mx-auto xl:pt-10 pb-10 space-y-6 lg:px-12 flex flex-col items-center md:space-y-6 space-y-2"
      >
        <div class="flex flex-col gap-4 items-center">
            <h1 animate-breath class=" text-2xl md:text-4xl animate-(--breath) text-white prose uppercase">
MUS<span class="neonText header1">I</span>C</h1>

<div class="flex">
<div class="grid grid-cols-1 md:grid-cols-2 mx-auto justify-center">
  <div class="p-8 md:p-8 p-4 flex flex-col justify-center items-center min-h-full">
    
    
        <h3 class="flex mx-auto mt-4 justify-center text-md uppercase text-white font-weight-100">
          WDJT-004 is coming soon
        </h3>
  </div>
  <div class="p-8 md:p-8 p-4">
     <p class="flex mx-auto justify-center text-sm md:text-base text-white prose font-weight-100 ">
          Insane Who Sane - Don't Leave Me EP [WDJT-003]
     </p>
    <iframe class="responsive-iframe" style="border: 0; width: 100%;" src="https://bandcamp.com/EmbeddedPlayer/album=3594966337/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="https://houseofwadjet.bandcamp.com/album/insane-who-sane-dont-leave-me-ep">Insane Who Sane - Don&#39;t Leave Me EP by Insane Who Sane</a></iframe>
    
  </div> 
 
  <div class="p-8 md:p-8 p-4">
    <p class="flex mx-auto justify-center text-sm md:text-base text-white prose font-weight-100 ">
       Insane Who Sane - Keep Pushin' Aun EP [WDJT-002]</p>
    <iframe class="responsive-iframe" style="border: 0; width: 100%;" src="https://bandcamp.com/EmbeddedPlayer/album=1155622392/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="https://houseofwadjet.bandcamp.com/album/keep-pushin-aun-ep">Keep Pushin Aun EP by Insane who sane Featuring DePeila</a></iframe>
   
    
  </div>
  <div class="p-8 md:p-8 p-4">
     <p class="flex mx-auto justify-center text-sm md:text-base text-white prose font-weight-100 ">
        Insane Who Sane - Come Back To Me EP [WDJT-001]</p>
   <iframe class="responsive-iframe" style="border: 0; width: 100%;" src="https://bandcamp.com/EmbeddedPlayer/album=1058989158/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/" seamless><a href="https://houseofwadjet.bandcamp.com/album/come-back-to-me-ep">Come Back to Me EP by Insane who Sane</a></iframe>
   
  </div>
</div>
  <!--
  <div class=" p-12 justify-center">
<p>
    Insane Who Sane Featuring DePeila <br /> Keep Pushin Aun [WDJT-002]
</p>

<iframe style="border: 0; width: 400px; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=1155622392/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="https://houseofwadjet.bandcamp.com/album/keep-pushin-aun-ep">Keep Pushin Aun EP by Insane who sane Featuring DePeila</a></iframe>    

</div>

<div class="p-12 justify-center">
<p >
    Insane Who Sane<br />Come Back to Me EP [WDJT-001]
</p>

<iframe style="border: 0; width: 400px; height: 307px;" src="https://bandcamp.com/EmbeddedPlayer/album=1058989158/size=large/bgcol=333333/linkcol=ffffff/artwork=small/transparent=true/" seamless><a href="https://houseofwadjet.bandcamp.com/album/come-back-to-me-ep">Come Back to Me EP by Insane who Sane</a></iframe>
  </div>      
  -->
    </div>
    </div>
    </div>


 

    </div>
    </div>
</template>
<style scoped>
img.record-image {
    width: auto; 
    height: auto;
    object-fit: contain;
}

/* Mobile responsive iframe */
.responsive-iframe {
    height: 33em; /* Default height */
}

/* Mobile-specific styles */
@media (max-width: 768px) {
    .responsive-iframe {
        height: 24em; /* Reduced height on mobile */
    }
    
    img.record-image {
        width: auto; 
        height: auto;
    }
}

/* Extra small mobile devices */
@media (max-width: 480px) {
    .responsive-iframe {
        height: 24em; /* Even smaller on very small screens */
    }
    
    img.record-image {
        width: auto !important; 
        height: auto !important;
    }
}

</style>