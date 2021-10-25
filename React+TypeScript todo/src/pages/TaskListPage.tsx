import { useState,useEffect } from "react";
import TaskModel from "../model/task";
import ViewAllTask from "../components/ViewAllTask";

const TaskListPage = () => {
    const [userTasks, setUserTask] = useState<TaskModel[]>([]);

        useEffect(() => {
          fetch(
            "https://react-http-a2f42-default-rtdb.firebaseio.com/tasks.json"
          )
            .then((response) => response.json())
            .then((responseData) => {
              const loadedTask: any = [];
              for (const key in responseData) {
                loadedTask.push({
                  id: key,
                  title: responseData[key].title,
                  day: responseData[key].day,
                });
              }
              setUserTask(loadedTask);
            });
        }, []);
              
    return (
      <div>
        <ViewAllTask tasks={userTasks}/>
      </div>
    );
};

export default TaskListPage;