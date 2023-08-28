<template>
    <div> 
        <navbar />
        <menubar />

        <section id="projects" class="w-screen h-screen py-12">
            <div class="flex justify-center">
                <h2 class="text-5xl font-bold" style="font-family: 'Poppins';">My Projects</h2>
            </div>
            <div class="flex justify-center pt-6 gap-2">
                <button class="border rounded-lg py-2 px-2 hover:bg-gray-500"  style="font-family: 'Poppins';">Web App</button>

                <div>
                    <button class="border rounded-lg py-2 px-2 hover:bg-gray-500"  style="font-family: 'Poppins';">Project</button>
                </div>
            </div>

            <div class="flex justify-center mt-10">
                <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start gap-6">
                    <div>
                        <button class="image-container" @click="showTemplate = true">
                            <div class="overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="red" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg>
                            </div>
                            <p class="font-bold text-1xl pb-2 hover:underline" style="font-family: 'Poppins';">RECOGNIGTION OF ROAD SIGN</p>
                            <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg">
                                <img id="" class="w-96 inline-block p-2 sm:mx-auto" src="@/assets/img/prototype.png" alt="">
                            </div>
                        </button>

                        <div v-if="showTemplate" class="modal-overlay">
                            <div class="modal">
                                <div class="modal-content bg-gray-300 border rounded-lg">
                                    <p class="text-justify px-6 py-2" style="font-family: 'Poppins';">
                                        I developed a road sign recognition system using Convolutional Neural Networks (CNN). 
                                        Leveraging deep learning algorithms, the system accurately detects and classifies road signs from images. 
                                        This project showcased my expertise in computer vision and machine learning, achieving high recognition. 
                                        It demonstrated my ability to work with complex algorithms in real-world scenarios.<br>
                                        <span class="font-semibold"  style="font-family: 'Poppins';">
                                        <a href="https://github.com/Wazeeexx/Recognition-of-Road-Sign-Using-CNN" target="_blank" rel="noopener noreferrer">
                                        Check out the project on GitHub: https://github.com/Wazeeexx/Recognition-of-Road-Sign-Using-CNN</a>
                                        </span>
                                    </p>
                                    <p class="font-semibold px-6 py-2" style="font-family: 'Poppins';">Tech Stack Used</p>
                                    <div class="px-6 py-2" style="font-family: 'Poppins';">
                                        <ul>
                                            <li>Jupyter Notebook</li>
                                            <li>Python</li>
                                            <li>JavaScript</li>
                                            <li>Html and CSS</li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="modal-close hover:bg-gray-800" style="font-family: 'Poppins';" @click="showTemplate = false">Close</button>
                            </div>
                        </div>
                    </div>
 
                    <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start">
                        <button class="image-container" @click="toggleModal('atm1Modal')">
                        <div class="overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="red" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg>
                        </div>
                        <p class="font-bold text-1xl pb-2 " style="font-family: 'Poppins';">ATM MANAGEMENT SYSTEM</p>
                        <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg">
                            <img class="w-96 inline-block p-2 sm:mx-auto scrolling-image" src="@/assets/img/atm1.png" alt="">
                        </div>
                    </button>

                    <div v-if="activeModal" class="modal-overlay">
                        <div class="modal">
                            <div class="modal-content bg-gray-300 border rounded-lg">
                                <p class="text-justify px-6 py-2" style="font-family: 'Poppins';">
                                    The ATM project is an electronic banking outlet
                                    that enables customers to perform basic transactions
                                    without the assistance of a branch representative
                                    or teller.
                                    ATMs provide convenient self-service transactions
                                    such as depositing funds, withdrawing
                                    cash, and transferring between accounts.
                                    These services are offered directly
                                    by the banks.<br>
                                    <span class="font-semibold"  style="font-family: 'Poppins';">
                                        <a href="https://github.com/Wazeeexx/ATM-Management-System" target="_blank" rel="noopener noreferrer">
                                        Check out the project on GitHub: https://github.com/Wazeeexx/ATM-Management-System</a>
                                    </span>
                                </p>
                                <p class="font-semibold px-6 py-2" style="font-family: 'Poppins';">Tech Stack Used</p>
                                    <div class="px-6 py-2" style="font-family: 'Poppins';">
                                        <ul>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                            </div>
                            <button class="modal-close hover:bg-gray-800" @click="closeModal" style="font-family: 'Poppins';">Close</button>
                        </div>
                    </div>
                </div>

                <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start">
                    <button class="image-container" id="openModalBtn">
                        <div class="overlay">
                            <svg class="bg-gray-600" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <!-- SVG path here -->
                            </svg>
                        </div>
                        <p class="font-bold text-1xl pb-2" style="font-family: 'Poppins';">DOCUMENT MAKER</p>
                        <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg">
                            <img id="modalImage" class="w-80 h-44 inline-block p-2 sm:mx-auto" src="@/assets/img/document.png" alt="">
                        </div>
                    </button>
                </div>

                <!-- Modal -->
                <div class="modal hidden fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50" id="myModal">
                    <div class="modal-content bg-white p-6 rounded shadow-md">
                        <p>This is a paragraph template that appears in the modal.</p>
                        <button class="mt-4 px-4 py-2 bg-gray-500 text-white rounded" id="closeModalBtn">Close</button>
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
    data() {
    return {
      showTemplate: false
    };
  },

  data() {
    return {
      activeModal: null
    };
  },
  methods: {
    toggleModal(modalName) {
      if (this.activeModal === modalName) {
        this.activeModal = null;
      } else {
        this.activeModal = modalName;
      }
    }
  },

  data() {
    return {
      activeModal: null
    };
  },
  methods: {
    toggleModal(modalName) {
      if (this.activeModal === modalName) {
        this.activeModal = null;
      } else {
        this.activeModal = modalName;
      }
    },
    closeModal() {
      this.activeModal = null;
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

  .modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 80%;
  overflow: auto;
  max-height: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.modal-content {
  margin-bottom: 20px;
}

.modal-close {
  cursor: pointer;
  background-color: #ddd;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  float: right;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 80%;
  overflow: auto;
  max-height: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.modal-content {
  margin-bottom: 20px;
}

.modal-close {
  cursor: pointer;
  background-color: #ddd;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  float: right;
}
</style>
