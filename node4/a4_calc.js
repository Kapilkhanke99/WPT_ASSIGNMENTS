const express=require("express")
const app=express()
const path=require("path")

app.get("/",function(req,resp){
    let output="";
    for(var i=1;i<=100;i++){
        if(i%3===0){
            output +="fizz"+"<br>"
        }
        if(i%5===0){
            output +="buzz"+"<br>"
        }
        if(i%3===0 && i%5===0){
            output +="fizzbuzz"+"<br>"
        }
    }
    resp.send(output);
})
app.listen(3002,function(){
    console.log("server 3002")
})

