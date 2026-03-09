import styles from "./Task.module.css";
import { useState } from "react";
import { MdEdit, MdDelete, MdSave, MdGrid3X3, MdClose } from "react-icons/md";
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
          <button className="button button-edit" onClick={handleSave}>
            <MdSave size={20} />
          </button>
          <button className="button button-delete" onClick={handleCancel}>
            <MdClose size={20} />
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
          <button
            className="button button-edit"
            onClick={() => setIsEditing(true)}
          >
            <MdEdit size={20} />
          </button>
          <button
            className="button button-delete"
            onClick={() => deleteTask(index)}
          >
            <MdDelete size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default Task;
