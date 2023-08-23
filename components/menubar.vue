<template>
    <div>
        <div class="container mx-auto flex justify-between items-center">
          <NuxtLink to="/" class="block">
              <img class="w-20 h-20 md:w-18 md:h-18" src="@/assets/img/logo.png" alt="Logo">
          </NuxtLink>


          <NuxtLink to="/" class="text-white pt-6 transition hover:text-blue-300 hover:underline block">Home</NuxtLink>
 
                <nav class="hidden md:flex space-x-10 font-medium font-poppins pt-4">
                  <NuxtLink to="/#" a href="#" class="text-white pt-4 ml-4 transition hover:text-blue-300 hover:underline">Home</NuxtLink>
                  <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">About</NuxtLink>
                  <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">Education</NuxtLink>
                  <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline">Skills</NuxtLink>
                  <NuxtLink to="/projects" a href="#projects" class="text-w hite hover:text-blue-300 pt-6 hover:underline">Projects</NuxtLink>
                </nav>    
        </div>
        <div class="dropdown">
            <button v-on:click="showNavigation = !showNavigation" class="p-2 mt-4 text-white fixed top-0 right-0 z-50 ml-6 md:hidden">
            <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="currentColor" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Zm0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
            </svg>
            </button>
            <div v-if="showNavigation" class="flex items-center md:hidden bg-gray-800 space-y-4 font-medium font-poppins fixed top-0 right-0 w-full z-40 transform translate-y-0 transition-transform duration-300 ml-6 p-2" style="margin-top: 48px;">
                <span class="divide-y divide-slate-100">
                    <NuxtLink to="/#" a href="#" class="block text-white hover:text-blue-300 mt-8" @click="closeNavigation">Home</NuxtLink>
                    <NuxtLink to="/aboutme" a href="#about" class="block text-white mt-2 pt-2 hover:text-blue-300" @click="closeNavigation">About</NuxtLink>
                    <NuxtLink to="/education" a href="#education" class="block text-white mt-2 pt-2 hover:text-blue-300">Education</NuxtLink>
                    <NuxtLink to="/skills" a href="#skills" class="block text-white mt-2 pt-2 hover:text-blue-300" @click="closeNavigation">Skills</NuxtLink>
                    <NuxtLink to="/projects" a href="#projects" class="block text-white mt-2 pt-2 hover:text-blue-300" @click="closeNavigation">Projects</NuxtLink>
                    <NuxtLink to="/contact" a href="#contact" class="block text-white mt-2 pt-2 hover:text-blue-300" @click="closeNavigation">Contact</NuxtLink>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
          //burger icon
          data() {
            return {
            showNavigation: false
            };
        },
        methods: {
            closeNavigation() {
            this.showNavigation = false;
            }   
        },
      
      
        //make the burger icon close when clicking content
    data() {
        return {
          showNavigation: false
        };
      },
      methods: {
        toggleNavigation() {
          this.showNavigation = !this.showNavigation;
        },
        closeNavigation() {
          this.showNavigation = false; // Close the navigation
        }
      },
    
}
</script>
<style>

</style>