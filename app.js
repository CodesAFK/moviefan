var express = require('express');
var app = express();
var request = require('request');
const server = 1337;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
   res.render("home");
});

app.get("/results", function(req, res) {
    request("http://www.omdbapi.com/?s=oklahoma&apikey=808af347", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var parsedData = JSON.parse(body);
            res.send(parsedData["Search"][0]["Title"]);
        }
    });
});


app.listen(server, function(){
   console.log("Server started on "+ server);
});