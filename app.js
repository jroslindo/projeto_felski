var express = require('express');
var bodyParser = require('body-parser');
var app = express();



app.use(bodyParser.json());

app.get('/rota', function(req, res) {
   
    console.log("entrou na rota");
//   console.log(req.query);

//   var MongoClient = require('mongodb').MongoClient;
//   var url = "mongodb://127.0.0.1:27017/";

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("topicos_hardware");
//     var myobj = req.query;
//     dbo.collection("dados").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
//   });


  res.send("success");
});

// app.get('/getData', function(req, res) {
   
  
//   console.log(req.query);
  
  

//   var MongoClient = require('mongodb').MongoClient;
//   var url = "mongodb://127.0.0.1:27017/";

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("topicos_hardware");
//     var myobj = req.query;


//     dbo.collection("dados").findOne(myobj, function(err, result) {
//       if (err) throw err;
//       // console.log("1 document inserted");
//       db.close();

//       if (!result){
//         res.send("not found");
//       }else{
//         res.send(result);
//       }

      
//     });


//   });


//   // res.send("not found");
// });

app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000.');
});
