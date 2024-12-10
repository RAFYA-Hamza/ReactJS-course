export default function NewTask({ onAddTask, onDeleteTask }) {
  let enteredText = "";
  console.log("render");

  function handleAddTask() {
    console.log(enteredText);

    onAddTask(enteredText);

    enteredText = "";
  }

  function changeValue(event) {
    enteredText = event.target.value;
    console.log(event.target.value);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={changeValue}
      />
      <button
        onClick={handleAddTask}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
