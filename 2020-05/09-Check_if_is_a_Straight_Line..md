## LeetCode - Check if is a Straight Line

#### 문제 설명
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
```
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
```

Example 2:
```
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
```

#### 문제 풀이
브레젠험 직선 알고리즘을 통해서 처음과 끝점 사이에 있는 연속되는 점들이 직선을 이루고 있는지 체크를 했다. coordinates의 점들 중 하나라도 직선을 이루지 못하면 return false.
```
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const compareNumber = (point1, point2) => {
    return (point2[1] - point1[1]) / (point2[0] - point1[0]);
};

const checkStraightLine = (coordinates) => {
    for (let i = 2; i < coordinates.length; i++) {
        if (compareNumber(coordinates[i - 2], coordinates[i - 1]) !==
            compareNumber(coordinates[i - 1], coordinates[i])) {
            return false;
        };
    }
    return true;
};
```