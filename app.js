var express = require('express');
var app = express();
var request = require('request');
const server = 1337;

app.get("/", function (req, res) {
   res.render("home");
});

app.get("/results", function(){
   res.render(results.ejs);
});


app.listen(server, function(){
   console.log("Server started on "+ server);
});