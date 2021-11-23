import React, { useState,useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskModel from '../model/task';
import TaskList from "./TaskList";
import axios from "axios";


const Task = () => {
  const [userTasks, setUserTask] = useState<TaskModel[]>([]);
  
    useEffect(() => {
      axios
        .get("https://localhost:44317/api/Todos/")
        .then((response) =>{
          setUserTask(response.data);
        })
    }, [ ]);

    // useEffect(() => {
    //   fetch("https://api-todo-10607-default-rtdb.firebaseio.com/tasks.json")
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //       const loadedTask: any = [];
    //       for (const key in responseData) {
    //         loadedTask.push({
    //           Id: key,
    //           TaskName: responseData[key].TaskName,
    //           Deadline: responseData[key].Deadline,
    //         });
    //       }
    //       setUserTask(loadedTask);
    //     });
    // }, []);

           const addTaskHandler = (task: any) => {
             axios.post("https://localhost:44317/api/Todos/", task)
               .then((response) => { 
                 setUserTask((prevTasks) => [
                   ...prevTasks, response.data
                 ]);
               })
               .catch(function (error) {
                 console.log(error);
               });               
           };

              //  const addTaskHandler = (task: any) => {
              //    fetch(
              //      "https://api-todo-10607-default-rtdb.firebaseio.com/tasks.json",
              //      {
              //        method: "POST",
              //        body: JSON.stringify(task),
              //        headers: { "Content-Type": "application/json" },
              //      }
              //    )
              //      .then((response) => {
              //        return response.json();
              //      })
              //      .then((responseData) => {
              //        setUserTask((prevTasks) => [
              //          ...prevTasks,
              //          { Id: responseData.name, ...task },
              //        ]);
              //      });
              //  };

            const removeTaskHandler = (taskId: number) => {
              axios.delete(
                `https://localhost:44317/api/Todos/${taskId}`
              ).then((response) =>{
                        setUserTask(prevTasks => {
                          return prevTasks.filter((task) => task.id !== taskId);
                        });
                  // //console.log("Successfully Deleted");
                  // console.log(taskId)
              });
            };


              //  const removeTaskHandler = (taskId: number) => {
              //    fetch(
              //      `https://api-todo-10607-default-rtdb.firebaseio.com/tasks/${taskId}.json`,
              //      {
              //        method: "DELETE",
              //      }
              //    ).then((response) => {
              //      setUserTask((prevTasks) => {
              //        return prevTasks.filter((task) => task.Id !== taskId);
              //      });
              //    });
              //  };
               

    return (
      <div>
        <TaskForm onAddTask={addTaskHandler} />
        <section>
          <TaskList tasks={userTasks} onRemoveItem={removeTaskHandler} />
          {/* <TaskList tasks={userTasks} onUpdateItem={updateTaskHandler} /> */}
        </section>
      </div>
    );
}
export default Task;