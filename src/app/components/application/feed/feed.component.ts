import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    templateUrl: './feed.component.html'
})
export class FeedComponent {

    block1 = `
<div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="mb-5 flex">
        <div class="flex flex-column align-items-center" style="width:2rem">
            <span class="bg-blue-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                <i class="pi pi-compass text-xl"></i>
            </span>
            <div class="h-full bg-blue-500" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
            <div class="mb-3">
                <span class="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                <span class="text-500 text-sm">1 minute ago</span>
            </div>
            <div class="line-height-3 text-700 mb-3">
                Eu tincidunt tortor aliquam nulla facilisi cras fermentum. 
                Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi.
            </div>
            <div class="text-500 flex align-items-center gap-4">
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-heart mr-1"></i>
                    <span>0</span>
                </div>
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-comment mr-1"></i>
                    <span>1</span>
                </div>
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-eye"></i>
                    <span>24</span>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-5 flex">
        <div class="flex flex-column align-items-center" style="width:2rem">
            <span class="bg-orange-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                <i class="pi pi-list text-xl"></i>
            </span>
            <div class="h-full bg-orange-500" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
            <div class="mb-3">
                <span class="text-900 font-medium inline-block mr-3">Theresa Webb</span>
                <span class="text-500 text-sm">2 hours ago</span>
            </div>
            <div class="line-height-3 text-700 mb-3">
                Purus sit amet volutpat consequat mauris. Pretium lectus quam id leo in vitae. 
                Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper.
            </div>
            <div class="text-500 flex align-items-center gap-4">
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-heart mr-1"></i>
                    <span>26</span>
                </div>
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-comment mr-1"></i>
                    <span>6</span>
                </div>
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-eye"></i>
                    <span>673</span>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-5 flex">
        <div class="flex flex-column align-items-center" style="width:2rem">
            <span class="bg-purple-500 text-0 flex align-items-center justify-content-center border-circle p-2">
                <i class="pi pi-inbox text-xl"></i>
            </span>
            <div class="h-full bg-purple-500" style="width: 2px; min-height: 4rem"></div>
        </div>
        <div class="ml-5 surface-card shadow-2 border-round p-3 flex-auto">
            <div class="mb-3">
                <span class="text-900 font-medium inline-block mr-3">Walter Black</span>
                <span class="text-500 text-sm">4 hours ago</span>
            </div>
            <div class="line-height-3 text-700 mb-3">
                Euismod in pellentesque massa placerat duis ultricies lacus. 
                Vitae sapien pellentesque habitant morbi tristique senectus et netus et.
            </div>
            <div class="text-500 flex align-items-center gap-4">
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-heart mr-1"></i>
                    <span>62</span>
                </div>
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-comment mr-1"></i>
                    <span>36</span>
                </div>
                <div class="flex align-items-center gap-1">
                    <i class="pi pi-eye"></i>
                    <span>21</span>
                </div>
            </div>
        </div>
    </div>
</div>`;

    block2 = `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-4">
        <div class="text-900 font-medium text-xl">Notifications</div>
        <div>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    
    <span class="block text-600 font-medium mb-3">TODAY</span>
    <ul class="p-0 mx-0 mt-0 mb-4 list-none">
        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                <i class="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span class="text-900 line-height-3 font-medium">
                Richard Jones<span class="text-700 font-normal"> has purchased a blue t-shirt for <span class="text-primary font-medium">$79</span></span>
            </span>
        </li>
        <li class="flex align-items-center py-2">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                <i class="pi pi-download text-xl text-orange-500"></i>
            </div>
            <span class="text-700 line-height-3">Your request for withdrawal of <span class="text-primary font-medium">$2500</span> has been initiated.</span>
        </li>
    </ul>

    <span class="block text-600 font-medium mb-3">YESTERDAY</span>
    <ul class="p-0 m-0 list-none">
        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                <i class="pi pi-dollar text-xl text-blue-500"></i>
            </div>
            <span class="text-900 line-height-3 font-medium">Keyser Wick
                <span class="text-700 font-normal">has purchased a black jacket for <span class="text-primary font-medium">$59</span></span>
            </span>
        </li>
        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                <i class="pi pi-question text-xl text-pink-500"></i>
            </div>
            <span class="text-900 line-height-3 font-medium">Jane Davis
                <span class="text-700 font-normal">has posted a new questions about your product.</span>
            </span>
        </li>
        <li class="flex align-items-center py-2">
            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-green-100 border-circle mr-3 flex-shrink-0">
                <i class="pi pi-arrow-up text-xl text-green-500"></i>
            </div>
            <span class="text-900 line-height-3 font-medium">Claire Smith
                <span class="text-700 font-normal">has upvoted your store along with a comment.</span>
            </span>
        </li>
    </ul>
</div>`;

    block3 = `
<div class="surface-card shadow-2 border-round p-4">
    <div class="flex align-items-center justify-content-between mb-3">
        <div class="text-900 font-medium text-xl">Team Activity</div>
        <div>
            <button pButton pRipple icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded" (click)="menu.toggle($event)"></button>
            <p-menu #menu [popup]="true" [model]="items"></p-menu>
        </div>
    </div>
    <ul class="list-none p-0 m-0">
        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="assets/images/blocks/avatars/circle-big/avatar-f-1.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Jane Cooper</span>
                    <div class="text-700 mb-2">responded to an issue.</div>
                    <a class="text-primary cursor-pointer">
                        <i class="pi pi-github text-sm mr-2"></i>
                        <span>Issue #1185</span>
                    </a>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">14 mins ago</span>
        </li>
        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="assets/images/blocks/avatars/circle-big/avatar-m-1.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Robert Fox</span>
                    <div class="text-700">changed team size from <span class="text-900 font-medium">5</span> to <span class="text-900 font-medium">6</span>.</div>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">20 mins ago</span>
        </li>
        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="assets/images/blocks/avatars/circle-big/avatar-f-2.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Kristin Watson Cooper</span>
                    <div class="text-700 mb-2">created a Q4 presentation to an issue.</div>
                    <a class="text-primary cursor-pointer">
                        <i class="pi pi-file-pdf text-sm mr-2"></i>
                        <span>q4_presentation.pdf</span>
                    </a>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">38 mins ago</span>
        </li>
        <li class="py-3 border-bottom-1 surface-border flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="assets/images/blocks/avatars/circle-big/avatar-f-3.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Annette Black</span>
                    <div class="text-700">added <span class="text-900 font-medium">Nico Greenberg</span> to <span class="text-primary">Watchlist Tier-1</span>.</div>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">1 day ago</span>
        </li>
        <li class="py-3 flex md:align-items-start md:justify-content-between flex-column md:flex-row">
            <div class="flex align-items-start mr-0 lg:mr-5">
                <img src="assets/images/blocks/avatars/circle-big/avatar-m-2.png" class="mr-3 w-3rem h-3rem"/>
                <div>
                    <span class="text-900 font-medium block mb-2">Floyd Miles</span>
                    <div class="text-700">has refunded a blue t-shirt for <span class="text-primary">$79</span>.</div>
                </div>
            </div>
            <span class="block text-500 font-medium ml-7 md:ml-5 mt-2 md:mt-0">4 days ago</span>
        </li>
    </ul>
</div>`;

    items: MenuItem[];

    ngOnInit() {
        this.items = [
        {
            label: 'Options',
            items: [
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'},
                {label: 'Search', icon: 'pi pi-fw pi-search'}
            ]
        }];
    }

}
