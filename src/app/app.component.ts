import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  empData = [{ id: 1, name: 'Test1', salary: 2000, address: 'pune' },
  { id: 2, name: 'Test2', salary: 38759, address: 'pune' },
  { id: 3, name: 'Test3', salary: 7642, address: 'pune' }];

  customerData=[{ id: 1, name: 'customer1', address: 'pune' },
  { id: 2, name: 'customer2', address: 'pune' },
  { id: 3, name: 'customer3', address: 'pune' }];

  toggleDiv(visible: boolean) {
    console.log(visible);
  }
}
