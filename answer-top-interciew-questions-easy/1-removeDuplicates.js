/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
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
            return position
        } else {
            // console.log('no, value  ' + value + ' is not duplicate in array [' + array + ']');
            return 0
        }
    }
    let position = 0
    let l = nums.length
    for (let j = 0; j < l; j++) {
        // console.log('checking ' + nums[position] + ' is duplicate in nums array [' + nums + ']');
        let p = isDuplicate(nums, nums[position])
        if (p > 0) {
            // is duplicate in the array and return posotion
            nums.splice(p, 1)
        } else {
            // is not in the array and now freez the position 
            // console.log('There is no duplicate, frees the position ' + position + ' and go to next');
            position++
        }

    }
    // console.log(nums);
    return nums
};



module.exports = removeDuplicates
let nums = [1, 1, 2]
let r = removeDuplicates(nums)
    // console.log(r);