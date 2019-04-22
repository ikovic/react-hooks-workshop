import React from 'react';

class UseRef extends React.Component {
  buttonClicks = 0;

  state = {
    clicksAnalytics: [],
  };

  handleButtonClick = () => this.buttonClicks++;

  handleShowAnalytics = () =>
    this.setState(state => ({
      ...state,
      clicksAnalytics: [...state.clicksAnalytics, { clicks: this.buttonClicks, timestamp: Date.now() }],
    }));

  render() {
    return (
      <React.Fragment>
        <h3>useRef</h3>
        <p>Analytics should show hoy many times the button was clicked.</p>
        <button onClick={this.handleButtonClick}>Click me</button>
        <button onClick={this.handleShowAnalytics}>Show analytics</button>
        <ul>
          {this.state.clicksAnalytics.map((fragment, index) => (
            <li key={index}>{`${fragment.clicks} clicks at ${fragment.timestamp}`}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default UseRef;
