import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Input() parentMessage;
  @Output() callParent1 = new EventEmitter<string>();
  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  sendMessage(){
    this.callParent1.emit('Hi I am your test child');
  }

  openTestModal(){
    const options: NgbModalOptions = { windowClass: 'modal-opened' };
    const ref = this.modal.open(ErrorModalComponent, options);

    ref.componentInstance.title = 'Error!!!!!';
    ref.componentInstance.message = 'This is a test modal';
  }

}
