var express = require('express');
var app     = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public")); //points Express to public folder
















// ROUTES ---------------------------------------------------------------------
app.get('/', function(req, res){
    res.render('home.ejs');
});
//-----------------------------------------------------------------------------











var PORT = process.env.PORT || 3000;



app.listen(PORT, process.env.IP, function(req, res){
    console.log('----> Dealer is listening on ' + PORT);
});
