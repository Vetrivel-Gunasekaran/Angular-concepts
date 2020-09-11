import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  openModal() {
    const options: NgbModalOptions = { windowClass: 'modal-opened' };
    const ref = this.modal.open(ErrorModalComponent, options);

    ref.componentInstance.title = 'Welcome';
    ref.componentInstance.message = 'This is Angular App';
  }

}
