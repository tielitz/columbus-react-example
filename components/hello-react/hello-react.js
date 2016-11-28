import React from 'react';
import SecondComponent from '../second-component/second-component';

var HelloReact = React.createClass({
  displayName: 'HelloReact',
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
      <div>
        <div id="header" onClick={this.greet()}>
          <img src="https://pbs.twimg.com/profile_images/762369348300251136/5Obhonwa.jpg" alt="" />
        </div>
        <div id="body">
          <p>{this.shouldGreet() ? this.sayHello('param1', 2) : ''} <i>{this.props.name}</i>!</p>
        </div>
        <SecondComponent name="Bar" />
      </div>
    );
  }
});
