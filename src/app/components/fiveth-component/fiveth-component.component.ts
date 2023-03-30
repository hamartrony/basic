import { Component } from '@angular/core';
import { Mesa } from 'src/app/Mesa';
import { FivethCompService } from 'src/app/services/fiveth-comp.service';

@Component({
  selector: 'app-fiveth-component',
  templateUrl: './fiveth-component.component.html',
  styleUrls: ['./fiveth-component.component.sass']
})
export class FivethComponentComponent {
  animals: Mesa[] = []

  constructor(private fivethService: FivethCompService){
    this.getMesas();

  }

  removeMesa(mesa: Mesa){
    this.animals = this.fivethService.removeMesa(mesa, this.animals)
  }

  getMesas():void{
    this.fivethService.getAll().subscribe((mesas) => this.animals = mesas);
  }



}
