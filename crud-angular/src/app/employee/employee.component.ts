import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  allEmployees: any;
  @Output() sendToParent = new EventEmitter();

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.employeeAdded.subscribe(res=>{
      console.log("employee Added from Parent Component");
      this.getLatestEmployees();
    });

    this.getLatestEmployees();
  }

  getLatestEmployees() {
    this.apiService.getLatestEmployees().subscribe(res => {
      console.log(res);
      this.allEmployees = res;
    });
  }

  editEmployee(employee) {
    this.sendToParent.emit(employee);
    console.log(employee);
  }

  deleteEmployee(employee) {
    this.apiService.deleteEmployee(employee).subscribe(res => {
      this.getLatestEmployees();
    });
  }

  viewEmployee(employee){
    this.router.navigate(['view/', employee.employeeId]);
  }

}
