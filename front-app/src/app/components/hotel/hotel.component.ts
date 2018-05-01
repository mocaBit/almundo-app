import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Hotel } from '../../store/models/hotel.model';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'alm-hotel',
  template: `
  <div class="row border hotel-card">
    <div class="img col-12 col-sm-12 col-sm-3 col-md-4 col-lg-4 col-xl-3">
      <img class="img-fluid" src="{{IMAGE_URL}}{{hotel.image}}" alt="{{hotel.image}}">
    </div>
    <div class="detail col-12 col-sm-12 col-sm-6 col-md-5 col-lg-5 col-xl-6">
      <h5 class="text-primary">{{hotel.name}}</h5>
      <p class="stars">
        <i *ngFor="let star of getArrayStars(hotel)">
          <svg-icon src="./assets/icons/filters/star.svg"></svg-icon>
        </i>
      </p>
      <p class="amenities">
        <i *ngFor="let amenity of hotel.amenities">
          <svg-icon src="./assets/icons/amenities/{{amenity}}.svg"></svg-icon>
        </i>
      </p>
    </div>
    <div class="price col-12 col-sm-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
      <p>Precio por noche por habitacion</p>
      <h5>ARS <b>{{hotel.price}}</b></h5>
      <button class="btn col">Ver Hotel</button>
    </div>
  </div>
  `,
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  IMAGE_URL = environment.IMAGE_URL;
  @Input() hotel: Hotel;
  constructor(private hotelService: HotelService) { }

  ngOnInit(): void {
  }

  getArrayStars(): Array<number> {
    return Array.from(new Array(this.hotel.stars), (val, index) => index);
  }

}
