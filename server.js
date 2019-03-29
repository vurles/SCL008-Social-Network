var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});

app.listen(3000, function(){//puede ser 4200 o 8000 o si no reiniciar el compu
  console.log('Server Express Ready!');
});