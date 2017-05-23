const React = require('react');

var Countdown = ()=>{
  return(
    <div>
      <h2>Countdown page</h2>
      <p>Hi from the Countdown</p>
    </div>
  );
};

module.exports= Countdown;

//es una stateless function so you don`t use setState or getInitialState if you use a statefull you need to use the property render.
