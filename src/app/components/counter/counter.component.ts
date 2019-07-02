import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count:number = 0;
  constructor() { }

  ngOnInit() {

  }
  reloadCounter():void{
   this.count=0;
  }
  addCount() : void{
    this.count++;
  }
  subtractCount() : void{
    this.count--;
  }

}
