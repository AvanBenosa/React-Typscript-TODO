import React, { useState,useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskModel from '../model/task';
import TaskList from "./TaskList";


const Task = () => {
  const [userTasks, setUserTask] = useState<TaskModel[]>([]);

    useEffect(() => {
      fetch("https://react-http-a2f42-default-rtdb.firebaseio.com/tasks.json")
        .then((response) => response.json())
        .then((responseData) => {
          const loadedTask:any = [];
          for (const key in responseData) {
            loadedTask.push({
              id: key,
              title: responseData[key].title,
              day: responseData[key].day,
            });
          }
          setUserTask(loadedTask);
        });
    },[]);

    const addTaskHandler = (task:any) => {
      fetch("https://react-http-a2f42-default-rtdb.firebaseio.com/tasks.json", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          setUserTask((prevTasks) => [
            ...prevTasks,{ id: responseData.name, ...task }]);
        });
    };
               const removeTaskHandler = (taskId: string) => {
                 fetch(
                   `https://react-http-a2f42-default-rtdb.firebaseio.com/tasks/${taskId}.json`,
                   {
                     method: "DELETE",
                   }
                 ).then((response) => {
                   setUserTask((prevTasks) => {
                     return prevTasks.filter((task) => task.id !== taskId);
                   });
                 });
               };

    return (
      <div>
        <TaskForm onAddTask={addTaskHandler} />
        <section>
          <TaskList tasks={userTasks} onRemoveItem={removeTaskHandler} />
        </section>
      </div>
    );
}
export default Task;