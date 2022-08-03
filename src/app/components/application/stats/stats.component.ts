import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './stats.component.html'
})
export class StatsComponent implements OnInit {

    block1 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Orders</span>
                        <div class="text-900 font-medium text-xl">152</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-shopping-cart text-blue-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">24 new </span>
                <span class="text-500">since last visit</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Revenue</span>
                        <div class="text-900 font-medium text-xl">$2.100</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-orange-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-map-marker text-orange-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">%52+ </span>
                <span class="text-500">since last week</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Customers</span>
                        <div class="text-900 font-medium text-xl">28441</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-cyan-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-inbox text-cyan-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">520  </span>
                <span class="text-500">newly registered</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 p-3 border-round">
                <div class="flex justify-content-between mb-3">
                    <div>
                        <span class="block text-500 font-medium mb-3">Comments</span>
                        <div class="text-900 font-medium text-xl">152 Unread</div>
                    </div>
                    <div class="flex align-items-center justify-content-center bg-purple-100 border-round" style="width:2.5rem;height:2.5rem">
                        <i class="pi pi-comment text-purple-500 text-xl"></i>
                    </div>
                </div>
                <span class="text-green-500 font-medium">85 </span>
                <span class="text-500">responded</span>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="surface-card shadow-2 border-round flex p-3 flex-column md:flex-row">
        <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
            <div class="flex align-items-center mb-3">
                <i class="pi pi-shopping-cart text-blue-500 text-xl mr-2"></i>
                <span class="text-500 font-medium">Orders</span>
            </div>
            <span class="block text-900 font-medium mb-4 text-xl">152 New</span>
            <div class="flex align-items-center">
                <i class="pi pi-arrow-down text-pink-500 text-xl mr-2"></i>
                <span class="text-pink-500 font-medium ">-25</span>
            </div>
        </div>
        <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
            <div class="flex align-items-center mb-3">
                <i class="pi pi-shopping-cart text-orange-500 text-xl mr-2"></i>
                <span class="text-500 font-medium">Revenue</span>
            </div>
            <span class="block text-900 font-medium mb-4 text-xl">$1500</span>
            <div class="flex align-items-center">
                <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                <span class="text-green-500 font-medium ">+15</span>
            </div>
        </div>
        <div class="border-bottom-1 md:border-right-1 md:border-bottom-none surface-border flex-auto p-3">
            <div class="flex align-items-center mb-3">
                <i class="pi pi-users text-cyan-500 text-xl mr-2"></i>
                <span class="text-500 font-medium">Customers</span>
            </div>
            <span class="block text-900 font-medium mb-4 text-xl">25100</span>
            <div class="flex align-items-center">
                <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                <span class="text-green-500 font-medium ">+%12</span>
            </div>
        </div>
        <div class="flex-auto p-3">
            <div class="flex align-items-center mb-3">
                <i class="pi pi-users text-purple-500 text-xl mr-2"></i>
                <span class="text-500 font-medium">Comments</span>
            </div>
            <span class="block text-900 font-medium mb-4 text-xl">72</span>
            <div class="flex align-items-center">
                <i class="pi pi-arrow-up text-green-500 text-xl mr-2"></i>
                <span class="text-green-500 font-medium ">+20</span>
            </div>
        </div>
    </div>
</div>`;

    block3 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round">
                <div class="p-3 flex align-items-start">
                    <img src="assets/images/blocks/crypto/btc.png" style="width:32px; height: 32px" class="mr-2">
                    <div>
                        <span class="text-700">Bitcoin</span>
                        <div class="text-green-500 text-xl mt-2">+0.53%</div>
                    </div>
                    <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">0.0045 BTC</div>
                </div>
                <img src="assets/images/blocks/graphs/graph-1.svg" class="w-full">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round">
                <div class="p-3 flex align-items-start">
                    <img src="assets/images/blocks/crypto/eth.png" style="width:32px; height: 32px" class="mr-2">
                    <div>
                        <span class="text-700">Ethereum</span>
                        <div class="text-green-500 text-xl mt-2">+3.52%</div>
                    </div>
                    <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">25.0985 ETH</div>
                </div>
                <img src="assets/images/blocks/graphs/graph-2.svg" class="w-full">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round">
                <div class="p-3 flex align-items-start">
                    <img src="assets/images/blocks/crypto/btc.png" style="width:32px; height: 32px" class="mr-2">
                    <div>
                        <span class="text-700">Dogecoin</span>
                        <div class="text-pink-500 text-xl mt-2">-0.32%</div>
                    </div>
                    <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">59000 DOGE</div>
                </div>
                <img src="assets/images/blocks/graphs/graph-3.svg" class="w-full">
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3">
            <div class="surface-card shadow-2 border-round">
                <div class="p-3 flex align-items-start">
                    <img src="assets/images/blocks/crypto/xlm.png" style="width:32px; height: 32px" class="mr-2">
                    <div>
                        <span class="text-700">Stellar</span>
                        <div class="text-green-500 text-xl mt-2">+0.99%</div>
                    </div>
                    <div class="p-2 bg-indigo-50 text-indigo-500 border-round ml-auto">1400 XLM</div>
                </div>
                <img src="assets/images/blocks/graphs/graph-4.svg" class="w-full">
            </div>
        </div>
    </div>
</div>`;

