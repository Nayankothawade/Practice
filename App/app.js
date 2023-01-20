const express = require('express');
const app = express();
app.get("/",function(req,resp)
{
    resp.send("Today is our exam");
})
app.get("/login",function(req,resp)
{
    resp.send("we have passed");
})
app.get('/index',function(req,res){
    res.sendFile('./Public/index.html',{root:__dirname});
})
app.listen(9000);
console.log("Server has started....")