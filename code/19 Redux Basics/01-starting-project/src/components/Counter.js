import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {

  };

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  function handleIncrement() {
    dispatch({type: 'increment'});
  }
  function handleDecrement() {
    dispatch({type: 'decrement'});
  }
  function handleIncrease() {
    dispatch({type: 'increase', amount: 5});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>--  {counter}  --</div>
      <div className='counter'>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleIncrease}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
