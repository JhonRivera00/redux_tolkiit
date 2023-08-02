import { Route, Routes } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="/create-task" element={<TaskForm/>}/>
        <Route path="/edit-task/:id" element={<TaskForm/>}/>
      </Routes>
    </div>
  );
};

export default App;
