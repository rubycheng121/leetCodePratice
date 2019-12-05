/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if (digits[digits.length - 1] == 9) {
        for (let j = digits.length - 1; j >= 0; j--) {
            // console.log('j=' + j + ' digits[j]=' + digits[j]);
            // console.log((j == 0 && digits[j] == 9));

            if (digits[j] != 9 && j != 0) {
                digits[j]++
                    return digits
            }
            if (digits[j] == 9) {
                digits[j] = 0
            }
            // console.log((j == 0 && digits[j] == 0));
            if (j == 0 && digits[j] != 0) {
                digits[0]++
                    // digits.push(0)
            }
            if (j == 0 && digits[j] == 0) {
                digits[0] = 1
                digits.push(0)
            }

        }

    } else {
        digits[digits.length - 1]++
    }
    return digits
};

let digits = [2, 4, 9, 3, 9]
let answer = plusOne(digits)

console.log(answer);