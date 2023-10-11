<template>
  <nav class="navbar fixed top-0 w-full bg-black h-16 md:h-20">
  <div class="container mx-auto flex justify-between items-center">
    <NuxtLink to="/">
      <div class="flex items-center">
        <!-- Always display the logo -->
        <img class="w-14 h-14 md:w-18 md:h-18 ml-32 mt-2" src="@/assets/img/logo.png" alt="Logo">
      </div>
    </NuxtLink>
    <nav class="hidden md:flex space-x-10 font-medium font-poppins mr-36">
      <NuxtLink to="/#" a href="#" class="text-white pt-6 transition hover:text-blue-300 hover:underline" style="color: #66fcf1;">Home</NuxtLink>
      <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">About</NuxtLink>
      <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Education</NuxtLink>
      <!-- <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Skills</NuxtLink> -->
      <NuxtLink to="/projects" a href="#projects" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Projects</NuxtLink>
      <NuxtLink to="/Contact" a href="#contact" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Contact</NuxtLink>
    </nav>
  </div>
</nav>

  <!-- <div class="">
    <nav class="navbar fixed top-0 w-full bg-black h-16 md:h-20">
        <NuxtLink to="/" class="flex justify-start md:flex md:items-center pt-2 ml-4">
          <img class="w-14 h-14 md:w-18 md:h-18" src="@/assets/img/logo.png" alt="Logo">
        </NuxtLink>
      <div class="container mx-auto flex justify-between items-center">
        <nav class="hidden navbar md:flex space-x-10 font-medium font-poppins items-center">
          <NuxtLink to="/#" a href="#" class="text-white pt-6 transition hover:text-blue-300 hover:underline" style="color: #66fcf1;">Home</NuxtLink>
          <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">About</NuxtLink>
          <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Education</NuxtLink>
          <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Skills</NuxtLink>
          <NuxtLink to="/projects" a href="#projects" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Projects</NuxtLink>
          <NuxtLink to="/Contact" a href="#contact" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Contact</NuxtLink>
        </nav>
      </div>
    </nav>
  </div> -->
</template>

<script>
export default {
 
}
</script>

<style>
 
</style>

<!-- <div class="container mx-auto flex justify-between items-center">
  <NuxtLink to="/">
    <div class="flex items-start">
      <img class="w-14 h-14 md:w-18 md:h-18 md:block" src="@/assets/img/logo.png" alt="Logo">
    </div>
  </NuxtLink>
  <nav class="hidden md:flex space-x-10 font-medium font-poppins items-center">
    <NuxtLink to="/#" a href="#" class="text-white pt-6 transition hover:text-blue-300 hover:underline" style="color: #66fcf1;">Home</NuxtLink>
    <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">About</NuxtLink>
    <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Education</NuxtLink>
    <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Skills</NuxtLink>
    <NuxtLink to="/projects" a href="#projects" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Projects</NuxtLink>
    <NuxtLink to="/Contact" a href="#contact" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Contact</NuxtLink>
  </nav>
</div>
</nav> -->