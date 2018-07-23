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
// var IPFSRepo = require('ipfs-repo')
//const node = new IPFS({ repo: '/var/ipfs/data' })
//let fileMultihash
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
})
})
// const Couchbase = require("couchbase");
 const Request = require("request-promise");
// const UUID = require("uuid");
// const Bitcore = require("bitcore-lib");
// const Coinstring = require('coinstring');
const bch = require('bitcoincashjs');
var Network = bch.Networks;
// const fileReader = require('filereader');
// var reader = new fileReader();
// const XMLHttpRequest = require('XMLHttpRequest')
// function readTextFile(file)
// {
fs.exists(myArgs[2], function(exists) { 
  if (exists) { 
      function read(file, callback) {
        fs.readFile(file, 'utf8', function(err, data) {
          if (err) {
            console.log(err);
          }
          callback(data);
        });
      }

      var output = read(myArgs[2], function(data) {
         // console.log(data);
      });

     if (bch.PrivateKey.isValid(data)){
      var privateKey = data;
      var address = privateKey.toAddress(Network.testnet)
     }
 
    else {
    var privateKey = new bch.PrivateKey();
    var address = privateKey.toAddress();
    var exported = privateKey.toWIF();
    var imported = bch.PrivateKey.fromWIF(exported)
    }
  console.log(address.toString());


var Insight = require('bitcore-explorers').Insight;
var insight = new Insight();
insight.getUnspentUtxos(address.toString(), function(err, utxos) {
  if (err) {
    console.log(err)
  } else {
    console.log(utxos);
  }
});


// fs.readFile(myArgs[2], (e, data) => {
    // if (e) throw e;
    // console.log(data);
// }); 

// var privateKey = bch.PrivateKey.fromWIF(data)
// if (PrivateKey.isValid(input)){
  // var key = privateKey;
  // var address = key.toAddress()
// }
// else {
  // var key = new bch.PrivateKey();
  // var address = key.toAddress();
  // var exported = key.toWIF();
  // var imported = bch.PrivateKey.fromWIF(exported)
// }
// console.log(address.toString());
  // Request("https://insight.bitpay.com/api/addr/" + address + "/utxo").then(utxo => {
        // return new Promise((resolve, reject) => {
            // if(JSON.parse(utxo).length == 0) {
                // reject();
            // }
            // resolve(JSON.parse(utxo));
        // });
    // });

    // const uxto = Request("https://insight.bitpay.com/api/addr/" + address.toString() + "/utxo");
    // console.log(uxto)



// // const utxo = {
//   // 'txId' : '3ff7ac8cf7ed7642b018dd2567026d61f5817aca73187f657e3e1ea91db272b0',
//   // 'outputIndex' : 0,
//   // 'address' : address,
//   // 'script' : 'asdf'
//   // 'satoshis' : 50000
// // };
//  const transaction = new bch.Transaction()
//    .from(utxo)
//    .addData(res[0].hash)
//    .sign(privateKey);

//  console.log(transaction.toString())
// };
// })
}
})