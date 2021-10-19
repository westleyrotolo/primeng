import { Component } from '@angular/core';

@Component({
    templateUrl: './navbar.component.html'
})
export class NavBarComponent {

    block1: string = `
<div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style="min-height: 80px">
    <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
    <a class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="lg:relative">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Inbox</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li class="border-top-1 surface-border lg:border-top-none">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                    <div class="block lg:hidden">
                        <div class="text-900 font-medium">Josephine Lillard</div>
                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block2: string = `
<div class="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800" style="min-height: 84px">
    <img src="assets/images/blocks/logos/bastion-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
    <a class="cursor-pointer block lg:hidden text-gray-400" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800">
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer lg:border-1 border-gray-800">
                    <li>
                        <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0 lg:border-1 border-gray-800">
                            <li>
                                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li class="flex-order-2 lg:flex-order-0">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2">
                    <span class="p-input-icon-left w-full">
                        <i class="pi pi-search text-gray-400"></i>
                        <input type="text" pInputText placeholder="Search" class="bg-gray-800 text-gray-400 border-gray-800 w-full" />
                    </span>
                </a>
            </li>
            <li class="border-top-1 border-gray-800 lg:border-top-none">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                    <div class="block lg:hidden">
                        <div class="text-white font-medium">Josephine Lillard</div>
                        <span class="text-gray-400 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block3: string = `
<div class="bg-indigo-500 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static" style="min-height: 84px">
    <img src="assets/images/blocks/logos/bastion-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
    <a class="cursor-pointer block lg:hidden text-indigo-100" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full bg-indigo-500 left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute lg:border-1 border-50 surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
            <li class="flex-order-2 lg:flex-order-0">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2">
                    <span class="p-input-icon-left w-full">
                        <i class="pi pi-search text-indigo-100"></i>
                        <input type="text" pInputText class="bg-indigo-400 text-indigo-100 border-indigo-400 w-full" />
                    </span>
                </a>
            </li>
            <li class="border-top-1 border-indigo-400 lg:border-top-none">
                <a class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                    <div class="block lg:hidden">
                        <div class="text-white font-medium">Josephine Lillard</div>
                        <span class="text-indigo-100 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block4: string = `
<div class="surface-overlay px-6 shadow-2 flex justify-content-between relative lg:static" style="min-height: 84px">
    <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6 align-self-center">
    <a class="cursor-pointer block lg:hidden align-self-center text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex select-none flex-column lg:flex-row">
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
        <ul class="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Inbox</span>
                </a>
            </li>
            <li>
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li class="border-top-1 surface-border lg:border-top-none">
                <a class="flex px-6 p-3 h-full lg:px-3 lg:py-2 align-items-center text-600 border-left-2 lg:border-bottom-2 lg:border-left-none border-transparent hover:border-blue-500 font-medium cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                    <div class="block lg:hidden">
                        <div class="text-900 font-medium">Josephine Lillard</div>
                        <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block5: string = `
<div class="bg-indigo-600 shadow-2 flex relative lg:static" style="min-height: 84px">
    <div class="flex align-items-center justify-content-center px-5 bg-indigo-500">
        <img src="assets/images/blocks/logos/bastion.svg" alt="Image" height="40">
    </div>
    <div class="flex flex-1 px-3">
        <span class="flex align-items-center">
            <i class="pi pi-search text-indigo-100"></i>
        </span>
        <input type="text" class="appearance-none border-none flex-auto bg-transparent outline-none p-component text-indigo-300 pl-3">
    </div>
    <a class="cursor-pointer flex align-items-center justify-content-center lg:hidden text-white pr-5" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="lg:flex hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none lg:pr-5 w-full lg:w-auto bg-indigo-600">
        <ul class="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 border-indigo-500 lg:border-top-none">
            <li>
                <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Inbox</span>
                </a>
            </li>
            <li>
                <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li class="border-top-1 border-indigo-500 lg:border-top-none">
                <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center hover:bg-indigo-700 font-medium cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                    <div class="block lg:hidden">
                        <div class="text-indigo-50 font-medium">Josephine Lillard</div>
                        <span class="text-indigo-100 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block6: string = `
<div class="bg-gray-900 shadow-2 flex relative lg:static" style="min-height: 84px">
    <div class="flex align-items-center justify-content-center px-5 bg-gray-800">
        <img src="assets/images/blocks/logos/bastion.svg" alt="Image" height="40">
    </div>
    <div class="flex flex-1 px-3">
        <span class="flex align-items-center">
            <i class="pi pi-search text-gray-500"></i>
        </span>
        <input type="text" class="appearance-none border-none flex-auto bg-transparent outline-none p-component text-gray-500 pl-3" placeholder="Search for anything">
    </div>
    <a class="cursor-pointer flex align-items-center justify-content-center lg:hidden text-white pr-5" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="lg:flex hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none lg:pr-5 w-full lg:w-auto bg-gray-900">
        <ul class="list-none p-0 m-0 flex select-none flex-column lg:flex-row border-top-1 border-gray-800 lg:border-top-none">
            <li>
                <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-gray-500 hover:text-gray-400 hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                    <span class="block lg:hidden font-medium">Inbox</span>
                </a>
            </li>
            <li>
                <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-gray-500 hover:text-gray-400 hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                    <span class="block lg:hidden font-medium">Notifications</span>
                </a>
            </li>
            <li class="border-top-1 border-gray-800 lg:border-top-none">
                <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center hover:bg-gray-800 font-medium cursor-pointer transition-colors transition-duration-150">
                    <img src="assets/images/blocks/avatars/circle/avatar-m-3.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                    <div class="block lg:hidden">
                        <div class="text-gray-500 font-medium">Josephine Lillard</div>
                        <span class="text-gray-600 font-medium text-sm">Marketing Specialist</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block7: string = `
<div class="surface-overlay relative">
    <div class="py-3 lg:py-2 px-6 flex align-items-center justify-content-between lg:static">
        <img src="assets/images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
        <div class="flex align-items-center">
            <a class="cursor-pointer block lg:hidden text-700 mr-5" pStyleClass="#navbar-sub-7" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <a class="cursor-pointer block lg:hidden text-700" pStyleClass="#navbar-7" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                <i class="pi pi-bars text-4xl"></i>
            </a>
        </div>
        <div id="navbar-sub-7" class="hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
                <li>
                    <a class="flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a class="flex px-6 p-3 lg:px-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a class="flex px-6 p-3 lg:px-3 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div id="navbar-7" class="py-2 px-6 shadow-2 hidden lg:block absolute lg:static lg:w-auto w-full surface-overlay left-0 top-100 z-1 shadow-2">
        <ul class="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
            <li>
                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="lg:relative">
                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block8: string = `
<div class="bg-gray-900 relative px-6">
    <div class="py-3 lg:py-2 flex align-items-center justify-content-between lg:static border-bottom-none lg:border-bottom-1 border-gray-800" style="min-height: 81px">
        <img src="assets/images/blocks/logos/bastion-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
        <div class="flex align-items-center">
            <a class="cursor-pointer block lg:hidden text-gray-400 mr-5" pStyleClass="#navbar-sub-8" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <a class="cursor-pointer block lg:hidden text-gray-400" pStyleClass="#navbar-8" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                <i class="pi pi-bars text-4xl"></i>
            </a>
        </div>
        <div id="navbar-sub-8" class="hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800  lg:border-top-none">
                <li>
                    <a class="flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a class="flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 border-gray-800 lg:border-top-none">
                    <a class="flex px-6 p-3 lg:px-3 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                        <div class="block lg:hidden">
                            <div class="text-gray-400 font-medium">Josephine Lillard</div>
                            <span class="text-gray-500 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div id="navbar-8" class="py-2 px-6 lg:px-0 shadow-2 hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2">
        <ul class="list-none p-0 m-0 flex lg:align-items-center flex-column lg:flex-row select-none">
            <li>
                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-home mr-2"></i>
                    <span>Home</span>
                </a>
            </li>
            <li class="lg:relative">
                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <i class="pi pi-users mr-2"></i>
                    <span>Customers</span>
                    <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer">
                    <li>
                        <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                            <i class="pi pi-user-plus mr-2"></i>
                            <span class="font-medium">Add New</span>
                        </a>
                    </li>
                    <li class="relative">
                        <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150" 
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-search mr-2"></i>
                            <span class="font-medium">Search</span>
                            <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute bg-gray-900 hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i class="pi pi-shopping-cart mr-2"></i>
                                    <span class="font-medium">Purchases</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors transition-duration-150">
                                    <i class="pi pi-comments mr-2"></i>
                                    <span class="font-medium">Messages</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-calendar mr-2"></i>
                    <span>Calendar</span>
                </a>
            </li>
            <li>
                <a class="flex p-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                    <i class="pi pi-chart-line mr-2"></i>
                    <span>Stats</span>
                </a>
            </li>
        </ul>
    </div>
</div>`;

    block9: string = `
<div class="relative">
    <div class="bg-gray-900 px-6 py-3 lg:py-2 flex align-items-center justify-content-between lg:static border-bottom-none" style="min-height: 81px">
        <img src="assets/images/blocks/logos/bastion-300.svg" alt="Image" height="40" class="mr-0 lg:mr-6">
        <a class="cursor-pointer block lg:hidden text-gray-400" pStyleClass="#navbar-sub-9" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-ellipsis-v text-2xl"></i>
        </a>
        <div id="navbar-sub-9" class="hidden lg:block absolute lg:static lg:w-auto w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 border-gray-800  lg:border-top-none">
                <li>
                    <a class="flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a class="flex px-6 p-3 lg:px-3 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 border-gray-800 lg:border-top-none">
                    <a class="flex px-6 p-3 lg:px-3 align-items-center hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 28px; height: 28px"/>
                        <div class="block lg:hidden">
                            <div class="text-gray-400 font-medium">Josephine Lillard</div>
                            <span class="text-gray-500 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="flex" style="min-height: 66px">
        <a class="cursor-pointer flex bg-indigo-700 px-6 py-2 align-items-center hover:bg-indigo-600 transition-colors transition-duration-150 relative"
            pStyleClass="#dashboards" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
            <span class="border-round bg-orange-400 text-gray-900 inline-flex align-items-center justify-content-center flex-shrink-0 mr-3" style="width:40px;height:40px">AD</span>
            <div class="hidden lg:block select-none">
                <span class="text-indigo-100 block mb-1 text-lg font-medium white-space-nowrap">Analytics Dashboard</span>
                <p class="m-0 text-indigo-200">5 New Actions</p>
            </div>
            <i class="pi pi-chevron-down text-indigo-200 ml-3 lg:ml-5"></i>
            <div id="dashboards" class="hidden absolute left-0 top-100 shadow-2 bg-indigo-700 border-round-bottom w-full origin-top">
                <ul class="list-none m-0 px-0 lg:px-6 py-3">
                    <li>
                        <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round select-none">
                            <i class="pi pi-shopping-cart mr-2"></i>
                            <span class="font-medium">Sales</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round select-none">
                            <i class="pi pi-users mr-2"></i>
                            <span class="font-medium">Users</span>
                        </a>
                    </li>
                </ul>
            </div>
        </a>
        <div class="bg-indigo-500 flex-1 flex align-items-center">
            <a class="cursor-pointer block xl:hidden text-indigo-100 ml-auto mr-6" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
                <i class="pi pi-bars text-4xl"></i>
            </a>
            <div class="xl:block hidden absolute xl:static bg-indigo-500 w-full left-0 top-100 z-1 shadow-2">
                <ul class="list-none py-2 px-6 m-0 flex xl:align-items-center flex-column xl:flex-row select-none">
                    <li>
                        <a class="flex p-3  align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i class="pi pi-home mr-2"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li class="xl:relative">
                        <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150"
                            pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                            <i class="pi pi-users mr-2"></i>
                            <span>Customers</span>
                            <i class="pi pi-angle-down ml-auto xl:ml-3"></i>
                        </a>
                        <ul class="list-none py-0 pl-3 m-0 xl:px-0 xl:py-0 border-round shadow-0 xl:shadow-2 xl:absolute bg-indigo-500 hidden origin-top w-full xl:w-15rem cursor-pointer">
                            <li>
                                <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                    <i class="pi pi-user-plus mr-2"></i>
                                    <span class="font-medium">Add New</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150" 
                                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                                    <i class="pi pi-search mr-2"></i>
                                    <span class="font-medium">Search</span>
                                    <i class="pi pi-angle-down ml-auto xl:-rotate-90"></i>
                                </a>
                                <ul class="list-none py-0 pl-3 m-0 xl:px-0 xl:py-0 border-round shadow-0 xl:shadow-2 xl:absolute bg-indigo-500 hidden origin-top w-full xl:w-15rem cursor-pointer left-100 top-0">
                                    <li>
                                        <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                            <i class="pi pi-shopping-cart mr-2"></i>
                                            <span class="font-medium">Purchases</span>
                                        </a>
                                    </li>
                                    <li class="relative">
                                        <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                                            <i class="pi pi-comments mr-2"></i>
                                            <span class="font-medium">Messages</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i class="pi pi-calendar mr-2"></i>
                            <span>Calendar</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex p-3  align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium border-round cursor-pointer transition-colors transition-duration-150">
                            <i class="pi pi-chart-line mr-2"></i>
                            <span>Stats</span>
                        </a>
                    </li>
                    <li class="border-top-1 xl:border-left-1 my-3 xl:my-0 xl:border-top-none border-indigo-400 xl:ml-auto pl-3">
                        <span class="p-input-icon-left">
                            <i class="pi pi-search text-indigo-200"></i>
                            <input type="text" class="bg-transparent appearance-none border-none py-3 pr-3 pl-5 p-component text-indigo-200 outline-none w-full">        
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

