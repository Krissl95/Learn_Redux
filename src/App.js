import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'

function App() {

  const counter = useSelector(state => {
    return state.counter;
  });

  const isLogged = useSelector(state => {
    return state.isLogged;
  });

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Learn Redux</h1>
      <h3>Counter {counter}</h3>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Information I should not see</h3> : null}
    </div>
  );
}

export default App;
