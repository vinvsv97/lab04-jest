'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

describe('invertCase() function', function(){
    it('should convert lowercase to uppercase', function(){
        let result = invertCase('HellO');
        expect(result).toEqual('hELLo');
    });
})