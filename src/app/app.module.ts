import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminModule } from './admin/admin.module';
import { ProductService } from './services/product.service';
import { SkuService } from './services/sku.service';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AutofocusDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [
    ProductService,
    SkuService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
