// Controller 부분
const member = require("../model/member");

// 제일 기본이 되는 경로
exports.home = (req, res) =>{
    res.render("index");
};

// 로그인 페이지로 
exports.login = (req, res) => {
    res.render("login");
}
exports.postLogin = (req, res) => {
    // 모델에 있는 postLogin
    member.postLogin(req.body, function(rows) {
        console.log(rows[0]);
        if(rows.length > 0) 
        res.send({result: true, id: rows[0].id })
        else res.send({ result: false})
    })
}

// 회원 정보 받아오기
exports.memberInfo = (req, res) => {
    member.getMember(req.body.id, function(result) {
        console.log('memberInfo' , result);
        if(result.length >0) {
            res.render('memberInfo', {data: result[0]} )
        } else {
            res.redirect("login");
        }
    })
}

// 회원 정보
exports.members = (req,res) => {
    memberJoin.getMember((rows) => {
        res.render("members", {data: rows});
    });
}

exports.postMember = (req, res) => {
    // insert할 데이터
    console.log("req.body", req.body);
    member.insertMember(req.body, (idx) => {
        console.log('controller postMember', idx);
        res.send({
            ...req.body,
            idx
        });
    });
}

// 회원 수정 하기
exports.memberEdit = (req, res) => {
    const data = {
        ...req.body,
        idx: req.params.idx,
    }
    // model에서 호츌하기(update)
    member.editMember(req.body, (idx) => {
        // console.log("controller patchMember", idx);
        res.send({result: true})
    });
}
