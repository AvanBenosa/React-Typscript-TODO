import React from 'react';
import './TaskList.css';
import TaskModel from '../model/task'


const TaskList:React.FC<{tasks: TaskModel[]; onRemoveItem:(task:string) => void}> = (props) => {
    return (
      <section className="task-list">
        <h2>Manage Task</h2>
        <ul>
          {props.tasks.map((task) => (
            <li key={task.id}>
              <label>{task.title}</label>
              <label>{task.day} Day(s)</label>
              <button onClick={props.onRemoveItem.bind(null, task.id)}>
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </section>
    );
}
export default TaskList;