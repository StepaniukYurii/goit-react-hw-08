import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactList } from "../../components/ContactList/ContactList";
import styles from "./ContactsPage.module.css";
import SearchBox from "../../components/SearchBox/SearchBox";

export const ContactsPage = () => (
  <div className={styles.ContactsPage}>
    <h2>Contacts</h2>
    <ContactForm />
    <SearchBox />
    <ContactList />
  </div>
);
