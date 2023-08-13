<template>
    <div>
      <div class="w-screen h-screen bg-gray-900">
        <header class="bg-gray-800 text-white py-6 flex justify-left">
          <nav class="navbar fixed top-0 w-full bg-gray-800 h-16 md:h-20">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-xl sm:text-2xl font-bold text-center w-full sm:w-auto py-2 px-4 sm:px-0 mt-4" style="font-family: 'Poppins';">
                  Dave Prades
                </h1>   
              <nav class="hidden md:flex space-x-10 font-medium font-poppins">
                <a href="#" class="text-white pt-6 ml-4 transition hover:text-blue-300 hover:underline">Home</a>
                <a href="#about" class="text-white hover:text-blue-300 pt-6 ml-4 hover:underline">About</a>
                <a href="#skills" class="text-white hover:text-blue-300 pt-6 hover:underline">Skills</a>
                <a href="#projects" class="text-w hite hover:text-blue-300 pt-6 hover:underline">Projects</a>
                <a href="#contact" class="text-white hover:text-blue-300 pt-6 hover:underline">Contact</a>
              </nav>    
            </div>
        
            <div class="relative md:hidden right-0">
              <div class="dropdown">
                <button v-on:click="showNavigation = !showNavigation" class="p-2 mt-4 text-white fixed top-0 right-0 z-50 ml-6">
                  <svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2h-17Zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Zm0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                  </svg>
                </button>
                <div v-if="showNavigation" class="md:hidden bg-gray-800 p-4 space-y-4 font-medium font-poppins fixed top-0 right-0 w-full z-40 transform translate-y-0 transition-transform duration-300 ml-6" style="margin-top: 48px;">
                  <a href="#" class="block text-white hover:text-blue-300 mt-20" @click="closeNavigation">Home</a>
                    <hr class="border-gray-300 mt-2">
                  <a href="#about" class="block text-white hover:text-blue-300" @click="closeNavigation">About</a>
                    <hr class="border-gray-300 mt-2">
                  <a href="#skills" class="block text-white hover:text-blue-300" @click="closeNavigation">Skills</a>
                    <hr class="border-gray-300 mt-2">
                  <a href="#projects" class="block text-white hover:text-blue-300" @click="closeNavigation">Projects</a>
                    <hr class="border-gray-300 mt-2">
                  <a href="#contact" class="block text-white hover:text-blue-300" @click="closeNavigation">Contact</a>
                    <hr class="border-gray-100">
                </div>
              </div>
            </div>  
          </nav>

        </header>
    
        <main class="container mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex justify-center sm:justify-start items-center sm:mb-0 p-8 sm:pl-0 mt-12">
              <img class="w-48 h-48 sm:w-96 sm:h-96 rounded-full shadow shadow-gray mx-auto" src="@/assets/picture/anime.png" />
            </div>
    
            <div class="flex-cols cols-span-2 flex-col sm:flex-row items-center flex justify-center sm:justify-between">
              <section id="home" class="mb-8 sm:mr-4">
                <div class="mt-4">
                  <h2 class="text-xl md:text-4xl text-white font-bold animated-heading mt-6 md:mt-12" style="font-family: 'Poppins';">Welcome to My Portfolio!<span class="animate-waving-hand">👋🏻</span> </h2>
                  <div class="mt-4 md:mt-8">
                    <div>
                      <h3 class="text-xl md:text-4xl text-white font-bold text-gray-800" style="font-family: 'Poppins';">Transforming Ideas Into <br class="md:hidden"> Functional Websites.</h3>
                    </div>
                    <div>
                      <h1 class="text-lg md:text-3xl font-bold text-blue-600 font-semibold font-poppins" ref="typewriter"><span class="cursor"></span></h1>

                    </div>
                  </div>
                </div>
    
                  <div class="mt-8">
                    <!-- gmail -->
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" class="ml-2 mt-2">
                      <button class="hover-red border border-gray-200 rounded-full bg-gray-500 p-2 hover:transform hover:scale-110 transition">
                        <!-- <span class="gmail-icon"></span> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="black" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/>
                          </svg>
                      </button>
                    </a>
    
                    <!-- linkedin -->
                    <a href="https://www.linkedin.com/in/dave-prades-b6200221a/" target="_blank" class="ml-2 mt-2">
                      <button class="hover-red border border-gray-200 rounded-full bg-gray-500 p-2 ml-2 hover:transform hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="black" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
                        </svg>
                      </button>
                    </a>
                    <!-- github -->
                    <a href="https://github.com/Wazeeexx" target="_blank" class="ml-2 mt-2">
                      <button class="hover-red border border-gray-200 rounded-full bg-gray-500 p-2 ml-2 hover:transform hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="gray" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
                        </svg>
                      </button>
                    </a>
                    <!-- instagram -->
                    <a href="https://www.instagram.com/davexxprds/" target="_blank" class="ml-2 mt-2">
                      <button class="hover-red border border-gray-200 rounded-full bg-gray-500 p-2 ml-2 hover:transform hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="black" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/>
                        </svg>
                      </button>
                    </a>

                    <!-- facebook -->
                    <a href="https://www.facebook.com/dave.prades.5/" target="_blank" class="ml-2 mt-2 ">
                      <button class="hover-red border border-gray-200 rounded-full bg-gray-500 p-2 ml-2 hover:transform hover:scale-110 transition ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path fill="gray" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
                        </svg>
                      </button>
                    </a>
                </div>
             
                    <div class="flex flex-col items-center mt-6 ">
                      <a href="https://drive.google.com/drive/folders/1oSNrJauek5emIjKgUi377Bz-s5wM_2rP"  class="text-black-500 mr-60 inline-flex px-6 py-2 bg-gray-500 text-black rounded-lg border border-gray-200 mb-4 md:mb-18 font-bold hover:transform hover:scale-110 transition"
                        style="font-family: 'Poppins';">Resume<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"/></svg>
                      </a>
                    </div>
              </section>
            </div>
        </div>
    
          <div class="border-t-2 border-gray-600 mt-10 "></div>
          
          <div>
            <div id="about" class="grid grid-cols mt-24 mb-8">
              <h2 class="text-4xl font-bold font-poppins text-center mb-8 " style="font-family: 'Poppins';">About Me</h2>
              <div class="flex justify-center">
                <p class="text-3xl mb-4 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 text-center" style="font-family: 'Poppins';">
                  Hi There! I'm Dave M. Prades, A Front-End Developer
                </p>
              </div>
          
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex justify-center sm:justify-start mb-6 sm:mb-0 mx-auto">
                  <img class="w-48 sm:w-96 h-48 sm:h-96 border border-gray-400 rounded-full shadow shadow-gray" src="@/assets/picture/Dave2x2.png" />
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
            </div>
    
            <div id="skills" class="grid grid-cols mt-20">
              <h2 class="text-4xl font-bold font-poppins text-center mb-4" style="font-family: 'Poppins';">Skills</h2>
              <div class="flex justify-center">
                <p class="text-3xl mb-4 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 text-center" style="font-family: 'Poppins';">
                  Expertise To Help Bring Your Ideas To Life
                </p>
              </div>
            </div>
    
            <div class="flex justify-center items-center">
                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex justify-center">
                      <button class="col-span-1 md:col-span-2 lg:col-span-1">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">
                          <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                              <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"/>
                                <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/>
                                <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"/>
                                <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"/>
                            </svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm hover-red" style="font-family: 'Poppins';">HTML</span>
                          </div>
                        </a>
    
                      </button>
    
                      <button class="col-span-1 md:col-span-2 lg:col-span-1">
                        <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"/><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/>
                            <path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"/><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"/>
                            <path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"/><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"/></svg>
                          <span class="p-2 text-sm md:text-base lg:text-sm" style="font-family: 'Poppins';">CSS</span>
                        </div>
                      </button>
    
                      <button class="col-span-1 md:col-span-2 lg:col-span-1">
                        <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128">
                              <path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"/>
                              <path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"/>
                              <path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"/>
                            </svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm" style="font-family: 'Poppins';">Vue.js</span>
                          </div>
                      </button>
    
                      <button class="col-span-1 md:col-span-2 lg:col-span-1">
                          <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#00DC82" d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.374 12.374 0 0 0 4.554-4.515a12.236 12.236 0 0 0-.006-12.332l-46.185-79.286a12.388 12.388 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.388 12.388 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.386 12.386 0 0 0-4.555-4.513a12.536 12.536 0 0 0-12.444 0a12.391 12.391 0 0 0-4.555 4.513L36.67 170.834a12.245 12.245 0 0 0-1.67 6.165c0 2.165.573 4.292 1.665 6.167a12.374 12.374 0 0 0 4.554 4.515a12.513 12.513 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16l-11.293 19.356Zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86Z"/></g></svg>
                              <span class="p-2 text-sm md:text-base lg:text-sm" style="font-family: 'Poppins';">Nuxt.js</span>
                            </div>
                      </button>
    
                    <button class="col-span-1 md:col-span-2 lg:col-span-1">
                      <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 384"><path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"/><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"/><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"/><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"/><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"/></svg>
                          <span class="p-2 text-sm md:text-base lg:text-sm" style="font-family: 'Poppins';">Figma</span>
                        </div>
                    </button>
    
                    <button class="col-span-1 md:col-span-2 lg:col-span-1">
                      <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/></svg>
                          <span class="p-2 text-sm md:text-base lg:text-sm" style="font-family: 'Poppins';">Tailwind CSS</span>
                        </div>
                    </button>
    
                    <button class="col-span-1 md:col-span-2 lg:col-span-1">
                      <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="" height="256" fill="#F0DB4F" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg>
                          <span class="p-2 text-sm md:text-base lg:text-sm" style="font-family: 'Poppins';">JavaScript</span>
                        </div>
                    </button>
    
                    <button class="col-span-1 md:col-span-2 lg:col-span-1">
                      <div class="rounded-lg px-2 py-4 flex items-center zoom-in">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><circle cx="16" cy="15.974" r="2.5" fill="#00d8ff"/><path fill="#00d8ff" d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"/><path fill="#00d8ff" d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"/><path fill="#00d8ff" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"/></svg>
                        <span class="p-2 text-sm md:text-base lg:text-sm" style="font-family: 'Poppins';">ReactJs</span>
                      </div>
                    </button>
                </div>
              </div>
    
            <div class="container mx-auto mt-12 p-4 text-center md:text-left md:flex md:items-center md:justify-center">
                <p class="text-3xl font-semibold md:ml-12 text-gray-600" style="font-family: 'Poppins';">I am currently mastering
                  <br>these technologies.</p>
                <span class="ml-0 md:ml-4 border-md"></span>
                <h1 class="mt-6 md:mt-0 md:ml-10" style="font-family: 'Poppins';">The two most popular stacks in the field of
                  <br>Web Development the MERN(<span class="font-semibold">MongoDB, Express JS, React and Node JS</span>)
                  <br>and WAMP(<span class="font-semibold">Windows, Apache, MySQL, and PHP</span>) stacks</h1>
           </div>
    
            <section id="projects" class="mt-24 mb-8 w-screen ml-0">
              <h2 class="text-4xl font-bold text-center" style="font-family: 'Poppins';">My Projects</h2>
              <div class="flex flex-col sm:flex-row justify-center animate-fade-up">
                <div class="flex flex-col sm:flex-row mt-6 sm:mt-12 items-center sm:justify-start">
                  <div class="mb-8 sm:mb-0">
                    <div class="flex justify-center sm:justify-center">
                      <img class="w-64 h-64 inline-block p-2 zoom-image" src="@/assets/picture/road.png" alt="Road Sign Icon">
                    </div>
                  </div>
                  <div class="sm:ml-8">
                    <div class="text-justify mt-4 sm:mt-0 rounded-lg px-2 py-4" style="font-family: 'Poppins';">
                      <p class="mt-4 sm:mt-0 px-4 sm:px-0 text-justify-mobile text-center-desktop" style="font-family: 'Poppins';">
                        I developed a road sign recognition system  <br class="preserve-line-break" />using Convolutional Neural Networks (CNN). 
                        <br class="preserve-line-break" />Leveraging deep learning algorithms, the system  <br class="preserve-line-break" />accurately detects and classifies road signs <br>from images. 
                        This project showcased my expertise  <br class="preserve-line-break" />in computer vision and machine learning,  <br class="preserve-line-break" />achieving high recognition. 
                        It demonstrated my ability  <br class="preserve-line-break" />to work with complex algorithms  <br class="preserve-line-break" />in real-world scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div class="flex flex-col sm:flex-row mt-6 justify-center">
                <div class="flex flex-col sm:flex-row mt-6 sm:mt-12 items-center sm:justify-left">
                  <div class="mb-8 sm:mb-0 order-2 sm:order-1">
                    <div class="left-side"> <!-- Removed justify-center sm:justify-start -->
                      <p class="mt-4 sm:mt-0 px-4 sm:px-0 text-justify-mobile text-center-desktop" style="font-family: 'Poppins';">
                        The ATM project is an electronic banking outlet
                        that enables  <br class="preserve-line-break" /> customers to perform basic transactions
                        without   <br class="preserve-line-break" />the assistance of a branch representative
                        or teller.  <br class="preserve-line-break" />
                        ATMs provide convenient self-service transactions
                        <br class="preserve-line-break" /> such as depositing funds, withdrawing
                        <br class="preserve-line-break" /> cash, and transferring between accounts.  <br class="preserve-line-break" />
                        These services are offered directly
                        by the banks.
                      </p>
                    </div>
                  </div>
                  <div class="order-1 sm:order-2">
                    <img class="w-72 h-72 inline-block p-2 zoom-image" src="@/assets/picture/coding.png" alt="">
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row mt-6 justify-center">
                <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-12 items-center sm:justify-left">
                  <div class="mb-8 sm:mb-0 sm:order-1"> <!-- Add justify-center class to center the image on mobile view -->
                    <img class="w-64 h-64 inline-block p-2 zoom-image" src="@/assets/picture/dm.png" alt="">
                  </div>
    
                  <div class="left-side sm:order-2 sm:ml-4">
                    <p class="mt-4 sm:mt-0 px-4 sm:px-0 text-justify-mobile text-center-desktop" style="font-family: 'Poppins';">
                      During my On-The Job Training journey, I had the <br class="preserve-line-break" />privilege of contributing to the development <br class="preserve-line-break" />of a 
                      document maker website designed <br class="preserve-line-break" />specifically for law firm offices. <br class="preserve-line-break" />This robust software simplifies the process of 
                      <br class="preserve-line-break" />creating legal documents, offering a user-friendly <br class="preserve-line-break" />interface for seamless and efficient document <br>generation. 
                      It empowers legal professionals to <br class="preserve-line-break" />produce accurate and professional-looking <br class="preserve-line-break" />documents with ease.
                    </p>
                  </div>
                </div>
              </div>
            </section>
    
            <section id="contact">
              <h1 class="text-4xl font-bold text-center mt-16" style="font-family: 'Poppins';">Contact Me</h1>
                <p class="flex justify-center" style="font-family: 'Poppins';">let's get connected:</p>
                <h2 class="text-4xl font-bold text-center mt-12 text-gray-600 sm:flex sm:justify-center" style="font-family: 'Poppins';">
                  Do you have any project ideas?<br> Feel free to get in touch!</h2>
                  <div class="flex justify-center items-center">
                    <img class="mt-12 mr-18 h-44 w-48 rounded-full mb-8 shadow-md" src="@/assets/picture/dave.png" alt="">
                    <div class="contact-info-container">
                      <a class="flex items-center" style="font-family: 'Poppins';">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mx-2">
                          <path fill="black" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/>
                        </svg>: daveprades80@gmail.com
                      </a>

                      <a class="flex items-center mt-4 mr-4" style="font-family: 'Poppins';">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mx-2">
                          <path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>
                        </svg>: Zone, 7. San Vicente <br>Ogbon, Nabua, Camarines Sur
                      </a>

                      <a class="flex items-center mt-4 mr-28" style="font-family: 'Poppins';">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="mx-2">
                          <path fill="currentColor" d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/>
                        </svg>: 09305126647
                      </a>
                    </div>
                  </div>
                   
              </section>
          </div>
        </main>
    
        <footer class="bg-gray-800 text-white py-4 text-center" style="font-family: 'Poppins';">
          <p>© 2023 My Portfolio. All rights reserved.</p>
        </footer>
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


      // message in contact
      // data() {
      //   return {
      //     name: "",
      //     email: "",
      //     message: "",
      //   };
      // },
      // methods: {
      //   submitForm() {
      //     // Replace this function with your own logic to handle the form submission
      //     console.log("Form submitted!");
      //     console.log("Name:", this.name);
      //     console.log("Email:", this.email);
      //     console.log("Message:", this.message);
    
      //     // Clear the form fields after submission (optional)
      //     this.name = "";
      //     this.email = "";
      //     this.message = "";
      //   },
      // },
    
      
    
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

    </style>
    
                   
    <!-- <div class="flex justify-center">
      <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="name" class="block font-bold mb-2 mt-4"></label>
            <input type="text" id="name" v-model="name" class="w-min px-10 py-2 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none focus:ring focus:border-blue-300" placeholder="Yourname:"/>
          </div>
          <div class="mb-4">
            <label for="email" class="block font-bold mb-2"></label>
            <input type="email" id="email" v-model="email" class="w-min px-10 py-2 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none focus:ring focus:border-blue-300" placeholder="Email:" required/>
          </div>
          <div class="mb-4">
            <label for="message" class="block font-bold mb-2"></label>
            <textarea id="message" v-model="message" rows="4" class="w-min px-12 py-2 rounded-lg border border-gray-400 bg-gray-100 focus:outline-none focus:ring focus:border-blue-300" placeholder="Message:" required></textarea>
          </div>
          <div class="flex justify-center items-center md:justify-start md:mx-auto mb-4 px-24">
            <button type="submit" class="hover-red bg-black text-white px-4 py-2 rounded-lg" style="font-family: 'Poppins';">
              Submit
            </button>
          </div>

      </form>
    </div> -->