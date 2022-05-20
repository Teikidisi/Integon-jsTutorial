import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: `<span>soy un Ejemplo {{text}} </span>
  <app-tercero></app-tercero>`
})

export class Ejemplo{
  text="abcdefg";
}
