import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styleComponents/Profile.module.css";
import { logOut } from "../store/pageControlSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  const go = useNavigate();
  const loginStatus = useSelector((state) => state.control.loginStatus);
  useEffect(() => {
    if (loginStatus === "false" || localStorage.length === 0) {
      go("/login");
    }
  }, [loginStatus]);
  return (
    <div className={styles.main}>
      <h1 className={styles.myH1}>Profile</h1>
      <h2>
        Приветствую вас:{" "}
        <i className={styles.name}>{localStorage.getItem("profile")}</i>
      </h2>
      <button
        className={styles.logout}
        onClick={() => {
          dispatch(logOut());
          go("/login");
        }}
      >
        logout
      </button>
    </div>
  );
};
