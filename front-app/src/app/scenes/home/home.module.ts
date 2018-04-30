import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SearchComponent } from '../../components/search/search.component';
import { HotelListComponent } from '../../components/hotel-list/hotel-list.component';
import { HotelComponent } from '../../components/hotel/hotel.component';

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    HotelListComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
