import { Component, OnInit } from '@angular/core';
import { ManagementServiceService } from 'src/app/services/management-service.service';
import { Employee } from 'src/app/common/employee';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private service : ManagementServiceService) { }
  employeeList:Employee[];
  ngOnInit(): void {
    this.listOfEmployees()
  }

listOfEmployees(){
  this.service.getAllEmployees().subscribe((data:any)=>{
    console.log(data);
    this.employeeList = data;
  })
}
}
