import styles from "./Task.module.css";
import { useState } from "react";

const Task = ({
  description,
  completed,
  deleteTask,
  updateTask,
  updateCompleted,
  index,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const handleSave = () => {
    if (editedDescription.trim() === "") {
      alert("Task description cannot be empty");
      return;
    }
    updateTask(index, editedDescription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedDescription(description);
    setIsEditing(false);
  };
  return (
    <div
      className={styles["task-container"]}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        id="task-checkbox"
        checked={completed}
        onChange={(e) => updateCompleted(index, e.target.checked)}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button className="button" onClick={handleSave}>
            Save
          </button>
          <button className="button" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
          >
            {description}
          </span>
          <button className="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="button" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
