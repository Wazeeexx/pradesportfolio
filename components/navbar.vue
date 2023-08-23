<template>
     <nav class="navbar fixed top-0 w-full bg-gray-800 h-16 md:h-20">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="block">
          <img class="w-20 h-20 md:w-18 md:h-18" src="@/assets/img/logo.png" alt="Logo">
        </NuxtLink>

  
        <nav class="hidden md:flex space-x-10 font-medium font-poppins mb-4">
          <NuxtLink to="/#" a href="#" class="text-white pt-6 ml-4 transition hover:text-blue-300 hover:underline">Home</NuxtLink>
          <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">About</NuxtLink>
          <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">Education</NuxtLink>
          <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline">Skills</NuxtLink>
          <NuxtLink to="/projects" a href="#projects" class="text-white hover:text-blue-300 pt-6 hover:underline">Projects</NuxtLink>
          <NuxtLink to="/Contact" a href="#contact" class="text-white hover:text-blue-300 pt-6 hover:underline">Contact</NuxtLink>
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