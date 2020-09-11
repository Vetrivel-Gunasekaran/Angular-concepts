import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  name = 'dia';
  myId = 1;
  person = {
    name: 'bala',
    age: 30
  }
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    console.log(this.loginService.isLogin);
  }

}
