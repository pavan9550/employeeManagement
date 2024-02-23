import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { employee } from 'src/Modals/employee';
import { EmployeeServiceService } from 'src/Services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  constructor(
    private empService: EmployeeServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  empList: employee[] = [];
  filteredList: employee[] = [];

  ngOnInit(): void {
    this.empService.getAllEmployees().subscribe((data) => {
      this.empList = data;
      this.filteredList = this.empList;
    });
  }

  search(input:any) {
    console.log(input);
    if (input.target.value.length == 0) {
      this.filteredList = this.empList;
    } else {
      this.filteredList = this.empList.filter((e) => {
        return e.name.startsWith(input.target.value);
      });
    }
  }

  onEdit(emp: employee) {
    this.router.navigate(['/editEmployee'],{queryParams:{'id':emp.id,'name':emp.name,'location':emp.location,'email':emp.email,'mobile':emp.mobile}});
  }

  onDelete(empID: number) {
    this.empService.deleteEmployee(empID).subscribe(() => {
      console.log('Employee Deleted');
      this.filteredList = this.empList.filter((employee) => employee.id !== empID);
    });
  }
}
