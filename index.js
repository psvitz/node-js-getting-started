var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});