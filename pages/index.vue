<template>
  <div class="bg-black">
     <menubar />
      <div class="h-screen" style="margin-left: 50px; margin-right: 50px;">
          <main class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 px-12">
              <!-- <div class="flex justify-center sm:justify-start items-center sm:mb-0 p-8 sm:pl-0 mt-12">
                <img class="w-48 h-48 sm:w-96 sm:h-96 rounded-full shadow shadow-gray mx-auto" src="@/assets/img/anime.png" />
              </div>
      -->
              <div class="flex-cols cols-span-2 flex-col sm:flex-row items-center flex justify-center sm:justify-between mt-36">
                <section id="home" class="mb-8 sm:mr-4">
                  <div class="mt-4">
                    <h2 class="text-xl md:text-4xl font-bold animated-heading mt-6 md:mt-12 mt-8 font-poppins" style="color: #66fcf1;">Welcome to My Portfolio!<span class="animate-waving-hand inline-block text-4xl">👋🏻</span> </h2>

                    <div class="mt-4 md:mt-8">
                      <div>
                        <h3 class="text-xl md:text-4xl text-white font-semibold font-poppins">Transforming Ideas Into <br class="md:hidden"> Functional Websites.</h3>
                      </div>
                    
                        <h1 class="text-lg md:text-3xl font-bold font-semibold font-poppins" style="color: #66fcf1; "  ref="typewriter" ><span class="cursor" ></span></h1>
                      
                      <nav class="hidden md:flex space-x-10 font-medium font-poppins mr-4">
                        <NuxtLink to="/#" href="#" class="text-white pt-6 transition underline underline-offset-8 custom-link">Home</NuxtLink>
                        <NuxtLink to="/aboutme" a href="#about" class="text-white pt-6 ml-4 underline underline-offset-8 custom-link">About</NuxtLink>
                        <NuxtLink to="/education" a href="#education" class="text-white pt-6 ml-4 underline underline-offset-8 custom-link">Education</NuxtLink>
                        <NuxtLink to="/skills" a href="#skills" class="text-white pt-6 underline underline-offset-8 custom-link">Skills</NuxtLink>
                        <NuxtLink to="/projects" a href="#projects" class="text-white pt-6 underline underline-offset-8 custom-link">Projects</NuxtLink>
                        <NuxtLink to="/contact" a href="#contact" class="text-white pt-6 underline underline-offset-8 custom-link">Contact</NuxtLink>
                      </nav>    
                    </div>
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
    const typewriterText = "Front-End Web Developer ";
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

.custom-link:hover {
    color: #66fcf1;
  }
    </style>
    