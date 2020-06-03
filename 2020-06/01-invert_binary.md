## LeetCode - Invert Binary Tree

### 문제 설명
Invert a binary tree.

Example:

Input:
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
Output:
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

### 문제 풀이

```javascript
const invertTree = (root) => {
  if(!root) return null;

  const tree = new TreeNode();

  tree.val = root.val;
  tree.left = invertTree(root.right);
  tree.right = invertTree(root.left);
  return tree;
};
```