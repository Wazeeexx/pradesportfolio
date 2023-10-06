<template>
    <div>
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink v-if="!isIndexRoute" to="/" class="pt-6">
        <p class="text-2xl font-semibold text-white" style="font-family: 'Poppins';">Dave Prades</p>
      </NuxtLink>
    </div>
    <div class="dropdown">
      <button @click="toggleNavigation" class="p-2 mt-4 text-white fixed top-0 right-0 z-50 ml-6 md:hidden">
        <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#66fcf1" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Zm-1 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
        </svg>
      </button>
      <div :class="['dropdown-panel', showNavigation ? 'open' : '']">
        <span class="">
          <NuxtLink to="/#" a href="#" class="block text-white hover:text-blue-300 mt-8 ml-6" @click="closeNavigation">Home</NuxtLink>
          <NuxtLink to="/aboutme" a href="#about" class="block text-white mt-2 pt-2 ml-6 hover:text-blue-300" @click="closeNavigation">About</NuxtLink>
          <NuxtLink to="/education" a href="#education" class="block text-white mt-2 pt-2 ml-6 hover:text-blue-300">Education</NuxtLink>
          <NuxtLink to="/skills" a href="#skills" class="block text-white mt-2 pt-2 ml-6 hover:text-blue-300" @click="closeNavigation">Skills</NuxtLink>
          <NuxtLink to="/projects" a href="#projects" class="block text-white mt-2 pt-2 ml-6 hover:text-blue-300" @click="closeNavigation">Projects</NuxtLink>
          <NuxtLink to="/contact" a href="#contact" class="block text-white mt-2 pt-2 ml-6 hover:text-blue-300" @click="closeNavigation">Contact</NuxtLink>
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
      
      computed: {
    // Add a computed property to check if the current route is the index route
    isIndexRoute() {
      return this.$route.path === '/';
    },
  },
}
</script>
<style>
.dropdown-panel {
  position: fixed;
  top: 0;
  right: -200px; /* Initially hidden outside the viewport */
  width: 200px; /* Width of the panel */
  height: 100%;
  background-color: #000;
  transition: right 0.3s ease-in-out;
}

.dropdown-panel.open {
  right: 0; /* Slide the panel in */
}
</style>