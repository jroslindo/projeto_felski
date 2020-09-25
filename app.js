var express = require('express');
var bodyParser = require('body-parser');
const moment = require('moment');
var app = express();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

app.use(bodyParser.json());


app.get('/checar_hora', function (req, res) {
  var data = new moment().format('LT');
  res.send(data);
});

app.get('/posso_comecar', function (req, res) {
  var myobj = req.query;

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Projeto_felski");

    dbo.collection("tabela").findOne(myobj, function (err, result) {
      if (err) {
        res.status(500).send('Erro interno');
        throw err;
      }
      console.log(result);
      db.close();
      res.status(200).send(result.pode_startar);
    });
  });
});


app.get('/terminei', function (req, res) {
  var myobj = req.query;

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Projeto_felski");

    dbo.collection("tabela").findOne(myobj, function (err, result_find) {
      if (err) {
        res.status(500).send('Erro interno');
        throw err;
      }
      console.log("resultado busca");
      console.log(result_find);


      dbo.collection("tabela").updateOne({ "id_grupo": result_find.id_grupo }, { $set: { "finished": true } }, function (err, result) {
        if (err) {
          res.status(500).send('Erro interno2');
          throw err;
        }
        console.log(result);
      });

      dbo.collection("tabela").updateOne({ "id_grupo": result_find.sequencia }, { $set: { "pode_startar": true } }, function (err, result) {
        if (err) {
          res.status(500).send('Erro interno2');
          throw err;
        }
        console.log(result);
      });

      db.close();
      res.status(200).send("sucesso");
    });
  });
});

app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000.');
});
