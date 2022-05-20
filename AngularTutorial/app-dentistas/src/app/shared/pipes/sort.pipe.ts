import { Pipe, PipeTransform } from '@angular/core';
import {Person} from '../interfaces/person'

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Person[], args: string, order:string): Person[] {

      if (value){
        return value.sort((a: Person, b:Person) =>{
          if (a[args] < b[args]){
            return order=== 'asc' ? 1 : -1;
          } else if (b[args] < a[args]){
            return order === 'asc'? -1 : 1;
          }
          return 0;
        })
      }
  }

}
