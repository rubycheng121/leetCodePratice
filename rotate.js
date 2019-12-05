// Input: [1,2,3,4,5,6,7] and k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Input: [-1,-100,3,99] and k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = (nums, k) => {

    for (let i = 0; i < k; i++) {
        let tmp = nums.pop()
        for (let j = nums.length; j > 0; j--) {
            nums[j] = nums[j - 1]
        }
        nums[0] = tmp
        console.log('rotate ' + (i + 1) + ' steps to the right: [' + nums + ']');

    }
    return nums
};


let nums = [-1, -100, 3, 99]
let k = 2
let answer = rotate(nums, k)