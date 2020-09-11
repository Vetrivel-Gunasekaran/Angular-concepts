import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  name: string = 'Sachin';
  myId: number = 1;
  person = {
    name: 'Dhoni',
    age: 38
  }
  firstName: string  = 'Vetrivel';
  isLogin: boolean = false;
  colSpan: number = 3;
  myClassBinding: string = 'text-success';
  myClassBindingFailure: string = 'text-danger';
  myColor: string = 'orange';
  country: string = 'Pakistan';
  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  login(){
    this.isLogin = this.loginService.isLogin = true;
  }

  printCountry(){
    alert(this.country);
  }

}
