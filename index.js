// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// let x = -123
// function reversedInteger(x){
//     let sign = Math.sign(x);
//     let result = sign * String(Math.abs(x)).split('').reverse().join('')
//     let power = Math.pow(2,31)
//     if((result <=-power || result > power)) return 0
//     return result
// }

// console.log(reversedInteger(x));

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
//  where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

values = [1, 2, 3, 0, 0, 0]
a = 3
value = [2, 5, 6]
b = 3

function mergeTwoSortArray(nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let fValue = nums1[first];
    let sValue = nums2[second];

    if (fValue > sValue) {
      nums1[i] = fValue;
      i--;
      first--;
    } else {
      nums1[i] = sValue;
      i--;
      second
    }
  }
  return nums1
}

console.log(mergeTwoSortArray(values, a, value2, b))
