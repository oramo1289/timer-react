var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentDidUpdate: function (prevProps, prevState) { //esta función corre inmediatamente después cuando se actualizo el compoenente (props o state)
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)//rompe el intervalo creado en startTimer
          this.timer = undefined;
          break;
      }
    }
  },
  // componentWillUpdate:function (nextProps, nextState) {//es llamado justo antes de que se vaya a actualizar el componente y recibe nextProps y nextState como argumentos
  //
  // },
  // componentWillMount: function () {//es llamado justo antes de que el componente se cargue
  //   console.log('componentWillMount');
  // },
  // componentDidMount: function () { // es llamado justo después de que el compoennte es mostrado
  //   console.log('componentDidMount');
  // },
  componentWillUnmount: function () { //life cycle component este se activa justo antes de que el componente sea removido del DOM
    //console.log('componentDidUnmount');
    clearInterval(this.timer)//rompe el intervalo creado en startTimer
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'})
      }
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
//s

//es una stateless function so you don`t use setState or getInitialState if you use a statefull you need to use the property render.
