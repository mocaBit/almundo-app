import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {NgxPaginationModule} from 'ngx-pagination';
// Components and Services
import { HomeComponent } from './home.component';
import { SearchComponent } from '../../components/search/search.component';
import { HotelListComponent } from '../../components/hotel-list/hotel-list.component';
import { HotelComponent } from '../../components/hotel/hotel.component';
import { HotelService } from '../../services/hotel.service';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    HotelListComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularSvgIconModule,
    NgbModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [
    HotelService
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
