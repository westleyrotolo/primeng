import {Component} from '@angular/core';

@Component({
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  date1 = '31/03/2021 - 01/04/2021';

  date2 = '31/03/2021 - 01/04/2021';

  block1 = `
<div class="p-7 surface-0 text-700 text-center">
    <div class="text-blue-600 font-bold mb-3"><i class="pi pi-discord"></i> POWERED BY DISCORD</div>
    <div class="text-900 font-bold text-5xl mb-3">Join our design community</div>
    <div class="text-700 text-2xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
</div>`;

  block2 = `
<div class="p-7 surface-0">
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="px-4 py-3 inline-flex align-items-center bg-green-500 text-0 mb-3 font-bold" style="border-radius: 50px">
              <span>Travel Update</span>
              <i class="pi pi-chevron-right ml-2"></i>
            </div>
            <div class="text-900 font-bold text-5xl mb-3">Book Flights</div>
            <div class="text-600 text-2xl line-height-3">Find cheap flights and airline tickets.</div>
            <div class="text-600 text-2xl line-height-3">Prime Flights helps you compare and track airfares.</div>
        </div>
        <div class="col-12 md:col-6 flex align-items-center justify-content-end">
            <div>
                <div class="text-900 font-medium justify-content-start mb-3">Round Trip Dates</div>
                <p-calendar [(ngModel)]="date1" [showIcon]="true" selectionMode="range" [style]="{'min-width': '240px'}" [inputStyleClass]="'bg-transparent text-900 border-400'"></p-calendar>
            </div>
        </div>
    </div>
</div>`;

  block3 = `
<div class="p-7 surface-900">
    <div class="grid">
        <div class="col-12 md:col-6">
            <div class="px-4 py-3 inline-flex align-items-center bg-pink-500 text-0 mb-3 font-bold" style="border-radius: 50px">
              <span>Travel Resticted</span>
              <i class="pi pi-chevron-right ml-2"></i>
            </div>
            <div class="text-0 font-bold text-5xl mb-3">Book Flights</div>
            <div class="text-400 text-2xl line-height-3">Find cheap flights and airline tickets.</div>
            <div class="text-400 text-2xl line-height-3">Prime Flights helps you compare and track airfares.</div>
        </div>
        <div class="col-12 md:col-6 flex align-items-center justify-content-end">
            <div>
                <div class="text-400 font-medium justify-content-start mb-3">Round Trip Dates</div>
                <p-calendar [(ngModel)]="date2" [showIcon]="true" selectionMode="range" [style]="{'min-width': '240px'}" [inputStyleClass]="'bg-transparent text-400 border-400'"></p-calendar>
            </div>
        </div>
    </div>
</div>`;

  block4 = `
<div class="relative p-7 text-0 overflow-hidden">
    <img src="assets/images/blocks/header-4.jpg" alt="header" class="absolute top-0 left-0 w-auto h-full block md:w-full">

    <div class="text-center my-6 relative">
        <div class="text-6xl mb-3 flex justify-content-center">
            <div class="font-bold">Discover&nbsp;</div>True Power</div>
        <div class="text-2xl text-400 line-height-3 text-center mx-auto" style="max-width: 500px">Your perfect companion for Angular featuring elegant, high-performance, accessible and fully customizable UI Components.</div>
    </div>
</div>`;
}
