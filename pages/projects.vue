<template>
    <div> 
        <navbar />
        <menubar />

        <section id="projects" class="w-screen py-12">
            <div class="flex justify-center">
                <h2 class="text-5xl font-bold" style="font-family: 'Poppins';">My Projects</h2>
            </div>

            <div class="flex justify-center">
                <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:mt-12 sm:justify-start gap-6">
                    <button class="image-container" @click="showNewTemplate">
                        <div class="overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg>
                        </div>
                        <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg">
                            <img id="scrollingImage" class="w-96 inline-block p-2 sm:mx-auto scrolling-image" src="@/assets/img/prototype.png" alt="">
                        </div>
                        <div v-if="showTemplate" class="max-w-lg mx-auto mt-8">
                            <!-- Your new paragraph template content here -->
                            <p>This is a new paragraph template that appears when the image is clicked.</p>
                        </div>
                    </button>
                    <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start">
                        <a href="" class="image-container">
                            <div class="overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg>
                            </div>
                            <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg">
                                <img id="scrollingImage" class="w-96 inline-block p-2 sm:mx-auto scrolling-image" src="@/assets/img/atm1.png" alt="">
                            </div>
                        </a>
                    </div>
                    <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start">
                        <a href="" class="image-container">
                            <div class="overlay">
                                <svg class="border border-gray-400" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg>
                            </div>
                            <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg py-1">
                                <img id="scrollingImage" class="w-80 h-44 inline-block p-2 sm:mx-auto"  src="@/assets/img/document.png" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- <div class="flex flex-col sm:flex-row justify-center animate-fade-up text-center">
                <div class="flex flex-col sm:flex-row mt-6 sm:mt-12 items-center sm:justify-start">
                    <a href="https://github.com/Wazeeexx/Recognition-of-Road-Sign-Using-CNN" class="image-container">
                        <div class="overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><g fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M27 9V21H39"/><path d="M21 39V27H9"/><path d="M27 21L42 6"/><path d="M21 27L6 42"/></g></svg>
                        </div>
                        <div class="flex justify-center sm:justify-center">
                            <img id="scrollingImage" class="w-2/3 inline-block p-2 sm:mx-auto" src="@/assets/img/prototype.png" alt="">
                        </div>
                    </a>
                </div>
            </div>

            <div class="sm:ml-8 flex justify-center ">
                <div class="text-justify mt-4 sm:mt-0 rounded-lg px-2 py-4 max-w-lg" style="font-family: 'Poppins';">
                    <p class="mt-8" style="font-family: 'Poppins';">
                    I developed a road sign recognition system using Convolutional Neural Networks (CNN). 
                    Leveraging deep learning algorithms, the system accurately detects and classifies road signs from images. 
                    This project showcased my expertise in computer vision and machine learning, achieving high recognition. 
                    It demonstrated my ability  work with complex algorithms in real-world scenarios.
                    </p>
                </div>
            </div>

            <div class="border-b-4 mt-10 border-gray-500 ..."></div>

            <div class="flex flex-col sm:flex-row justify-center animate-fade-up">
                <div class="flex flex-col sm:flex-row mt-6 sm:mt-12 items-center sm:justify-start">
                    <div class="sm:mb-0">
                        <a href="https://github.com/Wazeeexx/ATM-Management-System" class="image-container">
                            <div class="overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><g fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M27 9V21H39"/><path d="M21 39V27H9"/><path d="M27 21L42 6"/><path d="M21 27L6 42"/></g></svg>
                            </div>
                            <div class="flex justify-center">
                                <img id="scrollingImage" class="w-2/3 inline-block p-2 sm:mx-auto scrolling-image" src="@/assets/img/atm1.png" alt="">
                            </div>
                        </a>
                    </div>
                </div>
            </div>  

            <div class="sm:ml-8 flex justify-center ">
                <div class="text-justify mt-4 sm:mt-0 rounded-lg px-2 py-4 max-w-lg" style="font-family: 'Poppins';">
                    <p class="mt-8" style="font-family: 'Poppins';">
                    The ATM project is an electronic banking outlet
                    that enables customers to perform basic transactions
                    without the assistance of a branch representative
                    or teller.
                    ATMs provide convenient self-service transactions
                    such as depositing funds, withdrawing
                    cash, and transferring between accounts.
                    These services are offered directly
                    by the banks.
                    </p>
                </div>
            </div>

            <div class="border-b-4 mt-10 border-gray-500 ..."></div>

            <div class="flex flex-col sm:flex-row justify-center animate-fade-up">
                <div class="flex flex-col sm:flex-row mt-6 sm:mt-12 items-center sm:justify-start">
                    <button href="" class="image-container">
                        <div class="overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><g fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M27 9V21H39"/><path d="M21 39V27H9"/><path d="M27 21L42 6"/><path d="M21 27L6 42"/></g></svg>
                        </div>
                        <div class="mb-8 sm:mb-0 sm:order-1 flex justify-center">
                            <img id="scrollingImage" class="w-2/3 inline-block p-2 sm:mx-auto"  src="@/assets/img/document.png" alt="">
                        </div> 
                    </button>
                </div>
            </div>

            <div class="sm:ml-8 flex justify-center ">
                <div class="text-justify mt-4 sm:mt-0 rounded-lg px-2 py-4 max-w-lg" style="font-family: 'Poppins';">
                    <p class="mt-12 " style="font-family: 'Poppins';">
                    During my On-The Job Training journey, I had the privilege of contributing to the development of a 
                    document maker website designed specifically for law firm offices. This robust software simplifies the process of 
                    creating legal documents, offering a user-friendly interface for seamless and efficient document generation. 
                    It empowers legal professionals to produce accurate and professional-looking documents with ease.
                    </p>
                </div>
            </div>

            <div class="flex justify-end fixed bottom-4 right-4 zoom-in">
                <div class="pl-10">
                    <button id="scrollButton" class="flex border rounded-full border-gray-300 px-2 py-2 bg-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" width="30" height="30" viewBox="0 0 9 16">
                            <path fill="white" d="M4.5 14c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5Z"/>
                            <path fill="white" d="M8 7.5a.47.47 0 0 1-.35-.15L4.5 4.2L1.35 7.35c-.2.2-.51.2-.71 0c-.2-.2-.2-.51 0-.71l3.5-3.5c.2-.2.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="border-b-4 mt-10 border-gray-500 ..."></div> -->
        </section>
        <!-- <Footer /> -->
    </div>
</template>
<script>
export default {
  mounted() {
    document.getElementById('scrollButton').addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollingImage = document.getElementById('scrollingImage');
      const navbar = document.querySelector('.navbar'); // Update this selector to match your actual navbar class or ID
      const scrollThreshold = navbar.getBoundingClientRect().bottom;

      if (window.scrollY > scrollThreshold) {
        scrollingImage.style.display = 'none';
      } else {
        scrollingImage.style.display = 'block';
      }
    }
  }

};
</script>

<style>
.image-container {
    position: relative;
    display: inline-block;
  }

  .image-container:hover img {
    filter: blur(4px); /* Apply blur effect */
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    padding: 10px;
  }

  .image-container:hover .overlay {
    display: flex;
  }

  .overlay svg {
    width: 30px;
    height: 30px;
    fill: white;
  }

</style>