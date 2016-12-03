'use strict';
import React from 'react';
import SecondComponent from '../second-component/second-component';

var HelloReact = React.createClass({
  displayName: 'HelloReact',
  propTypes: {
    greeting: React.PropTypes.bool,
    name:     React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      greeting: true,
      name: 'Dummy'
    };
  },
  sayHello: function sayHello(param1, param2) {
    let output = param1;
    for (let i = 1; i < param2; i++) {
      output += ' '+param1;
    }
    return output;
  },
  greet: function greet(){
    alert('Greetings');
  },
  shouldGreet: function shouldGreet(param3) {
    return this.props.greeting;
  },
  componentWillMount: function componentWillMount() {
    console.log('componentWillMount');
  },
  render: function render() {
    return (
      <div id="container">
        <div id="header" onClick={this.greet}>
          <img src="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png" />
        </div>
        <div id="body">
          <p>{this.shouldGreet() ? this.sayHello('Hello', 2) : ''} <i>{this.props.name}</i>!</p>
        </div>
        <SecondComponent name="JSX" />
      </div>
    );
  }
});
