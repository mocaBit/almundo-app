import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { environment } from '../../environments/environment';
import Hotel from '../models/hotel.model';

@Injectable()
export class HotelService {
  api_url = environment.API_URL;
  hotelUrl = `${this.api_url}/hotels`;

  constructor(private http: HttpClient) { }

  createHotel(hotel: Hotel): Observable<any> {
    return this.http.post(`${this.hotelUrl}`, hotel);
  }

  getHotels(): Observable<Hotel[]> {
    return this.http.get(this.hotelUrl)
                    .map(res  => {
                      return res['data'] as Hotel[];
                    });
  }

  searchHotels(name: string, stars: Array<any>): Observable<Hotel[]> {
    const params = {name, stars: JSON.stringify(stars)};
    if (name.length === 0) {
      delete params.name;
    }
    if (stars.length === 0) {
      delete params.stars;
    }
    return this.http.get(this.hotelUrl, { params })
                    .map(res  => {
                      return res['data'] as Hotel[];
                    });
  }

  editHotel(hotel: Hotel) {
    const editUrl = `${this.hotelUrl}`;
    return this.http.put(editUrl, Hotel);
  }

  deleteHotel(id: string): any {
    const deleteUrl = `${this.hotelUrl}/${id}`;
    return this.http.delete(deleteUrl)
                    .map(res  => {
                      return res;
                    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
