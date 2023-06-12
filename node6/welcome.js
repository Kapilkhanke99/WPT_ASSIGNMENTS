const http = require("http");

const server=http.createServer(function(req,resp){
    resp.write("WELCOME TO NODEJS");
    resp.end();
})

server.listen(5000,function(){
    console.log("server started at 5000");
})

