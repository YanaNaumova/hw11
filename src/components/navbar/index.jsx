import { useLocation, NavLink } from "react-router-dom";
import styles from "./styles.module.css";

function Navbar() {
  const { pathname } = useLocation();
  if (pathname === "/mainPage" || pathname === "/") {
    document.title = "Main Page";
  } else if (pathname === "/articleList") {
    document.title = "Article Liste";
  } else {
    document.title = "Article";
  }
  return (
    <ul className={styles.container}>
      <li>
        <NavLink
          to="/mainPage"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          Main page
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/articleList"
          style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
          })}
        >
          Articles
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
