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
promise1(true)
.then(function(result){
    console.log(result);
})
.catch(function(err) {
    console.log(err);
});

//promise 실패시
promise1(false)
.then(function(result){
    console.log(result);
})
.catch(function(err){
    console.log(err);
});

// ---------------------------------------------------