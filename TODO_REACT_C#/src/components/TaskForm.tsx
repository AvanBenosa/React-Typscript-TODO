import React,{useState} from "react";
import Card from "./UI/Card";

import './TaskForm.css';

const TaskForm:React.FC<{onAddTask:(input:any) => void}> = (props) =>{
      const [enteredTask, setEnteredTask] = useState<string>("");
      const [enteredDay, setEnteredDay] = useState<number | string>("");

        const submitHandler = (event:React.FormEvent) => {
          event.preventDefault();
          props.onAddTask({ TaskName: enteredTask, Deadline: enteredDay });
          setEnteredTask("");
          setEnteredDay("");
        };


return (
  <section className="task-form">
    <Card>
      <form onSubmit={submitHandler}>
        <h2>Create Task Here!</h2>
        <div className="form-control">
          <label htmlFor="taskName">Enter Task Here</label>
          <input
            type="text"
            id="taskName"
            value={enteredTask}
            onChange={(e) => {
              setEnteredTask(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="deadline">Days Before Deadline</label>
          <input
            type="number"
            id="deadline"
            min="1"
            max="15"
            value={enteredDay}
            onChange={(e) => {
              setEnteredDay(e.target.value);
            }}
          />
        </div>
        <div className="task-form__actions">
          <button type="submit">Add Task</button>
        </div>
      </form>
    </Card>
  </section>
);
}
export default TaskForm; 



