import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  result: string[] = [];
  constructor(private service: DataService){
    
    if (service.number != 0){
      for(let i = 0; i< 11; i++){
        this.result.push(`i X ${service.number} = ${service.number * i}`);
      }
    } else {
      this.result.push('No multiples found');
    }
  }
}
