// Problem No. 442 - Medium https://leetcode.com/problems/find-all-duplicates-in-an-array/

function findDuplicates(nums: number[]): number[] {
  let numbers = new Map<number, number>();
  let twiceNums = [];
  for (let elem of nums) {
    if (numbers.has(elem)) {
      twiceNums.push(elem);
    } else {
      numbers.set(elem, 1);
    }
  }
  return twiceNums;
}

const resp1 = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
const resp2 = findDuplicates([1, 1, 2]);

console.log("resp1=>", resp1);
console.log("resp2=>", resp2);

// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.
// *Solution1
function twoSum(nums: number[], target: number) {
  const indices = new Map<number, number>(); // val -> index

  for (let i = 0; i < nums.length; i++) {
    indices[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (indices[diff] !== undefined && indices[diff] !== i) {
      return [i, indices[diff]];
    }
  }

  return [];
}
// *Solution Brute Force

function twoSumBruteForce(nums: number[], target: number): number[] {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return []; // No solution found
}
