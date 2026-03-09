import { useState } from "react";
import { TaskForm, TaskList } from "./components";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Finish react project",
      completed: false,
    },
    {
      id: 2,
      description: "Read docs",
      completed: false,
    },
    {
      id: 3,
      description: "Submit assignment",
      completed: true,
    },
  ]);

  const deleteTask = (index) => {
    setTasks((t) => t.filter((task, idx) => idx !== index));
  };
  const addTask = (description) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now(),
        description,
        completed: false,
      },
    ]);
  };
  const updateTask = (index, description) => {
    setTasks(
      tasks.map((task, idx) =>
        idx === index ? { ...task, description } : task,
      ),
    );
  };

  const updateCompleted = (index, completed) => {
    setTasks(
      tasks.map((task, idx) => (idx === index ? { ...task, completed } : task)),
    );
  };

  return (
    <>
      <h1 className="textcenter">Claudio Task Manager</h1>
      <div className="to-center">
        <div className="task-wrapper">
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            updateTask={updateTask}
            updateCompleted={updateCompleted}
          />
        </div>
      </div>
    </>
  );
};

export default App;
