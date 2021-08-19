import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderServicesService {

  constructor(private http: HttpClient) { }


  createOrder(order: Order): any{

    const orderBody =  new Order();

    orderBody.timestamp =  new Date();
    orderBody.orderingCurrency = order.orderingCurrency.toString();
    orderBody.toISOCode = order.toISOCode.toString();
    orderBody.dealAmount = order.dealAmount;

    return this.http.post<{message: any}>(`${environment.spApi}`, {
      orderingCurrency: order.orderingCurrency,
      toISOCode: order.toISOCode,
      dealAmount: order.dealAmount
    });
   // return this.http.post<{message: any}>(`${environment.apiUrl}createOrder`, {order});
  }

  getAllOrders(): any {//
    return this.http.get<{orders: Order[]}>(`${environment.spApi}`);
  }

  getAllAcceptedOrders(): any {//
    return this.http.get<{orders: Order[]}>(`${environment.spApi}accepted/`);
  }

  accept(id: string): any {
    return this.http.get<{message: any}>(`${environment.spApi}update/${id}`);

  }
  getISOCODES(): any{
    return this.http.get('assets/5d55df291420117de1478314c4756675-9b88efbd4d251115ed5e5e32f8c04bdc6180582f/currency_list_of_the_world_plain.text', {responseType: 'text'});
  }
}
