<template>
  <div> <menubar />
      <div class="w-screen h-screen bg-black
      ">

         <navbar />
                  <!-- <nav class="hidden md:flex space-x-10 font-medium font-poppins">
                    <Nuxtlink to="/#" a href="#" class="text-white pt-6 ml-4 transition hover:text-blue-300 hover:underline">Home</Nuxtlink>
                    <NuxtLink to="/aboutme" a href="#about" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">About</NuxtLink>
                    <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">Edu</NuxtLink>
                    <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline">Skills</NuxtLink>
                    <NuxtLink to="/projects" a href="#projects" class="text-w hite hover:text-blue-300 pt-6 hover:underline">Projects</NuxtLink>
                    <NuxtLink to="/contact" a href="#contact" class="text-white hover:text-blue-300 pt-6 hover:underline">Contact</NuxtLink>
                  </nav>     -->
          <main class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 px-12">
              <!-- <div class="flex justify-center sm:justify-start items-center sm:mb-0 p-8 sm:pl-0 mt-12">
                <img class="w-48 h-48 sm:w-96 sm:h-96 rounded-full shadow shadow-gray mx-auto" src="@/assets/img/anime.png" />
              </div>
      -->
              <div class="flex-cols cols-span-2 flex-col sm:flex-row items-center flex justify-center sm:justify-between mt-16">
                <section id="home" class="mb-8 sm:mr-4">
                  <div class="mt-4">
                    <h2 class="text-xl md:text-4xl font-bold animated-heading mt-6 md:mt-12 mt-8" style="font-family: 'Poppins'; color: #66fcf1;">Welcome to My Portfolio!<span class="animate-waving-hand inline-block text-4xl">👋🏻</span> </h2>

                    <div class="mt-4 md:mt-8">
                      <div>
                        <h3 class="text-xl md:text-4xl text-white font-semibold" style="font-family: 'Poppins';">Transforming Ideas Into <br class="md:hidden"> Functional Websites.</h3>
                      </div>
                    
                        <h1 class="text-lg md:text-3xl font-bold font-semibold font-poppins" style="font-family: 'Poppins';  color: #66fcf1; "  ref="typewriter" ><span class="cursor" ></span></h1>
                    
                      <nav class="hidden md:flex space-x-10 font-medium font-poppins mr-4">
                        <Nuxtlink to="/#" a href="#" class="text-white pt-6 transition hover:text-blue-300 underline underline-offset-8 ">Home</Nuxtlink>
                        <NuxtLink to="/aboutme" a href="#about" class="text-white pt-6 ml-4 hover:text-blue-300 underline underline-offset-8 ">About</NuxtLink>
                        <NuxtLink to="/education" a href="#education" class="text-white hover:text-blue-300 pt-6 ml-4  underline underline-offset-8 ">Education</NuxtLink>
                        <NuxtLink to="/skills" a href="#skills" class="text-white hover:text-blue-300 pt-6  underline underline-offset-8 ">Skills</NuxtLink>
                        <NuxtLink to="/projects" a href="#projects" class="text-white hover:text-blue-300 pt-6  underline underline-offset-8 ">Projects</NuxtLink>
                        <NuxtLink to="/contact" a href="#contact" class="text-white hover:text-blue-300 pt-6  underline underline-offset-8 ">Contact</NuxtLink>
                      </nav>    
                    </div>
                  </div>
      
                    <div class="mt-8">
                      <!-- gmail -->
                      <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" class="mt-2">
                        <button class="hover-red border border-gray-200 rounded-full p-2 hover:transform hover:scale-110 transition" style="background-color: #66fcf1;">
                          <!-- <span class="gmail-icon"></span> -->
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
                  <div class="flex flex-col items-center mt-6">
                    <a href="https://drive.google.com/drive/folders/1oSNrJauek5emIjKgUi377Bz-s5wM_2rP"  class="text-black-500 mr-60 inline-flex px-6 py-2 text-black rounded-lg mb-4 md:mb-18 font-bold hover:bg-gray-600"
                      style="font-family: 'Poppins'; background-color: #66fcf1;">Resume<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"/></svg>
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
        </div>
</template>
    
<script>

