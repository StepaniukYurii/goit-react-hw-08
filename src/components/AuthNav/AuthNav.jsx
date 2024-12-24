import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
export const AuthNav = () => (
  <div className={styles.AuthNav}>
    <NavLink to="/register">Register</NavLink>
    <NavLink to="/login">Login</NavLink>
  </div>
);