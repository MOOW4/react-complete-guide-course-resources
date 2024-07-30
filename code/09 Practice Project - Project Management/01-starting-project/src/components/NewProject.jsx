import Input from "./Input.jsx";
import {useRef} from "react";
import Modal from "./Modal.jsx";


export default function NewProject({addProject, endAddProject}) {

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSave(){
    //console.log(title.current.value);
    //console.log(description.current.value);
    //console.log(dueDate.current.value);

    if (title.current.value.trim() === "" || description.current.value.trim() === "" || dueDate.current.value.trim() === ""){
      modal.current.open();
      return;
    }

    addProject({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value
    })

  }


  return(
    <>
    <Modal ref={modal}>
      <p className="text-stone-800">Please fill all fields</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={endAddProject} className="px-6 py-2 text-stone-800 hover:text-stone-950 hover:bg-stone-200">Cancel</button>
        </li>
        <li>
          <button onClick={handleSave} className="px-6 py-2 bg-stone-700 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" type="text"/>
        <Input ref={description} label="Description" textarea/>
        <Input ref={dueDate} label="Due Date" type="date"/>
      </div>
    </div>
    </>
  );
}