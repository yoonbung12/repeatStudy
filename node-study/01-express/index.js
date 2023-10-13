const express = require('express'); // express module 가져오기(import)
const app = express(); //app 은 server객체다!!!
const PORT = 8002; // 내가 열려는 포트 번호!!
// ---------서버 실행을 위해----------------(서버의 시작은 package.jsondp 에 있는 index.js다....)
//서버가 열린걸 확인하고 읽어올 부분 
app.get('/', function(request, response){
    response.send("hello Expresss");
});
// PORT 받아오기 이래야 열린다...!!!
app.listen(PORT, function(){
    console.log(`PORT OPEN ${PORT}`);
});
// -----------------------------------

// -------ejs 템플릿 설정------------------
app.set("view engine", "ejs"); //view engine을 ejs로 바꿈
// app 객체의 view폴더를 기본값 : "./views"
// 만약 ./view 폴더로 바꾸고 싶으면  app.set("views", "./view"); 하면됨
// app.set("views", "./view"); 

// ---------------------------------------

app.get("/test", function(request, response){
    console.log(__dirname); // 절대 경로Users/yun-byeong-woo/Documents/GitHub/study_alone/repeatStudy/node-study/01-express
    response.sendFile(__dirname + "/index.html") // 절대 경로
})