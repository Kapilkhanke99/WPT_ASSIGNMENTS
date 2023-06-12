const express=require('express');
const app=express();

const path=require('path');

const m=require("./a2_mymodule");

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,"a2.html"));
});

app.get('/submit-form',function(req,resp){
    const num1=parseInt(req.query.num1);
    if(num1<5){
        var ans1=m.factorial(num1);
        resp.send(`Facorial of num1 is ${ans1}`);
    }else if(num1>5 && num1<10){
        var ans2=m.table(num1);
        resp.send(`Table of ${num1}=${ans2}`);
    }else{
        var ans3=m.primenumber(num1);
        resp.send(`${num1} is ${ans3}`);
    }
});

app.listen(3002,function(){
    console.log("server 3006");
})