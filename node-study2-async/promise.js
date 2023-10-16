
// --------------기본적인 promise함수 예시-------------------
function promise1(flag) {
    return new Promise(function(resolve, reject){
        if(flag){
            resolve("promise 상태는 fullfilled!! then으로 연결됩니다. \n 이때의 flag가 true입니다.");
        } else{
            reject("promise 상태는 reject!!! catch로 연결됩니다. \n 이때의 flag가 false입니다.");
        }
    });
}
//promise 성공시
// promise1(true)
// .then(function(result){
//     console.log(result);
// })
// .catch(function(err) {
//     console.log(err);
// });

// //promise 실패시
// promise1(false)
// .then(function(result){
//     console.log(result);
// })
// .catch(function(err){
//     console.log(err);
// });

// ---------------------------------------------------

// 콜백을 일부러 발생시킨 경우~-------------------------------
// function add(n1, n2, cb){
//     setTimeout(function(){
//         let result = n1 + n2;
//         cb(result);
//     }, 1000);
// }

// function mul(n, cb ){
//     setTimeout(function() {
//         let result = n * 2;
//         cb(result);
//     }, 700);
// }

// function sub(n, cb){
//     setTimeout(function() {
//         let result = n - 1;
//         cb(result);
//     }, 500);
// }

// add(4, 3, function(x){
//     console.log(`1: `, x);
//     mul(x, function(y){
//         console.log(`2: `, y);
//         sub(y, function(z){
//             console.log(`3: `, z);
//         });
//     });
// });

// ------------promise로 변경------------------
// function add(n1, n2){
//     return new Promise((resolve, reject) =>  {
//         setTimeout(function(){
//             let result = n1 + n2;
//             resolve(result); // resolve(result) result를 내보낸다.
//         }, 1000);
//     });
// }

// function mul(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             let result = n * 2;
//             resolve(result);
//         }, 1000);
//     });
// }
// function sub(n){
//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             let result = n - 1;
//             resolve(result);
//         }, 1000);
//     });
// }
// add(4,3)
// .then(result => {
//     console.log("1: ", result);
//     return mul(result); //바로 다음 곱하기 불러와야해서 적었다.
// })
// .then(result => {
//     console.log("2:", result);
//     return sub(result);
// })
// .then(result => {
//     console.log("3:", result);
// })
// .catch((err) => {
//     console.log("error발생");

// });

// -------- (async)  async / await 사용 -------------
async function add(n1, n2){
    return new Promise((resolve, reject) =>  {
        setTimeout(function(){
            let result = n1 + n2;
            resolve(result); // resolve(result) result를 내보낸다.
        }, 1000);
    });
}

function mul(n){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let result = n * 2;
            resolve(result);
        }, 1000);
    });
}
function sub(n){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            let result = n - 1;
            resolve(result);
        }, 1000);
    });
}

// 1. async 함수는 promise를 return한다..
// 2. await 키워드는 async 함수 내부에서만 사용이 가능하다!!!!
async function exec(){
    const x = await add(3, 4);
    console.log('1 :' , x);
    const y = await mul(x);
    console.log("2:", y);
    const z = await sub(y);
    console.log("3:", z);
}
//함수 실행 시키기
exec();