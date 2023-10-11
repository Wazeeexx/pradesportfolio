<template>
   <div class="bg-black"> 
    <navbar />
    <menubar /> 

    <section id="about" class="py-24 px-32">
      <h2 class="text-5xl font-bold font-poppins text-center mb-8 font-poppins" style="color: #66fcf1;">About Me</h2>
        <div class="flex justify-center">
          <p id="typewriter-text" class="text-3xl mb-4 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-white text-center font-mono font-poppins" ></p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div class="flex justify-center sm:justify-end mb-6 sm:mb-0 mx-auto">
            <img class="w-48 sm:w-96 h-48 sm:h-96 rounded-lg shadow shadow-gray-400" src="@/assets/img/Dave2x2.png" />
          </div>
          
          <div class="flex items-center mx-auto">
            <div class="font-poppins text-base sm:text-base lg:text-base text-justify px-6 py-6 sm:mx-auto text-white mx-0 sm:mx-auto">
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
                <a href="https://drive.google.com/drive/folders/1oSNrJauek5emIjKgUi377Bz-s5wM_2rP"  class="text-black-500 mr-60 inline-flex px-6 py-2 text-black rounded-lg font-bold hover:bg-gray-600"
                  style="font-family: 'Poppins'; background-color: #66fcf1;">Resume<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-6 4q-.825 0-1.413-.588T4 18v-3h2v3h12v-3h2v3q0 .825-.588 1.413T18 20H6Z"/></svg>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section id="skills" class="grid grid-cols px-24">
        <h1 class="text-5xl font-bold font-poppins text-center mb-6 font-poppins" style="color: #66fcf1;">Skills</h1>
        <div class="flex justify-center">
        <p class="text-3xl mb-8 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-white text-center font-poppins">
            Expertise To Help Bring Your Ideas To Life
        </p>
        </div>

        <div class="flex justify-center items-center">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 flex justify-center">
            <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32">
                    <path fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"/>
                        <path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/>
                        <path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 4.852l6.332 1.758l.014-.004v-3.216z"/>
                        <path fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"/>
                    </svg>
                    <span class="p-2 text-sm text-white md:text-base lg:text-sm font-semibold font-poppins" >HTML</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"/><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/>
                    <path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"/><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"/>
                    <path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"/><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"/></svg>
                <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">CSS</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128">
                    <path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"/>
                    <path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"/>
                    <path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"/>
                    </svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">Vue.js</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#00DC82" d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.374 12.374 0 0 0 4.554-4.515a12.236 12.236 0 0 0-.006-12.332l-46.185-79.286a12.388 12.388 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.388 12.388 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.386 12.386 0 0 0-4.555-4.513a12.536 12.536 0 0 0-12.444 0a12.391 12.391 0 0 0-4.555 4.513L36.67 170.834a12.245 12.245 0 0 0-1.67 6.165c0 2.165.573 4.292 1.665 6.167a12.374 12.374 0 0 0 4.554 4.515a12.513 12.513 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16l-11.293 19.356Zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86Z"/></g></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">Nuxt.js</span>
                    </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 384"><path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"/><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"/><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"/><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"/><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"/></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">Figma</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">Tailwind CSS</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="" height="256" fill="#F0DB4F" rx="60"/><path fill="white" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">JavaScript</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 shadow ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><circle cx="16" cy="15.974" r="2.5" fill="#00d8ff"/><path fill="#00d8ff" d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"/><path fill="#00d8ff" d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"/><path fill="#00d8ff" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"/></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">ReactJs</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 shadow ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><path fill="#E24329" d="m124.755 51.382l-.177-.452L107.47 6.282a4.459 4.459 0 0 0-1.761-2.121a4.581 4.581 0 0 0-5.236.281a4.578 4.578 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.492 4.492 0 0 0-1.518-2.31a4.581 4.581 0 0 0-5.236-.281a4.502 4.502 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046l.157.111l26.061 19.516l12.893 9.758l7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93l12.893-9.758l26.218-19.634l.065-.052c11.273-8.526 15.562-23.472 10.524-36.677z"/><path fill="#FC6D26" d="m124.755 51.382l-.177-.452a57.79 57.79 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634l.065-.052c11.291-8.527 15.586-23.488 10.538-36.704z"/><path fill="#FCA326" d="m40.066 107.771l12.893 9.758l7.854 5.93a5.283 5.283 0 0 0 6.388 0l7.854-5.93l12.893-9.758s-11.152-8.436-23.947-18.09a18379.202 18379.202 0 0 0-23.935 18.09z"/><path fill="#FC6D26" d="M26.42 61.271A57.73 57.73 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046l.157.111l26.061 19.516L64 89.655L26.42 61.271z"/></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">Gitlab</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 shadow ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">GitHub</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 shadow ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82Z"/></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">Git</span>
                </div>
            </button>

            <button class="col-span-1 md:col-span-2 lg:col-span-1 shadow ">
                <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="black"><g clip-path="url(#akarIconsTypescriptFill0)"><path fill="white" d="M23.429 0H.57A.571.571 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.571.571 0 0 0 .571-.571V.57a.571.571 0 0 0-.572-.57Zm-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8v1.969Zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719c-1.218 0-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755Z"/></g><defs><clipPath id="akarIconsTypescriptFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
                    <span class="p-2 text-sm text-white  md:text-base lg:text-sm font-semibold font-poppins">TypeScript</span>
                </div>
            </button>
          </div>  
        </div>

        <div class="container mx-auto mt-12 p-4 text-center md:text-left md:flex md:items-center md:justify-center text-white">
            <p class="text-3xl font-semibold md:ml-12 text-gray-600 font-poppins" style="color: #66fcf1;">I am currently mastering
            <br>these technologies.</p>
            <span class="ml-0 md:ml-4 border-md"></span>
            <h1 class="mt-6 md:mt-0 md:ml-10 font-poppins">The two most popular stacks in the field of
            <br>Web Development the MERN(<span class="font-semibold">MongoDB, Express JS, React and Node JS</span>)
            <br>and WAMP(<span class="font-semibold">Windows, Apache, MySQL, and PHP</span>) stacks.</h1>
        </div>

        <div class="flex justify-center mt-6">
            <div class="col cols-span-2">
                <div class="flex justify-center gap-2">
                    <div class="col-span-1 md:col-span-2">
                        <img class="w-full h-auto md:h-36 border border-200 rounded-lg shadow shadow-gray-400" src="@/assets/img/mern.png" alt="">
                    </div>
                    <div class="col-span-2 md:col-span-3">
                        <img class="w-full h-auto md:h-36 border border-200 rounded-lg shadow shadow-gray-400" src="@/assets/img/wamp.png" alt="">
                    </div>
                </div>
            </div>  
        </div>
        <div class="flex justify-end fixed bottom-4 right-4 zoom-in">
            <div class="pl-10">
            <button id="scrollButton" class="flex border rounded-full border-gray-300 px-2 py-2" style="background-color: #66fcf1;" @click="scrollToTop">
                <svg xmlns="http://www.w3.org/2000/svg" class="" width="30" height="30" viewBox="0 0 9 16">
                <path fill="white" d="M4.5 14c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5Z"/>
                <path fill="white" d="M8 7.5a.47.47 0 0 1-.35-.15L4.5 4.2L1.35 7.35c-.2.2-.51.2-.71 0c-.2-.2-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/>
                </svg>
            </button>
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


//Scroll Up button
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
//
};
</script>

<style>
.font-poppins {
    font-family: 'Poppins';
  }

</style>