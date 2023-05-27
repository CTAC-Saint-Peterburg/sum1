import { checkLoginForm, setLoginForm } from "../store/pageControlSlice";
import styles from "../styleComponents/Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const loginForm = useSelector((state) => state.control.loginForm);
  const loginStatus = useSelector((state) => state.control.loginStatus);
  const go = useNavigate();

  useEffect(() => {
    if (loginStatus === "true") {
      go("/profile");
    }
  }, [loginStatus]);

  function loginPasswordCheck(e) {
    e.preventDefault();
    dispatch(checkLoginForm());
    go("/profile");
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.myH1}>Log in</h1>
      <form className={styles.myForm} onSubmit={(e) => loginPasswordCheck(e)}>
        <label className={styles.myLabel}>
          Логин:
          <input
            type="text"
            onChange={(e) =>
              dispatch(setLoginForm({ name: "login", value: e.target.value }))
            }
          />
        </label>
        <label className={styles.myLabel}>
          Пароль:{" "}
          <input
            type="text"
            onChange={(e) =>
              dispatch(
                setLoginForm({ name: "password", value: e.target.value })
              )
            }
          />
        </label>
        <p className={styles.myP}>
          {loginForm.errorMessage === true
            ? "Имя пользователя или пароль введены не верно"
            : null}
        </p>
        <button type="submit" className={styles.signin}>
          войти
        </button>
      </form>
    </div>
  );
};
