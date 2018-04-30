import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alm-hotel-list',
  template: `
    <div>
    <p>
      hotel-list works!
    </p>
    <alm-hotel></alm-hotel>
    </div>
  `,
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
