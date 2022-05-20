import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass']
})
export class MatematicoComponent implements OnInit {
  @Input() num1: number = 0;
  @Input() num2: number = 0;
  @Input() operacion: string;
  @Output() buttonClicked = new EventEmitter<boolean>()
  public resultado: number;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    const num = changes['num1'];
    const numero2 = changes['num2'];
    const oldValue = num.previousValue;
    const newValue2 = numero2.currentValue;
    const newValue = num.currentValue;
    console.log(`Num1 changed from ${oldValue} to ${newValue}`);
    if (newValue < 0)
      this.num1 = 0;
    if (newValue2 < 0)
      this.num2 = 0;
  }

  emitirEvento(){
    this.Eleccion()
    this.buttonClicked.emit(true)
  }

  Sumar(num1:number,num2:number){
    this.resultado =  num1+num2
  }
  Restar(num1:number,num2:number){
    this.resultado= num1-num2
  }
  Dividir(num1:number,num2:number){
    this.resultado= num1/num2
  }
  Multiplicar(num1:number,num2:number){
    this.resultado= num1*num2
  }
  Eleccion(){
    if (this.operacion === "suma"){
      this.Sumar(this.num1,this.num2)
    } else if (this.operacion === "resta"){
      this.Restar(this.num1,this.num2)
    } else if (this.operacion === "divi"){
      this.Dividir(this.num1,this.num2)
    } else if (this.operacion === "mult"){
      this.Multiplicar(this.num1,this.num2)
    }
  }

}
