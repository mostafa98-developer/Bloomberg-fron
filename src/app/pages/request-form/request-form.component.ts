import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models';
import { OrderServicesService } from 'src/app/services/order-services.service';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})
export class RequestFormComponent implements OnInit {

  title = 'Bloomberg';
  public ISOCODES = [];
  orderDetails: FormGroup;
  orderObj: Order;
  selected2: any;
  constructor(
    private formBuilder: FormBuilder, private orderServices: OrderServicesService,
    private snackBar: MatSnackBar) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): any {
    this.orderDetails = this.formBuilder.group({
      orderingCurrency: ['', Validators.required],
      toISOCode: ['', Validators.required],
      dealAmount: ['', Validators.required]
    });

    this.orderServices.getISOCODES()
      .subscribe(arg => {
          this.ISOCODES = arg.split('\n');
          console.log(this.ISOCODES);
      });
  }

  get order(): any {
    return this.orderDetails.controls;
  }

  submit(): any {

    if (this.orderDetails.invalid) {
      this.openSnackBar('requird fields', 'err-snackbar');
      return;
    }
    this.orderObj = this.orderDetails.value;
    this.orderObj.toISOCode = this.orderObj.toISOCode.trim();
    console.log(this.orderObj);

    this.orderServices.createOrder(this.orderObj)
      .subscribe(arg => {
        console.log(arg);
        this.openSnackBar(arg.message, 'suc-snackbar');
      }, err => {
        console.log(err);
        this.openSnackBar(err.error.message, 'err-snackbar');
      });
  }

  openSnackBar(message, style: string): any {
    this.snackBar.open(message, '', {
      duration: 600,
      panelClass: [style]
    });
  }
}
