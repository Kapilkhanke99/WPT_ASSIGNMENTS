const fs = require("fs")

 const r=fs.readFileSync("simple.txt");
// console.log(r.toString());

var arr = r.toString().split("\n");
for(var i=0;i<arr.length;i++){
    console.log(i+1+" "+arr[i]);
}

