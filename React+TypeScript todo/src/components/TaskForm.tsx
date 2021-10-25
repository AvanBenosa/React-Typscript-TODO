import React,{useState} from "react";
import Card from "./UI/Card";

import './TaskForm.css';

const TaskForm:React.FC<{onAddTask:(input:any) => void}> = (props) =>{
      const [enteredTask, setEnteredTask] = useState<string>("");
      const [enteredDay, setEnteredDay] = useState<number | string>();

        const submitHandler = (event:React.FormEvent) => {
          event.preventDefault();
          props.onAddTask({ title: enteredTask, day: enteredDay });
          setEnteredTask("");
          setEnteredDay("");
        };


return (
  <section className="task-form">
    <Card>
      <form onSubmit={submitHandler}>
        <h2>Create Task Here!</h2>
        <div className="form-control">
          <label htmlFor="title">Enter Task Here</label>
          <input
            type="text"
            id="title"
            value={enteredTask}
            onChange={(event) => {
              setEnteredTask(event.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="day">Days Before Deadline</label>
          <input
            type="number"
            id="day"
            min="1"
            max="15"
            value={enteredDay}
            onChange={(event) => {
              setEnteredDay(event.target.value);
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