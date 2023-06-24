import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-ui',
  templateUrl: './order-ui.component.html',
  styleUrls: ['./order-ui.component.css'],
})
export class OrderUIComponent {
  constructor(private orderService: OrderService) {}

  formData: any = {};
  nameInvalid: boolean = false;
  lastNameInvalid: boolean = false;
  typeLeaveInvalid: boolean = false;
  daysNumInvalid: boolean = false;
  positionInvalid: boolean = false;
  isFormSubmitted: boolean = false;

  submitForm() {
    this.nameInvalid = !this.validateString(this.formData.name);
    this.lastNameInvalid = !this.validateString(this.formData.lastName);
    this.typeLeaveInvalid = !this.validateString(this.formData.typeLeave);
    this.positionInvalid = !this.validateString(this.formData.position);
    this.daysNumInvalid = isNaN(this.formData.daysNum);

    if (
      !this.nameInvalid &&
      !this.lastNameInvalid &&
      !this.daysNumInvalid &&
      !this.positionInvalid &&
      !this.typeLeaveInvalid
    ) {
      // Form is valid, handle form submission
      console.log(this.formData);
      
      this.orderService.addOrder(this.formData).subscribe(
        (response) => {
          // Handle success response if needed
          console.log(response);
        },
        (error) => {
          // Handle error response if needed
          console.error(error);
        }
      );
    }

    this.isFormSubmitted = true;
  }

  validateString(value: string): boolean {
    return typeof value === 'string' && value.trim().length > 0;
  }
}
