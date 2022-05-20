import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  public Counter: number = 0;
  constructor() {   }

  ngOnInit(): void {
  }

  Increment(){
    this.Counter++;
  }
  Decrement(){
    this.Counter--;
  }

}
