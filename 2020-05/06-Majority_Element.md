## LeetCode - Majority Element


#### 문제 설명
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:
```
Input: [3,2,3]
Output: 3
```

Example 2:
```
Input: [2,2,1,1,1,2,2]
Output: 2
```

#### 문제 풀이
처음에는 filter method 사용해볼까 했는데 반 이상 반복되는 숫자를 찾는 문제여서 정렬 후, n번째와 반 이상을 만족하는 index 값을 비교하여 값 도출.
```
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    nums.sort();

    for (let i = 0; i < nums.length; i++) {
        const halfIdx = Math.ceil(nums.length / 2) - 1;
        if (nums[i] === nums[halfIdx]) return nums[i];
    }
    return 0;
};
```