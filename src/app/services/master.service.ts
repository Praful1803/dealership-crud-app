import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  DEALER_API_URL = 'http://localhost:3000/dealers';

  CARS_API_URL = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }

  // Dealer API

  getDealers(): Observable<any>{
    return this.http.get(this.DEALER_API_URL);
  }

  addDealers(payload: any): Observable<any>{
    return this.http.post(this.DEALER_API_URL, payload);
  }

  deleteDealers(id: any): Observable<any>{
    return this.http.delete(`${this.DEALER_API_URL}/${id}`);
  }

  updateDealers(id: any, payload: any): Observable<any>{
    return this.http.patch(`${this.DEALER_API_URL}/${id}`, payload);
  }

  // Cars API

  getCars(): Observable<any>{
    return this.http.get(this.CARS_API_URL);
  }

  addCar(payload: any): Observable<any>{
    return this.http.post(this.CARS_API_URL, payload);
  }

  deleteCar(id: any): Observable<any>{
    return this.http.delete(`${this.CARS_API_URL}/${id}`);
  }

  updateCar(id: any, payload: any): Observable<any>{
    return this.http.patch(`${this.CARS_API_URL}/${id}`, payload);
  }
}
