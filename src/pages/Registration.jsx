import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "../styleComponents/Registration.module.css";
import {
  checkLogin,
  checkPasswords,
  setUserInfo,
} from "../store/pageControlSlice";

export const Registration = () => {
  const dispatch = useDispatch();
  const go = useNavigate();
  const loginStatus = useSelector((state) => state.control.loginStatus);
  const loginExist = useSelector((state) => state.control.form.loginExist);
  const passwordMatch = useSelector(
    (state) => state.control.form.passwords.match
  );
  const userInfo = useSelector((state) => state.control.form.userInfo);
  const passwordsValues = useSelector((state) => state.control.form.passwords);
  const [submitButtonVisible, setSubmitButtonVisible] = useState(true);

  useEffect(() => {
    if (loginStatus === "true") {
      go("/profile");
    }
  }, [loginStatus]);
  useEffect(() => {
    if (
      userInfo.name &&
      userInfo.login &&
      passwordsValues.firstPassword &&
      passwordsValues.secoundPassword &&
      passwordMatch &&
      !loginExist
    ) {
      setSubmitButtonVisible(false);
    } else {
      setSubmitButtonVisible(true);
    }
  }, [userInfo, passwordsValues, passwordMatch, loginExist]);

  function submitForm(e) {
    e.preventDefault();
    go("/login");
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.myH1}>Регистрация</h1>
      <form onSubmit={(e) => submitForm(e)} className={styles.myForm}>
        <label className={styles.myLabel}>
          Имя:
          <input
            type="text"
            value={userInfo.name}
            maxLength={10}
            onChange={(e) =>
              dispatch(setUserInfo({ name: "name", value: e.target.value }))
            }
          />
        </label>
        <label className={styles.myLabel}>
          Логин:{" "}
          <input
            type="text"
            value={userInfo.login}
            maxLength={10}
            onChange={(e) => {
              dispatch(checkLogin(e.target.value));
              dispatch(setUserInfo({ name: "login", value: e.target.value }));
            }}
          />
        </label>
        <p className={styles.myP}>
          {loginExist
            ? "*Пользователь с таким логином уже зарегистрирован"
            : null}
        </p>
        <label className={styles.myLabel}>
          Пароль:{" "}
          <input
            type="password"
            maxLength={10}
            value={passwordsValues.firstPassword}
            onChange={(e) =>
              dispatch(
                checkPasswords({ name: "firstPassword", value: e.target.value })
              )
            }
          />
        </label>
        <label className={styles.myLabel}>
          Повторите пароль:{" "}
          <input
            type="password"
            maxLength={10}
            value={passwordsValues.secoundPassword}
            onChange={(e) =>
              dispatch(
                checkPasswords({
                  name: "secoundPassword",
                  value: e.target.value,
                })
              )
            }
          />
        </label>

        <p className={styles.myP}>
          {!passwordMatch ? "*Введенные пароли не совпадают" : null}
        </p>
        <p>
          {!submitButtonVisible
            ? "Валидация и регистрация прошла успешно!)"
            : null}
        </p>
        <button disabled={submitButtonVisible} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};
