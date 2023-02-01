import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from '../model/orders';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  constructor(private http: HttpClient) {

  }

  public reservation(formobj: any) {
    return this.http.post(`http://localhost:5000/api/orders/add`, formobj)
  }

  public login(formobj: any) {
    return this.http.post(`http://localhost:5000/api/users/login`, formobj)
  }

  public getorderbyEmail(email: any) {
    return this.http.get<Orders[]>(`http://localhost:5000/api/orders/by-email?email=${email}`)
  }
}
