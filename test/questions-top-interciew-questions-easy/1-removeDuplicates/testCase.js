var assert = require('assert');
let fun = require('../../../answer-top-interciew-questions-easy/1-removeDuplicates')


describe('Array ', function() {
    describe('should remove the duplicates in-place ', function() {
        it('#Input: [1,1,2], Output: [1,2]', function() {
            let input = [1, 1, 2]
            let except = [1, 2]
            let result = fun(input)
            assert.deepEqual(except, result);
        });
        it('#Input: [0,0,1,1,1,2,2,3,3,4] , Output: [0,1,2,3,4]', function() {
            let input = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
            let except = [0, 1, 2, 3, 4]
            let result = fun(input)
            assert.deepEqual(except, result);
        });
    });
});