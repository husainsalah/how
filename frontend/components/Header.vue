<template>
  <header
    class="fixed bg-[url(/assets/images/background.png)] z-50 h-32 inset-0 bg-black-200 flex justify-center"
  >
    <div class="container py-6 sm:px-6">
      <div class="flex justify-center justify-between gap-5">
       <!-- <NuxtLink class="flex items-center gap-2" to="/">
          <span class="text-2xl pl-2 font-semibold">
            {{ settings?.title }}
          </span>
        </NuxtLink>
      -->
        <nav>
          <div>
            <div  class="flex justify-center p-1">   
              <NuxtLink to="/"><img src="../assets/images/logo-header.png" class="hover:text-gray-400"></img></NuxtLink>
            </div>
            <div>
              <ul
            role="list"
            class="flex justify-center gap-4 md:gap-6 leading-5 text-white text-sm md:text-base tracking-tight font-normal"
          >
            
            <li>
              <NuxtLink to="/discog" class="uppercase hover:text-gray-400">Music</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/artist" class="uppercase hover:text-gray-400">Artists</NuxtLink>
            </li>
            
            <li>
              <NuxtLink to="/press" class="uppercase hover:text-gray-400">Press</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="uppercase hover:text-gray-400">Contact</NuxtLink>
            </li>
            
            <li>
              <a href="https://houseofwadjet.bandcamp.com" class="uppercase hover:text-gray-400" target="_blank">Merch</a>
            </li>
            
            
          </ul>
            </div>
          </div>
          
        </nav>
      </div>
    </div>
  </header>
</template>