    block10: string = `
<div class="bg-indigo-500 px-6 shadow-2 flex relative lg:static" style="min-height: 75px">
    <a class="cursor-pointer flex p-3 align-items-center hover:bg-indigo-600 transition-colors transition-duration-150 relative select-none"
        pStyleClass="#profile-10" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
        <img src="assets/images/blocks/avatars/circle/avatar-f-6.png" class="lg:mr-3" style="width: 40px; height: 40px"/>
        <div class="hidden lg:block">
            <span class="text-indigo-100 block mb-1 text-lg font-medium white-space-nowrap">Kristin Watson</span>
            <p class="m-0 text-indigo-200">Manager</p>
        </div>
        <i class="pi pi-chevron-down text-indigo-200 ml-3 hidden lg:block"></i>
        <div id="profile-10" class="hidden absolute left-0 top-100 shadow-2 bg-indigo-600 border-round-bottom w-15rem lg:w-full origin-top">
            <ul class="list-none m-0 p-3">
                <li>
                    <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                        <i class="pi pi-user mr-2"></i>
                        <span class="font-medium">Profile</span>
                    </a>
                </li>
                <li>
                    <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                        <i class="pi pi-cog mr-2"></i>
                        <span class="font-medium">Settings</span>
                    </a>
                </li>
                <li>
                    <a class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round">
                        <i class="pi pi-sign-out mr-2"></i>
                        <span class="font-medium">Sign Out</span>
                    </a>
                </li>
            </ul>
        </div>
    </a>
    <div class="flex-auto flex pl-5 overflow-auto">
        <ul class="flex list-none p-0 m-0">
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i class="pi pi-home text-2xl"></i>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i class="pi pi-users text-2xl"></i>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i class="pi pi-calendar text-2xl"></i>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i class="pi pi-folder text-2xl"></i>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150">
                    <i class="pi pi-chart-line text-2xl"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="flex ml-5">
        <a class="cursor-pointer inline-flex align-items-center justify-content-center lg:hidden text-white" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars text-4xl"></i>
        </a>
        <div class="lg:block hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto bg-indigo-500">
            <ul class="h-full list-none p-0 m-0 flex select-none flex-column lg:flex-row">
                <li>
                    <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-search lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Search</span>
                    </a>
                </li>
                <li>
                    <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-inbox lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150">
                        <i class="pi pi-bell lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>`;

