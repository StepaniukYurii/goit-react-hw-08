import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({ name: "", number: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", number: "" };

    if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
      valid = false;
    }
    if (!/^[\d\s()+-]+$/.test(number)) {
      newErrors.number =
        "Number can only include digits, spaces, '+', '(', ')', and '-'.";
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addContact({ name, number }));
      setName("");
      setNumber("");
      setErrors({ name: "", number: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </label>
      <label className={styles.label}>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        {errors.number && <p className={styles.error}>{errors.number}</p>}
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};
