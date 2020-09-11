import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit {
  title: string = 'Hi I am from Parent';
  message: string = 'Hello';
  childMessage: string;
  childName: string;
  testChildMessage: string;
  @ViewChild(ChildComponent,  {static: false}) childReference: ChildComponent;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.childName = this.childReference.name;
    this.cdr.detectChanges();
  }

  receiveChild(event){
    this.childMessage = event;
  }

  receiveMessageFromChild(event){
  this.testChildMessage = event;
  
  }

}
