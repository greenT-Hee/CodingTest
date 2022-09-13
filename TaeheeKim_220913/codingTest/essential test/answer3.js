// 필수 문제 3번 (승점 구하기)
//점수를 보고 이기면 3점, 비기면 1점, 지면 0점으로 계산하여 전체 승점을 구하는 함수를 작성해주세요.
// 10개의 경기 점수를 입력합니다.
// 0점에서 최대 4점까지 입력합니다.

// 풀이
// score 값은 누적 ( score += result)
// 앞의 점수가 클 때, 내 팀이 이김 ... 양수: 3점, 0: 1점, 음수: 0점
// return은 반복문 끝난 후 반환

const foo = (games) => {
  let score = 0;

  games.forEach((e) => {
    x = e.split(":");
    val = x[0] - x[1];

    if (val > 0) {
      result = 3;
    } else if (val === 0) {
      result = 1;
    } else {
      result = 0;
    }
    score += result;
  });
  return score;
};

foo(["3:1", "2:2", "1:3", "3:1", "2:2", "1:3", "3:1", "2:2", "1:3", "2:2"]);
//13
