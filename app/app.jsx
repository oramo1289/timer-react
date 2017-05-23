var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');
//const scss = require('./styles/app.scss');


//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');

 $(document).foundation();

//load css
require('applicationStyles');

//var firstName = "Oscar";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
