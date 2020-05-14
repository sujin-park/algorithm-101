## 프로그래머스 - 정수 내림차순으로 배치하기

### 문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

### 문제 풀이
간단한 문제이지만 프로그래머스 레벨 1 문제를 깔끔하게 다 풀고싶어서 푸는 김에 같이 올립니다.
```javascript
function solution(n) {
    const arr = Array.from(n.toString(), Number).sort((pre, next) => next - pre);

    return Number(arr.join(""));
}
```