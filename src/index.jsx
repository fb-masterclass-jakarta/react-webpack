const React = require('react');
const ReactDOM = require('react-dom');

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Test</h1>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
