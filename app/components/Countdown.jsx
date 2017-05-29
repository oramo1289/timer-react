const React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function () {
    var {count} = this.state;

    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports= Countdown;

//es una stateless function so you don`t use setState or getInitialState if you use a statefull you need to use the property render.
