'use strict'
var myArgs = process.argv.slice(2);
var fs = require('fs'),
    request = require('request');

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download(myArgs[0], myArgs[1], function(){
  console.log('done');
});

const IPFS = require('ipfs')
const node = new IPFS({init: false}) 
var fs = require('fs');
var data = fs.readFileSync(myArgs[1]);
    console.log(data);

const files = 
  {
    path: myArgs[1],
    content: data
  }
     

node.on('ready', () => {
node.files.add(files, function (err, res){
    if (err){
      console.log("Didn't work", err);
    }
    else {
      console.log(res)
    }
  const bs58 = require('bs58');
  var hash = res[0].hash
  var byteshash = bs58.decode(hash)
  console.log(byteshash.toString('hex'))
})
})
