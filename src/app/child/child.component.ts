import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  name: string = 'Vetri';
  @Input() parentName;
  @Input() messageFromParent;
  @Output() sendData = new EventEmitter<string>();
  @Output() callParent = new EventEmitter<string>();
 
  constructor() { }
 
  ngOnInit() {
  }

  sendMessage(){
    this.callParent.emit('Message from child');
  }

  send(){
    this.sendData.emit('Data emitted');
  }

}
