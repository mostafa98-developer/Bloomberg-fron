import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/models';
import { OrderServicesService } from 'src/app/services/order-services.service';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {

  displayedColumns: string[] = ['orderingCurrency', 'toISOCode', 'dealAmount', 'timestamp', 'action'];
  dataSource = new MatTableDataSource();

  constructor(private orderServices: OrderServicesService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.orderServices.getAllOrders()
      .subscribe(arg => {
        console.log(arg);
        this.dataSource = arg;
      });
  }

  accept(id, row): any {
    this.orderServices.accept(id)
      .subscribe(arg => {
        console.log(arg);
        this.openSnackBar(arg.message, 'suc-snackbar');
        window.location.reload();
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
