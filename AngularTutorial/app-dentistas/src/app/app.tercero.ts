import { Component } from '@angular/core';

@Component({
  selector: 'app-tercero',
  template: `<span style="font-weight: bold;">estoy metido soy el {{text}} </span>
  <app-cuarto></app-cuarto>`
})

export class Tercero{
  text="tercero";
}

@Component({
  selector: 'app-cuarto',
  template: `<span style="font-style: italic;"> estoy metido soy el {{text}}</span>`
})

export class Cuarto{
  text="cuarto";
}
