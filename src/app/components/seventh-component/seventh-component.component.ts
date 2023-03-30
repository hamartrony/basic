import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mesa } from 'src/app/Mesa';
import { FivethCompService } from 'src/app/services/fiveth-comp.service';

@Component({
  selector: 'app-seventh-component',
  templateUrl: './seventh-component.component.html',
  styleUrls: ['./seventh-component.component.sass']
})
export class SeventhComponentComponent {
  mesa?: Mesa;

  constructor(private mesaService: FivethCompService, private route: ActivatedRoute ){
    this.getMesaId()
  }

  getMesaId(){
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.mesaService.getId(id).subscribe((item) => this.mesa = item)
    

  }
}
