import React from 'react';
import SecondComponent from 'second-component';

var AdvancedHelloWorld = React.createClass({
  displayName: 'AdvancedHelloWorld',

  propTypes: {
    greeting: React.PropTypes.bool,
    name: React.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      greeting: true,
      name: 'Dummy'
    };
  },
  sayHello: function sayHello(param1, param2) {
    return 'Hello';
  },
  shouldGreet: function shouldGreet(param3) {
    return this.props.greeting;
  },
  componentWillMount: function componentWillMount() {
    console.log('componentWillMount');
  },
  render: function render() {
    return (
        <div style="color: #000;font-weight:bold;">
        <div id="header" onClick={this.sayHello(foo, this.foo(2), 2)}>
          <img src="" />
        </div>
        <div id="body">
          <p>{this.shouldGreet() ? this.sayHello() : ''} <i>{this.props.name}</i>!</p>
        </div>
        <HelloWorld name="Second" />
        <SecondComponent />
      </div>
    );
  }
});
