import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {HeaderRoutingModule} from './header-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ButtonModule,
    BlockViewerModule,
    InputTextModule,
    CalendarModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent
  ]
})
export class HeaderModule {
}