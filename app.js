var express = require('express');
var app = express();
var request = require('request');
const server = 1337;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
   res.render("home");
});

app.get("/results", function(req, res) {
  var query = req.query.search;
  console.log(query);
  var url = "http://www.omdbapi.com/?s=" + query;
    request(url+"&apikey=808af347", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});


app.listen(server, function(){
   console.log("Server started on "+ server);
});