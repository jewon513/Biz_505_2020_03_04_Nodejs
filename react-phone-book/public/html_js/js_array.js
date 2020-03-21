var arr = ["나미춘", "배성재", "이말년", "침착맨", "주호민"];

const [test1, test2, test3, test4, test5] = arr;

console.log("test", test3);

const names = { name: "나미춘", phone: "010-1111-1111", addr: "배텐" };
const { name, phone, addr } = names;

console.log("이름은 : ", name);
console.log("핸드폰은 : ", phone);
console.log("주소는 : ", addr);
