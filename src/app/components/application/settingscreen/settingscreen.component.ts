import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './settingscreen.component.html'
})
export class SettingScreenComponent implements OnInit {

    block1 = `
<div class="min-h-screen flex surface-ground">
    <div id="app-sidebar" class="h-screen hidden lg:block flex-shrink-0 fixed lg:sticky left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto">
        <div class="flex h-full">
            <div class="flex flex-column h-full bg-indigo-500 flex-shrink-0 select-none">
                <div class="flex align-items-center justify-content-center flex-shrink-0 bg-indigo-600" style="height:60px">
                    <img src="assets/images/blocks/logos/hyper-light.svg" alt="Image" height="30">
                </div>
                <div class="overflow-y-auto mt-3">
                    <ul class="list-none py-3 px-2 m-0">
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 0"
                                [ngClass]="{'bg-indigo-700': activeTab === 0}">
                                <i class="pi pi-home text-lg"></i>
                            </a>
                        </li> 
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 1"
                                [ngClass]="{'bg-indigo-700': activeTab === 1}">
                                <i class="pi pi-bookmark text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 2"
                                [ngClass]="{'bg-indigo-700': activeTab === 2}">
                                <i class="pi pi-users text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 3"
                                [ngClass]="{'bg-indigo-700': activeTab === 3}">
                                <i class="pi pi-comments text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 4"
                                [ngClass]="{'bg-indigo-700': activeTab === 4}">
                                <i class="pi pi-calendar text-lg"></i>
                            </a>
                        </li>
                        <li class="mb-2">
                            <a pRipple class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors" (click)="activeTab = 5"
                                [ngClass]="{'bg-indigo-700': activeTab === 5}">
                                <i class="pi pi-cog text-lg"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <hr class="mb-3 mx-3 border-top-1 border-none border-indigo-300" />
                    <a pRipple class="m-3 flex align-items-center cursor-pointer py-1 px-0 justify-content-center hover:bg-indigo-400 border-round text-300 hover:text-0
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" style="width: 24px; height: 24px"/>
                    </a>
                </div>
            </div>
            <div class="flex flex-column surface-0 p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style="width:250px">
                <div class="justify-content-end mb-3 flex lg:hidden">
                    <button pButton pRipple icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain" pStyleClass="#app-sidebar" leaveToClass="hidden" leaveActiveClass="fadeoutleft"></button>
                </div>
                <div class="surface-0 flex-auto">
                    <div [ngClass]="{'hidden': activeTab !== 0}">
                        <div class="w-full lg:w-auto select-none">
                            <ul class="list-none py-2 px-0 m-0">
                                <li>
                                   <div class="p-3 text-500 font-medium">HOME</div> 
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-home mr-2 text-700"></i>
                                        <span class="font-medium text-700">Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-bookmark mr-2 text-700"></i>
                                        <span class="font-medium text-700">Bookmarks</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-blue-100 text-blue-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-users mr-2 text-700"></i>
                                        <span class="font-medium text-700">Team</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-comments mr-2 text-700"></i>
                                        <span class="font-medium text-700">Messages</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-calendar mr-2 text-700"></i>
                                        <span class="font-medium text-700">Calendar</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-purple-100 text-purple-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-user mr-2 text-blue-500"></i>
                                        <span class="font-medium text-blue-500 font-bold">Profile</span>
                                    </a>
                                </li>
                            </ul>
                            <ul class="list-none py-2 px-0 m-0 border-top-1 surface-border">
                                <li>
                                   <div class="p-3 text-500 font-medium">ORGANIZATION</div> 
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-home mr-2 text-700"></i>
                                        <span class="font-medium text-700">Overview</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-bookmark mr-2 text-700"></i>
                                        <span class="font-medium text-700">Security</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-cyan-100 text-cyan-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">3</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-users mr-2 text-700"></i>
                                        <span class="font-medium text-700">Domains</span>
                                    </a>
                                </li>
                                <li>
                                    <a pRipple class="flex align-items-center cursor-pointer p-3 hover:surface-100 border-round transition-colors transition-duration-150">
                                        <i class="pi pi-calendar mr-2 text-700"></i>
                                        <span class="font-medium text-700">Reports</span>
                                        <span class="inline-flex align-items-center justify-content-center ml-auto bg-orange-100 text-orange-900 border-circle" style="min-width: 1.5rem; height: 1.5rem">2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 1}">Bookmarks</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 2}">Team</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 3}">Messages</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 4}">Calendar</div>
                    <div class="p-3 font-medium text-xl text-900" [ngClass]="{'hidden': activeTab !== 5}">Settings</div>
                </div>
            </div>
        </div>
    </div>
    <div class="min-h-screen flex flex-column relative flex-auto">
        <div class="flex justify-content-between align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style="height:60px">
            <div class="flex">
                <a pRipple class="cursor-pointer block lg:hidden text-700 mr-3" pStyleClass="#app-sidebar" enterClass="hidden" enterActiveClass="fadeinleft" leaveToClass="hidden" leaveActiveClass="fadeoutleft">
                    <i class="pi pi-bars text-4xl"></i>
                </a>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input type="text" pInputText class="border-none w-10rem sm:w-20rem" placeholder="Search">
                </span>
            </div>
            <a pRipple class="cursor-pointer block lg:hidden text-700" pStyleClass="@next" enterClass="hidden" enterActiveClass="fadein" leaveToClass="hidden" leaveActiveClass="fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v text-2xl"></i>
            </a>
            <ul class="list-none p-0 m-0  hidden lg:flex lg:align-items-center select-none lg:flex-row 
                surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                        <span class="block lg:hidden font-medium">Inbox</span>
                    </a>
                </li>
                <li>
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" pBadge severity="danger"></i>
                        <span class="block lg:hidden font-medium">Notifications</span>
                    </a>
                </li>
                <li class="border-top-1 surface-border lg:border-top-none">
                    <a pRipple class="flex p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer
                        transition-duration-150 transition-colors">
                        <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" class="mr-3 lg:mr-0" style="width: 32px; height: 32px"/>
                        <div class="block lg:hidden">
                            <div class="text-900 font-medium">Josephine Lillard</div>
                            <span class="text-600 font-medium text-sm">Marketing Specialist</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="p-5 flex flex-column flex-auto">
            <div>
                <div class="text-900 font-medium text-xl mb-3">Profile</div>
                <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet. 
                    Egestas integer eget aliquet nibh praesent tristique magna.</p>
                <div class="surface-card p-4 shadow-2 border-round">
                    <div class="grid formgrid p-fluid">
                        <div class="field mb-4 col-12">
                            <label for="nickname" class="font-medium">Nickname</label>
                            <input id="nickname" type="text" pInputText>
                        </div>
                        <div class="surface-100 mb-3 col-12" style="height:2px"></div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="bio" class="font-medium">Bio</label>
                            <textarea id="bio" type="text" pInputTextarea rows="5" [autoResize]="true"></textarea>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="avatar" class="font-medium">Avatar</label>
                            <div class="flex align-items-center">
                                <img src="assets/images/blocks/avatars/circle/avatar-f-4.png" class="mr-4" />
                                <p-fileUpload id="avatar" mode="basic" name="avatar" url="./upload.php" accept="image/*" maxFileSize="1000000" styleClass="p-button-outlined p-button-plain" chooseLabel="Upload Image" chooseIcon="pi pi-upload"></p-fileUpload>
                            </div>
                        </div>
                        <div class="surface-100 mb-3 col-12" style="height:2px"></div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="email" class="font-medium">Email</label>
                            <input id="email" type="text" pInputText>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="country" class="font-medium">Country</label>
                            <p-dropdown inputId="country" [options]="countries" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
                                <ng-template let-country pTemplate="item">
                                    <div class="flex align-items-center">
                                        <img src="assets/images/blocks/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + country.code.toLowerCase()" style="width:18px"/>
                                        <div>{{country.name}}</div>
                                    </div>
                                </ng-template>
                            </p-dropdown>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="city" class="font-medium">City</label>
                            <input id="city" type="text" pInputText>
                        </div>
                        <div class="field mb-4 col-12 md:col-6">
                            <label for="state" class="font-medium">State</label>
                            <input id="state" type="text" pInputText>
                        </div>
                        <div class="surface-100 mb-3 col-12" style="height:2px"></div>
                        <div class="field mb-4 col-12">
                            <label for="website" class="font-medium">Website</label>
                            <div class="p-inputgroup">
                                <span class="p-inputgroup-addon">www</span>
                                <input id="website" type="text" pInputText>      
                            </div>
                        </div>
                        <div class="surface-100 mb-3 col-12" style="height:2px"></div>
                        <div class="field mb-4 col-12">
                            <label for="privacy" class="font-medium">Privacy</label>
                            <div class="flex align-items-center">
                                <p-inputSwitch inputId="privacy"></p-inputSwitch>
                                <span class="ml-2">Share my data with contacts</span>
                            </div>
                        </div>
                        <div class="surface-100 mb-3 col-12" style="height:2px"></div>
                        <div class="col-12">
                            <button pButton pRipple label="Save Changes" class="w-auto mt-3"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
    
    activeTab: number = 0;

    countries: any[];

    ngOnInit() {
        this.countries = [
            {name: 'Australia', code: 'AU'},
            {name: 'Brazil', code: 'BR'},
            {name: 'China', code: 'CN'},
            {name: 'Egypt', code: 'EG'},
            {name: 'France', code: 'FR'},
            {name: 'Germany', code: 'DE'},
            {name: 'India', code: 'IN'},
            {name: 'Japan', code: 'JP'},
            {name: 'Spain', code: 'ES'},
            {name: 'United States', code: 'US'}
        ]; 
    }
}
