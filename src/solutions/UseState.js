import React from 'react';

let fnCache = null;
const isCallbackTheSame = fn => {
  console.log(fn === fnCache);
  if (fn !== fnCache) {
    fnCache = fn;
  }
};

const UseState = () => {
  const [text, setText] = React.useState('');
  // useCallback memoizes the function so we can still check by equality
  const handleTextChange = React.useCallback(e => setText(e.target.value), [setText]);

  isCallbackTheSame(handleTextChange);

  return (
    <React.Fragment>
      <h3>UseState</h3>
      <p>Refactor the code using hooks so that the tests still pass.</p>
      <label className="mr-s" htmlFor="testInput">
        Input:
      </label>
      <input value={text} onChange={handleTextChange} id="testInput" data-testid="testInput" type="text" />
    </React.Fragment>
  );
};

export default UseState;
