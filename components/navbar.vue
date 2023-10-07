<template>
  <nav class="navbar fixed top-0 w-full bg-black h-16 md:h-20">
   <div class="container mx-auto flex justify-between items-center">
     <NuxtLink to="/" class="pt-6">
       <p class="text-2xl font-semibold text-white" style="font-family: 'Poppins';">Dave Prades</p>
       <!-- <img class="w-14 h-14 md:w-18 md:h-18" src="@/assets/img/logo.png" alt="Logo"> -->
     </NuxtLink>
     
     <nav class="hidden md:flex space-x-10 font-medium font-poppins">
       <NuxtLink to="/#" a href="#" class="text-white pt-6 ml-4 transition hover:text-blue-300 hover:underline" style="color: #66fcf1;" >Home</NuxtLink>
       <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline" style="color: #66fcf1;">About</NuxtLink>
       <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline" style="color: #66fcf1;">Education</NuxtLink>
       <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Skills</NuxtLink>
       <NuxtLink to="/projects" a href="#projects" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Projects</NuxtLink>
       <NuxtLink to="/Contact" a href="#contact" class="text-white hover:text-blue-300 pt-6 hover:underline" style="color: #66fcf1;">Contact</NuxtLink>
     </nav>    
   </div>
   </nav>

</template>

<script>
export default {
 
}
</script>

<style>
 
</style>