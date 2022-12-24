import { Component } from '@angular/core';

@Component({
    templateUrl: './commandmenu.component.html'
})
export class CommandMenuComponent { 
    value1: string;

    value2: string;
    
    value3: string;
    
    value4: string;

    value5: string = 'Search menus, shortcuts, contact and more...';

    value6: string = 'Sign';

    block1: string = `
<section class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
            <input type="text" pInputText placeholder="Search menus, shortcuts, contact and more..." [(ngModel)]="value1" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-1" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-1" class="hidden">
        <div class="border-y-1 surface-border px-3 py-3">
            <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">unread mails</li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">go to last mail</li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">lock account</li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary">profile</li>
            </ul>
        </div>
        <div class="p-2">
            <article class="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-cog text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">System Settings</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">Change your system preferences</p>
                    </div>
                </div>
                <span class="border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">S</span>
            </article>
            
            <article class="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-user text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">My Profile</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">Go to your profile</p>
                    </div>
                </div>
                <span class="border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">P</span>
            </article>

            <article class="flex w-full justify-content-between align-items-center mb-3 select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-moon text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Switch to Dark Mode</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">Switch to dark mode save your eyes</p>
                    </div>
                </div>
                <span class="border-1 px-2 py-1 surface-border border-round surface-100 mr-2 text-600 text-xs">D</span>
            </article>

            <article class="flex w-full justify-content-between align-items-center select-none cursor-pointer surface-border hover:surface-hover border-round-lg px-2 py-1 text-800 hover:text-primary">
                <div class="flex align-items-center">
                    <span class="border-circle w-2rem h-2rem flex align-items-center justify-content-center surface-100">
                        <i class="pi pi-sign-out text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Log out</p>
                        <p class="font-normal text-xs text-600 mt-0 mb-0">End your session</p>
                    </div>
                </div>
            </article>
        </div>
    </div>
</section>`;

    block2: string = `
<section class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
            <input type="text" pInputText placeholder="Search menus, shortcuts, contact and more..." [(ngModel)]="value2" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-2" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-2" class="hidden">
       <section class="border-y-1 surface-border p-5 flex flex-column align-items-center gap-2">
        <h2 class="m-0 font-semibold text-900 text-xl">No emails found</h2>
        <span class="text-sm text-600 text-center">"{{ value2 }}" could not match any emails.
            Would you like to write a new email?</span>
        <div class="flex justfiy-content-center gap-3 mt-3">
            <button pButton class="p-button-outlined" label="View all emails"></button>
            <button pButton icon="pi pi-plus" label="Compose"></button>
        </div>
       </section>
    </div>
</section>`;

    block3: string = `
<section class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
            <input type="text" pInputText placeholder="Search menus, shortcuts, contact and more..." [(ngModel)]="value3" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-3" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-3" class="hidden">
        <div class="border-y-1 surface-border p-3">
            <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-file mr-2"></i>Add new file</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">N</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-lock mr-2"></i>Lock Session</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">L</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-moon mr-2"></i>Dark Mode</span>
                </li>
            </ul>
        </div>
        <div class="p-3">
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-bell mr-2"></i>Notifications</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">C</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-bookmark mr-2"></i>Bookmarks</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">B</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-bolt mr-2"></i>Quick Actions</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">SHIFT</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">Q</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-users mr-2"></i>Manage User Groups</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">U</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-book mr-2"></i>Go to Documentation</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">SHIFT</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">L</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex justify-content-between align-items-center">
                    <span class="flex align-items-center"><i class="pi pi-cog mr-2"></i>System Preferences</span>
                    <div class="flex align-items-center">
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">CMD</span>
                        <span class="mx-2 text-600">+</span>
                        <span class="border-1 p-1 surface-border border-round surface-100 text-600 text-xs">P</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>`;
    
    block4: string = `
<section class="w-30rem border-1 surface-border border-round-lg">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-500"></i>
            <input type="text" pInputText placeholder="Find someone quickly..." [(ngModel)]="value4" class="w-full border-none shadow-none outline-none" pStyleClass="#command-menu-4" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="border-1 p-1 surface-border border-round surface-100 mr-2 text-600 text-xs">⌘K</span>
    </div>
    <div id="command-menu-4" class="hidden">
        <div class="border-y-1 surface-border p-3">
            <h2 class="font-semibold text-xs text-500 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-1.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Sarah Dylan</span>
                        <span class="text-600 text-xs">@srhdylan</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-2.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Marvin McKinney</span>
                        <span class="text-600 text-xs">@terekdriving</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-3.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Jenny Wilson</span>
                        <span class="text-600 text-xs">@lewissanctuary</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="p-3">
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-4.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Wade Warren</span>
                        <span class="text-600 text-xs">@amusementethics</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-5.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Darlene Robertson</span>
                        <span class="text-600 text-xs">@pointersnutmeg</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-6.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Courtney Henry</span>
                        <span class="text-600 text-xs">@amisssteadily</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-7.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Annette Black</span>
                        <span class="text-600 text-xs">@raddledhastily</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-8.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Arlene McCoy</span>
                        <span class="text-600 text-xs">@germlessshredder</span>
                    </div>
                </li>
                <li class="select-none p-2 font-medium text-base cursor-pointer border-round-lg hover:surface-hover hover:text-primary flex gap-2 align-items-center">
                    <p-avatar image="assets/images/blocks/avatars/circle/avatar-f-9.png"></p-avatar>
                    <div class="flex flex-column justify-content-center">
                        <span class="text-800 text-base">Savannah Nguyen</span>
                        <span class="text-600 text-xs">@zapdetergent</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</section>`;

