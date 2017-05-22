var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render() {
    return (
      <div>
        <div className="">
          <div className="">
            <Nav />
            <p>Main.jsx render</p>
            {this.props.children}
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Main;
