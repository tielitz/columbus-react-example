'use strict';
import React from 'react';

var SecondComponent = React.createClass({
  displayName: 'SecondComponent',
  propTypes: {
    name: React.PropTypes.string
  },
  sayGreeting: function () {
    return 'Hello';
  },
  render: function() {
    return (
        <div>
          {this.sayGreeting()}, {this.props.name}!
        </div>
      );
  }
});