    block5: string = `
<section class="w-30rem bg-black-alpha-50 border-round-lg" style="backdrop-filter: blur(70px)">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-white-alpha-80"></i>
            <input type="text" pInputText [(ngModel)]="value5" class="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm" pStyleClass="#command-menu-5" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-20">⌘K</span>
    </div>
    <div id="command-menu-5" class="">
        <div class="border-y-2 border-white-alpha-20 p-3">
            <h2 class="font-semibold text-xs text-white-alpha-50 mb-2 mt-0 px-1">RECENT</h2>
            <ul class="list-none m-0 p-0">
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">unread mails</li>
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">go to last mail</li>
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">lock account</li>
                <li class="select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">profile</li>
            </ul>
        </div>
        <div class="p-3">
            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-star text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Favorites</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Reach your favorites easily</p>
                    </div>
                </div>
                <div class="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">F</span>
                </div>
            </article>
            
            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-github text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Repositories</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Get list and manage your repositories</p>
                    </div>
                </div>
                <div class="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">SHIFT</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">R</span>
                </div>
            </article>

            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-bolt text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Uprade your plan now</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Access all premium benefits</p>
                    </div>
                </div>
                <div class="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">U</span>
                </div>
            </article>

            <article class="flex flex-column sm:flex-row w-full sm:justify-content-between sm:align-items-center mb-3 select-none cursor-pointer border-round-lg px-2 py-1 text-white-alpha-80 hover:bg-white-alpha-20 hover:text-white">
                <div class="flex align-items-center">
                    <span class="border-circle flex-shrink-0 w-2rem h-2rem flex align-items-center justify-content-center bg-white-alpha-20">
                        <i class="pi pi-sync text-lg"></i>
                    </span>
                    <div class="ml-2">
                        <p class="font-semibold text-sm mt-0 mb-1">Resync your account</p>
                        <p class="font-normal text-xs text-white-alpha-80 mt-0 mb-0">Refresh all of your data</p>
                    </div>
                </div>
                <div class="hidden md:flex align-items-center md:align-self-center mt-3 sm:mt-0">
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">⌘</span>
                    <span class="mx-2 text-white-alpha-80">+</span>
                    <span class="px-2 py-1 border-white-alpha-20 border-1 border-round text-white-alpha-80 text-xs bg-white-alpha-20">/</span>
                </div>
            </article>
        </div>
        <div class="p-2 bg-white-alpha-10 border-top-1 border-white-alpha-20 flex flex-wrap sm:flex-nowrap align-items-center">
            <p class="sm:mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">P</span>
                Select
            </p>
            <p class="sm:mt-0 mb-0 mr-3 text-xs text-white-alpha-70">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↑</span>
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↓</span>
                Navigate
            </p>
            <p class="sm:mt-0 mb-0 mr-3 text-xs text-white-alpha-70 flex-align-items-center justify-content-center flex-row">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20 inline-flex">esc</span>
                Close
            </p>
            <p class="w-full sm:w-auto sm:mt-0 mb-0 sm:ml-auto text-xs text-white-alpha-70">4 results</p>
        </div>
    </div>
</section>`;

