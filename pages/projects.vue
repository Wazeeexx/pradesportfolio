<template>
    <div> 
        <navbar />
        <menubar />

        <section id="projects" class="w-screen ml-0 py-12">
            <h2 class="text-5xl font-bold text-center" style="font-family: 'Poppins';">My Projects</h2>
            <div class="flex flex-col sm:flex-row justify-center animate-fade-up">
            <div class="flex flex-col sm:flex-row mt-6 sm:mt-12 items-center sm:justify-start">
                <div class="sm:mb-0">
                <div class="flex justify-center sm:justify-center">
                    <img class="w-64 h-64 inline-block p-2 zoom-image" src="@/assets/img/road.png" alt="Road Sign Icon">
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
                <img class="w-72 h-72 inline-block p-2 zoom-image" src="@/assets/img/coding.png" alt="">
                </div>
            </div>
            </div>
            <div class="flex flex-col sm:flex-row mt-6 justify-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-12 items-center sm:justify-left">
                <div class="mb-8 sm:mb-0 sm:order-1"> <!-- Add justify-center class to center the image on mobile view -->
                <img class="w-64 h-64 inline-block p-2 zoom-image" src="@/assets/img/dm.png" alt="">
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
        <Footer />
    </div>
</template>
<script>
</script>

<style>
</style>