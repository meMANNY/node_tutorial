const http = require('http');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req,res,next =>{
    console.log("This is a middleware");
    next();

}))


const server = http.createServer((req, res) => {
    console.log(req.headers);
    res.end("Hello World");
});

server.listen(8000, ()=>{console.log("Server is listening on port 8000") })