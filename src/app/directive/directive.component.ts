import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
  color: string = "orange";
  colors = ["red","green","orange","vtt","violet"];
  players = [
              {id:1 , name: 'Sachin', age: '33' ,score: 1321 },
              {id:2 , name: 'Virat', age: '34' ,score: 2332},
              {id:3 , name: 'Dhoni', age: '32' ,score: 232},
              {id:4 , name: 'Yuvi', age: '21' ,score: 32},
              {id:5 , name: 'Dravid', age: '22' ,score:23 }
            ]
  isLogin: boolean = false;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLogin = this.loginService.isLogin;
  }

}
