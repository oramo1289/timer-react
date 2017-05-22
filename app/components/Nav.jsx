const React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer</li>
            <li className="">
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li className="">
              <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://www.google.com" target="_blank">Oscar</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;
