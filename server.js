const express = require('express');
//create or app
var app = express();

app.use(express.static('public'));
// app.get('/', (req, res)=>{
//   res.send('Hola');
// });
// $env:NODE_ENV="development"
app.listen(3000, () => {
  console.log('Express server esta conectado en puerto 3000');
});
