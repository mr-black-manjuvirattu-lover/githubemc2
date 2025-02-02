const http=require("http")
const PORT=3000;
const server =http.createServer((req,res)=>{
    res.write("this is from server side");
}).listen(Port);