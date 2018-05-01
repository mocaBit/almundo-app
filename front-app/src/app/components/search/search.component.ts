import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'alm-search',
  template: `
  <form [formGroup]="searchForm">
    <div class="filter-cards">
      <div class="text-center">
        <h5>Filtrar <i class="fa fa-sort-down"></i></h5>
      </div>
      <div>
        <h5>
          <i>
            <svg-icon src="./assets/icons/filters/search.svg"></svg-icon>
          </i> Nombre del Hotel
        </h5>
        <div class="input-group">
          <input formControlName="name" required type="text" class="form-control form-control-sm" placeholder="Ingrese el nombre del Hotel">
          <div class="input-group-append">
            <button (click)="findHotelByName()" class="btn btn-primary" type="button">Aceptar</button>
          </div>
        </div>
      </div>
      <div>
        <h5>
          <i><svg-icon src="./assets/icons/filters/star.svg"></svg-icon></i> Estrellas
        </h5>
        <ul>
          <li>
            <input type="checkbox" (click)="findHotelByStar(-1)">
            <b> Todas las Estrellas</b>
          </li>
          <li *ngFor="let i of getArrayStars()">
            <b *ngIf="i > 0">
              <input type="checkbox" (click)="findHotelByStar(i)">
              <i *ngFor="let n of getArrayStars()" class="stars">
                <svg-icon *ngIf="n<i" src="./assets/icons/filters/star.svg"></svg-icon>
              </i>
            </b>
          </li>
        </ul>
      </div>
    </div>
  </form>
  `,
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchHotel: EventEmitter<any> = new EventEmitter();
  searchForm: FormGroup;

  MAX_COUNT_STARS = 5;
  parameterSearch = {
    name : '',
    stars : []
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      'name': ['', Validators.required ],
    });
  }

  getArrayStars(): Array<number> {
    return Array.from(new Array(this.MAX_COUNT_STARS), (val, index) => index).reverse();
  }

  findHotelByName() {
    this.parameterSearch.name = this.searchForm.value.name;
    this.searchHotel.emit(this.parameterSearch);
  }

  findHotelByStar(starNumber: number) {
    starNumber = (starNumber === -1) ? this.MAX_COUNT_STARS : starNumber;
    const stars = this.parameterSearch.stars;
    const index = stars.indexOf(starNumber);
    if (index !== -1) {
      stars.splice(index, 1);
    } else {
      stars.push(starNumber);
    }
    this.parameterSearch.stars = stars;
    this.parameterSearch.name = this.searchForm.value.name;
    this.searchHotel.emit(this.parameterSearch);
  }
}
