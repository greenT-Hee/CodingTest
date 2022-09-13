// 선택 문제 1번 (모음 찾기)

//풀이
//정규식 사용
//g: global, i: 대소문자 구분 없이 사용 가능
const foo = (str) => {
  const count = str.match(/[aeiou]/gi).length;
  return count;
};

foo("abracadabra");
//5
