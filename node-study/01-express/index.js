const express = require('express'); // express module 가져오기(import)
const app = express(); //app 은 server객체다!!!
const PORT = 8002; // 내가 열려는 포트 번호!!
// ---------서버 실행을 위해----------------(서버의 시작은 package.jsondp 에 있는 index.js다....)
//서버가 열린걸 확인하고 읽어올 부분 
// get 메소드(HTTP 메소드): 클라이언트가 요청할 수 있는 방법들을 정의한다.
app.get('/', function(request, response){
    response.send("hello Expresss");
});
// PORT 받아오기 이래야 열린다...!!!
// localhost:8000 혹은 127.0.0.1:8000
app.listen(PORT, function(){
    console.log(`PORT OPEN ${PORT}`);
});
// -----------------------------------

// -------ejs 템플릿 설정------------------
app.set('view engine', 'ejs'); //view engine을 ejs로 바꿈(engine설정)
// app 객체의 view폴더를 기본값 : "./views"
// 만약 ./view 폴더로 바꾸고 싶으면  app.set("views", "./view"); 하면됨
// app.set("views", "./view"); 
// ---------------------------------------

// ------------------------------------------
// 클라이언트가 접속하는 주소(정적 주소 [__dirname])
// app.use("/static", express.static(__dirname + "/static"));
// __dirname : ~~~~/01_express/static에 클라이언트가  / static 주소이름으로 들어 올 수 있다.
app.use("/public", express.static(__dirname + "/static"));
// __dirname : ~~~~/01_express/static에 클라이언트가  / public 주소이름으로 들어 올 수 있다.
// -------------------------------------------


// localhost:8002/test
app.get("/test", function(request, response){
    // render 메소드의 기본 dir "./views" 
    //res.render("index");
    console.log(__dirname); // 절대 경로Users/yun-byeong-woo/Documents/GitHub/study_alone/repeatStudy/node-study/01-express
    response.sendFile(__dirname + "/index.html") // 절대 경로
});

app.get("/test/index", function(request, response){
    //views폴더안에 ->test폴더안에 ->index가 있다.
    response.render("test/index");
});

app.get("/byeong", function(request, response) {
    response.render("byeong", {
        name: "byeong-woo",
        fruits: ["사과", "바나나", "포도"]
    });
});