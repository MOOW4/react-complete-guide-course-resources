import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

const ResultModal = forwardRef(function ResultModal({result ,targetTime, reset, timeRemaining} , ref) {
  const dialog = useRef();

  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  timeRemaining = (timeRemaining / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });


  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={reset}>
      {timeRemaining > 0 ? <h2>Congratulations! Score: {score}</h2> : <h2>Time's up!</h2>}
      <p>The target time was <strong>{targetTime} seconds</strong></p>
      <p>You stopped the timer with <strong>{timeRemaining} seconds left</strong></p>
      <form method="dialog" onSubmit={reset}>
        <button >Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
