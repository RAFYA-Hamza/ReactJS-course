import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  const error = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus() {
        error.current.focus();
      },
    };
  });

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={error} className={classes} {...props} />
      ) : (
        <input ref={error} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
