var express         = require('express'),
	app             = express(),
	bodyParser      = require('body-parser'),
	mongoose        = require('mongoose'),
	methodOverride 	= require('method-override'),
	flash           = require('connect-flash');

mongoose.connect("mongodb://localhost/myTravels",{useNewUrlParser : true });
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname+"/public"));
app.use(flash());

app.get("/",function(req,res){
	res.render("index.ejs");
});



app.listen(3000,function(req,res){
	console.log("The server has started.");
});