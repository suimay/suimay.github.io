// greeting.js

// 현재 시각에 따라 인사말을 출력하는 코드
const date = new Date();
const hour = date.getHours();

if (hour >= 5 && hour < 12) {
  console.log("좋은 아침입니다!");
} else if (hour >= 12 && hour < 18) {
  console.log("안녕하세요, 좋은 오후입니다!");
} else {
  console.log("안녕하세요, 좋은 저녁입니다!");
}

