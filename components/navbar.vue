<template>
     <nav class="navbar fixed top-0 w-full bg-gray-800 h-16 md:h-20">
      <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl sm:text-2xl font-bold text-center text-white w-full sm:w-auto py-2 px-4 sm:px-0 mt-4" style="font-family: 'Poppins';">
            Dave Prades
          </h1>   
        <nav class="hidden md:flex space-x-10 font-medium font-poppins">
          <NuxtLink to="/#" a href="#" class="text-white pt-6 ml-4 transition hover:text-blue-300 hover:underline">Home</NuxtLink>
          <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">About</NuxtLink>
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