// Building a createStore() from scratch, to understand how it works in Redux

// In Redux, createStore() - binds together the three principles of redux:
  // 1. Holds the current state of the app object
  // 2. Lets you dispatch actions
  // 3. When you create it you need to specify a reducer function

// It takes your reducer as an arguement.
// Redux store also has a getState(), dispatch() and subscribe().

const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    // dispatching an action is the only way to change the internal state
    // calculate the new state by calling the reducer:
    state = reducer(state, action)
    // then after the state is updated, notify every change listener by calling it
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    // keeping track of any change that takes place but storing each listener
    listeners.push(listener)
    // also need a way to unsubscribe from a listener
    // rather than a dedicated unsubscribe method, just remove the listener from the array:
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  // return an initial state populated when the store is returned,
  // dummy action dispatched get the reducer to return the initial value
  dispatch({});

  // returning the three store methods:
  return { getState, dispatch, subscribe };
}
