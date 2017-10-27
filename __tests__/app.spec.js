'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

describe('Basic math and logic', function() { 
  test('should add numbers correctly', function() {
    expect(1+1).toEqual(2);
  });

  test('should not find non-existent values in arrays', function() {
    let array = ['Joel', 'Alice', 'Pedro'];
    expect(array).not.toContain('Dave');
  });

  test('should compare numbers correctly', function() {
    let array = [8,6,7,5,3,0,9];
    expect(array.filter((n) => n > 10)).not.toContain(true);
  });
});

describe('The greet() function', function() {
  it('should greet the world', function() {
    expect(greet("world")).toEqual("Hello World");
  });  
});

//these tests will catch the errors
describe('The invertCase() function', function() {
  it('should return the changed value', function() {
    let result = invertCase('a');
    expect(result).toEqual('A');
  });

  it('should invert uppercase', function() {
    let result = invertCase('A');
    expect(result).toEqual('a');
  });

  it('should invert multiple letters', function() {
    let result = invertCase('BanANABANana');
    expect(result).toEqual('BANanabanANA');
  })

  it('should invert non-letters', function() {
    let result = invertCase('1,2;3_4 5');
    expect(result).toEqual('1,2;3_4 5');
  });
});
