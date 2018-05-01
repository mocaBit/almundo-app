import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../store/models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'alm-home',
  template: `
    <div>
      <!-- H E A D E R -->
      <header class="topbar">
        <nav class="navbar top-navbar navbar-expand-md" style="background-color: #124181">
          <div class="navbar-header">
            <a class="navbar-brand" href="index.html">
              <b>
                <img src="assets/icons/logo-almundo.svg" alt="homepage" class="dark-logo" />
              </b>
            </a>
          </div>
        </nav>
      </header>
      <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <!-- S E A R C H -->
          <alm-search (searchHotel)="searchHotels($event)" ></alm-search>
        </div>
        <!-- H O T E L -- L I S T -->
        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
          <div class="hotels-list" *ngIf="hotelsList">
              <alm-hotel *ngFor="let hotel of hotelsList" [hotel]="hotel"></alm-hotel>
          </div>
        </div>
    </div>
      <!--<alm-hotel-list [hotelsList]="hotelsList"></alm-hotel-list>-->
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() hotelsList: Hotel[];
  constructor(private hotelService: HotelService) {}

  ngOnInit(): void {
    this.hotelService.getHotels()
    .subscribe(hotels => {
      this.hotelsList = hotels;
    });
  }

  searchHotels(params: any) {
    this.hotelService.searchHotels(params.name,  params.stars)
    .subscribe(hotels => {
      this.hotelsList = hotels;
      console.log('hotels', hotels);
    });
  }

}
