import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>{{ counter }}</h3>
<button (click)="restar(1)">-1</button>
<button (click)="sumar(1)">+1</button>
<button (click)="resetCounter()">Reset</button>`
})

export class CounterComponent  {
  constructor() { }

  public counter: number = 10;

  sumar(value: number): void {
    this.counter = this.counter + value;
  };

  restar(value: number): void {
    this.counter = this.counter - value;
  };

  resetCounter = ():void => {
    this.counter = 10;
  };
}
