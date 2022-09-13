// 선택 문제 3번 (친구 찾기)
// 이름이 4글자면 친구입니다. 친구를 찾는 함수를 작성해주세요.

//풀이
// filter

const foo = (users) => {
  const friends = users.filter((x) => x.length === 4);
  return friends;
};

foo(["Ryan", "Kieran", "Mark"]);
