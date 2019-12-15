import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ZomatoService } from './zomato.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
   declarations: [
      AppComponent,
      DashboardComponent,
      DetailViewComponent,
      HomeComponent,
      NotFoundComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      NgSelectModule,
      NgxSpinnerModule,
      BrowserAnimationsModule
   ],
   providers: [ZomatoService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
