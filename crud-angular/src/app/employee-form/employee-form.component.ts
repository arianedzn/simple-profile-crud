import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Employee } from '../employee.model';
// import { Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit{

  employeeObj: Employee = {
    employeeId: "",
    empFirstName: "",
    empLastName: "",
    empStreetAddress: "",
    empCity: "",
    empCountry: "",
    empZipCode: null,
    empAreaCode: null,
    empPhoneNumber: null,
    empBirthDate: "",
  };
  isEdit: boolean;
  constructor(private employeeService: ApiService, private router: Router) { }

  // private updateSubscription: Subscription;
  ngOnInit(): void {}
    // this.updateSubscription = interval(3000).subscribe(() => {
    //   this.employeeService.informChild();
    // });

  
  // addEmployee(form: NgForm) {
    // let obj = employeeForm.value;
    // obj.employeeId = null;
    // this.employeeService.createEmployee(obj).subscribe(response => {
    //   console.log(obj);
    //   employeeForm.form.reset();
    //   this.employeeService.informChild();
    // });
  addEmployee(employeeForm) {
    let data: Employee = {
      employeeId: "",
      empFirstName: employeeForm.value.firstName,
      empLastName: employeeForm.value.lastName,
      empStreetAddress: employeeForm.value.streetAddress,
      empCity: employeeForm.value.city,
      empCountry: employeeForm.value.country,
      empZipCode: employeeForm.value.zipCode,
      empAreaCode: employeeForm.value.areaCode,
      empPhoneNumber: employeeForm.value.phoneNumber,
      empBirthDate: employeeForm.value.birthDate,
    }
    console.log(employeeForm);
    this.employeeService.createEmployee(data).subscribe() 
    employeeForm.form.reset();
    this.employeeService.informChild();
  }

  receiveEmployee(employee) {
    console.log(employee);
    this.employeeObj = Object.assign({}, employee);
    this.isEdit = true;
  }

  updateEmployee(employeeForm) {
    this.employeeService.updateEmployee(this.employeeObj).subscribe(() => {
      console.log("Employee Updated");
      this.employeeService.informChild();
      this.isEdit = false;
      employeeForm.form.reset();
    });
  }
}
