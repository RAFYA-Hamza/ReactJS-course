import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  let content;

  if (tasks.length > 0) {
    content = (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between mb-3">
            <span>{task.taskData}</span>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="text-stone-700 hover:text-red-500"
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p className="my-4">This project does not have any tasks yet.</p>;
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {content}
    </section>
  );
}
