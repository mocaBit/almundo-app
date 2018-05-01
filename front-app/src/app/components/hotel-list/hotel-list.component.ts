import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../store/models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'alm-hotel-list',
  template: `
    <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
      <div class="hotels-list" *ngIf="hotelsList">
          <alm-hotel *ngFor="let hotel of hotelsList" [hotel]="hotel"></alm-hotel>
      </div>
    </div>
  `,
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  hotelsList: Hotel[];
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
      console.log(hotels);
    });
  }
}
