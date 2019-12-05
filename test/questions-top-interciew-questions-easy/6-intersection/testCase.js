const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
chai.use(deepEqualInAnyOrder);
const { expect } = chai;

let fun = require('../../../answer-top-interciew-questions-easy/6-intersection')

describe('Array ', function() {
    describe('should compute their intersection.', function() {
        it('#Input: nums1 = [1,2,2,1], nums2 = [2,2] , Output: [2,2]', function() {
            let input = {
                nums1: [1, 2, 2, 1],
                nums2: [2, 2]
            }
            let except = [2, 2]
            let result = fun(input.nums1, input.nums2)
            expect(except).to.deep.equalInAnyOrder(result);

        });
        it('#Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] , Output: [4,9]', function() {
            let input = {
                nums1: [4, 9, 5],
                nums2: [9, 4, 9, 8, 4]
            }
            let except = [4, 9]
            let result = fun(input.nums1, input.nums2)
            expect(except).to.deep.equalInAnyOrder(result);
        });
    });
});