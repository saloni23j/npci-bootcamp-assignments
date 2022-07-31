import { Component, OnInit } from '@angular/core';
import { Department } from '../common/department';
import { ManagementServiceService } from 'src/app/services/management-service.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  constructor(private service : ManagementServiceService) { }
  departmentList:Department[] = [];
  ngOnInit(): void {
    this.listOfDepartments()
  }

listOfDepartments(){
  this.service.getAllDepartments().subscribe((data:any)=>{
    console.log(data);
    this.departmentList = data;
  })
}
}
