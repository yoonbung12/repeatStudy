//mysql 연결
const mysql = require("mysql");

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac_test'
})

// 콜백함수로 받아야 한다..멤버 받아오기
exports.getMember = (id, cb) =>{
    let sql = `select * from member where id='${id}' limit 1;`
    conn.query(sql , (err, rows) =>{
        if(err) {
            throw err;
        }
        console.log("member는", rows);
        cb(rows);
    })
}

// post /memberJoin
exports.insertMember = (data, cb) =>{
    let sql = `insert into member(id, pw, membername, age, pnumber) 
            values('${data.id}', '${data.pw}', '${data.membername}','${data.age}', '${data.pnumber}')`;
    conn.query(sql, (err, result) => {
        if(err ) {
            throw err;
        }
        console.log("member insert", result);
        cb(result.insertIdx);
    })        
}

// post /memberLogin
exports.postLogin = (data, cb) => {
    let sql = `select * from member where id = '${data.id}' and pw = '${data.pw}' limit 1;`
    conn.query(sql, function(err, rows) {
        if(err) throw err
        cb(rows);
    }) 
}