// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

let nums = [1, 2, 3, 4];

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]) {
    let num: number = 0;
    for (let i = 0; i < nums.length; i++) {
      if (num ^ nums[i]) {
        num = nums[i];
      }
    }
    console.log(num);
  }
}

const data = new Solution();
data.hasDuplicate(nums);

let a: number = 5; // binary: 0101
let b: number = 0; // binary: 0011

let result: number = a ^ b; // binary: 0110, which is 6 in decimal
console.log(result); // Output: 6
