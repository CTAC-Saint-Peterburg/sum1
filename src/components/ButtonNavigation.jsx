import { Link } from "react-router-dom";
import styles from "../styleComponents/ButtonNavigation.module.css";
export const ButtonNavigation = ({ name, url }) => {
  return (
    <Link to={url}>
      <button className={styles.myButton}>{name}</button>
    </Link>
  );
};
