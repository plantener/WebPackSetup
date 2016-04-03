import {Component, Input, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';

import {RomanGeneratorService} from './roman-generator.service';

@Component({
  selector: 'roman-generator',
  template: require('./roman-generator.component.html'),
  providers: [RomanGeneratorService]
})

export class RomanGeneratorComponent implements OnInit{ //implements OnChanges Neat way. Can i get it to work?
ngOnInit(){
  this.decimalNumberControl.valueChanges.subscribe(decimalNumber => this.romanize(decimalNumber));
  
}
  decimalNumberControl = new Control();
  romanNumber: string;

  constructor(private _romanGeneratorService: RomanGeneratorService) {
  }

  romanize(decimalNmb: number){
    this.romanNumber = this._romanGeneratorService.romanize(decimalNmb);
  }
}
