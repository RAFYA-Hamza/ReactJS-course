import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTask, onDeleteTask }) {
  let content;
  if (tasks.length > 0) {
    content = (
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between my-4 gap-4">
            <span>{task.taskData}</span>
            <button className="text-stone-700 hover:text-red-500">Clear</button>
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p>No data</p>;
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {content}
    </section>
  );
}
