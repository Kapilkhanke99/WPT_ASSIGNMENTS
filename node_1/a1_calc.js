// Create a user defined local module calc.js that exposes the following functions: add(a,b),
// subtract(a,b), multiply(a,b), divide(a,b), square(a), sum(a,b,c...)
// Create a client application that invokes each of these methods
const http = require("http");
const fs = require("fs");
const url = require("url");
const m = require("./a1_module")

const server = http.createServer(function(req,resp){
    const q = url.parse(req.url,true);
    resp.writeHeader(200,{"content-type":"text/html"});

    const rs = fs.createReadStream("./a1.html");
    rs.pipe(resp);

    switch(q.pathname){
        case "/submit-data" :
            if(q.query.btn==="calculate"){
                const a = parseInt(q.query.num1);
                const b = parseInt(q.query.num2);
                const c = (q.query.nums).split(",").map(Number);
                // The map() function iterates over each element in the array and applies the Number function to convert each element to a number.

                const ans1=m.add(a,b);
                const ans2=m.subtract(a,b);
                const ans3=m.multiply(a,b);
                const ans4=m.divide(a,b);
                const ans5=m.square(a);
                const ans6=m.sum(...c);
                resp.write("addition "+ans1+"<br>subtraction"+ans2+"<br>multiplication"+ans3+"<br>division"+ans4+"<br>square"+ans5+"<br>summation"+ans6);
            break;
        }
            break;
            default :
            resp.write("Page not found")
            break;
          }
})
server.listen(3002,function(){
    console.log("server started")
})
