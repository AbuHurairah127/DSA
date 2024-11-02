//! Duplicate Integer - EASY
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false

//* Solution:
//* Approach 1
const hasDuplicate = (nums: number[]) => {
  let numbers = new Map<number, number>();
  let isDuplicate: boolean = false;
  for (let elem of nums) {
    if (numbers.get(elem)) {
      numbers.set(elem, numbers[elem]++);
      isDuplicate = true;
    } else {
      numbers.set(elem, 1);
    }
  }
  return isDuplicate;
};

const ans1 = hasDuplicate([1, 2, 3, 3]);
const ans2 = hasDuplicate([1, 2, 3, 4]);
console.log("ans1 =>", ans1);
console.log("ans2 =>", ans2);
