import React from 'react';
import Child from 'child';

var HelloWorld = React.createClass({
  propTypes: {
    asdf: React.PropTypes.string
  },
  sayGreeting: function () {
    return 'Hello';
  },
  render: function() {
    return (
        <div>
          {this.sayGreeting()}, {this.props.asdf}!
          <HelloWorld><Child /></HelloWorld>
        </div>
      );
  }
});
