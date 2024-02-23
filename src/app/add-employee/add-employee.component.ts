import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/Services/employee-service.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private empService: EmployeeServiceService,
  ) {}
    
  initializeForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3),Validators.pattern(/^[a-zA-Z]+$/)]],
      location: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      mobile: ['', [Validators.pattern(/^[0-9]{10}$/),Validators.required]],
    });
  }
  ngOnInit(): void {
    this.initializeForm();
  }


  onSubmit() {
    console.log(this.employeeForm.value);
    const formData = this.employeeForm.value;
    console.log('Form Data:', formData);
    this.empService.addEmployee(formData).subscribe((data) => {
      console.log('Employee Added successfully');
    });
    this.router.navigate(['/employees']);
  }
}
