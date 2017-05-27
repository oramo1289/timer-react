const React = require('react');
var PropTypes = require('prop-types');

var Clock = React.createClass({
  getDefaultProps: function () {
    totalSeconds: 0
  },
  // propTypes:{
  //   totalSeconds: React.PropTypes.number
  // },
  formatSeconds: function (totalSeconds) {
    var seconds = totalSeconds % 60;//va a dividir totalSeconds entre sesenta y lo que sobre son los segundos
    var minutes = Math.floor(totalSeconds / 60);//floor rendonde al numero màs cercano hacia abajo si tienes de resultado 1.04 es 1

    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    return `${minutes}:${seconds}`;
  },
  render: function () {
    // var {totalSeconds} = this.props;
    var totalSeconds = this.props.totalSeconds;

    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

Clock.propTypes = {
  totalSeconds: PropTypes.number
};

module.exports = Clock;
