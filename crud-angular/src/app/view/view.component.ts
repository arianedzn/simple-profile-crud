import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit { 
  
  employee: Employee;
  employeeId: string;

  constructor(private route: ActivatedRoute,private router: Router,
    private apiService: ApiService) { }

  ngOnInit() {
   
    this.employeeId = this.route.snapshot.params['employeeId'];
    
    this.apiService.viewEmployee(this.employeeId).subscribe((data:Employee) => {
        console.log(data);
        this.employee = data;
      });
  }

  list(){
    this.router.navigate(['employees']);
  }
}
