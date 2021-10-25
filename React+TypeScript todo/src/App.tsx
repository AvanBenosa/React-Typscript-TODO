// import Task from "./components/Task";

import { Route,Redirect } from "react-router-dom";
import MainNavigation from "./components/header/MainNavigation";
import TaskFormPage from "./pages/TaskFormPage";
import TaskListPage from "./pages/TaskListPage";


const App:React.FC = () =>{
  return (
    <div>
      <MainNavigation />
      <main>
        <Route path="/" exact>
          <Redirect to="/TaskListPage" />
        </Route>
        <Route path="/TaskFormPage">
          <TaskFormPage />
        </Route>
        <Route path="/TaskListPage">
          <TaskListPage />
        </Route>
      </main>
    </div>
  );
}

export default App;
