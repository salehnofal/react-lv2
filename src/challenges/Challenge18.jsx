import {
  useReducer,
  useState,
} from "react";
function taskReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE":
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );
    case "DELETE":
      return state.filter(
        (task) =>
          task.id !== action.payload
      );
    case "CLEAR_COMPLETED":
      return state.filter(
        (task) => !task.completed
      );
    default:
      return state;
  }
}
export default function Challenge18() {
  const [tasks, dispatch] =
    useReducer(taskReducer, []);
  const [text, setText] =
    useState("");
  function addTask() {
    if (!text.trim()) {
      return;
    }
    dispatch({
      type: "ADD",
      payload: text,
    });
    setText("");
  }
  return (
    <>
      <h2>
        Task Manager
      </h2>
      <input
        value={text}
        placeholder="Enter a task"
        onChange={(e) =>
          setText(e.target.value)
        }
      />
      <button onClick={addTask}>
        Add Task
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_COMPLETED",
          })
        }
      >
        Clear Completed
      </button>
      {tasks.map((task) => (
        <div
          className="card"
          key={task.id}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() =>
              dispatch({
                type: "TOGGLE",
                payload: task.id,
              })
            }
          />
          <span
            style={{
              textDecoration:
                task.completed
                  ? "line-through"
                  : "none",
            }}
          >
            {task.text}
          </span>
          <button
            onClick={() =>
              dispatch({
                type: "DELETE",
                payload: task.id,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}