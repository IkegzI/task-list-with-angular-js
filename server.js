const path = __dirname;
var express = require('express');
var app = express();
app.use(express.static(path + '/package.json'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: path + '/src/'}
  );
});

app.listen(process.env.PORT || 8080);
