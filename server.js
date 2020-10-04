const path = __dirname;
var express = require('express');
var app = express();
// Serve static files
app.use(express.static(__dirname + '/dist/task-list-with-angular-js'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/task-list-with-angular-js/index.html'));
});

app.listen(process.env.PORT || 8080);