export default{
  //Type writer Effect in Front End Developer
  mounted() {
    const typewriterText = "Front-End Developer ";
    const typewriterDelay = 150; // Adjust the typing speed here
    const loopDelay = 200; // Delay before starting the typewriter loop

    function typeWriter(element, text, delay) {
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, delay);
        } else {
          setTimeout(() => {
            removeText(element, text, delay);
          }, loopDelay);
        }
      }
      type();
    }

    function removeText(element, text, delay) {
      let i = text.length;
      function remove() {
        if (i >= 0) {
          element.innerHTML = text.substring(0, i);
          i--;
          setTimeout(remove, delay);
        } else {
          typeWriter(element, typewriterText, delay);
        }
      }
      remove();
    }

    const typewriterElement = this.$refs.typewriter;
    typeWriter(typewriterElement, typewriterText, typewriterDelay);
  },


  data() {
    return {
      showNavigation: false
    };
  },
  methods: {
    toggleNavigation() {
      this.showNavigation = !this.showNavigation;
    },
    scrollToAbout() {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
      this.showNavigation = false; // Close the navigation after scrolling
    }
  },
  
  //burger icon
  data() {
    return {
      showNavigation: false, 
    };
  },

  methods: {
  closeNavigation() {
    this.showNavigation = false;
    }
  },
  //scroll down and up
  methods: {
    scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      element.scrollIntoView({ behavior: 'smooth' });
    },
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
  

};

</script>
    
    <style>
    .text-justify-mobile {
      text-align: justify;
    }

    .text-center-desktop {
      text-align: center;
    }

    .preserve-line-break {
      display: block; /* Ensure <br> behaves as a block element */
      content: ""; /* Hide the line break, but preserve its spacing */
    }

    @media (max-width: 640px) {
      .text-justify-mobile {
        text-align: justify;
        text-align-last: justify; /* Align the last line to justify as well */
        margin-right: 0; /* Remove right margin to ensure full width */
      }
    }

    html {
      scroll-behavior: smooth;
    }
    
    .font-poppins {
      /* Replace this with your custom font import or Google Fonts link */
      font-family: 'Poppins', sans-serif;
    }
    
    .hover-red svg path {
        fill: rgb(0, 0, 0);
        transition: fill 0.3s;
      }
    
      .hover-red:hover svg path {
        fill: red;
      }
    
      .zoom-image {
        transition: transform 0.3s;
      }
    
      .zoom-image:hover {
        transform: scale(1.2);
      }
      .zoom-image {
        transition: transform 0.3s;
      }
    
      .zoom-image:hover {
        transform: scale(1.2);
      }
      .zoom-image {
        transition: transform 0.3s;
      }
    
      .zoom-image:hover {
        transform: scale(1.2);
      }
    
      .hover-red:hover {
        color: rgb(73, 83, 255);
      }
      @keyframes fade-right {
        0% {
          opacity: 0;
          transform: translateX(50px);
        }
        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      .animated-fade-right {
        animation: fade-right 2.5s infinite;
      }
      
      .hover-red svg path {
          fill: rgb(0, 0, 0);
          transition: fill 0.3s;
        }
      
        .hover-red:hover svg path {
          fill: red;
        }
      
        .zoom-image {
          transition: transform 0.3s;
        }
      
        .zoom-image:hover {
          transform: scale(1.2);
        }
        .zoom-image {
          transition: transform 0.3s;
        }
      
        .zoom-image:hover {
          transform: scale(1.2);
        }
        .zoom-image {
          transition: transform 0.3s;
        }
      
        .zoom-image:hover {
          transform: scale(1.2);
        }
      
        .hover-red:hover {
          color: rgb(73, 83, 255);
        }
    
        .zoom-in {
      transition: transform 0.3s ease;
    }
    
    .zoom-in:hover {
      transform: scale(1.1);
    }
    @media (max-width: 767px) {
        .zoom-in {
          transition: none; /* Disable zoom effect on mobile */
        }
      }
    
    
      @keyframes fade-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 640px) {
        .flex {
          flex-direction: column;
          text-align: center;
        }
        .flex a {
          margin: 0.5rem 0;
        }
      }

      /* Mobile view */
    @media (max-width: 767px) {
      .contact-info-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .contact-info-container a {
        margin-top: 10px;
        margin-left: 0;
        margin-right: 0;
      }
    }

    
@keyframes waving {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-30deg);
  }
}

.animate-waving-hand {
  animation: waving 1s infinite;
}
    </style>
    