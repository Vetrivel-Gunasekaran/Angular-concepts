import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  name : string = 'Vetrivel';
  date = new Date();
  accountNumber = '982876892'
  players = [
    {id:1 , name: 'Sachin', age: '33' ,score: 1321 },
    {id:2 , name: 'Virat', age: '34' ,score: 2332},
    {id:3 , name: 'Dhoni', age: '32' ,score: 232} 
  ]
  isLogin = false;
  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin;
  }

}
