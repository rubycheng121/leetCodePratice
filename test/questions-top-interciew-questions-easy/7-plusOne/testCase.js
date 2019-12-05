var assert = require('assert');
let fun = require('../../../answer-top-interciew-questions-easy/7-pulsone')

describe('Array ', function() {
    describe('A non-empty array of digits representing a non-negative integer, plus one to the integer.', function() {
        it('#Input: [1,2,3] , Output: [1,2,4]', function() {
            let input = [1, 2, 3]
            let except = [1, 2, 4]
            let result = fun(input)
            assert.deepEqual(except, result);
        });
        it('#Input: [4,3,2,1] , Output: [4,3,2,2]', function() {
            let input = [4, 3, 2, 1]
            let except = [4, 3, 2, 2]
            let result = fun(input)
            assert.deepEqual(except, result);
        });
    });
});