import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceptedRequestsComponent } from './pages/request-form/accepted-requests/accepted-requests.component';
import { RequestFormComponent } from './pages/request-form/request-form.component';
import { RecordsComponent } from './records/records/records.component';

const routes: Routes = [
  {path: '', component: RequestFormComponent},
  {path: 'requests', component: RecordsComponent},
  {path: 'accepted', component: AcceptedRequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
