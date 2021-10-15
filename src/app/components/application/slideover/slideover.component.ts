import { Component } from '@angular/core';

@Component({
    templateUrl: './slideover.component.html'
})
export class SlideOverComponent {

    users: { picture: string, name: string }[] = [
        { "picture": 'f-1.png', "name": "Jane Watson" },
        { "picture": 'm-1.png', "name": "David Wilford" },
        { "picture": 'f-2.png', "name": "Annette Black" },
        { "picture": 'f-3.png', "name": "Leslie Alexander" },
        { "picture": 'f-4.png', "name": "Savannah Nguyen" },
        { "picture": 'm-2.png', "name": "Alberto Flores" }
    ];

    user: number = 2;

    block1 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-right" 
    pStyleClass="#slideover-1" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true"></button>

<div id="slideover-1" class="hidden surface-overlay absolute top-0 left-0 shadow-2 w-18rem h-full">
    <div class="flex flex-column h-full p-4">
        <div class="flex align-items-center justify-content-between mb-4">
            <span class="text-900 text-xl font-medium">Title Placeholder</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-1" leaveToClass="hidden" leaveActiveClass="fadeoutleft"></button>
        </div>
        <div class="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
    </div>
</div>`;

    block2 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left" 
    pStyleClass="#slideover-2" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-2" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full">
    <div class="flex flex-column h-full p-4">
        <div class="flex align-items-center justify-content-between mb-4">
            <span class="text-900 text-xl font-medium">Title Placeholder</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-2" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <div class="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
    </div>
</div>`;

    block3 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left" 
    pStyleClass="#slideover-3" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-3" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full">
    <div class="flex flex-column h-full p-4">
        <div class="flex align-items-center justify-content-between mb-4">
            <span class="text-900 text-xl font-medium">Title Placeholder</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-3" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <div class="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
    </div>
</div>`;

    block4 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left" 
    pStyleClass="#slideover-4" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-4" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full">
    <div class="flex flex-column h-full">
        <div class="flex align-items-start bg-gray-800 justify-content-between p-3">
            <div>
                <div class="text-white text-xl font-medium mb-1">Title Placeholder</div>
                <p class="m-0 p-0 line-height-3 text-gray-400 text-sm">Vitae turpis massa sed tempus egestas sed sed risus.</p>
            </div>
            <div>
                <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-warning p-button-plain" pStyleClass="#slideover-4" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
            </div>
        </div>
        <div class="m-4 border-2 border-round border-dashed surface-border flex-auto overflow-y-auto"></div>
    </div>
</div>`;

