var express = require('express');
var mysql=require("mysql");
var bodyParser=require("body-parser");
var app = express();
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({}));
var db= mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : '123456',
  database        : 'drug'
});

app.post('/api/one', function (req, res) {
  var name="zhangsna";
  var goodid=req.body.id;
  var goodshop=req.body.obj;
  db.query(`INSERT INTO user_table (username,goodid,goodshop) VALUES ('${name}','${goodid}','${goodshop}')`,function(err,result){
    if(err){
      res.status(500).send("database error");
    }else{
      res.status(200).send("ok");
    }
  });
});
app.get('/api/searchVal', function (req, res) {
    var searchVal=req.query.searchVal;
    db.query(`SELECT * FROM drug_info WHERE category='${searchVal}'`,function(err,result){
        if(err){
          res.status(500).send("database error");
        }else{
          res.send(result);  
          console.log(result);
        }
    })
    
});

app.get('/api/searchshopid', function (req, res) {
    var name=req.query.name;
    db.query(`SELECT goodid,buyquantiy FROM user_table WHERE username="${name}"`,function(err,result){
        if(err){
          console.log(err.message);
          res.status(500).send("database error");
        }else{
          res.send(result);  
        }
    })
    
});

app.get('/api/shopcarinfo', function (req, res) {
    var goodId=req.query.goodId.split(",");
    var str="";
    for(var i=0;i<goodId.length;i++){
      if(i==(goodId.length-1)){
        str+=`id=${goodId[i]}`;
      }else{
        str+=`id=${goodId[i]} or `;
      }
    }
    db.query(`SELECT * FROM drug_info WHERE ${str}`,function(err,result){
        if(err){
          console.log(err.message);
          res.status(500).send("database error");
        }else{
          res.send(result);  
        }
    })
});

app.listen(3000)
