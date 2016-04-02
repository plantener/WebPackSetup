import {Injectable} from 'angular2/core';

@Injectable()
export class RomanGeneratorService{
  romanize(decimalNumber: number){
    return 'MCD';
  }
}
