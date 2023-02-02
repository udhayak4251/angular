import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class DynamicTableComponent {
  headers:any = ['ID', 'First Name', 'Last Name', 'Email', 'Phone', 'Address', 'City', 'Country'];
  columns:any = ['id', 'firstName', 'lastName', 'email', 'phone', 'address', 'city', 'country'];
  data:any = [    {      id: 1,      firstName: 'John',      lastName: 'Doe',      email: 'john.doe@example.com',      phone: '555-555-5555',      address: '123 Main St',      city: 'Anytown',      country: 'USA'    },    {      id: 2,      firstName: 'Jane',      lastName: 'Doe',      email: 'jane.doe@example.com',      phone: '555-555-5556',      address: '456 Main St',      city: 'Anytown',      country: 'USA'    },    {      id: 3,      firstName: 'Bob',      lastName: 'Smith',      email: 'bob.smith@example.com',      phone: '555-555-5557',      address: '789 Main St',      city: 'Anytown',      country: 'USA'    }  ];
}
