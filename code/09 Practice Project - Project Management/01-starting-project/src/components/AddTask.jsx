import {useState} from "react";

export default function AddTask({ onAdd, onDelete}) {

  const [enteredTask, setEnteredTask] = useState('');

  function handleTaskChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleButtonClick() {

    if(enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return(
    <div className="flex items-center gap-8">
      <input onChange={handleTaskChange} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
      <button onClick={handleButtonClick} className="text-stone-700 hover:text-stone-950 font-bold">Add Task</button>
    </div>
  );
}