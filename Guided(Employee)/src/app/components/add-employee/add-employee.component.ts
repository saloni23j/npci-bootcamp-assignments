import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/common/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeModel : Employee = new Employee (0,"","",new Date(Date.now()),0,0,0,0)
  onSubmit(employeeModel : Employee) { 
    
    this.employeeModel = employeeModel;
    console.log(this.employeeModel);
  }
}
