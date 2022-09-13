// 선택 문제 4번 (아이큐 테스트)
// 홀수 또는 짝수중에 하나만 존재하는 값의 순번을 출력하는 함수를 작성해주세요.

// 풀이
// 짝수들 사이의 홀수의 합 무조건 홀수
// 홀수들 사이의 짝수 합은 짝수 or 홀수
// 1. 짝수 개수로 구분 (짝수가 2개 이상이면 홀수가 하나인 배열)
// findIndex() : 해당 값 index 반환

const foo = (numbers) => {
  const pos = numbers.split(" ");
  const toNum = (num) => Number(num % 2);
  const arr = Array.from(pos, toNum);

  let countEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countEven++;
    }
  }

  if (countEven > 1) {
    return arr.findIndex((x) => x % 2 !== 0) + 1;
  }
  return arr.findIndex((x) => x % 2 === 0) + 1;
};

foo("1 1 2 1");