    block11: string = `
<div class="surface-overlay shadow-2 flex relative lg:static justify-content-between" style="min-height: 42px">
    <a class="cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-bars text-2xl"></i>
    </a>
    <div class="hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="flex list-none p-0 m-0 flex-column lg:flex-row">
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-blue-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span class="pi pi-home mr-2"></span>
                    <span class="font-medium">Home</span>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span class="pi pi-users mr-2"></span>
                    <span class="font-medium">Customers</span>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span class="pi pi-calendar mr-2"></span>
                    <span class="font-medium">Calendar</span>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                    <span class="pi pi-home mr-2"></span>
                    <span class="font-medium">Stats</span>
                </a>
            </li>
        </ul>
    </div>

    <a class="cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
        <i class="pi pi-ellipsis-v text-xl"></i>
    </a>
    <div class="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
        <ul class="flex list-none p-0 m-0 flex-column lg:flex-row">
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                    <span class="pi pi-book mr-2 lg:mr-0"></span>
                    <span class="font-medium inline lg:hidden">Documentation</span>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                    <span class="pi pi-inbox mr-2 lg:mr-0"></span>
                    <span class="font-medium inline lg:hidden">Inbox</span>
                </a>
            </li>
            <li class="h-full">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                    <span class="pi pi-bell mr-2 lg:mr-0"></span>
                    <span class="font-medium inline lg:hidden">Notifications</span>
                </a>
            </li>
            <li class="h-full relative">
                <a class="cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150"
                    pStyleClass="@next" enterClass="hidden" enterActiveClass="scalein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="lg:mr-0" style="width: 28px; height: 28px"/>
                    <span class="mx-2 font-medium text-900">Jane Sanders</span>
                    <i class="pi pi-angle-down"></i>
                </a>
                <div class="hidden static lg:absolute w-full surface-overlay left-0 top-100 z-1 shadow-none lg:shadow-2 origin-top border-round pl-3 lg:pl-0">
                    <ul class="list-none p-0 m-0">
                        <li>
                            <a class="cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span class="pi pi-user mr-2"></span>
                                <span class="font-medium">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span class="pi pi-cog mr-2"></span>
                                <span class="font-medium">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a class="cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                <span class="pi pi-sign-out mr-2"></span>
                                <span class="font-medium">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>        
        </ul>
    </div>
</div>`;
    
}