const express = require("express");
const app = express();
const PORT = 8002;


// 미들웨어 설정
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
// extended: true 일 경우 qs 모듈(외부모듈)을 이용, false인 경우 내장모듈인 queryString을 사용.
app.use(express.json());
// application/json 형태의 데이터를 해석

// port 열기
app.listen(PORT, function(){
    console.log(`PORT: ${PORT} 열었습니다~~~`);
});

// 서버 열고 제대로 되는지 테스트 해보자
app.get("/", function(req, res){
    // res.send("하이 open되었어 ㅋㅋㅋㅋ");
    res.render("index");
});
//=================== axios(get,post)==================
app.get("/axiosGet", function(req, res){
    console.log(req.query);
    res.send(req.query);
})

app.post("/axiosPost",function(req,res){
    console.log(req.body);
    res.send(req.body);
});
app.post("/aixosPost2", function(req,res){
    console.log(req.body);
    // id,pw 변수 저장해놓기
    const id = "bonggu12";
    const pw = 1234;
    const sucess = (req.body.id == data.id && req.body.pw == data.pw);
    const data ={
        ...req.body,
        sucess: sucess,
        msg: success ? "로그인 성공!!!" : "로그인 실패"  
    };
    console.log(success);

    res.send(req.body);
    res.send(data);




});
