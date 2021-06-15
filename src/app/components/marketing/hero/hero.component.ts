import { Component } from '@angular/core';

@Component({
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    
    block1: string = `
<div class="grid grid-nogutter surface-0 text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <button pButton pRipple label="Learn More" type="button" class="mr-3 p-button-raised"></button>
            <button pButton pRipple label="Live Demo" type="button" class="p-button-outlined"></button>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="assets/images/blocks/hero-1.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>`;

    block2: string = `
<div class="relative p-6 text-800 overflow-hidden">
    <img src="assets/images/blocks/hero-2.jpg" alt="Image" class="absolute top-0 left-0 w-auto h-full block md:w-full">

    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1">The Platform For</div>
        <div class="text-6xl text-primary font-bold mb-4">Today's Generation</div>
        <p class="mt-0 mb-4 line-height-3 text-center mx-auto" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <button pButton pRipple label="Learn More" type="button"></button>

        <p class="text-sm mt-4 mb-4 line-height-3">Available for MacOS, Web and Google accounts only</p>
        <div class="flex justify-content-center align-items-center">
            <a href="https://www.apple.com" class="text-700 mr-3">
                <i class="pi pi-apple text-2xl"></i>
            </a>
            <a href="https://play.google.com" class="text-700 mr-3">
                <i class="pi pi-android text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" class="text-700">
                <i class="pi pi-facebook text-2xl"></i>
            </a>
        </div>
    </div>
</div>`;

    block3: string = `
<div class="relative p-6 text-0 overflow-hidden">
    <img src="assets/images/blocks/hero-3.jpg" alt="Image" class="absolute top-0 left-0 w-auto h-full block md:w-full">

    <div class="text-center my-6 relative">
        <div class="text-6xl font-bold mb-1">Bring Out The Best</div>
        <div class="text-6xl text-blue-400 font-bold mb-4">In Your Code</div>
        <p class="mt-0 mb-3 line-height-3 text-center mx-auto text-blue-100" style="max-width:500px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
        <div class="flex align-items-center justify-content-center flex-wrap">
            <input type="text" pInputText class="bg-transparent p-3 mr-3 mt-3" style="border-radius: 40px" size="30" placeholder="Enter your email">
            <button type="button" label="Notify Me" pButton pRipple class="p-button-text surface-50 p-3 mt-3" style="border-radius: 40px"></button>
        </div>
    </div>
</div>`;

    block4: string = `
<div class="text-900 p-6 text-center" style="background:radial-gradient(69.84% 69.84% at 50% 100%, rgba(21, 101, 192, 0.15) 0%, rgba(255, 255, 255, 0) 100%);">
    <div class="surface-900 text-0 p-2 mx-auto mb-4" style="max-width: 250px; border-radius: 40px">🔥 Get started in no time</div>
    <div class="text-6xl font-bold mb-1">Highly Customizable</div>
    <div class="text-6xl text-primary font-bold mb-4">Premium Application Template</div>
    <button type="button" pButton pRipple label="Get Started" class="p-button-outlined p-3 font-bold"></button>

    <img src="assets/images/blocks/ultima.png" alt="Image" class="block mx-auto mt-6 w-full md:w-auto" style="margin-bottom:-3rem">
</div>`;

}
