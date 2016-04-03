import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
} from 'angular2/testing';

// Load the implementations that should be tested
import {RomanGeneratorService} from './roman-generator.service';

describe('RomanGeneratorService', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    RomanGeneratorService
  ]);

  it('Convert 10 to roman', inject([ RomanGeneratorService ], (romanGeneratorService) => {
    expect(romanGeneratorService.romanize(10)).toEqual('X');
  }));

  it('Convert 11 to roman', inject([ RomanGeneratorService ], (romanGeneratorService) => {
    expect(romanGeneratorService.romanize(11)).toEqual('XI');
  }));

  it('Convert 9 to roman', inject([ RomanGeneratorService ], (romanGeneratorService) => {
    expect(romanGeneratorService.romanize(9)).toEqual('IX');
  }));

});
