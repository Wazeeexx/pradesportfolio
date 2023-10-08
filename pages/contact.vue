<template>
    <div class="bg-black"> 
      <navbar />
      <menubar />

      <section id="contact" class="py-24 h-screen" style="margin-left: 40px; margin-right: 40px;">
        <h1 class="text-5xl font-bold text-center font-poppins" style="color: #66fcf1;">Contact Me</h1>
        <p class="flex justify-center text-sm font-poppins">let's get connected:</p>font-poppins
        <h2 class="text-4xl font-bold text-center mt-6 text-white sm:flex sm:justify-center font-poppins">
        Do you have any project ideas?<br> Feel free to get in touch!</h2>
        <div class="flex justify-center items-center">

        <div class="contact-info-container grid grid-cols-3 gap-6 mt-6">
          <div class="flex flex-col sm:flex-row w-full sm:w-80 border rounded-lg sm:py-4 items-center sm:items-start hover:bg-gray-500" >
            <a class="p-4 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 ml-4 mt-4" style="background-color: #66fcf1;">
              <div class="relative flex justify-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="">
                  <path fill="black" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/>
                </svg>             
              </div>
            </a>
            <div class="flex flex-col justify-center text-center sm:text-left p-2 ">
              <span class="text-white font-semibold mb-1 sm:mb-2 mt-4 font-poppins">: Address</span>
              <h1 class="text-xs sm:text-sm text-white font-poppins">San Vicente Ogbon, Nabua, Camarines Sur</h1>
            </div>
          </div>

            <div class="flex flex-col sm:flex-row w-full sm:w-80 bg-black border rounded-lg sm:py-4 items-center sm:items-start hover:bg-gray-500">
              <a class="p-4 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 ml-4 mt-4" style="background-color: #66fcf1;">
                <div class="relative flex justify-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="">
                    <path fill="black" d="m18.73 5.41l-1.28 1L12 10.46L6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/>
                  </svg>             
                </div>
              </a>
              <div class="flex flex-col justify-center text-center sm:text-left p-2">
                <span class="text-white font-semibold mb-1 sm:mb-2 mt-4 font-poppins">: Email</span>
                <h1 class="text-xs sm:text-sm text-white font-poppins">daveprades80@gmail.com</h1>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row w-full sm:w-80 bg-black border rounded-lg sm:py-4 items-center sm:items-start hover:bg-gray-500">
              <a class="p-4 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-0 sm:mr-4 ml-4 mt-4" style="background-color: #66fcf1;">
                <div class="relative flex justify-right">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="">
                    <path fill="black" d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"/>
                  </svg>             
                </div>
              </a>
              <div class="flex flex-col justify-center text-center sm:text-left p-2">
                <span class="text-white font-semibold mb-1 sm:mb-2 mt-4 font-poppins">: Contact No.</span>
                <h1 class="text-xs sm:text-sm text-white font-poppins">09305126647</h1>
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