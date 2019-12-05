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
    console.log(nums);
};



let standarAnswer = (nums) => {
    if (nums.length == 0) return 0
    let pointer = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[pointer]) {
            pointer++
            nums[pointer] = nums[i]

        }
    }

    return pointer + 1
};

var otherAnswer = function(nums) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != nums[i])
            nums[++i] = nums[j];
    }
    console.log(nums);

    return ++i;
};


let nums = [1, 0, 0, 2, 2, 8, 3, 4, 3, 1, 1]
    // removeDuplicates(nums)
let r = otherAnswer(nums)
console.log(r);