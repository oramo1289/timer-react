const express = require('express');
//create or app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
// app.get('/', (req, res)=>{
//   res.send('Hola');
// });
// $env:NODE_ENV="development"


app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.listen(PORT, () => {
  console.log(`Express server esta conectado en puerto ${PORT}`);
});



app.use(express.static('public'));
