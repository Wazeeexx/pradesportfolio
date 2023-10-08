<template>
    <div class="bg-black"> 
        <navbar />
        <menubar />

        <section id="projects" class="h-screen py-24"  style="margin-left: 30px; margin-right: 30px;">
            <div class="flex justify-center">
                <h2 class="text-5xl font-bold font-poppins" style="color: #66fcf1;">My Projects</h2>
            </div>
            <!-- <div class="flex justify-center pt-6 gap-2">
                <button class="border rounded-lg py-2 px-2 hover:bg-gray-500 font-semibold"  style="font-family: 'Poppins';">Web App</button>

                <div>
                    <button class="border rounded-lg py-2 px-2 hover:bg-gray-500 font-semibold"  style="font-family: 'Poppins';">Project</button>
                </div>
            </div> -->

            <div class="flex justify-center mt-10">
                <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start gap-6">
                    <div class="bg-black py-4 px-4 rounded-lg">
                        <button class="image-container" @click="showTemplate = true">
                            <div class="overlay">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="red" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg>
                            </div>
                            <p class="font-bold text-1xl pb-2 hover:underline text-white font-poppins">RECOGNIGTION OF ROAD SIGN</p>
                            <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg">
                                <img id="" class="w-96 inline-block p-2 sm:mx-auto" src="@/assets/img/prototype.png" alt="">
                            </div>
                        </button>

                        <div v-if="showTemplate" class="modal-overlay">
                            <div class="modal">
                                <div class="modal-content bg-black border rounded-lg">
                                    <p class="text-justify px-6 py-2 text-white font-poppins">
                                        I developed a road sign recognition system using Convolutional Neural Networks (CNN). 
                                        Leveraging deep learning algorithms, the system accurately detects and classifies road signs from images. 
                                        This project showcased my expertise in computer vision and machine learning, achieving high recognition. 
                                        It demonstrated my ability to work with complex algorithms in real-world scenarios.<br>
                                        <span class="font-semibold text-white font-poppins">
                                        <a href="" target="_blank" rel="noopener noreferrer">
                                        Check out the project on GitHub:</a>
                                        </span>
                                    </p>
                                    <p class="font-semibold px-6 py-2 text-white font-poppins">Tech Stack Used:</p>
                                    <div class="px-6 py-2 text-white font-poppins">
                                        <ul>
                                            <li>Jupyter Notebook</li>
                                            <li>Python</li>
                                            <li>JavaScript</li>
                                            <li>Html and CSS</li>
                                        </ul>
                                    </div>
                                </div>
                                <button class="modal-close btn-18 font-poppins" style="" @click="showTemplate = false">Close</button>
                            </div>
                        </div>
                    </div>

                  <div  class="bg-black py-4 px-4 rounded-lg">  
                    <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start">
                        <button class="image-container" @click="toggleModal('atm1Modal')">
                        <div class="overlay">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="red" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"/></svg>
                        </div>
                        <p class="font-bold text-1xl pb-2 text-white font-poppins">ATM MANAGEMENT SYSTEM</p>
                        <div class="flex justify-center sm:justify-center border border-gray-400 rounded-lg">
                            <img class="w-96 inline-block p-2 sm:mx-auto scrolling-image" src="@/assets/img/atm1.png" alt="">
                        </div>
                    </button>

                    <div v-if="activeModal" class="modal-overlay">
                        <div class="modal">
                            <div class="modal-content border rounded-lg bg-black">
                                <p class="text-justify px-6 py-2 text-white font-poppins">
                                    The ATM project is an electronic banking outlet
                                    that enables customers to perform basic transactions
                                    without the assistance of a branch representative
                                    or teller.
                                    ATMs provide convenient self-service transactions
                                    such as depositing funds, withdrawing
                                    cash, and transferring between accounts.
                                    These services are offered directly
                                    by the banks.<br>
                                    <span class="font-semibold text-white font-poppins">
                                        <a href="" target="_blank" rel="noopener noreferrer">
                                        Check out the project on GitHub: </a>
                                    </span>
                                </p>
                                <p class="font-semibold px-6 py-2 text-white font-poppins">Tech Stack Used:</p>
                                    <div class="px-6 py-2 text-white font-poppins">
                                        <ul>
                                            <li>Java</li>
                                        </ul>
                                    </div>
                            </div>
                            <button class="modal-close hover:bg-gray-800 btn-18 font-poppins" @click="closeModal">Close</button>
                        </div>
                    </div>
                </div>
              </div>

              <div class="bg-black py-4 px-4 rounded-lg">
                <div class="col-span-3 sm:col-span-1 flex flex-col sm:flex-row sm:justify-start">
                    <button class="image-container" id="openModalBtn">
                        <div class="overlay">
                            <svg class="bg-gray-600" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                                <!-- SVG path here -->
                            </svg>
                        </div>
                        <p class="font-bold text-1xl pb-2 text-white font-poppins">DOCUMENT MAKER</p>
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

.btn-18,
.btn-18 *,
.btn-18 :after,
.btn-18 :before,
.btn-18:after,
.btn-18:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-18 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  text-transform: uppercase;
}
.btn-18:disabled {
  cursor: default;
}
.btn-18:-moz-focusring {
  outline: auto;
}
.btn-18 svg {
  display: block;
  vertical-align: middle;
}
.btn-18 [hidden] {
  display: none;
}
.btn-18 {
  border-radius: 99rem;
  border-width: 2px;
  padding: 0.8rem 3rem;
  z-index: 0;
}
.btn-18,
.btn-18 .text-container {
  overflow: hidden;
  position: relative;
}
.btn-18 .text-container {
  display: block;
}
.btn-18 .text {
  display: block;
  mix-blend-mode: difference;
  position: relative;
}
.btn-18:hover .text {
  -webkit-animation: move-up-alternate 0.3s forwards;
  animation: move-up-alternate 0.3s forwards;
}
@-webkit-keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes move-up-alternate {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(80%);
  }
  51% {
    transform: translateY(-80%);
  }
  to {
    transform: translateY(0);
  }
}
.btn-18:after,
.btn-18:before {
  --tilt: 20px;
  background: #fff;
  -webkit-clip-path: polygon(
    0 0,
    calc(100% - var(--tilt)) 0,
    100% 50%,
    calc(100% - var(--tilt)) 100%,
    0 100%
  );
  clip-path: polygon(
    0 0,
    calc(100% - var(--tilt)) 0,
    100% 50%,
    calc(100% - var(--tilt)) 100%,
    0 100%
  );
  content: "";
  height: 100%;
  left: -100%;
  position: absolute;
  top: 0;
  transition: transform 0.6s;
  width: 100%;
}
.btn-18:after {
  -webkit-clip-path: polygon(
    var(--tilt) 0,
    0 50%,
    var(--tilt) 100%,
    100% 100%,
    100% 0
  );
  clip-path: polygon(var(--tilt) 0, 0 50%, var(--tilt) 100%, 100% 100%, 100% 0);
  left: 100%;
  z-index: -1;
}
.btn-18:hover:before {
  transform: translateX(100%);
}
.btn-18:hover:after {
  transform: translateX(-100%);
}


</style>
