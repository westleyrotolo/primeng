import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { DividerModule } from 'primeng/divider';
import { OrderHistoryRoutingModule } from './orderhistory-routing.module';
import { OrderHistoryComponent } from './orderhistory.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    BlockViewerModule,
    OrderHistoryRoutingModule
  ],
  declarations: [OrderHistoryComponent]
})
export class OrderHistoryModule { }
