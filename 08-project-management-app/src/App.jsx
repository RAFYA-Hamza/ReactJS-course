import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: "no-project",
    projects: [],
  });
  let content;

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: "existing-projects",
      };
    });
  }

  if (projectState.selectedProjectId === "existing-projects") {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === "no-project") {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
