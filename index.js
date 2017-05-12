//===============configuration==========

var express = require('express')
var app = express()
var path = require('path')
var bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({
	extended: true
}));
app.use(bodyParse.json());


//===============routing========

app.route('/')
	.get(function(req, res){
		res.sendFile(path.join(__dirname + '/view/home.html'))
	})
	.post(function(req, res){
		var angka_1 = req.body.angka1
		var angka_2 = req.body.angka2

		if(angka_1 == "" && angka_2 == ""){
			console.log("error! masukkan angka 1 dan angka 2")
			res.send("error! masukkan angka 1 dan angka 2")
		}else if( angka_1 == ""){
			console.log("error! masukkan angka 1")
			res.send("error! masukkan angka 1")
		}else if (angka_2 == "") {
			console.log("error! masukkan angka 2!")
			res.send("error masukkan angka 2!")
		} else {
			penjumlahan(angka_1, angka_2)
			
		}
		function penjumlahan(a, b){
			var total = parseInt(a)+ parseInt(b)
			res.send("total" + a + "+" + b + "=" + total)
		}

	})




	//============webserver=====
	app.listen(8000,function(){
		console.log('ini contoh web sederhana dengan node js')
	})