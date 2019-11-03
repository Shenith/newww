import { Component, OnInit } from '@angular/core';
import {NewForm} from './form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  selectedCompanies;
  companies: any[] = [];
  //companiesNames = ['[‘item 1’, ‘item 0’, ‘item 1’]','[‘item 1’, ‘item 0’, ‘item 1’]','[‘item 1’, ‘item 0’, ‘item 1’]','[‘item 1’, ‘item 0’, ‘item 1’]'];

  x=new NewForm('','','');

  ngOnInit() {
    this.companies = ['Uber', 'Microsoft', 'Flexigen'];
    }

  onSubmit() {
    console.log(this.x);
  }

  onChange(event) {
    console.log(event);
    this.x.firstName=event;
  }
  

}
