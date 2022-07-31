import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';

const route : Routes = [
 {path : '', component : WelcomeComponent },
  {path : 'employees', component : EmpListComponent},
  {path: 'departments', component : DeptListComponent},
  {path: 'addEmployee', component : AddEmployeeComponent},
  {path: 'addDepartment', component : AddDepartmentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    AddEmployeeComponent,
    AddDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
