// express 불러오기
const express = require("express");

//express 사용
const app = express();

//port number
const port=5000;

//http server start
app.listen(port,()=>{
    console.log("server start");
});

//로컬주소 경로로 접근하면
app.get("/",(request,response)=>{
    response.send("success");
});