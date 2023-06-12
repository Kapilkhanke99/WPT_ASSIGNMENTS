const express=require("express");
const app=express();
const http=require("http");
const m1 = require("./circle");
const path = require("path")

app.get("/",function(req,resp){
    resp.sendFile(path.join(__dirname,"a8.html"))
});
app.get("/submit-data",function(req,resp){
    const r = parseInt(req.query.cir)
    const ans = m1.cArea(r);
    const ans1 = m1.cCircumference(r);
    const ans2 = m1.cDiameter(r);
    resp.send("area "+ans+" circumference "+ans1+" diameter"+ ans2);
})

app.listen(3002,function(){
    console.log("server started 3002");
})
