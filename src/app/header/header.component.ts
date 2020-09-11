import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  login(){
    this.isLogin = this.loginService.isLogin = true;
  }

}
