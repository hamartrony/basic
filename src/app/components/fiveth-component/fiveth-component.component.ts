import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-fiveth-component',
  templateUrl: './fiveth-component.component.html',
  styleUrls: ['./fiveth-component.component.sass']
})
export class FivethComponentComponent {
  animals: Animal[] = [
    {name: 'nina', type:'dog', age: 10},
    {name: 'luna', type:'snak', age: 5},
    {name: 'chico', type:'cow', age: 1},
    {name: 'tiao', type:'cat', age: 3},
    
  ]

}
