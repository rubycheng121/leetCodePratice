/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let position = 0
    let l = nums.length
    for (let j = 0; j < l; j++) {
        // console.log('checking ' + nums[position] + ' is duplicate in nums array [' + nums + ']');
        let p = isDuplicate(nums, nums[position])
        if (p > 0) {
            // is duplicate in the array and return posotion
            return true
        } else {
            // is not in the array and now freez the position 
            // console.log('There is no duplicate, frees the position ' + position + ' and go to next');
            position++
        }

    }
    // console.log(nums);
    return false

};


var isDuplicate = function(array, value) {
    let appearTimes = 0
    let position = 0
    for (let i = 0; i < array.length; i++) {
        if (value == array[i]) {
            appearTimes++
            position = i
        }
    }

    if (appearTimes > 1) {
        // console.log('yes, value  ' + value + ' is duplicate in array [' + array + '], position is ' + position);
        return true
    } else {
        // console.log('no, value  ' + value + ' is not duplicate in array [' + array + ']');
        return false
    }
}

// Input: [1,2,3,1]
// Output: true

// Input: [1,2,3,4]
// Output: false

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true


// let nums = [1, 2, 3, 4]
// let answer = containsDuplicate(nums)
// console.log(answer);

module.exports = containsDuplicate