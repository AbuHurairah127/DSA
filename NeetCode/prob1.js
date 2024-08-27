"use strict";
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
let nums = [1, 2, 3, 4];
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let num = 0;
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
let a = 5; // binary: 0101
let b = 0; // binary: 0011
let result = a ^ b; // binary: 0110, which is 6 in decimal
console.log(result); // Output: 6
