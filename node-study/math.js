// 하나의 모듈 만들어서 하나 보내기
const add = (a, b) => a + b;
const minus = (a, b) => a - b;
const multiple = (a, b) => a * b;
const divide = (a, b) => a / b;

// case1 제일 간단하게 하나씩 날리기-----------
// 각각 보내고 싶은것만 날리고 싶을때 이렇게 하면됨!!!
// module.exports = add; // add뒤에 "()" 가로 안넣어도 됨!!!
// module.exports = minus;
// module.exports = multiple;
// module.exports = divide;

// module.exports = { //보내고 싶은 것들만 모아서 보내기
//     add,
//     minus,
//     multiple,
//     divide
// };
// -----------------------------------

// case2,case3 여러개 묶어서 보내기-----------
module.exports.add = (a, b) => a + b;
module.exports.minus = (a, b) => a - b;
module.exports.multiple = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;