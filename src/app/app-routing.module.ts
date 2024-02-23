import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailedComponent } from './employee-list/employee-detailed/employee-detailed.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes | Route[] = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'EmployeeDetails', component: EmployeeDetailedComponent },
  { path: 'AddEmployee', component: AddEmployeeComponent },
  { path: 'editEmployee', component: EditEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
