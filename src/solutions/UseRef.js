import React from 'react';

const UseRef = () => {
  // initialises clicksRef.current to 0
  const clicksRef = React.useRef(0);
  const [analytics, setAnalytics] = React.useState([]);

  const handleButtonClick = () => clicksRef.current++;

  const handleShowAnalytics = () => setAnalytics([...analytics, { clicks: clicksRef.current, timestamp: Date.now() }]);

  return (
    <React.Fragment>
      <h3>useRef</h3>
      <p>Button should track how many times it was clicked.</p>
      <button onClick={handleButtonClick}>Click me</button>
      <button onClick={handleShowAnalytics}>Show analytics</button>
      <ul>
        {analytics.map((fragment, index) => (
          <li key={index}>{`${fragment.clicks} clicks at ${fragment.timestamp}`}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default UseRef;