    block5 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left"
    pStyleClass="#slideover-5" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-5" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-18rem h-full">
    <div class="flex flex-column p-4 h-full w-18rem">
        <div class="flex align-items-center justify-content-between mb-4">
            <span class="text-900 text-xl font-medium">Title Placeholder</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-5" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <div class="border-2 border-dashed surface-border flex-auto overflow-y-auto p-3"></div>
        <div class="pt-3 border-top-1 surface-border mt-3 flex">
            <button pButton pRipple icon="pi pi-times" class="p-button-text mr-2 flex-auto" label="Cancel" pStyleClass="#slideover-5" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
            <button pButton pRipple icon="pi pi-check" class="ml-2 flex-auto" label="Save" pStyleClass="#slideover-5" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
    </div>
</div>`;

    block6 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left"
    pStyleClass="#slideover-6" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-6" class="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-20rem">
    <div class="flex flex-column h-full">
        <div class="flex align-items-center justify-content-between p-4">
            <div>
                <div class="text-900 text-xl font-medium mb-1">Contacts</div>
                <p class="text-600 m-0">9 People</p>
            </div>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-6" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <div class="flex-auto overflow-y-auto">
            <ul class="list-none p-0 m-0">
                <li class="surface-100 font-medium text-xl px-4 py-1 mb-2">A</li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-m-1.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Aaron Flore</span>
                            <p class="m-0 text-600 text-sm">Prime Coffee</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Annette Black</span>
                            <p class="m-0 text-600 text-sm">Bank of Prime</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-m-2.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Abha Watson</span>
                            <p class="m-0 text-600 text-sm">PrimeCard</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="surface-100 font-medium text-xl px-4 py-1 mb-2">B</li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-2.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Balcaz Cooper</span>
                            <p class="m-0 text-600 text-sm">Prime Coffee</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Beatrix McKinney</span>
                            <p class="m-0 text-600 text-sm">Bank of Prime</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-m-3.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Belva Wilson</span>
                            <p class="m-0 text-600 text-sm">Franki Inc</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-m-4.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Barnes Fox</span>
                            <p class="m-0 text-600 text-sm">Prime Electric</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="surface-100 font-medium text-xl px-4 py-1 mb-2">C</li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-m-5.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Canyon Flores</span>
                            <p class="m-0 text-600 text-sm">Ipsum Inc</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
                <li class="mb-2">
                    <a class="flex align-items-center py-2 px-4 cursor-pointer hover:surface-200 transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mr-3 flex-shrink-0" style="width:50px;height:50px" />
                        <div>
                            <span class="text-900 font-medium mb-2">Carmen Cooper</span>
                            <p class="m-0 text-600 text-sm">Lorem LLC</p>
                        </div>
                        <i class="ml-auto pi pi-chevron-right text-700"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block7 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left"
    pStyleClass="#slideover-7" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-7" class="hidden surface-overlay absolute top-0 right-0 shadow-2 w-20rem h-full">
    <div class="flex flex-column p-4 h-full">
        <div class="flex align-items-center justify-content-between mb-4">
            <span class="text-900 text-xl font-medium">Profile</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-7" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <div class="flex-auto overflow-y-auto">
            <div class="text-center mb-4">
                <img src="assets/images/blocks/avatars/circle/avatar-f-3.png" style="width:70px;height:70px" />
                <div class="text-900 mt-3 mb-2 text-xl font-medium">Isabel Rio</div>
                <span class="text-700">Sales Manager</span>
            </div>
            <div class="flex align-items-center justify-content-between mb-5">
                <a class="cursor-pointer flex-shrink-0 border-round inline-flex justify-content-center align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 border-circle" style="width:38px;height:38px">
                    <i class="pi pi-comment text-xl text-600"></i>
                </a>
                <a class="cursor-pointer flex-shrink-0 border-round inline-flex justify-content-center align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 border-circle" style="width:38px;height:38px">
                    <i class="pi pi-phone text-xl text-600"></i>
                </a>
                <a class="cursor-pointer flex-shrink-0 border-round inline-flex justify-content-center align-items-center surface-100 hover:surface-200 transition-colors transition-duration-150 border-circle" style="width:38px;height:38px">
                    <i class="pi pi-video text-xl text-600"></i>
                </a>
            </div>
            <ul class="list-none p-0 m-0">
                <li class="surface-100 text-sm text-700 font-medium p-2 border-round mb-1">NAME</li>
                <li class="text-900 p-2">Isabel Rio</li>
                <li class="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">MEMBER SINCE</li>
                <li class="text-900 p-2">23/10/2021</li>
                <li class="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">LOCAL TIME</li>
                <li class="text-900 p-2">16:40</li>
                <li class="surface-100 text-sm text-700 font-medium p-2 border-round mt-4 mb-1">RECENT ORDERS</li>
                <li>
                    <ul class="list-none p-0 m-0">
                        <li class="py-2 border-bottom-1 surface-border">
                            <a class="cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                <img src="assets/images/blocks/products/sport-shoe.png" class="mr-3 flex-shrink-0" style="width:39px;height:39px" />
                                <div>
                                    <span class="block text-900 mb-1">Sports Shoes</span>
                                    <p class="m-0 text-600 font-medium text-sm">SRT30321</p>
                                </div>
                                <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            </a>
                        </li>
                        <li class="py-2 border-bottom-1 surface-border">
                            <a class="cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                <img src="assets/images/blocks/products/dslr-camera.png" class="mr-3 flex-shrink-0" style="width:39px;height:39px" />
                                <div>
                                    <span class="block text-900 mb-1">DSRL Camera</span>
                                    <p class="m-0 text-600 font-medium text-sm">OBS90211</p>
                                </div>
                                <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            </a>
                        </li>
                        <li class="py-2">
                            <a class="cursor-pointer flex align-items-center justify-content-between hover:surface-200 transition-colors transition-duration-150 border-round p-2">
                                <img src="assets/images/blocks/products/wireless-headphone.png" class="mr-3 flex-shrink-0" style="width:39px;height:39px" />
                                <div>
                                    <span class="block text-900 mb-1">Headphone</span>
                                    <p class="m-0 text-600 font-medium text-sm">APE302123</p>
                                </div>
                                <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block8 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-right" 
    pStyleClass="#slideover-8" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft" [hideOnOutsideClick]="true"></button>

<div id="slideover-8" class="hidden surface-overlay h-full absolute top-0 left-0 shadow-2 w-18rem">
    <div class="flex flex-column h-full">
        <div class="flex align-items-center justify-content-between mb-4 p-4">
            <span class="text-900 text-xl font-medium">Purchase Ticket</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-8" leaveToClass="hidden" leaveActiveClass="fadeoutleft"></button>
        </div>
        <div class="flex-auto overflow-y-auto">
            <ul class="list-none p-0 m-0">
                <li class="flex align-items-center border-top-1 surface-border p-3">
                    <span class="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style="width:35px;height:35px">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-700 font-medium">Personal Information</span>
                </li>
                <li class="flex align-items-center border-top-1 surface-border p-3">
                    <span class="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style="width:35px;height:35px">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-700 font-medium">Destination</span>
                </li>
                <li class="flex align-items-center border-top-1 surface-border p-3">
                    <span class="border-circle bg-green-500 text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style="width:35px;height:35px">
                        <i class="pi pi-check"></i>
                    </span>
                    <span class="text-700 font-medium">Date</span>
                </li>
                <li class="border-top-1 surface-border p-3">
                    <div class="flex align-items-center mb-3">
                        <span class="border-circle surface-900 text-0 text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 border-transparent" style="width:35px;height:35px">
                            <i class="pi pi-table"></i>
                        </span>
                        <span class="text-900 font-medium font-bold">Seat</span>
                    </div>
                    <ul class="list-none p-0 m-0">
                        <li class="flex align-items-center p-2">
                            <i class="pi pi-check text-green-500"></i>
                            <span class="text-600 ml-3">Choose Tier</span>
                        </li>
                        <li class="flex align-items-center p-2">
                            <span class="text-900 ml-5 font-bold">Select Seat</span>
                            <i class="pi pi-arrow-right text-900 ml-auto"></i>
                        </li>
                    </ul>
                </li>
                <li class="flex align-items-center border-top-1 surface-border p-3">
                    <span class="border-circle text-white text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 surface-border" style="width:35px;height:35px">
                        <i class="pi pi-credit-card text-700"></i>
                    </span>
                    <span class="text-700 font-medium">Payment</span>
                </li>
                <li class="flex align-items-center border-top-1 surface-border p-3">
                    <span class="border-circle text-2xl inline-flex align-items-center justify-content-center mr-3 border-1 surface-border" style="width:35px;height:35px">
                        <i class="pi pi-thumbs-up text-700"></i>
                    </span>
                    <span class="text-700 font-medium">Confirmation</span>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block9 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left" 
    pStyleClass="#slideover-9" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-9" class="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-30rem">
    <div class="flex flex-column p-4 h-full">
        <div class="flex align-items-center justify-content-between mb-4">
            <span class="flex align-items-center">
                <img src="assets/images/blocks/avatars/circle/avatar-{{users[user].picture}}" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                <span class="text-900 text-xl font-medium">{{users[user].name}}</span>
            </span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-9" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <div class="flex border-1 border-round surface-border flex-auto">
            <div style="width:70px" class="flex border-right-1 surface-border flex-shrink-0">
                <ul class="flex flex-column list-none p-0 m-0 w-full">
                    <li *ngFor="let usr of users; let i = index">
                        <a class="cursor-pointer flex align-items-center justify-content-center border-right-2 border-transparent p-2 hover:border-300 transition-colors transition-duration-150" 
                            [ngClass]="{'border-blue-500 surface-200': i === user}" (click)="user = i">
                            <img src="assets/images/blocks/avatars/circle/avatar-{{users[i].picture}}" class="flex-shrink-0" style="width:42px;height:42px" />
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-auto flex-column overflow-y-auto">
                <ul class="flex-auto list-none p-0 m-0" *ngIf="user === 2">
                    <li class="flex justify-content-end p-3">
                        <div>
                            <p class="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2" style="max-width: 275px">Neque vitae tempus quam pellentesque nec nam aliquam sem. 
                                Etiam tempor orci eu lobortis elementum.</p>
                            <div class="text-right text-500 text-sm">14:43</div>
                        </div>
                    </li>
                    <li class="flex justify-content-start p-3">
                        <div>
                            <p class="shadow-2 surface-card text-900 p-3 line-height-3 border-round mt-0 mb-2" style="max-width: 275px">Ultricies mi eget mauris pharetra et ultrices neque. Et odio pellentesque diam volutpat.</p>
                            <div class="text-right text-500 text-sm">14:45</div>
                        </div>
                    </li>
                    <li class="flex justify-content-end p-3">
                        <div>
                            <p class="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2" style="max-width: 275px">Neque vitae tempus quam pellentesque nec nam aliquam sem. 
                                Etiam tempor orci eu lobortis elementum.</p>
                            <p class="shadow-2 bg-blue-600 text-white p-3 line-height-3 border-round mt-0 mb-2" style="max-width: 275px">Imperdiet dui accumsan sit.</p>
                            <div class="text-right text-500 text-sm">14:50</div>
                        </div>
                    </li>
                </ul>
                <ul class="flex-auto list-none p-0 m-0" *ngIf="user !== 2">
                    <li class="flex p-3">
                        <p class="flex align-items-center shadow-2 border-round bg-yellow-100 text-yellow-900 m-0 p-3 w-full">
                            <i class="pi pi-lock mr-3"></i>
                            <span class="line-height-3">Messages are end-to-end encrypted. No one expect you and receiver can read them. None of messages are saved to our servers.</span>
                        </p>
                    </li>
                </ul>
                <div class="p-4 border-top-1 surface-border p-input-filled">
                    <span class="p-input-icon-right block">
                        <i class="pi pi-send"></i>
                        <input type="text" pInputText class="p-3 w-full" placeholder="Message">
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block10 = `
<button pButton pRipple label="Display" icon="pi pi-arrow-left"
    pStyleClass="#slideover-10" enterClass="hidden" enterActiveClass="fadeinright" leaveToClass="hidden" leaveActiveClass="fadeoutright" [hideOnOutsideClick]="true"></button>

<div id="slideover-10" class="hidden surface-overlay h-full absolute top-0 right-0 shadow-2 w-24rem">
    <div class="flex flex-column p-4 h-full">
        <div class="flex align-items-center justify-content-between mb-4">
            <span class="text-900 text-xl font-medium">Orders</span>
            <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#slideover-10" leaveToClass="hidden" leaveActiveClass="fadeoutright"></button>
        </div>
        <p-tabView>
            <p-tabPanel header="Processed">
                <ul class="list-none p-0 m-0">
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/speaker.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Bluetooth Speaker</span>
                                <p class="m-0 text-600 font-medium text-sm">#99812</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/gaming.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Gaming Device</span>
                                <p class="m-0 text-600 font-medium text-sm">#60210</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/skateboard.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Skateboard</span>
                                <p class="m-0 text-600 font-medium text-sm">#40197</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/wax.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Strong Wax</span>
                                <p class="m-0 text-600 font-medium text-sm">#47082</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/juice.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Berry Juice</span>
                                <p class="m-0 text-600 font-medium text-sm">#59901</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/sport-shoe.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Sports Shoe</span>
                                <p class="m-0 text-600 font-medium text-sm">#47122</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                </ul>
            </p-tabPanel>

