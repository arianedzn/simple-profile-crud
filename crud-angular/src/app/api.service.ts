import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private subject = new Subject<any>();
  // startedEditing = new Subject<number>();

  constructor(private _http:HttpClient) {}
  employeeAdded = new Subject();

  // sendClickEvent(){
  //   this.employeeAdded.next;
  // }
  getClickEvent(){
    return this.employeeAdded.asObservable();
  }

  createEmployee(employee) {
    console.log(employee);
    return this._http.post("http://localhost:3000/api/employees/add", employee);
  }

  privatebaseURL="http://localhost:3000/api/employees";

  getLatestEmployees() {
    return this._http.get("http://localhost:3000/api/employees/all");
  }

  updateEmployee(employee) {
    return this._http.patch("http://localhost:3000/api/employees/" + employee.employeeId, employee);
  }

  deleteEmployee(employee) {
    return this._http.delete("http://localhost:3000/api/employees/" + employee.employeeId);
  }

  viewEmployee(employeeId){
    return this._http.get("http://localhost:3000/api/employees/" + employeeId);
  }

  informChild() {
    this.employeeAdded.next;
  }
}
