import { useState } from "react";
const TaskForm = ({ addTask }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === "") {
      alert("no empty");
      return;
    }
    addTask(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task:
        <input
          name="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button type="submit">Add task</button>
    </form>
  );
};

export default TaskForm;
