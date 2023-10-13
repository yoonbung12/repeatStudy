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