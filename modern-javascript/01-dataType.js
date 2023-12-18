let divide = 3/2;
console.log(divide); // js는 정수만을 위한 타입이 존재하지 않는다. 결국 그말은 정수 / 정수 였어도 실수라고 봐야한다.

let str = 'string';

for(let i = 0; i < str.length; i++) {
    // console.log(str);
    // console.log(str[i]);
}

let person ={
    name: 'bonggu',
    age: 18,
    hobby: ['농구', '운동','축구']
}
console.log(person);

// 변수 선언문
var x; 

// 할당문
x = 'string';

// 함수 선언문
function login(){};
// 조건문
if(x != 1) {console.log(false)};

// 반복문

for(let i =0; i < 10; i++) {
    const x =[i];    
    // console.log(x);    
}

// 연산자 (여기는 패스), 단 삼항 연산자는 다시 한번 보기
// 조건식 ? 조건식이 true 일때 반환할값 : false 일때 반환할 값.
let number = 10;
let res1 = number / 2 === 5 ? '정답입니다.' : '틀렸습니다.';
let res2 = number % 2 ? '홀수' : '짝수'
// console.log(res1);
// console.log(res2);

// 타입 확인시 
// typeof (함수, 변수 등등) But null은 일치연산자를 시ㅏ용해야 한다.

