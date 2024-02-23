import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { employee } from 'src/Modals/employee';
import { EmployeeServiceService } from 'src/Services/employee-service.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employeeForm!: FormGroup;
  employee:employee={
    id: 0,
    name: '',
    location: '',
    email: '',
    mobile: ''
  };
  data:any;
  constructor(private fb: FormBuilder,private router:Router, private activeRoute: ActivatedRoute,private empService: EmployeeServiceService) {
    // this.data = this.router.getCurrentNavigation()?.extras.state;
    // this.employee = this.data.emp;
  }
  initializeForm(){
    this.employeeForm = this.fb.group({
      id:new FormControl(this.employee.id),
      name: new FormControl(this.employee.name, [Validators.required]),
      location:new FormControl(this.employee.location, [Validators.required]),
      email: new FormControl(this.employee.email, [Validators.required]),
      mobile: new FormControl(this.employee.mobile, [Validators.required])
    });
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((queryParams)=>{
      this.employee.id = +queryParams['id'];
      this.employee.name = queryParams['name'];
      this.employee.location = queryParams['location'];
      this.employee.email = queryParams['email'];
      this.employee.mobile = queryParams['mobile'];
      console.log(`ngOnInIt : ${JSON.stringify(this.employee)}`);
      this.initializeForm();
    })
  }

  onSubmit() {
    const formData = this.employeeForm.value;
    console.log('Form Data:', formData);
    this.empService.updateEmployee(formData).subscribe((data)=>{
      console.log("Employee updated successfully");
    });
    this.router.navigate(['/employees']);
  }
}
