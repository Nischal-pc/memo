import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: false,
    projects: [],
  });
  const handleStartAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: true,
      };
    });
    console.log("Button is clicked");
  };
  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
    console.log(projectState);
  };
  const handleClose = () => {
    console.log(
      "close button is called and it is fired form the new project component"
    );
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: false };
    });
  };
  return (
    <>
      <main className="flex h-screen my-8 gap-8">
        <ProjectSidebar
          onClick={handleStartAddProject}
          projects={projectState.projects}
        />
        {projectState.selectedProjectId ? (
          <NewProject onAdd={handleAddProject} close={handleClose} />
        ) : (
          <NoProjectSelected onStartAddProject={handleStartAddProject} />
        )}
      </main>
    </>
  );
}

export default App;
