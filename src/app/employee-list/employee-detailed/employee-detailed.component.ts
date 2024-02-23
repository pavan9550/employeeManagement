import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/Modals/employee';
import { EmployeeServiceService } from 'src/Services/employee-service.service';

@Component({
  selector: 'app-employee-detailed',
  templateUrl: './employee-detailed.component.html',
  styleUrls: ['./employee-detailed.component.css'],
})
export class EmployeeDetailedComponent implements OnInit {
  employee: employee = {
    id: 0,
    name: '',
    location: '',
    email: '',
    mobile: '',
  };
  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empService: EmployeeServiceService
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.empService.getEmployee(queryParams['id']).subscribe((data) => {
        this.employee = data;
      });
    });
  }
  backToEmpList() {
    this.router.navigate(['/employees']);
  }
}
