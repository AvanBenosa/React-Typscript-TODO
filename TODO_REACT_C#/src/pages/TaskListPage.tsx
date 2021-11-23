import { useState,useEffect } from "react";
import TaskModel from "../model/task";
import ViewAllTask from "../components/ViewAllTask";
import axios from "axios";

const TaskListPage = () => {
    const [userTasks, setUserTask] = useState<TaskModel[]>([]);

    useEffect(() => {
      axios.get("https://localhost:44317/api/Todos/").then((response) => {
        setUserTask(response.data);
      });
    }, []);
              
    return (
      <div>
        <ViewAllTask tasks={userTasks}/>  
      </div>
    );
};

export default TaskListPage;