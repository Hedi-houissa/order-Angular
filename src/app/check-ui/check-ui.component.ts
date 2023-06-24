import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-check-ui',
  templateUrl: './check-ui.component.html',
  styleUrls: ['./check-ui.component.css'],
})
export class CheckUIComponent implements OnInit {
  orders: any = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // router to get all orders
    // this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(
      (orders) => {
        this.orders = orders;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  acceptOrder(orderId: number): void {
    this.orderService.acceptOrder(orderId).subscribe(
      (response) => {
        // Update the order status or handle the response if needed
        console.log(response);
        this.getOrders(); // Refresh the list of orders
      },
      (error) => {
        console.error(error);
      }
    );
  }

  refuseOrder(orderId: number): void {
    this.orderService.refuseOrder(orderId).subscribe(
      (response) => {
        // Update the order status or handle the response if needed
        console.log(response);
        this.getOrders(); // Refresh the list of orders
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
