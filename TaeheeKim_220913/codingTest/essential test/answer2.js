// 필수 문제 2번(중간에 빠진 최소 숫자 찾기)
// 0부터 시작하는 양수(+)인 ID가 있습니다. 여러 ID를 보고 사용하지 않는 가장 작은 숫자를 찾는 함수를 작성해주세요.
// 정렬되지 않는 배열을 넣어도 동작해야함
// 중복된 숫자가 있는 경우도 동작해야함

//풀이
// 선형검색
// 1. 오름차순 정리 (sort)
// 2. 중복 제거 (set) > 객체 > Array.from > 배열
// 4. 반복문 (for)
// 4-1. 앞뒤 숫자 차이가 모두 1이면 (반복문이 return되는 value + 1)
// 4-2. 앞뒤 숫자 차이가 1이 아니면 (배열의 마지막 값 + 1)
// 4-3. 0이 없으면 0 반환 (includes)

const foo = (ids, result) => {
  const set = new Set(ids.sort());
  const arr = Array.from(set);

  for (let i = 0; i < arr.length; i++) {
    value = arr[i + 1] - arr[i];
    if (value !== result) {
      return arr[i] + 1;
    } else if (!arr.includes(0)) {
      return 0;
    } else {
      return arr[arr.length - 1] + 1;
    }
  }
};

foo([0, 1, 2, 4, 6, 7, 2, 3, 3, 4], 1);
// 8
