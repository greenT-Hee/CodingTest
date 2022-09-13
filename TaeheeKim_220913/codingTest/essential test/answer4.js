// 필수 문제 4번 (더하고 빼기)
//각 자리의 숫자를 더한값을 원래 숫자에서 빼고 결과가 하단에 나열한 과일코드가 나올때까지 계산하는 코드를 작성해주세요.
// 10~10000 사이 숫자 입력

//풀이
//예시를 보면, 무조건 한 자리까지 나눠야 함을 알 수 있음
// 일단, 11~999에서 무작위로 숫자를 골라서 여러번 직접 수동적으로 계산하여 찾아낸 규칙은
// 1번~2번 안으로 뺴고 더하는 과정 반복하면 무조건 sum값이 무조건 9나 18만 반복
// 결국 최종 값이 9만 나옴

// 1. 숫자 타입 배열 만들기
// 2. reuce 누적 함수로 sum
// 3. result(n-sum)으로 n 값 초기화

const foo = (n) => {
  do {
    let str = n.toString();
    let toNum = (num) => Number(num);
    let arr = Array.from(str, toNum);
    let sum = arr.reduce((a, b) => a + b);
    let result = parseInt(n - sum);
    n = result;
  } while (n > 9);
  // 한 자리 숫자가 되어야 더이상 빼고 더하기 불가해져서, n이 한 자리가 될 때까지만 반복문 실행

  return "apple";
  //return n;
  //n은 언제나 9니까 답은 apple만 나오게 되어 있는 로직인 것 같습니다.
};
foo(325);

// 결론적으로, 앞서 쓴 loop는 큰 의미가 없이
// 어떤 숫자를 넣어도 apple이 출력된다는 것이 저의 풀이 결론이었습니다!