    block6: string = `
<section class="bg-black-alpha-50 border-round-lg" style="backdrop-filter: blur(70px); width: 40rem;">
    <div class="flex w-full align-items-center justify-content-between px-1">
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search text-white-alpha-80"></i>
            <input type="text" pInputText [(ngModel)]="value6" class="w-full border-none bg-transparent shadow-none outline-none text-white-alpha-80 text-sm" pStyleClass="#command-menu-6" enterClass="hidden" leaveToClass="hidden"/> 
        </span>
        <span class="p-1 border-white-alpha-20 border-1 border-round mr-2 text-white-alpha-80 text-xs bg-white-alpha-20">⌘K</span>
    </div>
    <div id="command-menu-6">
        <div class="flex flex-column md:flex-row border-top-1 border-white-alpha-20">
            <div class="w-full md:w-6 p-3 border-right-1 border-white-alpha-20">
                <ul class="list-none m-0 p-0">
                    <li class="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                        <span><i class="pi pi-image mr-2"></i>mail-sign.jpg</span>
                        <i class="pi pi-chevron-right text-xs"></i>
                    </li>
                    <li class="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                        <span><i class="pi pi-image mr-2"></i>portrait-sign.jpg</span>
                        <i class="pi pi-chevron-right text-xs"></i>
                    </li>
                    <li class="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                        <span><i class="pi pi-image mr-2"></i>sign-in.png</span>
                        <i class="pi pi-chevron-right text-xs"></i>
                    </li>
                    <li class="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                        <span><i class="pi pi-image mr-2"></i>sign-out.png</span>
                        <i class="pi pi-chevron-right text-xs"></i>
                    </li>
                    <li class="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                        <span><i class="pi pi-file-excel mr-2"></i>sign-terms.xls</span>
                        <i class="pi pi-chevron-right text-xs"></i>
                    </li>
                    <li class="flex justify-content-between align-items-center select-none p-2 text-white-alpha-80 font-normal text-base cursor-pointer border-round-lg hover:bg-white-alpha-20 hover:text-white">
                        <span><i class="pi pi-file-pdf mr-2"></i>sign-present.pdf</span>
                        <i class="pi pi-chevron-right text-xs"></i>
                    </li>
                </ul>
            </div>
            <div class="w-full md:w-6 px-3 py-4 md:p-3 flex flex-column align-items-center md:align-items-start border-top-1 border-white-alpha-20 md:border-none">
                <img src="assets/images/blocks/commandmenu/commandmenu-3.jpeg" class="w-10rem h-6rem mx-auto border-round shadow-2" alt="Image">
                <p class="font-medium text-sm text-white mt-2 mb-2 w-full text-center">portrait-sign.jpg</p>
                <div class="flex gap-2 text-white-alpha-80">
                    <span class="flex justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style="height: 2rem; width: 4rem;"><i class="pi pi-eye"></i></span>
                    <span class="flex justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style="height: 2rem; width: 4rem;"><i class="pi pi-star"></i></span>
                    <span class="flex justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style="height: 2rem; width: 4rem;"><i class="pi pi-copy"></i></span>
                    <span class="flex justify-content-center align-items-center border-round bg-white-alpha-20 text-white hover:bg-white-alpha-30 cursor-pointer" style="height: 2rem; width: 4rem;"><i class="pi pi-upload"></i></span>
                </div>
                <table class="w-full mt-2">
                    <tr>
                        <td>
                            <p class="text-white font-medium text-xs my-1">File Size</p>
                        </td>
                        <td>
                            <p class="text-white font-medium text-xs text-right my-1">345 kb</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="text-white font-medium text-xs my-1">Location</p>
                        </td>
                        <td>
                            <div class="inline-flex w-full align-items-center justify-content-end">
                                <p class="text-white font-medium text-xs text-right my-1">My Drive/Personal/Images/</p>
                                <span class="bg-white-alpha-20 border-circle ml-1 p-1 flex align-items-center justify-content-center"><i class="pi pi-folder-open text-white" style="font-size: 8px;"></i></span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="text-white font-medium text-xs my-1">Tags</p>
                        </td>
                        <td>
                            <div class="inline-flex w-full justify-content-end">
                                <div class="flex align-items-center mr-2">
                                    <div class="bg-green-500 flex-shrink-0 border-circle mr-1" style="width:10px; height:10px;"></div>
                                    <p class="text-white font-medium text-xs mt-0 mb-0">Green</p>
                                </div>
                                <div class="flex align-items-center">
                                    <div class="bg-yellow-500 flex-shrink-0 border-circle mr-1" style="width:10px; height:10px;"></div>
                                    <p class="text-white font-medium text-xs mt-0 mb-0">Yellow</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="px-2 bg-white-alpha-10 border-top-1 border-white-alpha-20 flex column-gap-1 md:column-gap-3 flex-wrap md:flex-nowrap align-items-center justify-content-evenly sm:justify-content-start">
            <p class="text-xs text-white-alpha-70">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">⏎</span>
                Select
            </p>
            <p class="text-xs text-white-alpha-70">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↑</span>
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20">↓</span>
                Navigate
            </p>
            <p class="text-xs text-white-alpha-70 flex-align-items-center justify-content-center flex-row">
                <span class="px-2 py-1 border-white-alpha-20 border-1 border-round mr-1 text-white-alpha-80 text-xs bg-white-alpha-20 inline-flex">esc</span>
                Close
            </p>
        </div>
    </div>
</section>`;
}