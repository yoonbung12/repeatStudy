// routes 부분
const express = require("express");
const router = express.Router();
const controller = require("../controller/Member")

// 기본 경로로 가기
router.get("/", controller.home);

// login페이지로 가기
router.get("/login", controller.login);

// login실행시
router.post("/login", controller.postLogin);

// member프로파일로 가기
router.post("/memberInfo", controller.memberInfo);


// 회원 가입
router.post("/memberJoin", controller.postMember);



module.exports = router;