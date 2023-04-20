var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express(); //
var port = 8000;

// cheerio implementation for scraping
// https://github.com/cheeriojs/cheerio


var url = "http://www.indeed.co.uk/jobs?q=node&l=london";
request(url, function(err, res, body){
  var $ = cheerio.load(body);
  var jobTitle = $('.jobtitle');
  var jobTitleText = jobTitle.text();

  // var location = $('.location');
  // var locationText = location.text();
  // console.log(locationText);

  // $('.location').filter(function(){
  //   var location = $(this);
  //   var locationText = location.text();
  // })
  // console.log(locationText);


  var location = $('.location');
  var locationText = location.text();

  var summary = $('.summary');
  var summaryText = summary.text();


var job={
  jobTitle: jobTitleText,
  location: locationText,
  summary:summaryText
}

  console.log(job);

  // -> write to mongo or html file

});


app.listen(port);
console.log('server listening on '+ port);
