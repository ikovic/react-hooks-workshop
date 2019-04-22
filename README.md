# React Hooks Workshop

Introduction material for learning React Hooks. Basic rules and use cases.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Topics

We'll go through various use cases to see how we can benefit from using hooks.

### useState

- replace a class based component
- notice the decrease in lines of code
- bonus: don't create new functions on every render with `useCallback`
- bonus: Rules of Hooks ESLint setup

### useEffect

- compare to lifecycle methods
- doing async effects
- cleaning up on unmount
- dependency array parameter

### useReducer

- controlling multiple state changes
- when to switch from `useState` to `useReducer`
- React ensures `dispatch` is the same, what to export?
- writing middleware

### useContext

- usage in combination with `useReducer`
- replace selectors with `useMemo`

### useRef

- how to use as a replacement for instance variables

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
