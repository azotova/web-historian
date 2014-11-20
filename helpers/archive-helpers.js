var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback){
  fs.readFile(this.paths.list, 'utf8', function(err,data) {
    if (err) { throw err }
    data = data.split("\n");
    callback(data);
  });
};

exports.isUrlInList = function(formURL){
  // var arrayList = 5;
  // var testFunc = function (data) {
  //   arrayList = data;
  //   console.log("list ", arrayList);
  // }
  // this.readListOfUrls(testFunc);
  // console.log("list 2", arrayList);
  // return arrayList;

  // var isIn = fs.readFile(this.paths.list, 'utf8', function(err,data) {
  //   if (err) { throw err }
  //   data = data.split("\n");
  //   for (var i = 0; i < data.length; i++) {
  //     if (formURL === data[i]) {
  //       // console.log(isIn);
  //       return true;
  //       // console.log(isIn);
  //     }
  //   }
  //   return false;
  // };
  var listUrls = fs.readFileSync(this.paths.list, 'utf8');
  console.log(listUrls);
  data = listUrls.split("\n");
  for (var i = 0; i < data.length; i++) {
    if (formURL === data[i]) {
        // console.log(isIn);
      return true;
        // console.log(isIn);
    }
  }
  return false;
};
// var tester = this.isUrlInList('www.google.com');
// console.log("tester", tester);

exports.addUrlToList = function(){
};

exports.isURLArchived = function(){
  fs.readdir('this.paths.archivedSites', function() {
    // do something here
  });
};

exports.downloadUrls = function(){
};