    block4 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start">
                    <div class="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style="width:52px; height: 52px">
                        <img src="assets/images/blocks/illustration/stats-illustration-1.svg" width="38" height="38" />
                    </div>
                    <div class="ml-3 flex-1">
                        <span class="block text-900 mb-1 text-xl font-medium">Revenue</span>
                        <p class="text-600 mt-0 mb-5 text-sm">Sales Goal</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-700">Achieved</span>
                            <span class="font-bold text-700">12/12</span>
                        </div>
                        <ul class="list-none p-0 m-0 flex align-content-center mt-2">
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-blue-500"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start">
                    <div class="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style="width:52px; height: 52px">
                        <img src="assets/images/blocks/illustration/stats-illustration-2.svg" width="38" height="38" />
                    </div>
                    <div class="ml-3 flex-1">
                        <span class="block text-900 mb-1 text-xl font-medium">Reviews</span>
                        <p class="text-600 mt-0 mb-5 text-sm">Client Messages</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-700">In Progress</span>
                            <span class="font-bold text-700">4/12</span>
                        </div>
                        <ul class="list-none p-0 m-0 flex align-content-center mt-2">
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-orange-500"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start">
                    <div class="bg-blue-100 border-round inline-flex align-items-center justify-content-center" style="width:52px; height: 52px">
                        <img src="assets/images/blocks/illustration/stats-illustration-3.svg" width="38" height="38" />
                    </div>
                    <div class="ml-3 flex-1">
                        <span class="block text-900 mb-1 text-xl font-medium">Tasks</span>
                        <p class="text-600 mt-0 mb-5 text-sm">Completed Tasks</p>
                        <div class="flex align-items-center justify-content-between">
                            <span class="text-700">In Progress</span>
                            <span class="font-bold text-700">8/12</span>
                        </div>
                        <ul class="list-none p-0 m-0 flex align-content-center mt-2">
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500 mr-2"></li>
                            <li style="height:7px; border-radius: 3px" class="flex-1 bg-purple-500"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block5 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start mb-5">
                    <img src="assets/images/blocks/avatars/circle-big/avatar-m-1.png" width="56" height="56" />
                    <div class="ml-3">
                        <span class="block text-900 mb-1 text-xl font-medium">Cameron Williamson</span>
                        <p class="text-600 mt-0 mb-0">Marketing Coordinator</p>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="mb-5">
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-twitter mr-2"></i>
                                <span class="font-medium text-900">Twitter</span>
                            </span>
                            <span class="text-cyan-500 font-medium">34.00%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-cyan-500 h-full" style="width:34%; border-radius: 4px"></div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-facebook mr-2"></i>
                                <span class="font-medium text-900">Facebook</span>
                            </span>
                            <span class="text-indigo-500 font-medium">45.86%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-indigo-500 h-full" style="width:45%; border-radius: 4px"></div>
                        </div>
                    </li>
                    <li>
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-google mr-2"></i>
                                <span class="font-medium text-900">Google</span>
                            </span>
                            <span class="text-orange-500 font-medium">79.00%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-orange-500 h-full" style="width:79%; border-radius: 4px"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start mb-5">
                    <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" width="56" height="56" />
                    <div class="ml-3">
                        <span class="block text-900 mb-1 text-xl font-medium">Kathryn Murphy</span>
                        <p class="text-600 mt-0 mb-0">Sales Manager</p>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="mb-5">
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-twitter mr-2"></i>
                                <span class="font-medium text-900">Twitter</span>
                            </span>
                            <span class="text-cyan-500 font-medium">64.47%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-cyan-500 h-full" style="width:64%; border-radius: 4px"></div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-facebook mr-2"></i>
                                <span class="font-medium text-900">Facebook</span>
                            </span>
                            <span class="text-indigo-500 font-medium">75.67%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-indigo-500 h-full" style="width:75%; border-radius: 4px"></div>
                        </div>
                    </li>
                    <li>
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-google mr-2"></i>
                                <span class="font-medium text-900">Google</span>
                            </span>
                            <span class="text-orange-500 font-medium">45.00%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-orange-500 h-full" style="width:45%; border-radius: 4px"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-2">
            <div class="shadow-2 surface-card border-round p-4 h-full">
                <div class="flex align-items-start mb-5">
                    <img src="assets/images/blocks/avatars/circle-big/avatar-m-3.png" width="56" height="56" />
                    <div class="ml-3">
                        <span class="block text-900 mb-1 text-xl font-medium">Darrell Steward</span>
                        <p class="text-600 mt-0 mb-0">Web Designer</p>
                    </div>
                </div>
                <ul class="list-none p-0 m-0">
                    <li class="mb-5">
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-twitter mr-2"></i>
                                <span class="font-medium text-900">Twitter</span>
                            </span>
                            <span class="text-cyan-500 font-medium">23.55%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-cyan-500 h-full" style="width:34%; border-radius: 4px"></div>
                        </div>
                    </li>
                    <li class="mb-5">
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-facebook mr-2"></i>
                                <span class="font-medium text-900">Facebook</span>
                            </span>
                            <span class="text-indigo-500 font-medium">78.65%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-indigo-500 h-full" style="width:45%; border-radius: 4px"></div>
                        </div>
                    </li>
                    <li>
                        <div class="flex justify-content-between align-items-center">
                            <span class="text-900 inline-flex justify-content-between align-items-center">
                                <i class="pi pi-google mr-2"></i>
                                <span class="font-medium text-900">Google</span>
                            </span>
                            <span class="text-orange-500 font-medium">86.54%</span>
                        </div>
                        <div class="surface-300 w-full mt-2" style="height: 7px; border-radius: 4px">
                            <div class="bg-orange-500 h-full" style="width:79%; border-radius: 4px"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`;

    block6 = `
<div class="shadow-2 surface-card border-round p-3">
    <div class="flex align-items-center justify-content-between">
        <span class="text-xl font-medium text-900">Traffic Distribution</span>
        <div class="ml-8">
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    <div class="mt-3">
        <div class="grid">
            <div class="col-12 md:col-6">
                <div class="text-center border-1 surface-border border-round p-4">
                    <i class="pi pi-twitter text-5xl text-blue-500"></i>
                    <div class="text-900 text-2xl font-700 my-3 font-bold">12.40K</div>
                    <span class="font-medium text-600">Twitter</span>
                </div>
            </div>
            <div class="col-12 md:col-6 text-center">
                <div class="text-center border-1 surface-border border-round p-4">
                    <i class="pi pi-vimeo text-5xl text-blue-500"></i>
                    <div class="text-900 text-2xl font-700 my-3 font-bold">10.20K</div>
                    <span class="font-medium text-600">Vimeo</span>
                </div>
            </div>
            <div class="col-12 md:col-6 text-center">
                <div class="text-center border-1 surface-border border-round p-4">
                    <i class="pi pi-facebook text-5xl text-blue-500"></i>
                    <div class="text-900 text-2xl font-700 my-3 font-bold">5.60K</div>
                    <span class="font-medium text-600">Facebook</span>
                </div>
            </div>
            <div class="col-12 md:col-6 text-center">
                <div class="text-center border-1 surface-border border-round p-4">
                    <i class="pi pi-discord text-5xl text-indigo-500"></i>
                    <div class="text-900 text-2xl font-700 my-3 font-bold">23.53K</div>
                    <span class="font-medium text-600">Discord</span>
                </div>
            </div>
            <div class="col-12 md:col-6 text-center">
                <div class="text-center border-1 surface-border border-round p-4">
                    <i class="pi pi-github text-5xl text-purple-500"></i>
                    <div class="text-900 text-2xl font-700 my-3 font-bold">16.70K</div>
                    <span class="font-medium text-600">GitHub</span>
                </div>
            </div>
            <div class="col-12 md:col-6 text-center">
                <div class="text-center border-1 surface-border border-round p-4">
                    <i class="pi pi-google text-5xl text-pink-500"></i>
                    <div class="text-900 text-2xl font-700 my-3 font-bold">16.50K</div>
                    <span class="font-medium text-600">Google</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block7 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="p-3 text-center bg-blue-500" style="border-radius: 12px">
                <span class="inline-flex justify-content-center align-items-center bg-blue-600 border-circle mb-3" style="width:49px; height: 49px">
                    <i class="pi pi-inbox text-xl text-white"></i>
                </span>
                <div class="text-2xl font-medium text-white mb-2">123K</div>
                <span class="text-blue-100 font-medium">Messages</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="p-3 text-center bg-purple-500" style="border-radius: 12px">
                <span class="inline-flex justify-content-center align-items-center bg-purple-600 border-circle mb-3" style="width:49px; height: 49px">
                    <i class="pi pi-map-marker text-xl text-white"></i>
                </span>
                <div class="text-2xl font-medium text-white mb-2">23K</div>
                <span class="text-purple-100 font-medium">Check-ins</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="p-3 text-center bg-indigo-500" style="border-radius: 12px">
                <span class="inline-flex justify-content-center align-items-center bg-indigo-600 border-circle mb-3" style="width:49px; height: 49px">
                    <i class="pi pi-file text-xl text-white"></i>
                </span>
                <div class="text-2xl font-medium text-white mb-2">23K</div>
                <span class="text-indigo-100 font-medium">Files</span>
            </div>
        </div>
        <div class="col-12 md:col-6 lg:col-3 p-3">
            <div class="p-3 text-center bg-orange-500" style="border-radius: 12px">
                <span class="inline-flex justify-content-center align-items-center bg-orange-600 border-circle mb-3" style="width:49px; height: 49px">
                    <i class="pi pi-users text-xl text-white"></i>
                </span>
                <div class="text-2xl font-medium text-white mb-2">40K</div>
                <span class="text-orange-100 font-medium">Users</span>
            </div>
        </div>
    </div>
</div>`;

    block8 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
    <div class="grid">
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 surface-card p-3" style="border-radius: 12px">
                <div class="flex align-items-center justify-content-between">
                    <div>
                        <span class="text-3xl text-900 font-bold">40K</span>
                        <p class="mt-2 mb-0 text-600 text-2xl">Users Online</p>
                    </div>
                    <div>
                        <img src="assets/images/blocks/illustration/stats-illustration-4.svg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 surface-card p-3" style="border-radius: 12px">
                <div class="flex align-items-center justify-content-between">
                    <div>
                        <span class="text-3xl text-900 font-bold">24K</span>
                        <p class="mt-2 mb-0 text-600 text-2xl">Payments Processed</p>
                    </div>
                    <div>
                        <img src="assets/images/blocks/illustration/stats-illustration-5.svg" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 lg:col-4 p-3">
            <div class="shadow-2 surface-card p-3" style="border-radius: 12px">
                <div class="flex align-items-center justify-content-between">
                    <div>
                        <span class="text-3xl text-900 font-bold">15K</span>
                        <p class="mt-2 mb-0 text-600 text-2xl">Daily Revenue</p>
                    </div>
                    <div>
                        <img src="assets/images/blocks/illustration/stats-illustration-6.svg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block9 = `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-4">
        <span class="text-xl font-medium text-900">Quarter Goals</span>
        <div class="ml-auto">
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    <div class="surface-border border-1 border-round p-3 mb-4">
        <span class="text-900 font-medium text-3xl">85% <span class="text-600">(2125/2500)</span></span>
        <ul class="mt-3 list-none p-0 mx-0 flex">
            <li style="height:1rem" class="flex-1 bg-indigo-500 border-round-left"></li>
            <li style="height:1rem" class="flex-1 bg-blue-500"></li>
            <li style="height:1rem" class="flex-1 bg-orange-500"></li>
            <li style="height:1rem" class="flex-1 bg-purple-500"></li>
            <li style="height:1rem" class="flex-1 bg-yellow-500"></li>
            <li style="height:1rem" class="flex-1 bg-cyan-500"></li>
            <li style="height:1rem" class="flex-1 surface-500 border-round-right"></li>
        </ul>
    </div>
    <ul class="mt-4 list-none p-0 mx-0">
        <li class="flex align-items-center pb-3">
            <span style="width:1rem;height:1rem" class="border-round bg-indigo-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Watch</span>
            <span class="text-600 text-xl font-medium ml-auto">152</span>
        </li>
        <li class="flex align-items-center py-3">
            <span style="width:1rem;height:1rem" class="border-round bg-blue-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Blue Band</span>
            <span class="text-600 text-xl font-medium ml-auto">63</span>
        </li>
        <li class="flex align-items-center py-3">
            <span style="width:1rem;height:1rem" class="border-round bg-orange-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Controller</span>
            <span class="text-600 text-xl font-medium ml-auto">23</span>
        </li>
        <li class="flex align-items-center py-3">
            <span style="width:1rem;height:1rem" class="border-round bg-purple-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Lime Band</span>
            <span class="text-600 text-xl font-medium ml-auto">42</span>
        </li>
        <li class="flex align-items-center py-3">
            <span style="width:1rem;height:1rem" class="border-round bg-yellow-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">Phone Case</span>
            <span class="text-600 text-xl font-medium ml-auto">134</span>
        </li>
        <li class="flex align-items-center py-3">
            <span style="width:1rem;height:1rem" class="border-round bg-cyan-500 mr-3 flex-shrink-0"></span>
            <span class="text-xl font-medium text-90">T-Shirt</span>
            <span class="text-600 text-xl font-medium ml-auto">89</span>
        </li>
    </ul>
</div>`;

block10 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
<div class="grid lg:p-8">
    <div class="col-12 flex lg:flex-column flex-row lg:col-6 p-2 pr-5">
        <div class="shadow-2 surface-card border-round p-4 w-full mt-4 lg:mt-0 mb-8 text-center">
            <div class="flex flex-column mb-5 relative">
                <img src="/assets/images/blocks/stats/shoes.png" width="100" height="100"
                    class="absolute left-50" style="margin-left:-50px; top: -50px">
                <div class="pt-8 ">
                    <span class="block text-900 mb-1 text-xl font-medium">Shoes</span>
                    <p class="text-600 mt-0 mb-0">500 per Month</p>
                </div>
            </div>
            <div class="flex justify-content-between align-items-center">
                <span class="text-900 inline-flex justify-content-between align-items-center">
                    <span class="text-600">Monthly Goal</span>
                </span>
                <span class="text-900 font-medium">70%</span>
            </div>
            <div class="surface-300 w-full mt-2 mb-3" style="height: 7px; border-radius: 4px">
                <div class="bg-blue-500 h-full" style="width:70%; border-radius: 4px"></div>
            </div>
            <div class="flex justify-content-between align-items-center">
                <span class="text-900 inline-flex justify-content-between align-items-center">
                    <span class="text-900">350/500</span>
                </span>
                <span class="text-blue-500 font-medium">2 weeks left</span>
            </div>
        </div>
    </div>
    <div class="col-12 flex lg:flex-column flex-row lg:col-6 p-2 pr-5">
        <div class="shadow-2 surface-card border-round p-4 w-full mb-8 text-center">
            <div class="flex flex-column mb-5 relative">
                <img src="/assets/images/blocks/stats/hats.png" width="100" height="100"
                    class="absolute left-50" style="margin-left:-50px; top: -50px">
                <div class="pt-8 ">
                    <span class="block text-900 mb-1 text-xl font-medium">Hats</span>
                    <p class="text-600 mt-0 mb-0">500 per Month</p>
                </div>
            </div>
            <div class="flex justify-content-between align-items-center">
                <span class="text-900 inline-flex justify-content-between align-items-center">
                    <span class="text-600">Monthly Goal</span>
                </span>
                <span class="text-900 font-medium">20%</span>
            </div>
            <div class="surface-300 w-full mt-2 mb-3" style="height: 7px; border-radius: 4px">
                <div class="bg-yellow-500 h-full" style="width:20%; border-radius: 4px"></div>
            </div>
            <div class="flex justify-content-between align-items-center">
                <span class="text-900 inline-flex justify-content-between align-items-center">
                    <span class="text-900">100/500</span>
                </span>
                <span class="text-blue-500 font-medium">2 weeks left</span>
            </div>
        </div>
    </div>
</div>
</div>
`;

block11 = `
<div class="surface-ground px-4 py-5 md:px-6 lg:px-8">
<div class="grid bg-blue-600 border-round-xl pt-3 pb-3 ">
    <div class=" pl-8 ml-7 lg:ml-4 lg:col-2 bg-blue-600 text-blue-100  p-4 ">
        <a pRipple class="flex align-items-center ml-auto no-underline font-medium mt-3 lg:mt-0 cursor-pointer"
            (click)="next();">
            <i class="pi pi-angle-up  "></i>
        </a>
        <div class="mt-2 mb-2">
            <span class="block text-0 mb-1 text-3xl font-semibold">{{date.getDate()}}</span>
            <p class="mt-0 ">{{monthNames[date.getMonth()]}}</p>
        </div>
        <a pRipple
            class="flex text-blue-200 align-items-center ml-auto no-underline font-medium mt-3 lg:mt-0 cursor-pointer"
            (click)="previous();">
            <i class="pi pi-angle-down  "></i>
        </a>
    </div>
    <div class="col-12 md:col-6 lg:col-3">
        <div class="bg-blue-500 text-0 shadow-2 p-3 border-round-md">
            <div class="text-center ">
                <i class="pi pi-eye text-blue-200 text-5xl"></i>
                <div class=" text-sm font-700 my-3 font-semibold">VIEWS</div>
                <span class="font-medium text-blue-100 -mt-3">{{date.getDay()*1000+1000}}</span>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3 lg:ml-2 ">
        <div class="bg-blue-500 text-0 shadow-2 p-3 border-round-md">
            <div class="text-center ">
                <i class="pi pi-users text-blue-200 text-5xl"></i>
                <div class=" text-sm font-700 my-3 font-semibold">FOLLOWS</div>
                <span class="font-medium text-blue-100 -mt-3">{{date.getDay()*10+10}}</span>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 lg:col-3 lg:ml-2 ">
        <div class="bg-blue-500 text-0 shadow-2 p-3 border-round-md">
            <div class="text-center ">
                <i class="pi pi-heart text-blue-200 text-5xl"></i>
                <div class=" text-sm font-700 my-3 font-semibold">LIKES</div>
                <span class="font-medium text-blue-100 -mt-3">{{date.getDay()*100+100}}</span>
            </div>
        </div>
    </div>
</div>
</div>
`;

items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Options',
                items: [
                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                    { label: 'Search', icon: 'pi pi-fw pi-search' }
                ]
            }];
    }

    monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
      date: Date = new Date();
  
      previous() {
          this.date.setDate(this.date.getDate()-1);
      }
  
      next() {
          this.date.setDate(this.date.getDate()+1);
  
      }
  

}