            <p-tabPanel header="Pending">
                <ul class="list-none p-0 m-0">
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/running-shoe.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Running Shoes</span>
                                <p class="m-0 text-600 font-medium text-sm">#99210</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/instant-camera.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Instant Camera</span>
                                <p class="m-0 text-600 font-medium text-sm">#55018</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/sunglasses.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Sunglasses</span>
                                <p class="m-0 text-600 font-medium text-sm">#18880</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/dslr-camera.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">DSLR Camera</span>
                                <p class="m-0 text-600 font-medium text-sm">#9402</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                </ul>
            </p-tabPanel>

            <p-tabPanel header="Completed">
                <ul class="list-none p-0 m-0">
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/cupcake.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Bluetooth Speaker</span>
                                <p class="m-0 text-600 font-medium text-sm">#49991</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/wireless-headphone.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Gaming Device</span>
                                <p class="m-0 text-600 font-medium text-sm">#9921</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/perfume.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Perfume</span>
                                <p class="m-0 text-600 font-medium text-sm">#7502</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/model-car.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Model Car</span>
                                <p class="m-0 text-600 font-medium text-sm">#47082</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                    <li class="border-bottom-1 surface-border py-2">
                        <a class="flex align-items-center p-2 cursor-pointer border-round hover:surface-200 transition-colors transition-duration-150">
                            <img src="assets/images/blocks/products/spoons.png" class="mr-3 flex-shrink-0" style="width:42px;height:42px" />
                            <div>
                                <span class="block text-900 mb-1">Spoon Set</span>
                                <p class="m-0 text-600 font-medium text-sm">#10002</p>
                            </div>
                            <i class="ml-auto pi pi-chevron-right text-600 text-sm"></i>
                        </a>
                    </li>
                </ul>
            </p-tabPanel>
        </p-tabView>
    </div>
</div>`;

}
