/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {


    let findInArray = (array1, array2) => {
        console.log('arrau1=' + array1);
        console.log('arrau2=' + array2);
        let nums = []
        array1.forEach(n => {
            let add = false
            array2.forEach(p => {
                console.log('n=' + n + 'p=' + p);

                if ((n && p) == n) {
                    add = true
                    console.log('return');

                    return
                }
            })
            if (add) {
                nums.push(n)
            }
        });
        return nums
    }

    let findInArray2 = (array1, array2) => {
        var howOftenAppears = array1.reduce(function(map, n) {
            map[n] = (map[n] + 1) || 1;
            return map
        }, {});
        let nums = []

        array2.filter(function(n) {
            if (howOftenAppears[n]) {
                nums.push(n)
                howOftenAppears[n]--
            }
        });
        return nums

    }

    // if (nums1.length < nums2.length) { return findInArray(nums1, nums2) }
    // if (nums1.length > nums2.length) { return findInArray(nums2, nums1) }
    // if (nums1.length == nums2.length) { return findInArray2(nums1, nums2) }
    return findInArray2(nums1, nums2)
};

let nums2 = [1, 1, 1, 1, 2, 3]
let nums1 = [1, 1, 3]
let answer = intersect(nums1, nums2)
console.log(answer);