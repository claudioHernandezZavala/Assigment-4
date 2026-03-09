import { useState } from "react";
import { Md1kPlus, MdAdd } from "react-icons/md";
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
          className="form-input"
          name="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <button className="button button-green" type="submit">
        <MdAdd size={20} />
      </button>
    </form>
  );
};

export default TaskForm;
