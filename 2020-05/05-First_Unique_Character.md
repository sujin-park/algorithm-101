## LeetCode - First Unique Character in a String

### 문제 설명
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:
```
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
```

### 문제 풀이
```javascript
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;      
        }
    }
    return -1;
};
```