import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation:React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Todo App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/TaskListPage" activeClassName={classes.active}>
              All Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/TaskFormPage" activeClassName={classes.active}>
              Add Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
