import { Component } from '@angular/core';

@Component({
  selector: 'app-fourth-component',
  templateUrl: './fourth-component.component.html',
  styleUrls: ['./fourth-component.component.sass']
})
export class FourthComponentComponent {
  aula4: boolean = true;
  num: number = 0; 


  changeNumber(){
    this.num = Math.floor(Math.random() * 10) 

  }

}
