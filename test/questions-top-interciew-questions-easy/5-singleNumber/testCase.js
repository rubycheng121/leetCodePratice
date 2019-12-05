var assert = require('assert');
let fun = require('../../../answer-top-interciew-questions-easy/5-singleNumber')

describe('Array ', function() {
    describe('should return the single numbers in the array', function() {
        it('#Input: [2,2,1] , Output: 1', function() {
            let input = [2, 2, 1]
            let except = 1
            let result = fun(input)
            assert.equal(except, result);
        });
        it('#Input: [4,1,2,1,2] , Output: 4', function() {
            let input = [4, 1, 2, 1, 2]
            let except = 4
            let result = fun(input)
            assert.equal(except, result);
        });
    });
});