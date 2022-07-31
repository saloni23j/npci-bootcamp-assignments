import { Injectable } from '@angular/core';
import { Employee } from '../common/employee';
import { Department } from '../common/department';
import {Observable , map} from 'rxjs';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  empurl = "http://localhost:8080/api/emp"
  depturl = "http://localhost:8080/api/dept"
  constructor(private httpClient : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
      return this.httpClient.get<getEmployeeResponse>(this.empurl).pipe(map((response:any) => response._embedded.employees))
  }
  getAllDepartments() : Observable<Department[]>{
    return this.httpClient.get<getDepartmentResponse>(this.depturl).pipe(map((response:any) => response._embedded.departments))
}
}

interface getEmployeeResponse{
  _embedded : {
    employees : Employee[]
  }
}
  interface getDepartmentResponse{
    _embedded : {
      departments : Department[]
    }
}