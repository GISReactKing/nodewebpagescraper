var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express(); //
var port = 8000;


// setup scraping v1
// var url = "http://indeed.co.uk";
// request(url, function(err, resp, body){
//   if(err){
//     console.log(err)
//   }else {
//     console.log(body);
//   }
// });

// // setup scraping v2
// var destination = fs.createWriteStream('downloads/jobserve.html');
// var url = "http://jobserve.com";
// request(url)
//   .pipe(destination);

// // setup scraping v3
var destination =  fs.createWriteStream('downloads/monster.html');
var url = "http://monster.co.uk";
request(url)
  .pipe(destination)
  .on('finish', function(){// got the data
    console.log('done')
  })
  .on('error', function(err){
    console.log(err);
  });
// alt to chaining
destination.on('finish', function(){
  console.log('all done');
})

app.listen(port);
console.log('server listening on '+ port);
