import { Component, OnInit } from '@angular/core';
import { SalesPerson } from '../sales-person';
@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
// export class SalesPersonListComponent implements OnInit {

//   constructor() { }
//   salesPersonList:SalesPerson[] = [
//     new SalesPerson("Saloni", "Mathur", "msaloni@gmail.com", '6000')
//   ]

//   ngOnInit(): void {
//   }

// }
export class SalesPersonListComponent implements OnInit{
  constructor() {}

  salesPersonList:SalesPerson[] = [
    new SalesPerson("Saloni", "Mathur", "msaloni@gmail.com", 4000),
    new SalesPerson("Caddie", "Mathur", "caddiem@gmail.com", 4000),
    new SalesPerson("Ritika", "Sah", "rsah@gmail.com", 3000),
    new SalesPerson("Shivani", "Jn.", "shivani@gmail.com", 4000),
  ]
  ngOnInit(): void {
      }
salesPersonModel:SalesPerson = new SalesPerson("Sal", "mathur", "sal@gmail.xom", 7000);
onSubmit(){
  console.log(this.salesPersonModel);
}
}
