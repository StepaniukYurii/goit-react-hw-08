import styles from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <label className={styles.label} htmlFor="search">
        Find contact by name or number
      </label>
      <input className={styles.SearchBox} type="text" onChange={handleChange} />
    </div>
  );
};

export default SearchBox;
