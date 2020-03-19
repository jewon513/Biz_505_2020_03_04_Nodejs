console.log("나는 자바스크립트 파일입니다.");

// json 타입의 객체를 선언
var std = { name: "홍길동", age: 30, tel: "12345" };

// 숫자형 배열을 선언
var arrNumber = [1, 2, 3, 4, 5];

var arrString = [
  "홍길동",
  "이몽룡",
  "성춘향",
  "장보고",
  "성",
  "성성",
  "성성성"
];

// console.log(값, 값, 값) : 각각의 값들을 형 변환 하지 말고 있는 형태 그대로 표시하라
console.log("객체:", std);
console.log("숫자형:", arrNumber);
console.log("문자열형", arrString);

// 객체의 요소중 일부를 변경, 추가하고 싶을때
var std = { ...std, age: 100 };
console.log("객체: ", std);

var sum = 0;

// forEach를 이용하여 요소를 연산이 끝나고 값을 조회하면 계산된 결과가 정확히 조회된다는 보장이 없다. forEach는 비동기 방식이기 때문에
arrNumber.forEach(function(item) {
  sum += item;
});

console.log("합계 : ", sum);

// 배열을 순회하고 각 여소들을 callback 함수에 전달하고 callback 함수가 return 하는 값들을 모아서 다른 배열로 생성해준다.
const arrNumber2 = arrNumber.map(number => {
  return number + 2;
});

console.log("arrNumber2 : ", arrNumber2);

const arrString2 = arrString.find(item => {
  return item == "성춘향";
});
console.log("arrString2: ", arrString2);

const arrNumber3 = [
  1,
  2,
  3,
  4,
  5,
  3,
  2,
  7,
  6,
  5,
  4,
  3,
  2,
  3,
  7,
  8,
  7,
  4,
  3,
  2,
  3,
  345,
  34,
  634,
  543,
  23,
  4312,
  432,
  654,
  756,
  43,
  523,
  412,
  4,
  36,
  57,
  65,
  87,
  987,
  87,
  324,
  56,
  345,
  4,
  23,
  423
];

const evenNumber = arrNumber3.filter(item => {
  return item % 2 === 0;
});
console.log("짝수들만 모여라 :", evenNumber);

const arrNumber4 = [1, 2, 3, 4, 5];

// acc = 0 으로 시작을 하고 arrNumber4의 각 요소를 item에 보내고
// 내부에서 코드를 실행한 후 결과값을 return 한다.
// foreach 수행이 끝난 후 연산결과의 정확도를 보장할수 없는 문제를 해결한 함수.
const reduce = arrNumber4.reduce((acc, item) => {
  return acc + item;
});

//
const sortArr = arrNumber3.sort((a, b) => {
  console.log(a - b);
  return a - b;
});

console.log("reduce : ", reduce);

console.log("sort : ", sortArr);
