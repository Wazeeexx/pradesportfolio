<template>
   <div> 
    <navbar />
    <menubar /> 

    <section id="about" class="py-12">
      <h2 class="text-5xl font-bold font-poppins text-center mb-8 " style="font-family: 'Poppins';">About Me</h2>
      <div class="flex justify-center">
        <p class="text-3xl mb-4 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 text-center" style="font-family: 'Poppins';">
          Hi There! I'm Dave M. Prades, A Front-End Developer
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="flex justify-center sm:justify-end mb-6 sm:mb-0 mx-auto">
          <img class="w-48 sm:w-96 h-48 sm:h-96 shadow shadow-gray-400" src="@/assets/img/Dave2x2.png" />
        </div>
        <div class="flex items-center mx-auto">
          <p class="text-base sm:text-base lg:text-base text-justify px-6 py-6 sm:mx-auto" style="font-family: 'Poppins';">
            I'm a passionate front-end developer specializing in creating engaging user experiences. With expertise in HTML, CSS, and JavaScript,
            I transform design concepts into functional websites and applications. I prioritize clean and responsive code, using modern frameworks like Vue.js and Tailwind CSS.
            I am excited about the prospect of collaborating with you on your next project. By combining my technical proficiency, creativity, and dedication to user-centric design,
            I am confident that together we can create a remarkable digital solution. Thank you for considering me, and I look forward to the opportunity to contribute to the success of your project.
          </p>
        </div>
      </div>


    </section>
  </div>
  <footer class="bg-gray-800 text-white py-4 text-center w-screen" style="font-family: 'Poppins';">
          <p>© 2023 My Portfolio. All rights reserved.</p>
        </footer>
</template>

<script>
</script>

<style>
</style>