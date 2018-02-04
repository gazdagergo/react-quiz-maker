import React from 'react';
import { render } from 'react-dom';
import SelfCheckInput from './selfCheckInput';
import Container from './Container'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checking: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({ checking: false });
  }

  render() {
    return (
      <div>        
        <SelfCheckInput
          answer="hello"
          checking={ this.state.checking }
          onChange={ () => this.handleChange() }
        />
        <button
          onClick={ () => this.setState({ checking: true })}
        >
          Check
        </button>
        <Container />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
