var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Simple app for the Building Applications Lab! By Prakasam\n');
});

app.listen(8080, function () {
  console.log('Simple app for the Building Applications Lab!  By Prakasam');
});
