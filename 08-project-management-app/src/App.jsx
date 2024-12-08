import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  const [newProject, setNewProject] = useState(false);

  function handleClick() {
    setNewProject(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onSelect={handleClick} />
      {newProject ? <NewProject /> : <NoProjectSelected />}
    </main>
  );
}

export default App;
