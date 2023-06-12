const fs = require("fs");

var r1 = fs.readFile("mydata.txt",function(err,data){
    if(err){
        console.log("error is "+err)
    }
    else {
        console.log(data.toString());
       console.log("The length of mydata file is "+data.length);
    }
})


var r2 = fs.readFile("myfile.txt",function(err,data){
    if(err){
        console.log("error is "+err)
    }
    else {
        console.log(data.toString());
        console.log("The length of myfile is  "+data.length);
    }
})


