import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  number: number = 0;
  constructor() {}

  calculate(number:string){
    this.number = parseInt(number);
  }
}
