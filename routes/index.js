var express = require('express');
var router = express.Router();
var express= require('express');
const fs = require('fs');
var crypto = require('crypto');
 var algorithm = "aes256";
   var password = "asaadsaad";


//var bodyParser = require('body-parser');

//var rauter = express.Router();
var URL = 'mongodb://127.0.0.1:27017/mydb';
var mongoclient=require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {

  mongoclient.connect(URL,function(err,db)
{
    if(err)
    throw err;
    db.collection('homework6').findOne({},function(err,doc){
        if(err)
        throw err;
        console.dir(doc);

////////////////////////////
       
/////////////////////

res.send(decrypt(doc.message));
decipher.end();
db.close();


        
    });

    console.log("sucess");
});
});
function decrypt(text){
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}
module.exports = router;
