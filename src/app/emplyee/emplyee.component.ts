import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emplyee',
  templateUrl: './emplyee.component.html',
  styleUrls: ['./emplyee.component.css']
})
export class EmplyeeComponent implements OnInit {

  @Input() empList: any[];
  @Input() title:string;
  hidden:boolean;
  @Output() isVisibleEvent = new EventEmitter<boolean>();

    constructor() { }

  ngOnInit() {
  }

  hidediv(){
    this.hidden = !this.hidden;
    this.isVisibleEvent.emit(this.hidden);
  }

}
