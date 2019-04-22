import React from 'react';

class UseState extends React.Component {
  state = {
    text: '',
  };

  handleTextChange = e => this.setState({ text: e.target.value });

  render() {
    return (
      <React.Fragment>
        <h3>UseState</h3>
        <p>Refactor the code using hooks so that the tests still pass.</p>
        <label className="mr-s" htmlFor="testInput">
          Input:
        </label>
        <input
          value={this.state.text}
          onChange={this.handleTextChange}
          id="testInput"
          data-testid="testInput"
          type="text"
        />
      </React.Fragment>
    );
  }
}

export default UseState;
