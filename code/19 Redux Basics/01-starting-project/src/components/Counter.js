import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store";

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  function handleIncrement() {
    dispatch(counterActions.increment());
  }
  function handleDecrement() {
    dispatch(counterActions.decrement());
  }
  function handleIncrease() {
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>--  {counter}  --</div>
      {show &&  <div className='counter'>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleIncrease}>Increase by 5</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
