import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alm-home',
  template: `
    <div>
      <p>
        home works!
      </p>
      <alm-search></alm-search>
      <alm-hotel-list></alm-hotel-list>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
