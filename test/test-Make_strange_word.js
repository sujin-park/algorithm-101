/**
 * 프로그래머스 - 이상한 문자 만들기
 */
const testCase = "try hello world"

const isEven = (num) => num % 2 === 0

const solution = (s) => {
  return s
      .split(" ")
      .map(word =>
          word
         .split("")
         .map((inner, idx) => isEven(idx) ? inner.toUpperCase() : inner.toLowerCase())
         .join("")
  ).join(" ")
}

test("try hello word를 넣으면 TrY HeLlO WoRlD를 반환한다.", () => {
  expect(
    solution(testCase)
  ).toBe("TrY HeLlO WoRlD")
})