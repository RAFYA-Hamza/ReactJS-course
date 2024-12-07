import { forwardRef, useImperativeHandle, useRef } from "react";

// we can pass a Ref in last version of react like a prop
// so we don't need to use the forwardRef function
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - formattedRemainingTime / targetTime) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>
        {remainingTime < targetTime ? "You lost" : `Your score: ${score}`}
      </h2>
      <p>
        The target time was <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button className="">Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
