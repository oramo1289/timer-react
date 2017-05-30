const React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var CountdownForm = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) { //esta función corre cuando se actualizo props o state
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus){
        case 'started':
          this.startTimer();
        break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount: 0
      })
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
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
