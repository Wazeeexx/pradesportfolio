<template>
    <div> 
        <navbar />
        <menubar />
        <section id="skills" class="grid grid-cols py-12">
            <h2 class="text-5xl font-bold font-poppins text-center mb-4" style="font-family: 'Poppins';">Skills</h2>
            <div class="flex justify-center">
            <p class="text-3xl mb-8 p-2 font-semibold sm:text-center md:text-3xl lg:text-3xl xl:text-3xl text-gray-600 text-center" style="font-family: 'Poppins';">
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
                            <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">HTML</span>
                        </div>
                    </button>

                    <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                        <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path fill="#1572b6" d="M5.902 27.201L3.656 2h24.688l-2.249 25.197L15.985 30L5.902 27.201z"/><path fill="#33a9dc" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/>
                            <path fill="#fff" d="M16 13.191h4.09l.282-3.165H16V6.935h7.75l-.074.829l-.759 8.518H16v-3.091z"/><path fill="#ebebeb" d="m16.019 21.218l-.014.004l-3.442-.93l-.22-2.465H9.24l.433 4.853l6.331 1.758l.015-.004v-3.216z"/>
                            <path fill="#fff" d="m19.827 16.151l-.372 4.139l-3.447.93v3.216l6.336-1.756l.047-.522l.537-6.007h-3.101z"/><path fill="#ebebeb" d="M16.011 6.935v3.091H8.545l-.062-.695l-.141-1.567l-.074-.829h7.743zM16 13.191v3.091h-3.399l-.062-.695l-.14-1.567l-.074-.829H16z"/></svg>
                        <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">CSS</span>
                        </div>
                    </button>

                    <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                        <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128">
                            <path fill="none" d="m0 8.934l49.854.158l14.167 24.47l14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02l-38.476 66.053L25.691 9.592L.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168l-15.053 24.647L49.216 9.73l-22.794-.168l37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"/>
                            <path fill="#35495e" d="m25.997 9.393l23.002.009L64.035 34.36L79.018 9.404L102 9.398L64.15 75.053z"/>
                            <path fill="#41b883" d="m.91 9.569l25.067-.172l38.15 65.659L101.98 9.401l25.11.026l-62.966 108.06z"/>
                            </svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">Vue.js</span>
                        </div>
                    </button>

                    <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                        <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#F4F2ED" rx="60"/><path fill="#00DC82" d="M138.787 189.333h68.772c2.184.001 4.33-.569 6.222-1.652a12.374 12.374 0 0 0 4.554-4.515a12.236 12.236 0 0 0-.006-12.332l-46.185-79.286a12.388 12.388 0 0 0-4.553-4.514a12.53 12.53 0 0 0-12.442 0a12.388 12.388 0 0 0-4.553 4.514l-11.809 20.287l-23.09-39.67a12.386 12.386 0 0 0-4.555-4.513a12.536 12.536 0 0 0-12.444 0a12.391 12.391 0 0 0-4.555 4.513L36.67 170.834a12.245 12.245 0 0 0-1.67 6.165c0 2.165.573 4.292 1.665 6.167a12.374 12.374 0 0 0 4.554 4.515a12.513 12.513 0 0 0 6.222 1.652h43.17c17.104 0 29.718-7.446 38.397-21.973l21.072-36.169l11.287-19.356l33.873 58.142h-45.16l-11.293 19.356Zm-48.88-19.376l-30.127-.007l45.16-77.518l22.533 38.759l-15.087 25.906c-5.764 9.426-12.312 12.86-22.48 12.86Z"/></g></svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">Nuxt.js</span>
                            </div>
                    </button>

                    <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                        <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 384"><path fill="#0ACF83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64Z"/><path fill="#A259FF" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64Z"/><path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64Z"/><path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64V0Z"/><path fill="#1ABCFE" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64Z"/></svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">Figma</span>
                        </div>
                    </button>

                    <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                        <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128"><path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/></svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">Tailwind CSS</span>
                        </div>
                    </button>

                    <button class="col-span-1 md:col-span-2 lg:col-span-1 ">
                        <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="" height="256" fill="#F0DB4F" rx="60"/><path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"/></g></svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">JavaScript</span>
                        </div>
                    </button>

                    <button class="col-span-1 md:col-span-2 lg:col-span-1 shadow ">
                        <div class="rounded-lg px-2 py-4 flex items-center shadow shadow-gray-400 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><circle cx="16" cy="15.974" r="2.5" fill="#00d8ff"/><path fill="#00d8ff" d="M16 21.706a28.385 28.385 0 0 1-8.88-1.2a11.3 11.3 0 0 1-3.657-1.958A3.543 3.543 0 0 1 2 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0 1 16 10.293a28.674 28.674 0 0 1 9.022 1.324a11.376 11.376 0 0 1 3.538 1.866A3.391 3.391 0 0 1 30 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 0 1-8.7 1.191Zm0-10.217a27.948 27.948 0 0 0-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2c0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0 0 16 20.51a27.6 27.6 0 0 0 8.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 0 0-1.01-1.573a10.194 10.194 0 0 0-3.161-1.654A27.462 27.462 0 0 0 16 11.489Z"/><path fill="#00d8ff" d="M10.32 28.443a2.639 2.639 0 0 1-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 0 1 3.4-8.593a28.676 28.676 0 0 1 5.653-7.154a11.376 11.376 0 0 1 3.384-2.133a3.391 3.391 0 0 1 2.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 0 1-3.316 8.133a28.385 28.385 0 0 1-5.476 7.093a11.3 11.3 0 0 1-3.523 2.189a4.926 4.926 0 0 1-1.624.307Zm1.773-14.7a27.948 27.948 0 0 0-3.26 8.219c-.553 2.915-.022 4.668.75 5.114c.8.463 2.742.024 5.1-2.036a27.209 27.209 0 0 0 5.227-6.79a27.6 27.6 0 0 0 3.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 0 0-1.868.089A10.194 10.194 0 0 0 17.5 6.9a27.464 27.464 0 0 0-5.4 6.849Z"/><path fill="#00d8ff" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 0 1-5.747-7.237a28.676 28.676 0 0 1-3.374-8.471a11.376 11.376 0 0 1-.158-4A3.391 3.391 0 0 1 8.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 0 1 5.39 6.934a28.384 28.384 0 0 1 3.41 8.287a11.3 11.3 0 0 1 .137 4.146a3.543 3.543 0 0 1-1.494 2.555a2.59 2.59 0 0 1-1.315.324Zm-9.58-10.2a27.949 27.949 0 0 0 5.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9c.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0 0 19.9 13.74a27.6 27.6 0 0 0-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 0 0-.855 1.662a10.194 10.194 0 0 0 .153 3.565a27.465 27.465 0 0 0 3.236 8.1Z"/></svg>
                            <span class="p-2 text-sm md:text-base lg:text-sm font-semibold" style="font-family: 'Poppins';">ReactJs</span>
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
        </section>
        <Footer />
    </div>
</template>
<script>
</script>

<style>
</style>