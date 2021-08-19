import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OrderServicesService } from 'src/app/services/order-services.service';

@Component({
  selector: 'app-accepted-requests',
  templateUrl: './accepted-requests.component.html',
  styleUrls: ['./accepted-requests.component.scss']
})
export class AcceptedRequestsComponent implements OnInit {

  displayedColumns: string[] = ['orderingCurrency', 'toISOCode', 'dealAmount', 'timestamp'];
  dataSource = new MatTableDataSource();

  constructor(private orderServices: OrderServicesService) { }

  ngOnInit(): void {
    this.orderServices.getAllAcceptedOrders()
      .subscribe(arg => {
        console.log(arg);
        this.dataSource = arg;
      });
  }

}
