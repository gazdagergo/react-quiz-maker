import React from 'react';

class SelfCheckInput extends React.Component {
  constructor() {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      inputValue: null,
      correctAnswer: null
    };

  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    });
    this.props.onChange();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checking) {
      if (this.state.inputValue === this.props.answer) {
        this.setState({ correctAnswer: "yes" })
      } else {
        this.setState({ correctAnswer: "no" })
      }
    } else {
      this.setState({ correctAnswer: null })
    }
  }

  render() {
    let color;
    switch (this.state.correctAnswer) {
      case 'yes':
        color = 'green';
        break;

      case 'no':
        color = 'red';
        break;

      default:
        color = 'black';
    }

    return (
      <input
        style={{ color }}
        onChange={(event) => this.handleInputChange(event)}
      />
    );
  }
}

export default SelfCheckInput;
