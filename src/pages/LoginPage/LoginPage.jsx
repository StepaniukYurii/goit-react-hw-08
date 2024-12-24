import { LoginForm } from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";
export const LoginPage = () => (
  <div className={styles.LoginPage}>
    <h2>Login</h2>
    <LoginForm />
  </div>
);
