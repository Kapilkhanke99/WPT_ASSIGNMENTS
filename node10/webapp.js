const express=require('express');
const app=express();

const path=require('path');

const m=require('./module');

app.get('/',function(req,resp){
    resp.sendFile(path.join(__dirname,'a10.html'));
});

app.get('/submit-form',function(req,resp){
    const num1=parseInt(req.query.num1);
        var ans=m.primenumber(num1);
        resp.send(`${num1} is ${ans}`);
});

app.listen(3002,function(){
    console.log("server 3002");
})