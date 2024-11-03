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
