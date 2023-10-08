<template>
    <div class="bg-black"> 
     <navbar />
     <menubar /> 
 
     <section id="education" class="h-full col cols-span-2 py-24"  style="margin-left: 60px; margin-right: 60px;">
       <h2 class="text-5xl font-bold font-poppins text-center font-poppins" style="color: #66fcf1;">Education</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 flex jutify-center">
            <!-- Education Item 1 -->
            <div class="text-white p-2 md:p-6 ml-8 mr-8">
                <div class="border rounded-lg py-8 bg-black p-4 transition duration-300 hover:bg-gray-500">
                    <h3 class="text-xl font-semibold font-poppins">Camarines Sur Polytechnic College</h3>
                    <p class="text-white mb-2 font-poppins">Bachelor of Science in Computer Science</p>
                    <p class="text-white font-poppins">Graduated: July 2023</p>
                </div>
            </div>
            <!-- Education Item 2 -->
            <div class="text-white p-2 md:p-6 ml-8 mr-8">
                <div class="border rounded-lg py-8 bg-black p-4 transition duration-300 hover:bg-gray-500">
                    <h3 class="text-xl font-semibold font-poppins">Victor Bernal National High School</h3>
                    <p class="text-white mb-2 font-poppins">General Academic Strand (Senior High School)</p>
                    <p class="text-white font-poppins">Graduated: April 2019</p>
                </div>
            </div>
            <!-- Education Item 3 -->
            <div class="text-white p-2 md:p-6 ml-8 mr-8">   
                <div class="border rounded-lg py-8 bg-black p-4 transition duration-300 hover:bg-gray-500">
                    <h3 class="text-xl font-semibold font-poppins">Victor Bernal National High School</h3>
                    <p class="text-white mb-2 font-poppins">Junior High School</p>
                    <p class="text-white font-poppins">Graduated: Arpil 2017</p>
                </div>
            </div>
            <!-- Education Item 4 -->
            <div class="text-white p-2 md:p-6 ml-8 mr-8">
                <div class="border rounded-lg py-8 bg-black p-4 transition duration-300 hover:bg-gray-500">
                    <h3 class="text-xl font-semibold font-poppins">San Vicente Elementary School</h3>
                    <p class="text-white mb-2 font-poppins">Elementary</p>
                    <p class="text-white font-poppins">Graduated: July 2013</p>
                </div>
            </div>
        </div>
            <div class="flex justify-center">
                <div class="text-white text-5xl font-bold font-poppins" style="color: #66fcf1;">Experience</div>
            </div>  
             <div class="flex justify-center">
                <div class="text-white p-2 md:p-6 ml-8 mr-8">
                    <div class="border rounded-lg py-8 bg-black p-4 transition duration-300 hover:bg-gray-500">
                        <h1 class="text-white font-semibold text-xl font-poppins">Front-End Developer Intern</h1>
                        <span class="font-poppins font-semibold">IntelliSeven Technology Solution Inc</span>
                        <h2 class="text-white font-poppins" style="">Address: West City Plaza, Quezon City</h2>
                        <h3 class="text-white font-poppins" style="">April to June 2023</h3>
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
    <Footer />
    </div>
 </template>
 
 <script>
 export default {
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};
 </script>
 
 <style>
 </style>