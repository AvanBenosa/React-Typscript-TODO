import TaskModel from "../model/task";
const ViewAllTask:React.FC<{tasks:TaskModel[];}> = (props) => {
  return (
    <section className="task-list">
      <h2>All Task</h2>
      <ul>
        {props.tasks.map((task) => (

          <li key={task.id}>
            <label>{task.title}</label>
            <label>{task.day} Day(s)</label>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ViewAllTask;
