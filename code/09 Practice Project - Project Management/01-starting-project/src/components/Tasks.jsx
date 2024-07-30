import AddTask from "./AddTask.jsx";

export default function Tasks({children, onAddTask, onDeleteTask, tasks, ...props}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <AddTask onAdd={onAddTask} onDelete={onDeleteTask}/>
      {tasks.length === 0 && <p className="text-stone-800 my-4">This project doesn't have any tasks</p>}
      {tasks.length > 0 &&  <ul className="flex flex-col gap-4 mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between p-2 bg-stone-200 rounded-md">
            <span>{task.text }</span>
            <button onClick={() => onDeleteTask(task.id)} className="text-stone-600 hover:text-red-500">Delete</button>
          </li>
        ))}
      </ul>}
    </section>
  );
}