var path = require('path');
var archive = require('../helpers/archive-helpers');
var url = require('url');
var httpHelpers = require('./http-helpers');
var fs = require('fs');

// require more modules/folders here!

var routes = {
               "/": './public/index.html',
               "/styles.css": './public/styles.css',
               "/loading.html": './public/loading.html',
               "/www.google.com": '../archives/sites/www.google.com'
             };

exports.handleRequest = function (req, res) {
  if (req.method === "POST") {
    var content = "";
    req.on("data", function (chunk) {
      content += chunk;
    });

    req.on("end", function(){
      console.log("content", content);
      content = content.slice(4) + "\n";
      res.writeHead(302);
      fs.appendFile(archive.paths.list, content, function (err) {
        if (err) { throw err }
        res.end("");
      });
    });
  } else {
    var route = url.parse(req.url).pathname;
    console.log("route", route);
    if (routes[route]) {
      res.writeHead(200, httpHelpers.headers);
      httpHelpers.serveAssets(res, routes[route], res.end.bind(res));
    } else {
      res.writeHead(404);
      res.end("");
    }
  }
  // fs.readFile(path.join(__dirname, './public/index.html'), 'utf8', function(err,data) {
  //                 if (err) { throw err }
  //                 res.end(data);
  //               });


  // res.end(output);
};
  // res.end(archive.paths.list);
