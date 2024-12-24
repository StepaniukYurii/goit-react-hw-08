import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegistrationPage.module.css";
export const RegistrationPage = () => (
  <div className={styles.RegistrationPage}>
    <h2>Register</h2>
    <RegistrationForm />
  </div>
);
