<template>
   <div class="bg-black"> 
    <navbar />
    <menubar /> 

    <section id="about" class="py-12" style="margin-left: 40px; margin-right: 40px;">
      <h2 class="text-5xl font-bold font-poppins text-center mb-8" style="font-family: 'Poppins'; color: #66fcf1;">About Me</h2>
        <div class="flex justify-center">
          <p id="typewriter-text" class="text-3xl mb-4 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-white text-center font-mono" style="font-family: 'Poppins';"></p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="flex justify-center sm:justify-end mb-6 sm:mb-0 mx-auto">
            <img class="w-48 sm:w-96 h-48 sm:h-96 rounded-lg shadow shadow-gray-400" src="@/assets/img/Dave2x2.png" />
          </div>
          
          <div class="flex items-center mx-auto">
            <div class="text-base sm:text-base lg:text-base text-justify px-6 py-6 sm:mx-auto text-white mx-0 sm:mx-auto" style="font-family: 'Poppins';">
              I'm a passionate front-end developer specializing in creating engaging user experiences. With expertise in HTML, CSS, and JavaScript,
              I transform design concepts into functional websites and applications. I prioritize clean and responsive code, using modern frameworks like Vue.js and Tailwind CSS.
              I am excited about the prospect of collaborating with you on your next project. By combining my technical proficiency, creativity, and dedication to user-centric design,
              I am confident that together we can create a remarkable digital solution. Thank you for considering me, and I look forward to the opportunity to contribute to the success of your project.<br>
            
            <div class="mt-6">
              <!-- gmail -->
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" class="mt-2">
                <button class="hover-red border border-gray-200 rounded-full p-2 hover:transform hover:scale-110 transition" style="background-color: #66fcf1;">
                  <span class="gmail-icon"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="black" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/>
                    </svg>
                </button>
              </a> 

              <!-- linkedin -->
            <a href="https://www.linkedin.com/in/dave-prades-b6200221a/" target="_blank" class="ml-2 mt-2">
                <button class="hover-red border border-gray-200 rounded-full p-2 ml-2 hover:transform hover:scale-110 transition" style="background-color: #66fcf1;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="black" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
                  </svg>
                </button>
              </a> 
              <!-- github -->
              <a href="https://github.com/Wazeeexx" target="_blank" class="ml-2 mt-2">
                <button class="hover-red border border-gray-200 rounded-full p-2 ml-2 hover:transform hover:scale-110 transition" style="background-color: #66fcf1;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="gray" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                  </svg>
                </button>
              </a>
              <!-- instagram -->
              <a href="https://www.instagram.com/davexxprds/" target="_blank" class="ml-2 mt-2">
                <button class="hover-red border border-gray-200 rounded-full p-2 ml-2 hover:transform hover:scale-110 transition" style="background-color: #66fcf1;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="black" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                  </svg>
                </button>
              </a>

              <!-- facebook -->
              <a href="https://www.facebook.com/dave.prades.5/" target="_blank" class="ml-2 mt-2 ">
                <button class="hover-red border border-gray-200 rounded-full p-2 ml-2 hover:transform hover:scale-110 transition" style="background-color: #66fcf1;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="gray" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                  </svg>
                </button>
              </a>
            </div>
            <div class="mt-6">
                <a href="https://drive.google.com/drive/folders/1oSNrJauek5emIjKgUi377Bz-s5wM_2rP"  class="text-black-500 mr-60 inline-flex px-6 py-2 text-black rounded-lg mb-4 md:mb-18 font-bold hover:bg-gray-600"
                  style="font-family: 'Poppins'; background-color: #66fcf1;">Resume<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"/></svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <Footer />
</template>
<script>
export default {
  mounted() {
    const textElement = document.getElementById("typewriter-text");
    const text = "Hi There! I'm Dave M. Prades, A Front-End Developer.";

    const type = () => {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index <= text.length) {
          textElement.textContent = text.substr(0, index);
          index++;
        } else {
          clearInterval(typeInterval);
          erase();
        }
      }, 100); // Adjust the delay to control typing speed
    };

    const erase = () => {
      let index = text.length;
      const eraseInterval = setInterval(() => {
        if (index >= 0) {
          textElement.textContent = text.substr(0, index);
          index--;
        } else {
          clearInterval(eraseInterval);
          type(); // Restart the typing loop
        }
      }, 100); // Adjust the delay to control erasing speed
    };

    type();
  },
};
</script>

<style>
.font-poppins {
    font-family: 'Poppins';
  }

</style>