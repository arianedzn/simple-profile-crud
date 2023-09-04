import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: 'employees', component: EmployeeFormComponent},
  {path: 'view/:employeeId', component: ViewComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }