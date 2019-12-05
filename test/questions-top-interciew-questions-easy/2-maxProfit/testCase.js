var assert = require('assert');
let fun = require('../../../answer-top-interciew-questions-easy/2-maxProfit')


describe('Array ', function() {
    describe('should find the maximum profit. ', function() {
        it('#Input: [7,1,5,3,6,4], Output: 7', function() {
            let input = [7, 1, 5, 3, 6, 4]
            let except = 7
            let result = fun(input)
            assert.equal(except, result);
        });
        it('#Input: [1,2,3,4,5] , Output: 4', function() {
            let input = [1, 2, 3, 4, 5]
            let except = 4
            let result = fun(input)
            assert.equal(except, result);
        });
    });
});