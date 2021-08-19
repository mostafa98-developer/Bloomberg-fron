import { Component } from '@angular/core';
import { OrderServicesService } from './services/order-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bloomberg';

  constructor(
     private orderServices: OrderServicesService
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): any {
  }
}
