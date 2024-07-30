import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {

  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined, // ID or selected project or null if we add project or undefined if no project is selected
    projects: [],
    tasks: []
  });

  function handleStartAddProject(){
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectID: null
      };
    });
  }

  function handleEndAddProject(){
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectID: undefined
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState((previousState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString()
      }
      handleEndAddProject();
      return {
        ...previousState,
        projects: [...previousState.projects, newProject]
      };
    });
  }

  function handleSelectProject(projectID){
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectID: projectID
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState((previousState) => {
      return {
        ...previousState,
        projects: previousState.projects.filter(project => project.id !== previousState.selectedProjectID),
        selectedProjectID: undefined
      };
    });
  }

  function handleAddTask(text){

    setProjectsState((previousState) => {
      const taskID = Math.random().toString();
      const newTask = {
        id: taskID,
        text: text,
        projectID: previousState.selectedProjectID
      };

      return {
        ...previousState,
        tasks: [newTask, ...previousState.tasks]
      };
    });
  }

  function handleDeleteTask(taskIdToDelete){
    setProjectsState((previousState) => {
      return {
        ...previousState,
        tasks: previousState.tasks.filter(task => task.id !== taskIdToDelete)
      };
    });
  }

  let content = undefined;
  if (projectsState.selectedProjectID === null){
    content = <NewProject addProject={handleAddProject} endAddProject={handleEndAddProject}/>
  } else if (projectsState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  } else {
    let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID);
    content = <SelectedProject project={selectedProject} handleDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}></SelectedProject>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} handleSelect={handleSelectProject} selectedProjectID={projectsState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
