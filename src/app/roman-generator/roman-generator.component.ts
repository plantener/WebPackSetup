import {Component, Input, OnChanges, SimpleChange} from 'angular2/core';

import {RomanGeneratorService} from './roman-generator.service';

@Component({
  selector: 'roman-generator',
  template: require('./roman-generator.component.html'),
  providers: [RomanGeneratorService]
})

export class RomanGeneratorComponent implements OnChanges{ // OnChanges not working :'(
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
     console.log('ngOnChanges - decimalNumber = ' + changes['decimalNumber'].currentValue);
   }

  decimalNumber: number;
  romanNumber: string;

  constructor(private _romanGeneratorService: RomanGeneratorService) { }

  romanize(decimalNmb){
    this.romanNumber = this._romanGeneratorService.romanize(decimalNmb);
  }
}
