// In React, Redux has reducer functions that record the change of state after an action

// Accepts state and action as arguement
// Returns next state.

// Basic es5 implementation for a simple counter app:

function counter(state, action) {
  if (typeOf state === 'unddfined') {
    return 0;
  }
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMEMT') {
    return state - 1;
  } else {
   return state
  }
}

// es6 implementation with a switch for cosmetic reasons:

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMEMT':
      return state - 1;
    default:
      return state;
  }
}

// the above has:
  // an es6 default arguement for state
  // arrow function for function declaration
