// package.json에서 자바스크립트 실행 파일 진입점(entry point)을 index.js로 잡음
// console.log(add);

// --------case2,3 혼용해서 사용---------
// 파일에서 여러개의 식별자를 객체 형태로 보낸 상황
const {add, minus, multiple} = require('./math'); // module에서 가져올 키값(사용할 함수)
//const math = require('./math'); // module.export한것들을 다 담기위해 math선언
// const sum = math.add(3, 5);
const sum = add(2, 3);
// const multi = math.multiple(2, 5);
const multi = multiple(3, 3);
//const minusda = math.minus(9, 4);
const minusda = minus(9, 6);
console.log(sum);
console.log(multi);
console.log(minusda);

// -------case 1 ---------
// 한개의 식별자만 사용할 경우
// 불러온 함수 사용하기
// math.js 안에 모듈에서 add 함수 불러오기 --require('./불러올곳')
// const add = require('./math');
// console.log(add(1, 5));

