import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from "angular-datatables";

import { RoutingModule as AdminRouter } from './routing.module';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './partial/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from './partial/modal/modal.component';
import { GzDatePipe } from '../pipes/gz-date.pipe';
import { GzDateTimePipe } from '../pipes/gz-datetime.pipe';
import { GzHufPipe } from '../pipes/gz-huf.pipe';
import { GzNumberPipe } from '../pipes/gz-number.pipe';
import { HomeComponent } from './home/home.component';
import { SkuViewComponent } from './sku-view/sku-view.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    ModalComponent,
    GzDatePipe,
    GzDateTimePipe,
    GzHufPipe,
    GzNumberPipe,
    HomeComponent,
    SkuViewComponent,
  ],
  imports: [
    ChartsModule,
    DataTablesModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRouter,
  ]
})
export class AdminModule { }
