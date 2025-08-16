<template>
  <div class="page text-black font-sans">
    <section class="min-h-screen pt-24">
      <Header />
      <main class="mt-8 md:mt-4"><slot /></main>
      <Footer />
    </section>
  </div>
  <Toast />
</template>
<style>
@font-face {
  font-family: centuryGothic;
  src:  url('../assets/fonts/centurygothic.ttf');
}
@font-face {
  font-family: centuryGothic;
  src:  url('../assets/fonts/centurygothic_bold.ttf');
  font-weight: bold;
}
.page{
  background-image: url('../assets/images/background-logo-3.png'),url('../assets/images/background.png');
  background-position: center center , center center;
  background-size: auto, auto;
  
  background-repeat: no-repeat, repeat;
  font-family:centuryGothic;
  color: #FFF;
}
</style>