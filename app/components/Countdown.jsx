const React = require('react');
var Clock = require('Clock');

var Countdown = ()=>{
  return(
    <div>
      <Clock totalSeconds={152}/>
    </div>
  );
};

module.exports= Countdown;

//es una stateless function so you don`t use setState or getInitialState if you use a statefull you need to use the property render.
