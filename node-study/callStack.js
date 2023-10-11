//콜 스택 
/**
 * 기본적으로 LIFO(후입 선출 구조로 이루어짐)
 * first(); 호출시 stack에 first함수가 담기고
 * 그다음에 first함수 안에 담겨 있는 second를 실행
 * 그러고 나서 second안에 있는 콘솔을 찍고 스택에서 빠져 나가고 
 * 이게 끝나고 나면 first안에 console.log(1)을 출력하고 스택에서 빠져 나간다
 * 결구 처음 들어온게 맨 마지막에 호출된다고 생각하면 된다...
 */

// function first() {
//     second();
//     console.log(1);
//     return;
// }
// function second(){
//     console.log(2);
//     return;
// }
// first();
// ---------------------------
/** Non-Blocking IO, blocking 차이
 * blocking 은 순서에 맞춰 불러진 처리를 해야지만 다음 작업을 실행을 하고
 * NonBlocking IO는 순서에 맞게 처리 되는 것이 아닌 작업이 빨리 완료된 순서되로 한다...
 * 
 */

/** eventLoop
 * 오래걸리는 작업은 이벤트 루프에 맡김으로써 
 * 백그라운드에 빼놨다가 다른 작업이 완료시 불러진다!!!!
 * 백그라운드 : 타이머나(setTimeout), 이벤트 리스터들이 대기하는 공간으로 여러 작업들이 동시에 실행 될 수 있다!!!
 * 태스크 큐 : 이벤트 발생 후, 백그라운드에서 태스크 큐로 타이머/이벤트 리스너의 콜백함수를 보냄. - > 호출스택으로  올린다..
*/
function run(){
    console.log("3초 뒤 실행");
}

console.log("시작");
setTimeout(run, 3000);
console.log("끝");

