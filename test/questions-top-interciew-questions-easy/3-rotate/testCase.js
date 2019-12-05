var assert = require('assert');
let fun = require('../../../answer-top-interciew-questions-easy/3-rotate')


describe('Array ', function() {
    describe('should find the maximum profit. ', function() {
        it('#Input: [1,2,3,4,5,6,7] and k=3, Output: [5,6,7,1,2,3,4]', function() {
            let input = {
                array: [1, 2, 3, 4, 5, 6, 7],
                k: 3
            }
            let except = [5, 6, 7, 1, 2, 3, 4]
            let result = fun(input.array, input.k)
            assert.deepEqual(except, result);
        });
        it('#Input: [-1,-100,3,99] and k=2, Output: [3, 99, -1, -100]', function() {
            let input = {
                array: [-1, -100, 3, 99],
                k: 2
            }
            let except = [3, 99, -1, -100]
            let result = fun(input.array, input.k)
            assert.deepEqual(except, result);
        });
    });
});