var assert = require('assert');
let fun = require('../containDuplicate')
describe('Array ', function() {
    describe('should return true when the array existing duplicate numbers', function() {
        it('#Input: [1,2,3,1] , Output: true', function() {
            let input = [1, 2, 3, 1]
            assert.equal(fun(input), true);
        });
        it('#Input: [1,2,2] , Output: true', function() {
            let input = [1, 2, 2]
            assert.equal(fun(input), true);
        });
        it('#Input: [1,1,1,3,3,4,3,2,4,2] , Output: true', function() {
            let input = [1, 2, 2]
            assert.equal(fun(input), true);
        });
    });
    describe('should return true when the array existing duplicate numbers', function() {
        it('#Input: [1,2,3,4] , Output: false', function() {
            let input = [1, 2, 3, 4]
            assert.equal(fun(input), false);
        });
    });
});