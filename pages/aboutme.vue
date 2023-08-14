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
  <section id="about" class="grid grid-cols py-24">
    <h2 class="text-5xl font-bold font-poppins text-center mb-8 " style="font-family: 'Poppins';">About Me</h2>
    <div class="flex justify-center">
      <p class="text-3xl mb-4 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 text-center" style="font-family: 'Poppins';">
        Hi There! I'm Dave M. Prades, A Front-End Developer
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="flex justify-center sm:justify-start mb-6 sm:mb-0 mx-auto">
        <img class="w-48 sm:w-96 h-48 sm:h-96 border border-gray-400 rounded-full shadow shadow-gray hover:transform hover:scale-110 transition" src="@/assets/img/Dave2x2.png" />
      </div>

      <div class="mx-auto my-4 py-10 px-4 sm:px-0">
          <p class="text-base sm:text-base lg:text-base text-justify text-center border border-gray-300 rounded-lg px-6 py-6 animate__animated animate__slideInUp" style="font-family: 'Poppins';">
          I'm a passionate front-end developer specializing in creating engaging user experiences. With expertise in HTML, CSS, and JavaScript,
          I transform design concepts into functional websites and applications. I prioritize clean and responsive code, using modern frameworks like Vue.js and Tailwind CSS.
          I am excited about the prospect of collaborating with you on your next project. By combining my technical proficiency, creativity, and dedication to user-centric design,
          I am confident that together we can create a remarkable digital solution. Thank you for considering me, and I look forward to the opportunity to contribute to the success of your project.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style>
</style>