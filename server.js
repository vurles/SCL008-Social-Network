var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src'));

app.get('/',function(request, response){
  response.sendFile(__dirname + '/index.html');
});
<<<<<<< HEAD
app.listen(4200, function(){// si el servidor se queda pegado podemos cambiar el 3000 por 4200 o reiniciar el pc
=======
app.listen(5000, function(){// si el servidor se queda pegado podemos cambiar el 3000 por 4200 o reiniciar el pc
>>>>>>> dada5cd5cfbee6e6921ae3583a2b3dd7c5194f85
  console.log('Server Express Ready!');
});