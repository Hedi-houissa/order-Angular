import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addOrder(orderData: any) {
    return this.http.post(`${this.apiUrl}/addOrder`, orderData);
  }
  getOrders(): Observable<any[]> {
    const url = `${this.apiUrl}/getOrders`;
    return this.http.get<any[]>(url);
  }
  acceptOrder(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/checkOrders`;
    const body = { id: orderId, check: 'accepted' };
    return this.http.post(url, body);
  }

  refuseOrder(orderId: number): Observable<any> {
    const url = `${this.apiUrl}/checkOrders`;
    const body = { id: orderId, check: 'refused' };
    return this.http.post(url, body);
  }
}
