import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.sass']
})


export class ThirdComponentComponent {
  size: number = 22;
  classes: string  = "teste-classe";
  show: boolean = true;


  constructor(){}

  ngOnInit(): void{}

  changeShow(): void {
    this.show = !this.show;
  }

}
