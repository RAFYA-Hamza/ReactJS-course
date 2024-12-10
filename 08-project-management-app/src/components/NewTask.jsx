import { useState } from "react";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredText, setEnteredText] = useState("");
  const modal = useRef();

  function handleAddTask() {
    if (enteredText.trim() === "") {
      modal.current.open();
      return;
    }

    onAddTask(enteredText);
    setEnteredText("");
  }

  function changeValue(event) {
    setEnteredText(event.target.value);
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={changeValue}
          value={enteredText}
          placeholder="Enter your task..."
        />
        <button
          onClick={handleAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
